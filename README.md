# Spraywall Boulder Tracker

A single-page browser app for tracking climbing boulder problems on your spraywall. Built with TypeScript, Vite, and Tailwind CSS.

## Features

- **Zoomable/Pannable Image**: Use mouse wheel to zoom and drag to pan around your spraywall
- **Click to Add Holds**: Select hold type (start, middle, finish) and click on the wall to mark holds
- **Boulder Management**: Create, save, view, and delete boulder problems
- **LocalStorage Persistence**: All boulders are automatically saved in your browser
- **Export/Import**: Export boulders as JSON files and import them later
- **No Backend Required**: Completely static, runs entirely in the browser

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Spraywall Image

Replace the placeholder image with your actual spraywall photo:

1. Take a photo of your spraywall (front-facing, well-lit)
2. Save it as `spraywall.jpg` in the `/public` folder
3. The image will be automatically loaded when you start the app

**Recommended image specs:**
- Format: JPG or PNG
- Resolution: 2000-4000px wide (high enough quality to zoom in)
- Aspect ratio: Whatever matches your wall
- File size: <5MB for best performance

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser to the URL shown (typically `http://localhost:5173`)

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder. You can serve these statically anywhere.

## How to Use

### Creating a Boulder

1. **Select a hold type**: Click one of the three buttons (Start Hold, Middle Hold, Finish Hold)
2. **Click on the wall**: Click anywhere on the spraywall image to place a hold
3. **Add more holds**: Keep clicking to add more holds
4. **Name your boulder** (optional): Enter a name and grade in the sidebar
5. **Save**: Click "Save Boulder" when done

### Viewing Saved Boulders

- Click on any boulder in the sidebar to view its holds highlighted on the wall
- Click again to deselect

### Removing Holds

- Right-click on any hold marker to remove it

### Deleting Boulders

- Click the trash icon next to any saved boulder

### Export/Import

- **Export**: Click "Export JSON" to download all your boulders as a JSON file
- **Import**: Click "Import JSON" and select a previously exported file to restore boulders

## Tips

- Use the mouse wheel to zoom in for precise hold placement
- Drag the image to pan around
- Your boulders are automatically saved in localStorage
- Export your boulders regularly as a backup!

## Tech Stack

- TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Panzoom (zoom/pan functionality)
- LocalStorage (data persistence)

## License

MIT
