import type { Hold } from './types';

export interface Point {
  x: number;
  y: number;
}

/**
 * Compute a 3x3 homography H such that for each i,
 *   H * [src[i].x, src[i].y, 1]^T  ~=  [dst[i].x, dst[i].y, 1]^T (up to scale).
 *
 * Requires exactly 4 point pairs. Points should be in normalized coords (0-1
 * works fine; percent/100 in this app) for numerical stability.
 *
 * Uses the standard DLT formulation with h33 fixed to 1, reducing to an 8x8
 * linear system solved by Gaussian elimination with partial pivoting.
 */
export function computeHomography(src: Point[], dst: Point[]): number[][] {
  if (src.length !== 4 || dst.length !== 4) {
    throw new Error(`computeHomography requires exactly 4 point pairs (got ${src.length}/${dst.length})`);
  }

  // For each pair (x,y) -> (x',y') we get two rows of the form:
  //   [x, y, 1, 0, 0, 0, -x*x', -y*x'] * h = x'
  //   [0, 0, 0, x, y, 1, -x*y', -y*y'] * h = y'
  // with h = [h11 h12 h13 h21 h22 h23 h31 h32]^T (h33 := 1)
  const A: number[][] = [];
  const b: number[] = [];
  for (let i = 0; i < 4; i++) {
    const { x, y } = src[i];
    const { x: xp, y: yp } = dst[i];
    A.push([x, y, 1, 0, 0, 0, -x * xp, -y * xp]);
    b.push(xp);
    A.push([0, 0, 0, x, y, 1, -x * yp, -y * yp]);
    b.push(yp);
  }

  const h = solveLinearSystem(A, b);
  return [
    [h[0], h[1], h[2]],
    [h[3], h[4], h[5]],
    [h[6], h[7], 1],
  ];
}

/**
 * Apply a 3x3 homography to a 2D point.
 */
export function applyHomography(H: number[][], p: Point): Point {
  const x = H[0][0] * p.x + H[0][1] * p.y + H[0][2];
  const y = H[1][0] * p.x + H[1][1] * p.y + H[1][2];
  const w = H[2][0] * p.x + H[2][1] * p.y + H[2][2];
  return { x: x / w, y: y / w };
}

/**
 * Remap a set of holds through a homography. Input/output coordinates are in
 * percent (0-100); we internally normalize to 0-1 to match `computeHomography`'s
 * coordinate convention.
 */
export function remapHolds(holds: Hold[], H: number[][]): Hold[] {
  return holds.map((h) => {
    const { x, y } = applyHomography(H, { x: h.x / 100, y: h.y / 100 });
    return { ...h, x: x * 100, y: y * 100 };
  });
}

/**
 * Solve Ax = b via Gaussian elimination with partial pivoting. A is square.
 * Returns x. Throws if A is singular.
 */
function solveLinearSystem(A: number[][], b: number[]): number[] {
  const n = A.length;
  // Build augmented matrix
  const M: number[][] = A.map((row, i) => [...row, b[i]]);

  for (let col = 0; col < n; col++) {
    // Partial pivot: find row with max |M[row][col]| among rows >= col
    let pivotRow = col;
    let maxAbs = Math.abs(M[col][col]);
    for (let r = col + 1; r < n; r++) {
      const v = Math.abs(M[r][col]);
      if (v > maxAbs) {
        maxAbs = v;
        pivotRow = r;
      }
    }
    if (maxAbs < 1e-12) {
      throw new Error('Singular matrix in homography solver — pick 4 non-collinear points');
    }
    if (pivotRow !== col) {
      const tmp = M[col];
      M[col] = M[pivotRow];
      M[pivotRow] = tmp;
    }
    // Eliminate below
    for (let r = col + 1; r < n; r++) {
      const factor = M[r][col] / M[col][col];
      if (factor === 0) continue;
      for (let c = col; c <= n; c++) {
        M[r][c] -= factor * M[col][c];
      }
    }
  }

  // Back-substitution
  const x = new Array<number>(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = M[i][n];
    for (let j = i + 1; j < n; j++) sum -= M[i][j] * x[j];
    x[i] = sum / M[i][i];
  }
  return x;
}
