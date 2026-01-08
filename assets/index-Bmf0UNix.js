(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var pt=function(){return pt=Object.assign||function(t){for(var e,r=1,s=arguments.length;r<s;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},pt.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r}));var vl=typeof document<"u"&&!!document.documentMode,As;function Tl(){return As||(As=document.createElement("div").style)}var Uo=["webkit","moz","ms"],pr={};function ai(n){if(pr[n])return pr[n];var t=Tl();if(n in t)return pr[n]=n;for(var e=n[0].toUpperCase()+n.slice(1),r=Uo.length;r--;){var s="".concat(Uo[r]).concat(e);if(s in t)return pr[n]=s}}function gr(n,t){return parseFloat(t[ai(n)])||0}function _r(n,t,e){e===void 0&&(e=window.getComputedStyle(n));var r=t==="border"?"Width":"";return{left:gr("".concat(t,"Left").concat(r),e),right:gr("".concat(t,"Right").concat(r),e),top:gr("".concat(t,"Top").concat(r),e),bottom:gr("".concat(t,"Bottom").concat(r),e)}}function Qe(n,t,e){n.style[ai(t)]=e}function wl(n,t){var e=ai("transform");Qe(n,"transition","".concat(e," ").concat(t.duration,"ms ").concat(t.easing))}function Il(n,t,e){var r=t.x,s=t.y,o=t.scale,a=t.isSVG;if(Qe(n,"transform","scale(".concat(o,") translate(").concat(r,"px, ").concat(s,"px)")),a&&vl){var l=window.getComputedStyle(n).getPropertyValue("transform");n.setAttribute("transform",l)}}function bs(n){var t=n.parentNode,e=window.getComputedStyle(n),r=window.getComputedStyle(t),s=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{elem:{style:e,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,margin:_r(n,"margin",e),border:_r(n,"border",e)},parent:{style:r,width:o.width,height:o.height,top:o.top,bottom:o.bottom,left:o.left,right:o.right,padding:_r(t,"padding",r),border:_r(t,"border",r)}}}var Bn={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?Bn={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(Bn={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function Ss(n,t,e,r){Bn[n].split(" ").forEach(function(s){t.addEventListener(s,e,r)})}function Rs(n,t,e){Bn[n].split(" ").forEach(function(r){t.removeEventListener(r,e)})}function Za(n,t){for(var e=n.length;e--;)if(n[e].pointerId===t.pointerId)return e;return-1}function Fs(n,t){var e;if(t.touches){e=0;for(var r=0,s=t.touches;r<s.length;r++){var o=s[r];o.pointerId=e++,Fs(n,o)}return}e=Za(n,t),e>-1&&n.splice(e,1),n.push(t)}function Al(n,t){if(t.touches){for(;n.length;)n.pop();return}var e=Za(n,t);e>-1&&n.splice(e,1)}function qo(n){n=n.slice(0);for(var t=n.pop(),e;e=n.pop();)t={clientX:(e.clientX-t.clientX)/2+t.clientX,clientY:(e.clientY-t.clientY)/2+t.clientY};return t}function Cs(n){if(n.length<2)return 0;var t=n[0],e=n[1];return Math.sqrt(Math.pow(Math.abs(e.clientX-t.clientX),2)+Math.pow(Math.abs(e.clientY-t.clientY),2))}function bl(n){for(var t=n;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1}function Sl(n){return(n.getAttribute("class")||"").trim()}function Rl(n,t){return n.nodeType===1&&" ".concat(Sl(n)," ").indexOf(" ".concat(t," "))>-1}function Cl(n,t){for(var e=n;e!=null;e=e.parentNode)if(Rl(e,t.excludeClass)||t.exclude.indexOf(e)>-1)return!0;return!1}var Pl=/^http:[\w\.\/]+svg$/;function Vl(n){return Pl.test(n.namespaceURI)&&n.nodeName.toLowerCase()!=="svg"}function Dl(n){var t={};for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}var tu={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(n){n.preventDefault(),n.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:Il,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function eu(n,t){if(!n)throw new Error("Panzoom requires an element as an argument");if(n.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!bl(n))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=pt(pt({},tu),t);var e=Vl(n),r=n.parentNode;r.style.overflow=t.overflow,r.style.userSelect="none",r.style.touchAction=t.touchAction,(t.canvas?r:n).style.cursor=t.cursor,n.style.userSelect="none",n.style.touchAction=t.touchAction,Qe(n,"transformOrigin",typeof t.origin=="string"?t.origin:e?"0 0":"50% 50%");function s(){r.style.overflow="",r.style.userSelect="",r.style.touchAction="",r.style.cursor="",n.style.cursor="",n.style.userSelect="",n.style.touchAction="",Qe(n,"transformOrigin","")}function o(D){D===void 0&&(D={});for(var L in D)D.hasOwnProperty(L)&&(t[L]=D[L]);(D.hasOwnProperty("cursor")||D.hasOwnProperty("canvas"))&&(r.style.cursor=n.style.cursor="",(t.canvas?r:n).style.cursor=t.cursor),D.hasOwnProperty("overflow")&&(r.style.overflow=D.overflow),D.hasOwnProperty("touchAction")&&(r.style.touchAction=D.touchAction,n.style.touchAction=D.touchAction)}var a=0,l=0,h=1,d=!1;k(t.startScale,{animate:!1,force:!0}),setTimeout(function(){N(t.startX,t.startY,{animate:!1,force:!0})});function p(D,L,K){if(!K.silent){var tt=new CustomEvent(D,{detail:L});n.dispatchEvent(tt)}}function y(D,L,K){var tt={x:a,y:l,scale:h,isSVG:e,originalEvent:K};return requestAnimationFrame(function(){typeof L.animate=="boolean"&&(L.animate?wl(n,L):Qe(n,"transition","none")),L.setTransform(n,tt,L),p(D,tt,L),p("panzoomchange",tt,L)}),tt}function A(D,L,K,tt){var O=pt(pt({},t),tt),Y={x:a,y:l,opts:O};if(!(tt!=null&&tt.force)&&(O.disablePan||O.panOnlyWhenZoomed&&h===O.startScale))return Y;if(D=parseFloat(D),L=parseFloat(L),O.disableXAxis||(Y.x=(O.relative?a:0)+D),O.disableYAxis||(Y.y=(O.relative?l:0)+L),O.contain){var j=bs(n),wt=j.elem.width/h,xt=j.elem.height/h,Qt=wt*K,ne=xt*K,Xt=(Qt-wt)/2,Yt=(ne-xt)/2;if(O.contain==="inside"){var Be=(-j.elem.margin.left-j.parent.padding.left+Xt)/K,we=(j.parent.width-Qt-j.parent.padding.left-j.elem.margin.left-j.parent.border.left-j.parent.border.right+Xt)/K;Y.x=Math.max(Math.min(Y.x,we),Be);var Ue=(-j.elem.margin.top-j.parent.padding.top+Yt)/K,fn=(j.parent.height-ne-j.parent.padding.top-j.elem.margin.top-j.parent.border.top-j.parent.border.bottom+Yt)/K;Y.y=Math.max(Math.min(Y.y,fn),Ue)}else if(O.contain==="outside"){var Be=(-(Qt-j.parent.width)-j.parent.padding.left-j.parent.border.left-j.parent.border.right+Xt)/K,we=(Xt-j.parent.padding.left)/K;Y.x=Math.max(Math.min(Y.x,we),Be);var Ue=(-(ne-j.parent.height)-j.parent.padding.top-j.parent.border.top-j.parent.border.bottom+Yt)/K,fn=(Yt-j.parent.padding.top)/K;Y.y=Math.max(Math.min(Y.y,fn),Ue)}}return O.roundPixels&&(Y.x=Math.round(Y.x),Y.y=Math.round(Y.y)),Y}function R(D,L){var K=pt(pt({},t),L),tt={scale:h,opts:K};if(!(L!=null&&L.force)&&K.disableZoom)return tt;var O=t.minScale,Y=t.maxScale;if(K.contain){var j=bs(n),wt=j.elem.width/h,xt=j.elem.height/h;if(wt>1&&xt>1){var Qt=j.parent.width-j.parent.border.left-j.parent.border.right,ne=j.parent.height-j.parent.border.top-j.parent.border.bottom,Xt=Qt/wt,Yt=ne/xt;t.contain==="inside"?Y=Math.min(Y,Xt,Yt):t.contain==="outside"&&(O=Math.max(O,Xt,Yt))}}return tt.scale=Math.min(Math.max(D,O),Y),tt}function N(D,L,K,tt){var O=A(D,L,h,K);return a!==O.x||l!==O.y?(a=O.x,l=O.y,y("panzoompan",O.opts,tt)):{x:a,y:l,scale:h,isSVG:e,originalEvent:tt}}function k(D,L,K){var tt=R(D,L),O=tt.opts;if(!(!(L!=null&&L.force)&&O.disableZoom)){D=tt.scale;var Y=a,j=l;if(O.focal){var wt=O.focal;Y=(wt.x/D-wt.x/h+a*D)/D,j=(wt.y/D-wt.y/h+l*D)/D}var xt=A(Y,j,D,{relative:!1,force:!0});return a=xt.x,l=xt.y,h=D,y("panzoomzoom",O,K)}}function V(D,L){var K=pt(pt(pt({},t),{animate:!0}),L);return k(h*Math.exp((D?1:-1)*K.step),K)}function B(D){return V(!0,D)}function U(D){return V(!1,D)}function G(D,L,K,tt){var O=bs(n),Y={width:O.parent.width-O.parent.padding.left-O.parent.padding.right-O.parent.border.left-O.parent.border.right,height:O.parent.height-O.parent.padding.top-O.parent.padding.bottom-O.parent.border.top-O.parent.border.bottom},j=L.clientX-O.parent.left-O.parent.padding.left-O.parent.border.left-O.elem.margin.left,wt=L.clientY-O.parent.top-O.parent.padding.top-O.parent.border.top-O.elem.margin.top;e||(j-=O.elem.width/h/2,wt-=O.elem.height/h/2);var xt={x:j/Y.width*(Y.width*D),y:wt/Y.height*(Y.height*D)};return k(D,pt(pt({},K),{animate:!1,focal:xt}),tt)}function et(D,L){D.preventDefault();var K=pt(pt(pt({},t),L),{animate:!1}),tt=D.deltaY===0&&D.deltaX?D.deltaX:D.deltaY,O=tt<0?1:-1,Y=R(h*Math.exp(O*K.step/3),K).scale;return G(Y,D,K,D)}function ft(D){var L=pt(pt(pt({},t),{animate:!0,force:!0}),D);h=R(L.startScale,L).scale;var K=A(L.startX,L.startY,h,L);return a=K.x,l=K.y,y("panzoomreset",L)}var at,v,m,_,T,E,w=[];function g(D){if(!Cl(D.target,t)){Fs(w,D),d=!0,t.handleStartEvent(D),at=a,v=l,p("panzoomstart",{x:a,y:l,scale:h,isSVG:e,originalEvent:D},t);var L=qo(w);m=L.clientX,_=L.clientY,T=h,E=Cs(w)}}function Et(D){if(!(!d||at===void 0||v===void 0||m===void 0||_===void 0)){Fs(w,D);var L=qo(w),K=w.length>1,tt=h;if(K){E===0&&(E=Cs(w));var O=Cs(w)-E;tt=R(O*t.step/80+T).scale,G(tt,L,{animate:!1},D)}(!K||t.pinchAndPan)&&N(at+(L.clientX-m)/tt,v+(L.clientY-_)/tt,{animate:!1},D)}}function Lt(D){w.length===1&&p("panzoomend",{x:a,y:l,scale:h,isSVG:e,originalEvent:D},t),Al(w,D),d&&(d=!1,at=v=m=_=void 0)}var dn=!1;function nr(){dn||(dn=!0,Ss("down",t.canvas?r:n,g),Ss("move",document,Et,{passive:!0}),Ss("up",document,Lt,{passive:!0}))}function Fe(){dn=!1,Rs("down",t.canvas?r:n,g),Rs("move",document,Et),Rs("up",document,Lt)}return t.noBind||nr(),{bind:nr,destroy:Fe,eventNames:Bn,getPan:function(){return{x:a,y:l}},getScale:function(){return h},getOptions:function(){return Dl(t)},handleDown:g,handleMove:Et,handleUp:Lt,pan:N,reset:ft,resetStyle:s,setOptions:o,setStyle:function(D,L){return Qe(n,D,L)},zoom:k,zoomIn:B,zoomOut:U,zoomToPoint:G,zoomWithWheel:et}}eu.defaultOptions=tu;const xl=()=>{};var jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Nl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,R=d&63;h||(R=64,a||(A=64)),r.push(e[p],e[y],e[A],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(nu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Nl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new kl;const A=o<<2|l>>4;if(r.push(A),d!==64){const R=l<<4&240|d>>2;if(r.push(R),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ml=function(n){const t=nu(n);return ru.encodeByteArray(t,!0)},Pr=function(n){return Ml(n).replace(/\./g,"")},Ol=function(n){try{return ru.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=()=>Ll().__FIREBASE_DEFAULTS__,Bl=()=>{if(typeof process>"u"||typeof jo>"u")return;const n=jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ul=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ol(n[1]);return t&&JSON.parse(t)},ui=()=>{try{return xl()||Fl()||Bl()||Ul()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>{var t,e;return(e=(t=ui())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},jl=n=>{const t=ql(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},su=()=>{var n;return(n=ui())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $l(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pr(JSON.stringify(e)),Pr(JSON.stringify(a)),""].join(".")}const kn={};function Gl(){const n={prod:[],emulator:[]};for(const t of Object.keys(kn))kn[t]?n.emulator.push(t):n.prod.push(t);return n}function Kl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let zo=!1;function Wl(n,t){if(typeof window>"u"||typeof document>"u"||!ci(window.location.host)||kn[n]===t||kn[n]||zo)return;kn[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Gl().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,R){A.setAttribute("width","24"),A.setAttribute("id",R),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{zo=!0,a()},A}function p(A,R){A.setAttribute("id",R),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function y(){const A=Kl(r),R=e("text"),N=document.getElementById(R)||document.createElement("span"),k=e("learnmore"),V=document.getElementById(k)||document.createElement("a"),B=e("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const G=A.element;l(G),p(V,k);const et=d();h(U,B),G.append(U,N,V,et),document.body.appendChild(G)}o?(N.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xl(){var t;const n=(t=ui())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yl(){return!Xl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jl(){try{return typeof indexedDB=="object"}catch{return!1}}function Zl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="FirebaseError";class an extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=th,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,iu.prototype.create)}}class iu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?eh(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new an(s,l,r)}}function eh(n,t){return n.replace(nh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const nh=/\{\$([^}]+)}/g;function Vr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if($o(o)&&$o(a)){if(!Vr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function $o(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class Un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new zl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ih(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(n){return n===Ce?void 0:n}function ih(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const ah={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},uh=Z.INFO,ch={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ch[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ou{constructor(t){this.name=t,this._logLevel=uh,this._logHandler=lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ah[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const hh=(n,t)=>t.some(e=>n instanceof e);let Ho,Go;function dh(){return Ho||(Ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fh(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,Bs=new WeakMap,uu=new WeakMap,Ps=new WeakMap,li=new WeakMap;function mh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(le(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&au.set(e,n)}).catch(()=>{}),li.set(t,n),t}function ph(n){if(Bs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Bs.set(n,t)}let Us={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Bs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||uu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gh(n){Us=n(Us)}function _h(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return uu.set(r,t.sort?t.sort():[t]),le(r)}:fh().includes(n)?function(...t){return n.apply(Vs(this),t),le(au.get(this))}:function(...t){return le(n.apply(Vs(this),t))}}function yh(n){return typeof n=="function"?_h(n):(n instanceof IDBTransaction&&ph(n),hh(n,dh())?new Proxy(n,Us):n)}function le(n){if(n instanceof IDBRequest)return mh(n);if(Ps.has(n))return Ps.get(n);const t=yh(n);return t!==n&&(Ps.set(n,t),li.set(t,n)),t}const Vs=n=>li.get(n);function Eh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=le(a);return r&&a.addEventListener("upgradeneeded",h=>{r(le(a.result),h.oldVersion,h.newVersion,le(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const vh=["get","getKey","getAll","getAllKeys","count"],Th=["put","add","delete","clear"],Ds=new Map;function Ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Th.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vh.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return Ds.set(t,o),o}gh(n=>({...n,get:(t,e,r)=>Ko(t,e)||n.get(t,e,r),has:(t,e)=>!!Ko(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ih(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ih(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qs="@firebase/app",Wo="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ou("@firebase/app"),Ah="@firebase/app-compat",bh="@firebase/analytics-compat",Sh="@firebase/analytics",Rh="@firebase/app-check-compat",Ch="@firebase/app-check",Ph="@firebase/auth",Vh="@firebase/auth-compat",Dh="@firebase/database",xh="@firebase/data-connect",Nh="@firebase/database-compat",kh="@firebase/functions",Mh="@firebase/functions-compat",Oh="@firebase/installations",Lh="@firebase/installations-compat",Fh="@firebase/messaging",Bh="@firebase/messaging-compat",Uh="@firebase/performance",qh="@firebase/performance-compat",jh="@firebase/remote-config",zh="@firebase/remote-config-compat",$h="@firebase/storage",Hh="@firebase/storage-compat",Gh="@firebase/firestore",Kh="@firebase/ai",Wh="@firebase/firestore-compat",Qh="firebase",Xh="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]",Yh={[qs]:"fire-core",[Ah]:"fire-core-compat",[Sh]:"fire-analytics",[bh]:"fire-analytics-compat",[Ch]:"fire-app-check",[Rh]:"fire-app-check-compat",[Ph]:"fire-auth",[Vh]:"fire-auth-compat",[Dh]:"fire-rtdb",[xh]:"fire-data-connect",[Nh]:"fire-rtdb-compat",[kh]:"fire-fn",[Mh]:"fire-fn-compat",[Oh]:"fire-iid",[Lh]:"fire-iid-compat",[Fh]:"fire-fcm",[Bh]:"fire-fcm-compat",[Uh]:"fire-perf",[qh]:"fire-perf-compat",[jh]:"fire-rc",[zh]:"fire-rc-compat",[$h]:"fire-gcs",[Hh]:"fire-gcs-compat",[Gh]:"fire-fst",[Wh]:"fire-fst-compat",[Kh]:"fire-vertex","fire-js":"fire-js",[Qh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Jh=new Map,zs=new Map;function Qo(n,t){try{n.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xr(n){const t=n.name;if(zs.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;zs.set(t,n);for(const e of Dr.values())Qo(e,n);for(const e of Jh.values())Qo(e,n);return!0}function Zh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function td(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new iu("app","Firebase",ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=Xh;function cu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:js,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=su()),!e)throw he.create("no-options");const o=Dr.get(s);if(o){if(Vr(e,o.options)&&Vr(r,o.config))return o;throw he.create("duplicate-app",{appName:s})}const a=new oh(s);for(const h of zs.values())a.addComponent(h);const l=new nd(e,r,a);return Dr.set(s,l),l}function sd(n=js){const t=Dr.get(n);if(!t&&n===js&&su())return cu();if(!t)throw he.create("no-app",{appName:n});return t}function Xe(n,t,e){let r=Yh[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}xr(new Un(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="firebase-heartbeat-database",od=1,qn="firebase-heartbeat-store";let xs=null;function lu(){return xs||(xs=Eh(id,od,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),xs}async function ad(n){try{const e=(await lu()).transaction(qn),r=await e.objectStore(qn).get(hu(n));return await e.done,r}catch(t){if(t instanceof an)Zt.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(e.message)}}}async function Xo(n,t){try{const r=(await lu()).transaction(qn,"readwrite");await r.objectStore(qn).put(t,hu(n)),await r.done}catch(e){if(e instanceof an)Zt.warn(e.message);else{const r=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(r.message)}}}function hu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=1024,cd=30;class ld{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Yo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>cd){const a=fd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yo(),{heartbeatsToSend:r,unsentEntries:s}=hd(this._heartbeatsCache.heartbeats),o=Pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Zt.warn(e),""}}}function Yo(){return new Date().toISOString().substring(0,10)}function hd(n,t=ud){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Jo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Jo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jl()?Zl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ad(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Jo(n){return Pr(JSON.stringify({version:2,heartbeats:n})).length}function fd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){xr(new Un("platform-logger",t=>new wh(t),"PRIVATE")),xr(new Un("heartbeat",t=>new ld(t),"PRIVATE")),Xe(qs,Wo,n),Xe(qs,Wo,"esm2020"),Xe("fire-js","")}md("");var pd="firebase",gd="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(pd,gd,"app");var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,du;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.F=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(T,E,w){for(var g=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)g[Et-2]=arguments[Et];return m.prototype[E].apply(T,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);const T=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)T[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],E=v.g[2];let w=v.g[3],g;g=m+(w^_&(E^w))+T[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+T[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+T[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+T[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+T[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+T[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+T[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+T[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+T[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+T[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+T[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+T[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+T[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+T[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+T[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+T[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+T[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+T[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+T[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+T[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+T[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+T[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+T[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+T[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+T[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+T[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+T[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+T[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+T[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+T[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+T[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+T[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+T[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+T[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+T[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+T[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+T[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+T[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+T[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+T[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+T[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+T[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+T[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+T[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+T[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+T[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+T[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+T[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+T[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+T[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+T[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+T[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+T[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+T[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+T[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+T[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+T[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+T[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+T[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+T[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+T[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+T[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+T[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const _=m-this.blockSize,T=this.C;let E=this.h,w=0;for(;w<m;){if(E==0)for(;w<=_;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(T[E++]=v.charCodeAt(w++),E==this.blockSize){s(this,T),E=0;break}}else for(;w<m;)if(T[E++]=v[w++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)v[m++]=this.g[_]>>>T&255;return v};function o(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;const _=[];let T=!0;for(let E=v.length-1;E>=0;E--){const w=v[E]|0;T&&w==m||(_[E]=w,T=!1)}this.g=_}var l={};function h(v){return-128<=v&&v<128?o(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(v<0)return V(d(-v));const m=[];let _=1;for(let T=0;v>=_;T++)m[T]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return V(p(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let T=y;for(let w=0;w<v.length;w+=8){var E=Math.min(8,v.length-w);const g=parseInt(v.substring(w,w+E),m);E<8?(E=d(Math.pow(m,E)),T=T.j(E).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var y=h(0),A=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();let v=0,m=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);v+=(T>=0?T:4294967296+T)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(k(this))return"-"+V(this).toString(v);const m=d(Math.pow(v,6));var _=this;let T="";for(;;){const E=et(_,m).g;_=B(_,E.j(m));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=E,N(_))return w+T;for(;w.length<6;)w="0"+w;T=w+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=B(this,v),k(v)?-1:N(v)?0:1};function V(v){const m=v.g.length,_=[];for(let T=0;T<m;T++)_[T]=~v.g[T];return new a(_,~v.h).add(A)}n.abs=function(){return k(this)?V(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),_=[];let T=0;for(let E=0;E<=m;E++){let w=T+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(v,m){return v.add(V(m))}n.j=function(v){if(N(this)||N(v))return y;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(this.l(R)<0&&v.l(R)<0)return d(this.m()*v.m());const m=this.g.length+v.g.length,_=[];for(var T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const w=this.i(T)>>>16,g=this.i(T)&65535,Et=v.i(E)>>>16,Lt=v.i(E)&65535;_[2*T+2*E]+=g*Lt,U(_,2*T+2*E),_[2*T+2*E+1]+=w*Lt,U(_,2*T+2*E+1),_[2*T+2*E+1]+=g*Et,U(_,2*T+2*E+1),_[2*T+2*E+2]+=w*Et,U(_,2*T+2*E+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function U(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function G(v,m){this.g=v,this.h=m}function et(v,m){if(N(m))throw Error("division by zero");if(N(v))return new G(y,y);if(k(v))return m=et(V(v),m),new G(V(m.g),V(m.h));if(k(m))return m=et(v,V(m)),new G(V(m.g),m.h);if(v.g.length>30){if(k(v)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,T=m;T.l(v)<=0;)_=ft(_),T=ft(T);var E=at(_,1),w=at(T,1);for(T=at(T,2),_=at(_,2);!N(T);){var g=w.add(T);g.l(v)<=0&&(E=E.add(_),w=g),T=at(T,1),_=at(_,1)}return m=B(v,E.j(m)),new G(E,m)}for(E=y;v.l(m)>=0;){for(_=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),w=d(_),g=w.j(m);k(g)||g.l(v)>0;)_-=T,w=d(_),g=w.j(m);N(w)&&(w=A),E=E.add(w),v=B(v,g)}return new G(E,v)}n.B=function(v){return et(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function ft(v){const m=v.g.length+1,_=[];for(let T=0;T<m;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function at(v,m){const _=m>>5;m%=32;const T=v.g.length-_,E=[];for(let w=0;w<T;w++)E[w]=m>0?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,du=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,de=a}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fu,Vn,mu,Ir,$s,pu,gu,_u;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof yr=="object"&&yr];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in c))break t;c=c[I]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function d(i,u,c){return d=h,d.apply(null,arguments)}function p(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,I,b){for(var P=Array(arguments.length-2),W=2;W<arguments.length;W++)P[W-2]=arguments[W];return u.prototype[I].apply(f,P)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function R(i){const u=i.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function N(i,u){for(let f=1;f<arguments.length;f++){const I=arguments[f];var c=typeof I;if(c=c!="object"?c:I?Array.isArray(I)?"array":c:"null",c=="array"||c=="object"&&typeof I.length=="number"){c=i.length||0;const b=I.length||0;i.length=c+b;for(let P=0;P<b;P++)i[c+P]=I[P]}else i.push(I)}}class k{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(i){a.setTimeout(()=>{throw i},0)}function B(){var i=v;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class U{constructor(){this.h=this.g=null}add(u,c){const f=G.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var G=new k(()=>new et,i=>i.reset());class et{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,at=!1,v=new U,m=()=>{const i=Promise.resolve(void 0);ft=()=>{i.then(_)}};function _(){for(var i;i=B();){try{i.h.call(i.g)}catch(c){V(c)}var u=G;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}at=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return i}();function g(i){return/^[\s\xa0]*$/.test(i)}function Et(i,u){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}y(Et,E),Et.prototype.init=function(i,u){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Et.Z.h.call(this)},Et.prototype.h=function(){Et.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Lt="closure_listenable_"+(Math.random()*1e6|0),dn=0;function nr(i,u,c,f,I){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=I,this.key=++dn,this.da=this.fa=!1}function Fe(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function D(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function L(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function K(i){const u={};for(const c in i)u[c]=i[c];return u}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(i,u){let c,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(c in f)i[c]=f[c];for(let b=0;b<tt.length;b++)c=tt[b],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Y(i){this.src=i,this.g={},this.h=0}Y.prototype.add=function(i,u,c,f,I){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const P=wt(i,u,f,I);return P>-1?(u=i[P],c||(u.fa=!1)):(u=new nr(u,this.src,b,!!f,I),u.fa=c,i.push(u)),u};function j(i,u){const c=u.type;if(c in i.g){var f=i.g[c],I=Array.prototype.indexOf.call(f,u,void 0),b;(b=I>=0)&&Array.prototype.splice.call(f,I,1),b&&(Fe(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function wt(i,u,c,f){for(let I=0;I<i.length;++I){const b=i[I];if(!b.da&&b.listener==u&&b.capture==!!c&&b.ha==f)return I}return-1}var xt="closure_lm_"+(Math.random()*1e6|0),Qt={};function ne(i,u,c,f,I){if(Array.isArray(u)){for(let b=0;b<u.length;b++)ne(i,u[b],c,f,I);return null}return c=$i(c),i&&i[Lt]?i.J(u,c,l(f)?!!f.capture:!1,I):Xt(i,u,c,!1,f,I)}function Xt(i,u,c,f,I,b){if(!u)throw Error("Invalid event type");const P=l(I)?!!I.capture:!!I;let W=is(i);if(W||(i[xt]=W=new Y(i)),c=W.add(u,c,f,P,b),c.proxy)return c;if(f=Yt(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)w||(I=P),I===void 0&&(I=!1),i.addEventListener(u.toString(),f,I);else if(i.attachEvent)i.attachEvent(Ue(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Yt(){function i(c){return u.call(i.src,i.listener,c)}const u=fn;return i}function Be(i,u,c,f,I){if(Array.isArray(u))for(var b=0;b<u.length;b++)Be(i,u[b],c,f,I);else f=l(f)?!!f.capture:!!f,c=$i(c),i&&i[Lt]?(i=i.i,b=String(u).toString(),b in i.g&&(u=i.g[b],c=wt(u,c,f,I),c>-1&&(Fe(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[b],i.h--)))):i&&(i=is(i))&&(u=i.g[u.toString()],i=-1,u&&(i=wt(u,c,f,I)),(c=i>-1?u[i]:null)&&we(c))}function we(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Lt])j(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(Ue(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=is(u))?(j(c,i),c.h==0&&(c.src=null,u[xt]=null)):Fe(i)}}}function Ue(i){return i in Qt?Qt[i]:Qt[i]="on"+i}function fn(i,u){if(i.da)i=!0;else{u=new Et(u,this);const c=i.listener,f=i.ha||i.src;i.fa&&we(i),i=c.call(f,u)}return i}function is(i){return i=i[xt],i instanceof Y?i:null}var os="__closure_events_fn_"+(Math.random()*1e9>>>0);function $i(i){return typeof i=="function"?i:(i[os]||(i[os]=function(u){return i.handleEvent(u)}),i[os])}function St(){T.call(this),this.i=new Y(this),this.M=this,this.G=null}y(St,T),St.prototype[Lt]=!0,St.prototype.removeEventListener=function(i,u,c,f){Be(this,i,u,c,f)};function Vt(i,u){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new E(u,i);else if(u instanceof E)u.target=u.target||i;else{var I=u;u=new E(f,i),O(u,I)}I=!0;let b,P;if(c)for(P=c.length-1;P>=0;P--)b=u.g=c[P],I=rr(b,f,!0,u)&&I;if(b=u.g=i,I=rr(b,f,!0,u)&&I,I=rr(b,f,!1,u)&&I,c)for(P=0;P<c.length;P++)b=u.g=c[P],I=rr(b,f,!1,u)&&I}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let f=0;f<c.length;f++)Fe(c[f]);delete i.g[u],i.h--}}this.G=null},St.prototype.J=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},St.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function rr(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let I=!0;for(let b=0;b<u.length;++b){const P=u[b];if(P&&!P.da&&P.capture==c){const W=P.listener,mt=P.ha||P.src;P.fa&&j(i.i,P),I=W.call(mt,f)!==!1&&I}}return I&&!f.defaultPrevented}function Wc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Hi(i){i.g=Wc(()=>{i.g=null,i.i&&(i.i=!1,Hi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Qc extends T{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Hi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){T.call(this),this.h=i,this.g={}}y(mn,T);var Gi=[];function Ki(i){D(i.g,function(u,c){this.g.hasOwnProperty(c)&&we(u)},i),i.g={}}mn.prototype.N=function(){mn.Z.N.call(this),Ki(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var as=a.JSON.stringify,Xc=a.JSON.parse,Yc=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Wi(){}function Qi(){}var pn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function us(){E.call(this,"d")}y(us,E);function cs(){E.call(this,"c")}y(cs,E);var Ie={},Xi=null;function sr(){return Xi=Xi||new St}Ie.Ia="serverreachability";function Yi(i){E.call(this,Ie.Ia,i)}y(Yi,E);function gn(i){const u=sr();Vt(u,new Yi(u))}Ie.STAT_EVENT="statevent";function Ji(i,u){E.call(this,Ie.STAT_EVENT,i),this.stat=u}y(Ji,E);function Dt(i){const u=sr();Vt(u,new Ji(u,i))}Ie.Ja="timingevent";function Zi(i,u){E.call(this,Ie.Ja,i),this.size=u}y(Zi,E);function _n(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function yn(){this.g=!0}yn.prototype.ua=function(){this.g=!1};function Jc(i,u,c,f,I,b){i.info(function(){if(i.g)if(b){var P="",W=b.split("&");for(let rt=0;rt<W.length;rt++){var mt=W[rt].split("=");if(mt.length>1){const vt=mt[0];mt=mt[1];const Ut=vt.split("_");P=Ut.length>=2&&Ut[1]=="type"?P+(vt+"="+mt+"&"):P+(vt+"=redacted&")}}}else P=null;else P=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+c+`
`+P})}function Zc(i,u,c,f,I,b,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+c+`
`+b+" "+P})}function qe(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+el(i,c)+(f?" "+f:"")})}function tl(i,u){i.info(function(){return"TIMEOUT: "+u})}yn.prototype.info=function(){};function el(i,u){if(!i.g)return u;if(!u)return null;try{const b=JSON.parse(u);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var c=b[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var I=f[0];if(I!="noop"&&I!="stop"&&I!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return as(b)}catch{return u}}var ir={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},to={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eo;function ls(){}y(ls,Wi),ls.prototype.g=function(){return new XMLHttpRequest},eo=new ls;function En(i){return encodeURIComponent(String(i))}function nl(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function re(i,u,c,f){this.j=i,this.i=u,this.l=c,this.S=f||1,this.V=new mn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var ro={},hs={};function ds(i,u,c){i.M=1,i.A=ar(Bt(u)),i.u=c,i.R=!0,so(i,null)}function so(i,u){i.F=Date.now(),or(i),i.B=Bt(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),yo(c.i,"t",f),i.C=0,c=i.j.L,i.h=new no,i.g=Oo(i.j,c?u:null,!i.u),i.P>0&&(i.O=new Qc(d(i.Y,i,i.g),i.P)),u=i.V,c=i.g,f=i.ba;var I="readystatechange";Array.isArray(I)||(I&&(Gi[0]=I.toString()),I=Gi);for(let b=0;b<I.length;b++){const P=ne(c,I[b],f||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.J?K(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),gn(),Jc(i.i,i.v,i.B,i.l,i.S,i.u)}re.prototype.ba=function(i){i=i.target;const u=this.O;u&&oe(i)==3?u.j():this.Y(i)},re.prototype.Y=function(i){try{if(i==this.g)t:{const W=oe(this.g),mt=this.g.ya(),rt=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||bo(this.g)))){this.K||W!=4||mt==7||(mt==8||rt<=0?gn(3):gn(2)),fs(this);var u=this.g.ca();this.X=u;var c=rl(this);if(this.o=u==200,Zc(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,I=this.g;if((f=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var b=f;break e}}b=null}if(i=b)qe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ms(this,i);else{this.o=!1,this.m=3,Dt(12),Ae(this),vn(this);break t}}if(this.R){i=!0;let vt;for(;!this.K&&this.C<c.length;)if(vt=sl(this,c),vt==hs){W==4&&(this.m=4,Dt(14),i=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==ro){this.m=4,Dt(15),qe(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else qe(this.i,this.l,vt,null),ms(this,vt);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||c.length!=0||this.h.h||(this.m=1,Dt(16),i=!1),this.o=this.o&&i,!i)qe(this.i,this.l,c,"[Invalid Chunked Response]"),Ae(this),vn(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),ws(P),P.P=!0,Dt(11))}}else qe(this.i,this.l,c,null),ms(this,c);W==4&&Ae(this),this.o&&!this.K&&(W==4?xo(this.j,this):(this.o=!1,or(this)))}else yl(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),Ae(this),vn(this)}}}catch{}finally{}};function rl(i){if(!io(i))return i.g.la();const u=bo(i.g);if(u==="")return"";let c="";const f=u.length,I=oe(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ae(i),vn(i),"";i.h.i=new a.TextDecoder}for(let b=0;b<f;b++)i.h.h=!0,c+=i.h.i.decode(u[b],{stream:!(I&&b==f-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function io(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function sl(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?hs:(c=Number(u.substring(c,f)),isNaN(c)?ro:(f+=1,f+c>u.length?hs:(u=u.slice(f,f+c),i.C=f+c,u)))}re.prototype.cancel=function(){this.K=!0,Ae(this)};function or(i){i.T=Date.now()+i.H,oo(i,i.H)}function oo(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=_n(d(i.aa,i),u)}function fs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}re.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(tl(this.i,this.B),this.M!=2&&(gn(),Dt(17)),Ae(this),this.m=2,vn(this)):oo(this,this.T-i)};function vn(i){i.j.I==0||i.K||xo(i.j,i)}function Ae(i){fs(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Ki(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function ms(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||ps(c.h,i))){if(!i.L&&ps(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)dr(c),lr(c);else break t;Ts(c),Dt(18)}}else c.xa=I[1],0<c.xa-c.K&&I[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=_n(d(c.Va,c),6e3));co(c.h)<=1&&c.ta&&(c.ta=void 0)}else Se(c,11)}else if((i.L||c.g==i)&&dr(c),!g(u))for(I=c.Ba.g.parse(u),u=0;u<I.length;u++){let rt=I[u];const vt=rt[0];if(!(vt<=c.K))if(c.K=vt,rt=rt[1],c.I==2)if(rt[0]=="c"){c.M=rt[1],c.ba=rt[2];const Ut=rt[3];Ut!=null&&(c.ka=Ut,c.j.info("VER="+c.ka));const Re=rt[4];Re!=null&&(c.za=Re,c.j.info("SVER="+c.za));const ae=rt[5];ae!=null&&typeof ae=="number"&&ae>0&&(f=1.5*ae,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const ue=i.g;if(ue){const mr=ue.g?ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mr){var b=f.h;b.g||mr.indexOf("spdy")==-1&&mr.indexOf("quic")==-1&&mr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(gs(b,b.h),b.h=null))}if(f.G){const Is=ue.g?ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(f.wa=Is,st(f.J,f.G,Is))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var P=i;if(f.na=Mo(f,f.L?f.ba:null,f.W),P.L){lo(f.h,P);var W=P,mt=f.O;mt&&(W.H=mt),W.D&&(fs(W),or(W)),f.g=P}else Vo(f);c.i.length>0&&hr(c)}else rt[0]!="stop"&&rt[0]!="close"||Se(c,7);else c.I==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Se(c,7):vs(c):rt[0]!="noop"&&c.l&&c.l.qa(rt),c.A=0)}}gn(4)}catch{}}var il=class{constructor(i,u){this.g=i,this.map=u}};function ao(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function uo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function co(i){return i.h?1:i.g?i.g.size:0}function ps(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function gs(i,u){i.g?i.g.add(u):i.h=u}function lo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}ao.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ho(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return R(i.i)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ol(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let I,b=null;f>=0?(I=i[c].substring(0,f),b=i[c].substring(f+1)):I=i[c],u(I,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function se(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof se?(this.l=i.l,Tn(this,i.j),this.o=i.o,this.g=i.g,wn(this,i.u),this.h=i.h,_s(this,Eo(i.i)),this.m=i.m):i&&(u=String(i).match(fo))?(this.l=!1,Tn(this,u[1]||"",!0),this.o=In(u[2]||""),this.g=In(u[3]||"",!0),wn(this,u[4]),this.h=In(u[5]||"",!0),_s(this,u[6]||"",!0),this.m=In(u[7]||"")):(this.l=!1,this.i=new bn(null,this.l))}se.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(An(u,mo,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(An(u,mo,!0),"@"),i.push(En(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(An(c,c.charAt(0)=="/"?cl:ul,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",An(c,hl)),i.join("")},se.prototype.resolve=function(i){const u=Bt(this);let c=!!i.j;c?Tn(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var f=i.h;if(c)wn(u,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var I=u.h.lastIndexOf("/");I!=-1&&(f=u.h.slice(0,I+1)+f)}if(I=f,I==".."||I==".")f="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){f=I.lastIndexOf("/",0)==0,I=I.split("/");const b=[];for(let P=0;P<I.length;){const W=I[P++];W=="."?f&&P==I.length&&b.push(""):W==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&P==I.length&&b.push("")):(b.push(W),f=!0)}f=b.join("/")}else f=I}return c?u.h=f:c=i.i.toString()!=="",c?_s(u,Eo(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Bt(i){return new se(i)}function Tn(i,u,c){i.j=c?In(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function wn(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function _s(i,u,c){u instanceof bn?(i.i=u,dl(i.i,i.l)):(c||(u=An(u,ll)),i.i=new bn(u,i.l))}function st(i,u,c){i.i.set(u,c)}function ar(i){return st(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function In(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function An(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,al),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function al(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var mo=/[#\/\?@]/g,ul=/[#\?:]/g,cl=/[#\?]/g,ll=/[#\?@]/g,hl=/#/g;function bn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function be(i){i.g||(i.g=new Map,i.h=0,i.i&&ol(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=bn.prototype,n.add=function(i,u){be(this),this.i=null,i=je(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function po(i,u){be(i),u=je(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function go(i,u){return be(i),u=je(i,u),i.g.has(u)}n.forEach=function(i,u){be(this),this.g.forEach(function(c,f){c.forEach(function(I){i.call(u,I,f,this)},this)},this)};function _o(i,u){be(i);let c=[];if(typeof u=="string")go(i,u)&&(c=c.concat(i.g.get(je(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}n.set=function(i,u){return be(this),this.i=null,i=je(this,i),go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=_o(this,i),i.length>0?String(i[0]):u):u};function yo(i,u,c){po(i,u),c.length>0&&(i.i=null,i.g.set(je(i,u),R(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const I=En(c);c=_o(this,c);for(let b=0;b<c.length;b++){let P=I;c[b]!==""&&(P+="="+En(c[b])),i.push(P)}}return this.i=i.join("&")};function Eo(i){const u=new bn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function je(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function dl(i,u){u&&!i.j&&(be(i),i.i=null,i.g.forEach(function(c,f){const I=f.toLowerCase();f!=I&&(po(this,f),yo(this,I,c))},i)),i.j=u}function fl(i,u){const c=new yn;if(a.Image){const f=new Image;f.onload=p(ie,c,"TestLoadImage: loaded",!0,u,f),f.onerror=p(ie,c,"TestLoadImage: error",!1,u,f),f.onabort=p(ie,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(ie,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function ml(i,u){const c=new yn,f=new AbortController,I=setTimeout(()=>{f.abort(),ie(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?ie(c,"TestPingServer: ok",!0,u):ie(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),ie(c,"TestPingServer: error",!1,u)})}function ie(i,u,c,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(c)}catch{}}function pl(){this.g=new Yc}function ys(i){this.i=i.Sb||null,this.h=i.ab||!1}y(ys,Wi),ys.prototype.g=function(){return new ur(this.i,this.h)};function ur(i,u){St.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(ur,St),n=ur.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,Rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function vo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Sn(this):Rn(this),this.readyState==3&&vo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Sn(this))},n.Na=function(i){this.g&&(this.response=i,Sn(this))},n.ga=function(){this.g&&Sn(this)};function Sn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Rn(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function Rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function To(i){let u="";return D(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function Es(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=To(c),typeof i=="string"?c!=null&&En(c):st(i,u,c))}function ct(i){St.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ct,St);var gl=/^https?$/i,_l=["POST","PUT"];n=ct.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eo.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(b){wo(this,b);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)c.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())c.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),I=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(_l,u,void 0)>=0)||f||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,P]of c)this.g.setRequestHeader(b,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){wo(this,b)}};function wo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,Io(i),cr(i)}function Io(i){i.A||(i.A=!0,Vt(i,"complete"),Vt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Vt(this,"complete"),Vt(this,"abort"),cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),ct.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ao(this):this.Xa())},n.Xa=function(){Ao(this)};function Ao(i){if(i.h&&typeof o<"u"){if(i.v&&oe(i)==4)setTimeout(i.Ca.bind(i),0);else if(Vt(i,"readystatechange"),oe(i)==4){i.h=!1;try{const b=i.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=b===0){let P=String(i.D).match(fo)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!gl.test(P?P.toLowerCase():"")}c=f}if(c)Vt(i,"complete"),Vt(i,"success");else{i.o=6;try{var I=oe(i)>2?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.ca()+"]",Io(i)}}finally{cr(i)}}}}function cr(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||Vt(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function oe(i){return i.g?i.g.readyState:0}n.ca=function(){try{return oe(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Xc(u)}};function bo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function yl(i){const u={};i=(i.g&&oe(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var c=nl(i[f]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=u[I]||[];u[I]=b,b.push(c)}L(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function So(i){this.za=0,this.i=[],this.j=new yn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cn("baseRetryDelayMs",5e3,i),this.Za=Cn("retryDelaySeedMs",1e4,i),this.Ta=Cn("forwardChannelMaxRetries",2,i),this.va=Cn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new ao(i&&i.concurrentRequestLimit),this.Ba=new pl,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=So.prototype,n.ka=8,n.I=1,n.connect=function(i,u,c,f){Dt(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=Mo(this,null,this.W),hr(this)};function vs(i){if(Ro(i),i.I==3){var u=i.V++,c=Bt(i.J);if(st(c,"SID",i.M),st(c,"RID",u),st(c,"TYPE","terminate"),Pn(i,c),u=new re(i,i.j,u),u.M=2,u.A=ar(Bt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=Oo(u.j,null),u.g.ea(u.A)),u.F=Date.now(),or(u)}ko(i)}function lr(i){i.g&&(ws(i),i.g.cancel(),i.g=null)}function Ro(i){lr(i),i.v&&(a.clearTimeout(i.v),i.v=null),dr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function hr(i){if(!uo(i.h)&&!i.m){i.m=!0;var u=i.Ea;ft||m(),at||(ft(),at=!0),v.add(u,i),i.D=0}}function El(i,u){return co(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=_n(d(i.Ea,i,u),No(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const I=new re(this,this.j,i);let b=this.o;if(this.U&&(b?(b=K(b),O(b,this.U)):b=this.U),this.u!==null||this.R||(I.J=b,b=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Po(this,I,u),c=Bt(this.J),st(c,"RID",i),st(c,"CVER",22),this.G&&st(c,"X-HTTP-Session-Id",this.G),Pn(this,c),b&&(this.R?u="headers="+En(To(b))+"&"+u:this.u&&Es(c,this.u,b)),gs(this.h,I),this.Ra&&st(c,"TYPE","init"),this.S?(st(c,"$req",u),st(c,"SID","null"),I.U=!0,ds(I,c,null)):ds(I,c,u),this.I=2}}else this.I==3&&(i?Co(this,i):this.i.length==0||uo(this.h)||Co(this))};function Co(i,u){var c;u?c=u.l:c=i.V++;const f=Bt(i.J);st(f,"SID",i.M),st(f,"RID",c),st(f,"AID",i.K),Pn(i,f),i.u&&i.o&&Es(f,i.u,i.o),c=new re(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=Po(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),gs(i.h,c),ds(c,f,u)}function Pn(i,u){i.H&&D(i.H,function(c,f){st(u,f,c)}),i.l&&D({},function(c,f){st(u,f,c)})}function Po(i,u,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var I=i.i;let W=-1;for(;;){const mt=["count="+c];W==-1?c>0?(W=I[0].g,mt.push("ofs="+W)):W=0:mt.push("ofs="+W);let rt=!0;for(let vt=0;vt<c;vt++){var b=I[vt].g;const Ut=I[vt].map;if(b-=W,b<0)W=Math.max(0,I[vt].g-100),rt=!1;else try{b="req"+b+"_"||"";try{var P=Ut instanceof Map?Ut:Object.entries(Ut);for(const[Re,ae]of P){let ue=ae;l(ae)&&(ue=as(ae)),mt.push(b+Re+"="+encodeURIComponent(ue))}}catch(Re){throw mt.push(b+"type="+encodeURIComponent("_badmap")),Re}}catch{f&&f(Ut)}}if(rt){P=mt.join("&");break t}}P=void 0}return i=i.i.splice(0,c),u.G=i,P}function Vo(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;ft||m(),at||(ft(),at=!0),v.add(u,i),i.A=0}}function Ts(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=_n(d(i.Da,i),No(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Do(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=_n(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),lr(this),Do(this))};function ws(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Do(i){i.g=new re(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Bt(i.na);st(u,"RID","rpc"),st(u,"SID",i.M),st(u,"AID",i.K),st(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&st(u,"TO",i.ia),st(u,"TYPE","xmlhttp"),Pn(i,u),i.u&&i.o&&Es(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=ar(Bt(u)),c.u=null,c.R=!0,so(c,i)}n.Va=function(){this.C!=null&&(this.C=null,lr(this),Ts(this),Dt(19))};function dr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function xo(i,u){var c=null;if(i.g==u){dr(i),ws(i),i.g=null;var f=2}else if(ps(i.h,u))c=u.G,lo(i.h,u),f=1;else return;if(i.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var I=i.D;f=sr(),Vt(f,new Zi(f,c)),hr(i)}else Vo(i);else if(I=u.m,I==3||I==0&&u.X>0||!(f==1&&El(i,u)||f==2&&Ts(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),I){case 1:Se(i,5);break;case 4:Se(i,10);break;case 3:Se(i,6);break;default:Se(i,2)}}}function No(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function Se(i,u){if(i.j.info("Error code "+u),u==2){var c=d(i.bb,i),f=i.Ua;const I=!f;f=new se(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tn(f,"https"),ar(f),I?fl(f.toString(),c):ml(f.toString(),c)}else Dt(2);i.I=0,i.l&&i.l.pa(u),ko(i),Ro(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function ko(i){if(i.I=0,i.ja=[],i.l){const u=ho(i.h);(u.length!=0||i.i.length!=0)&&(N(i.ja,u),N(i.ja,i.i),i.h.i.length=0,R(i.i),i.i.length=0),i.l.oa()}}function Mo(i,u,c){var f=c instanceof se?Bt(c):new se(c);if(f.g!="")u&&(f.g=u+"."+f.g),wn(f,f.u);else{var I=a.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;const b=new se(null);f&&Tn(b,f),u&&(b.g=u),I&&wn(b,I),c&&(b.h=c),f=b}return c=i.G,u=i.wa,c&&u&&st(f,c,u),st(f,"VER",i.ka),Pn(i,f),f}function Oo(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new ct(new ys({ab:c})):new ct(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lo(){}n=Lo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function fr(){}fr.prototype.g=function(i,u){return new kt(i,u)};function kt(i,u){St.call(this),this.g=new So(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new ze(this)}y(kt,St),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){vs(this.g)},kt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=as(i),i=c);u.i.push(new il(u.Ya++,i)),u.I==3&&hr(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,vs(this.g),delete this.g,kt.Z.N.call(this)};function Fo(i){us.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}y(Fo,us);function Bo(){cs.call(this),this.status=1}y(Bo,cs);function ze(i){this.g=i}y(ze,Lo),ze.prototype.ra=function(){Vt(this.g,"a")},ze.prototype.qa=function(i){Vt(this.g,new Fo(i))},ze.prototype.pa=function(i){Vt(this.g,new Bo)},ze.prototype.oa=function(){Vt(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,_u=function(){return new fr},gu=function(){return sr()},pu=Ie,$s={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Ir=ir,to.COMPLETE="complete",mu=to,Qi.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",St.prototype.listen=St.prototype.J,Vn=Qi,ct.prototype.listenOnce=ct.prototype.K,ct.prototype.getLastError=ct.prototype.Ha,ct.prototype.getLastErrorCode=ct.prototype.ya,ct.prototype.getStatus=ct.prototype.ca,ct.prototype.getResponseJson=ct.prototype.La,ct.prototype.getResponseText=ct.prototype.la,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Fa,fu=ct}).apply(typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{});const ta="@firebase/firestore",ea="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new ou("@firebase/firestore");function $e(){return xe.logLevel}function x(n,...t){if(xe.logLevel<=Z.DEBUG){const e=t.map(hi);xe.debug(`Firestore (${un}): ${n}`,...e)}}function te(n,...t){if(xe.logLevel<=Z.ERROR){const e=t.map(hi);xe.error(`Firestore (${un}): ${n}`,...e)}}function Ze(n,...t){if(xe.logLevel<=Z.WARN){const e=t.map(hi);xe.warn(`Firestore (${un}): ${n}`,...e)}}function hi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,yu(n,r,e)}function yu(n,t,e){let r=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw te(r),new Error(r)}function nt(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||yu(t,s,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _d{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ct.UNAUTHENTICATED))}shutdown(){}}class yd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ed{constructor(t){this.t=t,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string",31837,{l:r}),new Eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new Ct(t)}}class vd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Td{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new vd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class na{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,td(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new na(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new na(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Id(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function Hs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Ns(s)===Ns(o)?Q(s,o):Ns(s)?1:-1}return Q(n.length,t.length)}const Ad=55296,bd=57343;function Ns(n){const t=n.charCodeAt(0);return t>=Ad&&t<=bd}function tn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="__name__";class qt{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&q(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return qt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=qt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Q(t.length,e.length)}static compareSegments(t,e){const r=qt.isNumericId(t),s=qt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(t).compare(qt.extractNumericId(e)):Hs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return de.fromString(t.substring(4,t.length-2))}}class it extends qt{construct(t,e,r){return new it(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new it(e)}static emptyPath(){return new it([])}}const Sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends qt{construct(t,e,r){return new At(t,e,r)}static isValidIdentifier(t){return Sd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ra}static keyField(){return new At([ra])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new At(e)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(it.fromString(t))}static fromName(t){return new F(it.fromString(t).popFirst(5))}static empty(){return new F(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new it(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n,t,e){if(!e)throw new M(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Rd(n,t,e,r){if(t===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sa(n){if(!F.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ia(n){if(F.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Jt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new M(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Wn(n,t){if(!Tu(n))throw new M(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new M(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-62135596800,aa=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*aa);return new ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<oa)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/aa}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wn(t,ot._jsonSchema))return new ot(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-oa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:dt("string",ot._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new ot(0,0))}static max(){return new z(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=-1;function Cd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new pe(s,F.empty(),t)}function Pd(n){return new pe(n.readTime,n.key,jn)}class pe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new pe(z.min(),F.empty(),jn)}static max(){return new pe(z.max(),F.empty(),jn)}}function Vd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Dd)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Nd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Gr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=-1;function Kr(n){return n==null}function Nr(n){return n===0&&1/n==-1/0}function kd(n){return typeof n=="number"&&Number.isInteger(n)&&!Nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="";function Md(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ua(t)),t=Od(n.get(e),t);return ua(t)}function Od(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case wu:e+="";break;default:e+=o}}return e}function ua(n){return n+wu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Iu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){this.comparator=t,this.root=e||It.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,It.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,It.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Er(this.root,t,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Er(this.root,t,this.comparator,!0)}}class Er{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class It{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=o??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new It(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new la(this.data.getIterator())}getIteratorFrom(t){return new la(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof yt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new yt(this.comparator);return e.data=t,e}}class la{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.fields=t,t.sort(At.comparator)}static empty(){return new Ft([])}unionWith(t){let e=new yt(At.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ft(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Au("Invalid base64 string: "+o):o}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Ld=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(n){if(nt(!!n,39018),typeof n=="string"){let t=0;const e=Ld.exec(n);if(nt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="server_timestamp",Su="__type__",Ru="__previous_value__",Cu="__local_write_time__";function pi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Su])==null?void 0:r.stringValue)===bu}function Wr(n){const t=n.mapValue.fields[Ru];return pi(t)?Wr(t):t}function zn(n){const t=ge(n.mapValue.fields[Cu].timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e,r,s,o,a,l,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const kr="(default)";class $n{constructor(t,e){this.projectId=t,this.database=e||kr}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database===kr}isEqual(t){return t instanceof $n&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="__type__",Bd="__max__",vr={mapValue:{}},Vu="__vector__",Mr="value";function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pi(n)?4:qd(n)?9007199254740991:Ud(n)?10:11:q(28295,{value:n})}function Kt(n,t){if(n===t)return!0;const e=ye(n);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ge(s.timestampValue),l=ge(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return lt(s.geoPointValue.latitude)===lt(o.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return lt(s.integerValue)===lt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=lt(s.doubleValue),l=lt(o.doubleValue);return a===l?Nr(a)===Nr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return tn(n.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ca(a)!==ca(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Kt(a[h],l[h])))return!1;return!0}(n,t);default:return q(52216,{left:n})}}function Hn(n,t){return(n.values||[]).find(e=>Kt(e,t))!==void 0}function en(n,t){if(n===t)return 0;const e=ye(n),r=ye(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=lt(o.integerValue||o.doubleValue),h=lt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return ha(n.timestampValue,t.timestampValue);case 4:return ha(zn(n),zn(t));case 5:return Hs(n.stringValue,t.stringValue);case 6:return function(o,a){const l=_e(o),h=_e(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=Q(l[d],h[d]);if(p!==0)return p}return Q(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=Q(lt(o.latitude),lt(a.latitude));return l!==0?l:Q(lt(o.longitude),lt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return da(n.arrayValue,t.arrayValue);case 10:return function(o,a){var A,R,N,k;const l=o.fields||{},h=a.fields||{},d=(A=l[Mr])==null?void 0:A.arrayValue,p=(R=h[Mr])==null?void 0:R.arrayValue,y=Q(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((k=p==null?void 0:p.values)==null?void 0:k.length)||0);return y!==0?y:da(d,p)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===vr.mapValue&&a===vr.mapValue)return 0;if(o===vr.mapValue)return 1;if(a===vr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const A=Hs(h[y],p[y]);if(A!==0)return A;const R=en(l[h[y]],d[p[y]]);if(R!==0)return R}return Q(h.length,p.length)}(n.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function ha(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=ge(n),r=ge(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function da(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=en(e[s],r[s]);if(o)return o}return Q(e.length,r.length)}function nn(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Gs(e.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function Ar(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wr(n);return t?16+Ar(t):16;case 5:return 2*n.stringValue.length;case 6:return _e(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Ar(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ke(r.fields,(o,a)=>{s+=o.length+Ar(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function Ks(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function fa(n){return!!n&&"nullValue"in n}function ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function br(n){return!!n&&"mapValue"in n}function Ud(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Pu])==null?void 0:r.stringValue)===Vu}function Mn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ke(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(n.arrayValue.values[e]);return t}return{...n}}function qd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Bd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=At.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Mn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];br(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ke(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Mt(Mn(this.value))}}function Du(n){const t=[];return ke(n.fields,(e,r)=>{const s=new At([e]);if(br(r)){const o=Du(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ft(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Pt(t,0,z.min(),z.min(),z.min(),Mt.empty(),0)}static newFoundDocument(t,e,r,s){return new Pt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new Pt(t,2,e,z.min(),z.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new Pt(t,3,e,z.min(),z.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e){this.position=t,this.inclusive=e}}function pa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=en(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ga(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function jd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{}class gt extends xu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $d(t,e,r):e==="array-contains"?new Kd(t,r):e==="in"?new Wd(t,r):e==="not-in"?new Qd(t,r):e==="array-contains-any"?new Xd(t,r):new gt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Hd(t,r):new Gd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(en(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(en(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends xu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Wt(t,e)}matches(t){return Nu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nu(n){return n.op==="and"}function ku(n){return zd(n)&&Nu(n)}function zd(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function Ws(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(ku(n))return n.filters.map(t=>Ws(t)).join(",");{const t=n.filters.map(e=>Ws(e)).join(",");return`${n.op}(${t})`}}function Mu(n,t){return n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(n,t):n instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Mu(a,s.filters[l]),!0):!1}(n,t):void q(19439)}function Ou(n){return n instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ou).join(" ,")+"}"}(n):"Filter"}class $d extends gt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Hd extends gt{constructor(t,e){super(t,"in",e),this.keys=Lu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Gd extends gt{constructor(t,e){super(t,"not-in",e),this.keys=Lu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lu(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Kd extends gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&Hn(e.arrayValue,this.value)}}class Wd extends gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Hn(this.value.arrayValue,e)}}class Qd extends gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Hn(this.value.arrayValue,e)}}class Xd extends gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Hn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function _a(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Yd(n,t,e,r,s,o,a)}function _i(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ws(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>nn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>nn(r)).join(",")),t.Te=e}return t.Te}function yi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!jd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Mu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ga(n.startAt,t.startAt)&&ga(n.endAt,t.endAt)}function Qs(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jd(n,t,e,r,s,o,a,l){return new Qr(n,t,e,r,s,o,a,l)}function Ei(n){return new Qr(n)}function ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zd(n){return n.collectionGroup!==null}function On(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new yt(At.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Lr(o,r))}),e.has(At.keyField().canonicalString())||t.Ie.push(new Lr(At.keyField(),r))}return t.Ie}function jt(n){const t=$(n);return t.Ee||(t.Ee=tf(t,On(n))),t.Ee}function tf(n,t){if(n.limitType==="F")return _a(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Lr(s.field,o)});const e=n.endAt?new Or(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Or(n.startAt.position,n.startAt.inclusive):null;return _a(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xs(n,t,e){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xr(n,t){return yi(jt(n),jt(t))&&n.limitType===t.limitType}function Fu(n){return`${_i(jt(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ou(s)).join(", ")}]`),Kr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>nn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>nn(s)).join(",")),`Target(${r})`}(jt(n))}; limitType=${n.limitType})`}function Yr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of On(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const d=pa(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,On(r),s)||r.endAt&&!function(a,l,h){const d=pa(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,On(r),s))}(n,t)}function ef(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bu(n){return(t,e)=>{let r=!1;for(const s of On(n)){const o=nf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function nf(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?en(h,d):q(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ke(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Iu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new ut(F.comparator);function ee(){return rf}const Uu=new ut(F.comparator);function Dn(...n){let t=Uu;for(const e of n)t=t.insert(e.key,e);return t}function qu(n){let t=Uu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Pe(){return Ln()}function ju(){return Ln()}function Ln(){return new Me(n=>n.toString(),(n,t)=>n.isEqual(t))}const sf=new ut(F.comparator),of=new yt(F.comparator);function X(...n){let t=of;for(const e of n)t=t.add(e);return t}const af=new yt(Q);function uf(){return af}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(t)?"-0":t}}function zu(n){return{integerValue:""+n}}function cf(n,t){return kd(t)?zu(t):vi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this._=void 0}}function lf(n,t,e){return n instanceof Fr?function(s,o){const a={fields:{[Su]:{stringValue:bu},[Cu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&pi(o)&&(o=Wr(o)),o&&(a.fields[Ru]=o),{mapValue:a}}(e,t):n instanceof Gn?Hu(n,t):n instanceof Kn?Gu(n,t):function(s,o){const a=$u(s,o),l=Ea(a)+Ea(s.Ae);return Ks(a)&&Ks(s.Ae)?zu(l):vi(s.serializer,l)}(n,t)}function hf(n,t,e){return n instanceof Gn?Hu(n,t):n instanceof Kn?Gu(n,t):e}function $u(n,t){return n instanceof Br?function(r){return Ks(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Fr extends Jr{}class Gn extends Jr{constructor(t){super(),this.elements=t}}function Hu(n,t){const e=Ku(t);for(const r of n.elements)e.some(s=>Kt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Kn extends Jr{constructor(t){super(),this.elements=t}}function Gu(n,t){let e=Ku(t);for(const r of n.elements)e=e.filter(s=>!Kt(s,r));return{arrayValue:{values:e}}}class Br extends Jr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ea(n){return lt(n.integerValue||n.doubleValue)}function Ku(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function df(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Gn&&s instanceof Gn||r instanceof Kn&&s instanceof Kn?tn(r.elements,s.elements,Kt):r instanceof Br&&s instanceof Br?Kt(r.Ae,s.Ae):r instanceof Fr&&s instanceof Fr}(n.transform,t.transform)}class ff{constructor(t,e){this.version=t,this.transformResults=e}}class zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zt}static exists(t){return new zt(void 0,t)}static updateTime(t){return new zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Zr{}function Wu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ti(n.key,zt.none()):new Qn(n.key,n.data,zt.none());{const e=n.data,r=Mt.empty();let s=new yt(At.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Oe(n.key,r,new Ft(s.toArray()),zt.none())}}function mf(n,t,e){n instanceof Qn?function(s,o,a){const l=s.value.clone(),h=Ta(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Oe?function(s,o,a){if(!Sr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ta(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Qu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Fn(n,t,e,r){return n instanceof Qn?function(o,a,l,h){if(!Sr(o.precondition,a))return l;const d=o.value.clone(),p=wa(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Oe?function(o,a,l,h){if(!Sr(o.precondition,a))return l;const d=wa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Qu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,l){return Sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function pf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=$u(r.transform,s||null);o!=null&&(e===null&&(e=Mt.empty()),e.set(r.field,o))}return e||null}function va(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tn(r,s,(o,a)=>df(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Qn extends Zr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Oe extends Zr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ta(n,t,e){const r=new Map;nt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,hf(a,l,e[s]))}return r}function wa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,lf(o,a,t))}return r}class Ti extends Zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gf extends Zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&mf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ju();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Wu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,(e,r)=>va(e,r))&&tn(this.baseMutations,t.baseMutations,(e,r)=>va(e,r))}}class wi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){nt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return sf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new wi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,J;function vf(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function Xu(n){if(n===void 0)return te("GRPC error has no .code"),C.UNKNOWN;switch(n){case ht.OK:return C.OK;case ht.CANCELLED:return C.CANCELLED;case ht.UNKNOWN:return C.UNKNOWN;case ht.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ht.INTERNAL:return C.INTERNAL;case ht.UNAVAILABLE:return C.UNAVAILABLE;case ht.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ht.NOT_FOUND:return C.NOT_FOUND;case ht.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ht.ABORTED:return C.ABORTED;case ht.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ht.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(J=ht||(ht={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new de([4294967295,4294967295],0);function Ia(n){const t=Tf().encode(n),e=new du;return e.update(t),new Uint8Array(e.digest())}function Aa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new de([e,r],0),new de([s,o],0)]}class Ii{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new xn(`Invalid padding: ${e}`);if(r<0)throw new xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new xn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=de.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(de.fromNumber(r)));return s.compare(wf)===1&&(s=new de([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ia(t),[r,s]=Aa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ii(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const e=Ia(t),[r,s]=Aa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Xn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ts(z.min(),s,new ut(Q),ee(),X())}}class Xn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Xn(r,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Yu{constructor(t,e){this.targetId=t,this.Ce=e}}class Ju{constructor(t,e,r=bt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ba{constructor(){this.ve=0,this.Fe=Sa(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:o})}}),new Xn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Sa()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class If{constructor(t){this.Ge=t,this.ze=new Map,this.je=ee(),this.Je=Tr(),this.He=Tr(),this.Ye=new ut(Q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:q(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Qs(o))if(r===0){const a=new F(o.path);this.et(e,a,Pt.newNoDocument(a,z.min()))}else nt(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof Au)return Ze("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Ii(a,s,o)}catch(h){return Ze(h instanceof xn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Qs(l.target)){const h=new F(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Pt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=X();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new ts(t,e,this.Ye,this.je,r);return this.je=ee(),this.Je=Tr(),this.He=Tr(),this.Ye=new ut(Q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ba,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new yt(Q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new yt(Q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ba),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Tr(){return new ut(F.comparator)}function Sa(){return new ut(F.comparator)}const Af={asc:"ASCENDING",desc:"DESCENDING"},bf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sf={and:"AND",or:"OR"};class Rf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ys(n,t){return n.useProto3Json||Kr(t)?t:{value:t}}function Ur(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Cf(n,t){return Ur(n,t.toTimestamp())}function $t(n){return nt(!!n,49232),z.fromTimestamp(function(e){const r=ge(e);return new ot(r.seconds,r.nanos)}(n))}function Ai(n,t){return Js(n,t).canonicalString()}function Js(n,t){const e=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function tc(n){const t=it.fromString(n);return nt(ic(t),10190,{key:t.toString()}),t}function Zs(n,t){return Ai(n.databaseId,t.path)}function ks(n,t){const e=tc(t);if(e.get(1)!==n.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(nc(e))}function ec(n,t){return Ai(n.databaseId,t)}function Pf(n){const t=tc(n);return t.length===4?it.emptyPath():nc(t)}function ti(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nc(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ra(n,t,e){return{name:Zs(n,t),fields:e.value.mapValue.fields}}function Vf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(nt(p===void 0||typeof p=="string",58123),bt.fromBase64String(p||"")):(nt(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),bt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Xu(d.code);return new M(p,d.message||"")}(a);e=new Ju(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ks(n,r.document.name),o=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):z.min(),l=new Mt({mapValue:{fields:r.document.fields}}),h=Pt.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new Rr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ks(n,r.document),o=r.readTime?$t(r.readTime):z.min(),a=Pt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Rr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ks(n,r.document),o=r.removedTargetIds||[];e=new Rr([],o,s,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ef(s,o),l=r.targetId;e=new Yu(l,a)}}return e}function Df(n,t){let e;if(t instanceof Qn)e={update:Ra(n,t.key,t.value)};else if(t instanceof Ti)e={delete:Zs(n,t.key)};else if(t instanceof Oe)e={update:Ra(n,t.key,t.data),updateMask:Uf(t.fieldMask)};else{if(!(t instanceof gf))return q(16599,{Vt:t.type});e={verify:Zs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw q(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Cf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q(27497)}(n,t.precondition)),e}function xf(n,t){return n&&n.length>0?(nt(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?$t(s.updateTime):$t(o);return a.isEqual(z.min())&&(a=$t(o)),new ff(a,s.transformResults||[])}(e,t))):[]}function Nf(n,t){return{documents:[ec(n,t.path)]}}function kf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ec(n,s);const o=function(d){if(d.length!==0)return sc(Wt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Ge(A.field),direction:Lf(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ys(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Mf(n){let t=Pf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(y){const A=rc(y);return A instanceof Wt&&ku(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(A=>function(N){return new Lr(Ke(N.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(y){let A;return A=typeof y=="object"?y.value:y,Kr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(y){const A=!!y.before,R=y.values||[];return new Or(R,A)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const A=!y.before,R=y.values||[];return new Or(R,A)}(e.endAt)),Jd(t,s,a,o,l,"F",h,d)}function Of(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function rc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ke(e.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ke(e.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ke(e.unaryFilter.field);return gt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ke(e.unaryFilter.field);return gt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(e){return gt.create(Ke(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(r=>rc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(e.compositeFilter.op))}(n):q(30097,{filter:n})}function Lf(n){return Af[n]}function Ff(n){return bf[n]}function Bf(n){return Sf[n]}function Ge(n){return{fieldPath:n.canonicalString()}}function Ke(n){return At.fromServerFormat(n.fieldPath)}function sc(n){return n instanceof gt?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NAN"}};if(fa(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NAN"}};if(fa(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ge(e.field),op:Ff(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(s=>sc(s));return r.length===1?r[0]:{compositeFilter:{op:Bf(e.op),filters:r}}}(n):q(54877,{filter:n})}function Uf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ic(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e,r,s,o=z.min(),a=z.min(),l=bt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.yt=t}}function jf(n){const t=Mf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.Cn=new $f}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(pe.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(pe.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class $f{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new yt(it.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new yt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oc=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(oc,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new rn(0)}static cr(){return new rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="LruGarbageCollector",Hf=1048576;function Va([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class Gf{constructor(t){this.Ir=t,this.buffer=new yt(Va),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Va(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(Pa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?x(Pa,"Ignoring IndexedDB error during garbage collection: ",e):await cn(e)}await this.Vr(3e5)})}}class Wf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Gr.ce);const r=new Gf(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Ca)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ca):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,l=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(d=Date.now(),$e()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function Qf(n,t){return new Wf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.changes=new Me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Fn(r.mutation,s,Ft.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Dn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=ee();const a=Ln(),l=function(){return Ln()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Oe)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Fn(p.mutation,d,p.mutation.getFieldMask(),ot.now())):a.set(d.key,Ft.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>l.set(d,new Yf(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(t,e){const r=Ln();let s=new ut((a,l)=>a-l),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Ft.empty();p=l.applyToLocalView(d,p),r.set(h,p);const y=(s.get(l.batchId)||X()).add(h);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,y=ju();p.forEach(A=>{if(!o.has(A)){const R=Wu(e.get(A),r.get(A));R!==null&&y.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(Pe());let l=jn,h=o;return a.next(d=>S.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,X())).next(p=>({batchId:l,changes:qu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=Dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const d=function(y,A){return new Qr(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Pt.newInvalidDocument(p)))});let l=Dn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Fn(p.mutation,d,Ft.empty(),ot.now()),Yr(e,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:$t(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:jf(s.bundledQuery),readTime:$t(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.overlays=new ut(F.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Pe();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=Pe(),o=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ut((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Pe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return S.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yf(e,r));let o=this.qr.get(e);o===void 0&&(o=X(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.Qr=new yt(Tt.$r),this.Ur=new yt(Tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new Tt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new Tt(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new F(new it([])),r=new Tt(e,t),s=new Tt(e,t+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new it([])),r=new Tt(e,t),s=new Tt(e,t+1);let o=X();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Tt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||Q(t.Yr,e.Yr)}static Kr(t,e){return Q(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new yt(Tt.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _f(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Tt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?mi:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Tt(e,0),s=new Tt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new yt(Q);return e.forEach(s=>{const o=new Tt(s,0),a=new Tt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{r=r.add(l.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new Tt(new F(o),0);let l=new yt(Q);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)},a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,s=>{const o=new Tt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new Tt(e,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.ri=t,this.docs=function(){return new ut(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Pt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ee();const a=e.path,l=new F(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Vd(Pd(p),r)<=0||(s.has(p.key)||Yr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){q(9500)}ii(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sm(this)}getSize(t){return S.resolve(this.size)}}class sm extends Xf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.persistence=t,this.si=new Me(e=>_i(e),yi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new bi,this.targetCount=0,this.ai=rn.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new rn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e){this.ui={},this.overlays={},this.ci=new Gr(0),this.li=!1,this.li=!0,this.hi=new em,this.referenceDelegate=t(this),this.Pi=new im(this),this.indexManager=new zf,this.remoteDocumentCache=function(s){return new rm(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new qf(e),this.Ii=new Zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new nm(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new om(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class om extends xd{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Ri=new bi,this.Vi=null}static mi(t){return new Si(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const s=F.fromPath(r);return this.gi(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class qr{constructor(t,e){this.persistence=t,this.pi=new Me(r=>Md(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Qf(this,e)}static mi(t,e){return new qr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return S.forEach(this.pi,(r,s)=>this.br(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(l=>{l||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ar(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ri(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Yl()?8:Nd(Ql())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new am;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)})}).next(()=>o.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?($e()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):($e()<=Z.DEBUG&&x("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?($e()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jt(e))):S.resolve())}ys(t,e){if(ya(e))return S.resolve(null);let r=jt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Xs(e,null,"F"),r=jt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.ps.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,Xs(e,null,"F")):this.vs(t,d,e,h)}))})))}ws(t,e,r,s){return ya(e)||s.isEqual(z.min())?S.resolve(null):this.ps.getDocuments(t,r).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?S.resolve(null):($e()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.vs(t,a,e,Cd(s,jn)).next(l=>l))})}Ds(t,e){let r=new yt(Bu(t));return e.forEach((s,o)=>{Yr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return $e()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",He(e)),this.ps.getDocumentsMatchingQuery(t,e,pe.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="LocalStore",cm=3e8;class lm{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ut(Q),this.xs=new Me(o=>_i(o),yi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function hm(n,t,e,r){return new lm(n,t,e,r)}async function uc(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=X();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function dm(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const y=d.batch,A=y.keys();let R=S.resolve();return A.forEach(N=>{R=R.next(()=>p.getEntry(h,N)).next(k=>{const V=d.docVersions.get(N);nt(V!==null,48541),k.version.compareTo(V)<0&&(y.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=X();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function cc(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function fm(n,t){const e=$(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach((p,y)=>{const A=s.get(y);if(!A)return;l.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,y).next(()=>e.Pi.addMatchingKeys(o,p.addedDocuments,y)));let R=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?R=R.withResumeToken(bt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(y,R),function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cm?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,R,p)&&l.push(e.Pi.updateTargetData(o,R))});let h=ee(),d=X();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(mm(o,a,t.documentUpdates).next(p=>{h=p.ks,d=p.qs})),!r.isEqual(z.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next(y=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ms=s,o))}function mm(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ee();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):x(Ci,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function pm(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=mi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function gm(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new ce(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function ei(n,t,e){const r=$(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ln(a))throw a;x(Ci,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Da(n,t,e){const r=$(n);let s=z.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const y=$(h),A=y.xs.get(p);return A!==void 0?S.resolve(y.Ms.get(A)):y.Pi.getTargetData(d,p)}(r,a,jt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:X())).next(l=>(_m(r,ef(t),l),{documents:l,Qs:o})))}function _m(n,t,e){let r=n.Os.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(t,r)}class xa{constructor(){this.activeTargetIds=uf()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ym{constructor(){this.Mo=new xa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new xa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="ConnectivityMonitor";class ka{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Na,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(Na,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr=null;function ni(){return wr===null?wr=function(){return 268435456+Math.round(2147483648*Math.random())}():wr++,"0x"+wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="RestConnection",vm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Tm{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===kr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=ni(),l=this.zo(t,e.toUriEncodedString());x(Ms,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),p=ci(d);return this.Jo(t,l,h,r,p).then(y=>(x(Ms,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Ze(Ms,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",r),y})}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+un}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const r=vm[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class Im extends Tm{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=ni();return new Promise((l,h)=>{const d=new fu;d.setWithCredentials(!0),d.listenOnce(mu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ir.NO_ERROR:const y=d.getResponseJson();x(Rt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case Ir.TIMEOUT:x(Rt,`RPC '${t}' ${a} timed out`),h(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const A=d.getStatus();if(x(Rt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const k=function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN}(N.status);h(new M(k,N.message))}else h(new M(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(Rt,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);x(Rt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)})}T_(t,e,r){const s=ni(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=_u(),l=gu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");x(Rt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);this.I_(y);let A=!1,R=!1;const N=new wm({Yo:V=>{R?x(Rt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(x(Rt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),A=!0),x(Rt,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Zo:()=>y.close()}),k=(V,B,U)=>{V.listen(B,G=>{try{U(G)}catch(et){setTimeout(()=>{throw et},0)}})};return k(y,Vn.EventType.OPEN,()=>{R||(x(Rt,`RPC '${t}' stream ${s} transport opened.`),N.o_())}),k(y,Vn.EventType.CLOSE,()=>{R||(R=!0,x(Rt,`RPC '${t}' stream ${s} transport closed`),N.a_(),this.E_(y))}),k(y,Vn.EventType.ERROR,V=>{R||(R=!0,Ze(Rt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.a_(new M(C.UNAVAILABLE,"The operation could not be completed")))}),k(y,Vn.EventType.MESSAGE,V=>{var B;if(!R){const U=V.data[0];nt(!!U,16349);const G=U,et=(G==null?void 0:G.error)||((B=G[0])==null?void 0:B.error);if(et){x(Rt,`RPC '${t}' stream ${s} received error:`,et);const ft=et.status;let at=function(_){const T=ht[_];if(T!==void 0)return Xu(T)}(ft),v=et.message;at===void 0&&(at=C.INTERNAL,v="Unknown error status: "+ft+" with message "+et.message),R=!0,N.a_(new M(at,v)),y.close()}else x(Rt,`RPC '${t}' stream ${s} received:`,U),N.u_(U)}}),k(l,pu.STAT_EVENT,V=>{V.stat===$s.PROXY?x(Rt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===$s.NOPROXY&&x(Rt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Os(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){return new Rf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="PersistentStream";class hc{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return x(Ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(x(Ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Am extends hc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Vf(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?$t(a.readTime):z.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=ti(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=Qs(h)?{documents:Nf(o,h)}:{query:kf(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Zu(o,a.resumeToken);const d=Ys(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=Ur(o,a.snapshotVersion.toTimestamp());const d=Ys(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=Of(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=ti(this.serializer),e.removeTarget=t,this.q_(e)}}class bm extends hc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return nt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,nt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){nt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=xf(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=ti(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Df(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{}class Rm extends Sm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,Js(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(t,Js(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Cm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(te(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="RemoteStore";class Pm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Le(this)&&(x(Ne,"Restarting streams for network reachability change."),await async function(h){const d=$(h);d.Ea.add(4),await Yn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ns(d)}(this))})}),this.Ra=new Cm(r,s)}}async function ns(n){if(Le(n))for(const t of n.da)await t(!0)}async function Yn(n){for(const t of n.da)await t(!1)}function dc(n,t){const e=$(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),xi(e)?Di(e):hn(e).O_()&&Vi(e,t))}function Pi(n,t){const e=$(n),r=hn(e);e.Ia.delete(t),r.O_()&&fc(e,t),e.Ia.size===0&&(r.O_()?r.L_():Le(e)&&e.Ra.set("Unknown"))}function Vi(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}hn(n).Y_(t)}function fc(n,t){n.Va.Ue(t),hn(n).Z_(t)}function Di(n){n.Va=new If({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.Ra.ua()}function xi(n){return Le(n)&&!hn(n).x_()&&n.Ia.size>0}function Le(n){return $(n).Ea.size===0}function mc(n){n.Va=void 0}async function Vm(n){n.Ra.set("Online")}async function Dm(n){n.Ia.forEach((t,e)=>{Vi(n,t)})}async function xm(n,t){mc(n),xi(n)?(n.Ra.ha(t),Di(n)):n.Ra.set("Unknown")}async function Nm(n,t,e){if(n.Ra.set("Online"),t instanceof Ju&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,t)}catch(r){x(Ne,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await jr(n,r)}else if(t instanceof Rr?n.Va.Ze(t):t instanceof Yu?n.Va.st(t):n.Va.tt(t),!e.isEqual(z.min()))try{const r=await cc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(bt.EMPTY_BYTE_STRING,p.snapshotVersion)),fc(o,h);const y=new ce(p.target,h,d,p.sequenceNumber);Vi(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){x(Ne,"Failed to raise snapshot:",r),await jr(n,r)}}async function jr(n,t,e){if(!ln(t))throw t;n.Ea.add(1),await Yn(n),n.Ra.set("Offline"),e||(e=()=>cc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Ne,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ns(n)})}function pc(n,t){return t().catch(e=>jr(n,e,t))}async function rs(n){const t=$(n),e=Ee(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:mi;for(;km(t);)try{const s=await pm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Mm(t,s)}catch(s){await jr(t,s)}gc(t)&&_c(t)}function km(n){return Le(n)&&n.Ta.length<10}function Mm(n,t){n.Ta.push(t);const e=Ee(n);e.O_()&&e.X_&&e.ea(t.mutations)}function gc(n){return Le(n)&&!Ee(n).x_()&&n.Ta.length>0}function _c(n){Ee(n).start()}async function Om(n){Ee(n).ra()}async function Lm(n){const t=Ee(n);for(const e of n.Ta)t.ea(e.mutations)}async function Fm(n,t,e){const r=n.Ta.shift(),s=wi.from(r,t,e);await pc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await rs(n)}async function Bm(n,t){t&&Ee(n).X_&&await async function(r,s){if(function(a){return vf(a)&&a!==C.ABORTED}(s.code)){const o=r.Ta.shift();Ee(r).B_(),await pc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await rs(r)}}(n,t),gc(n)&&_c(n)}async function Oa(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),x(Ne,"RemoteStore received new credentials");const r=Le(e);e.Ea.add(3),await Yn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ns(e)}async function Um(n,t){const e=$(n);t?(e.Ea.delete(2),await ns(e)):t||(e.Ea.add(2),await Yn(e),e.Ra.set("Unknown"))}function hn(n){return n.ma||(n.ma=function(e,r,s){const o=$(e);return o.sa(),new Am(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Vm.bind(null,n),t_:Dm.bind(null,n),r_:xm.bind(null,n),H_:Nm.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),xi(n)?Di(n):n.Ra.set("Unknown")):(await n.ma.stop(),mc(n))})),n.ma}function Ee(n){return n.fa||(n.fa=function(e,r,s){const o=$(e);return o.sa(),new bm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Om.bind(null,n),r_:Bm.bind(null,n),ta:Lm.bind(null,n),na:Fm.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await rs(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Ne,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ni(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(n,t){if(te("AsyncQueue",`${t}: ${n}`),ln(n))return new M(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{static emptySet(t){return new Ye(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Dn(),this.sortedSet=new ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.ga=new ut(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class sn{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new sn(t,e,Ye.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class jm{constructor(){this.queries=Fa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=$(e),o=s.queries;s.queries=Fa(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Fa(){return new Me(n=>Fu(n),Xr)}async function yc(n,t){const e=$(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new qm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ki(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Mi(e)}async function Ec(n,t){const e=$(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function zm(n,t){const e=$(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Mi(e)}function $m(n,t,e){const r=$(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Mi(n){n.Ca.forEach(t=>{t.next()})}var ri,Ba;(Ba=ri||(ri={})).Ma="default",Ba.Cache="cache";class vc{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ri.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this.key=t}}class wc{constructor(t){this.key=t}}class Hm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Bu(t),this.tu=new Ye(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new La,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,y)=>{const A=s.get(p),R=Yr(this.query,y)?y:null,N=!!A&&this.mutatedKeys.has(A.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;A&&R?A.data.isEqual(R.data)?N!==k&&(r.track({type:3,doc:R}),V=!0):this.su(A,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.eu(R,h)>0||d&&this.eu(R,d)<0)&&(l=!0)):!A&&R?(r.track({type:0,doc:R}),V=!0):A&&!R&&(r.track({type:1,doc:A}),V=!0,(h||d)&&(l=!0)),V&&(R?(a=a.add(R),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((p,y)=>function(R,N){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:V})}};return k(R)-k(N)}(p.type,y.type)||this.eu(p.doc,y.doc)),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new sn(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new La,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new wc(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Tc(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return sn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Oi="SyncEngine";class Gm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Km{constructor(t){this.key=t,this.hu=!1}}class Wm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Me(l=>Fu(l),Xr),this.Iu=new Map,this.Eu=new Set,this.du=new ut(F.comparator),this.Au=new Map,this.Ru=new bi,this.Vu={},this.mu=new Map,this.fu=rn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qm(n,t,e=!0){const r=Cc(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Ic(r,t,e,!0),s}async function Xm(n,t){const e=Cc(n);await Ic(e,t,!0,!1)}async function Ic(n,t,e,r){const s=await gm(n.localStore,jt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Ym(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&dc(n.remoteStore,s),l}async function Ym(n,t,e,r,s){n.pu=(y,A,R)=>async function(k,V,B,U){let G=V.view.ru(B);G.Cs&&(G=await Da(k.localStore,V.query,!1).then(({documents:v})=>V.view.ru(v,G)));const et=U&&U.targetChanges.get(V.targetId),ft=U&&U.targetMismatches.get(V.targetId)!=null,at=V.view.applyChanges(G,k.isPrimaryClient,et,ft);return qa(k,V.targetId,at.au),at.snapshot}(n,y,A,R);const o=await Da(n.localStore,t,!0),a=new Hm(t,o.Qs),l=a.ru(o.documents),h=Xn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);qa(n,e,d.au);const p=new Gm(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Jm(n,t,e){const r=$(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Xr(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ei(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Pi(r.remoteStore,s.targetId),si(r,s.targetId)}).catch(cn)):(si(r,s.targetId),await ei(r.localStore,s.targetId,!0))}async function Zm(n,t){const e=$(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Pi(e.remoteStore,r.targetId))}async function tp(n,t,e){const r=ap(n);try{const s=await function(a,l){const h=$(a),d=ot.now(),p=l.reduce((R,N)=>R.add(N.key),X());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=ee(),k=X();return h.Ns.getEntries(R,p).next(V=>{N=V,N.forEach((B,U)=>{U.isValidDocument()||(k=k.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,N)).next(V=>{y=V;const B=[];for(const U of l){const G=pf(U,y.get(U.key).overlayedDocument);G!=null&&B.push(new Oe(U.key,G,Du(G.value.mapValue),zt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,B,l)}).next(V=>{A=V;const B=V.applyToLocalDocumentSet(y,k);return h.documentOverlayCache.saveOverlays(R,V.batchId,B)})}).then(()=>({batchId:A.batchId,changes:qu(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new ut(Q)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,e),await Jn(r,s.changes),await rs(r.remoteStore)}catch(s){const o=ki(s,"Failed to persist write");e.reject(o)}}async function Ac(n,t){const e=$(n);try{const r=await fm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?nt(a.hu,14607):s.removedDocuments.size>0&&(nt(a.hu,42227),a.hu=!1))}),await Jn(e,r,t)}catch(r){await cn(r)}}function Ua(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=$(a);h.onlineState=l;let d=!1;h.queries.forEach((p,y)=>{for(const A of y.Sa)A.va(l)&&(d=!0)}),d&&Mi(h)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ep(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new ut(F.comparator);a=a.insert(o,Pt.newNoDocument(o,z.min()));const l=X().add(o),h=new ts(z.min(),new Map,new ut(Q),a,l);await Ac(r,h),r.du=r.du.remove(o),r.Au.delete(t),Li(r)}else await ei(r.localStore,t,!1).then(()=>si(r,t,e)).catch(cn)}async function np(n,t){const e=$(n),r=t.batch.batchId;try{const s=await dm(e.localStore,t);Sc(e,r,null),bc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Jn(e,s)}catch(s){await cn(s)}}async function rp(n,t,e){const r=$(n);try{const s=await function(a,l){const h=$(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(y=>(nt(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Sc(r,t,e),bc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Jn(r,s)}catch(s){await cn(s)}}function bc(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Sc(n,t,e){const r=$(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function si(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||Rc(n,r)})}function Rc(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Pi(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Li(n))}function qa(n,t,e){for(const r of e)r instanceof Tc?(n.Ru.addReference(r.key,t),sp(n,r)):r instanceof wc?(x(Oi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Rc(n,r.key)):q(19791,{wu:r})}function sp(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(x(Oi,"New document in limbo: "+e),n.Eu.add(r),Li(n))}function Li(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(it.fromString(t)),r=n.fu.next();n.Au.set(r,new Km(e)),n.du=n.du.insert(e,r),dc(n.remoteStore,new ce(jt(Ei(e.path)),r,"TargetPurposeLimboResolution",Gr.ce))}}async function Jn(n,t,e){const r=$(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Ri.As(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const p=$(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,A=>S.forEach(A.Es,R=>p.persistence.referenceDelegate.addReference(y,A.targetId,R)).next(()=>S.forEach(A.ds,R=>p.persistence.referenceDelegate.removeReference(y,A.targetId,R)))))}catch(y){if(!ln(y))throw y;x(Ci,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const R=p.Ms.get(A),N=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(N);p.Ms=p.Ms.insert(A,k)}}}(r.localStore,o))}async function ip(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){x(Oi,"User change. New user:",t.toKey());const r=await uc(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new M(C.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Jn(e,r.Ls)}}function op(n,t){const e=$(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Cc(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ac.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=op.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ep.bind(null,t),t.Pu.H_=zm.bind(null,t.eventManager),t.Pu.yu=$m.bind(null,t.eventManager),t}function ap(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=np.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rp.bind(null,t),t}class zr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=es(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return hm(this.persistence,new um,t.initialUser,this.serializer)}Cu(t){return new ac(Si.mi,this.serializer)}Du(t){return new ym}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zr.provider={build:()=>new zr};class up extends zr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof qr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Kf(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new ac(r=>qr.mi(r,e),this.serializer)}}class ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ip.bind(null,this.syncEngine),await Um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jm}()}createDatastore(t){const e=es(t.databaseInfo.databaseId),r=function(o){return new Im(o)}(t.databaseInfo);return function(o,a,l,h){return new Rm(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Pm(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ua(this.syncEngine,e,0),function(){return ka.v()?new ka:new Em}())}createSyncEngine(t,e){return function(s,o,a,l,h,d,p){const y=new Wm(s,o,a,l,h,d);return p&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);x(Ne,"RemoteStore shutting down."),o.Ea.add(5),await Yn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ii.provider={build:()=>new ii};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="FirestoreClient";class cp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=di.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ki(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ls(n,t){n.asyncQueue.verifyOperationInProgress(),x(ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ja(n,t){n.asyncQueue.verifyOperationInProgress();const e=await lp(n);x(ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Oa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Oa(t.remoteStore,s)),n._onlineComponents=t}async function lp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(ve,"Using user provided OfflineComponentProvider");try{await Ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ze("Error using user provided cache. Falling back to memory cache: "+e),await Ls(n,new zr)}}else x(ve,"Using default OfflineComponentProvider"),await Ls(n,new up(void 0));return n._offlineComponents}async function Vc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(ve,"Using user provided OnlineComponentProvider"),await ja(n,n._uninitializedComponentsProvider._online)):(x(ve,"Using default OnlineComponentProvider"),await ja(n,new ii))),n._onlineComponents}function hp(n){return Vc(n).then(t=>t.syncEngine)}async function oi(n){const t=await Vc(n),e=t.eventManager;return e.onListen=Qm.bind(null,t.syncEngine),e.onUnlisten=Jm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zm.bind(null,t.syncEngine),e}function dp(n,t,e={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new Pc({next:A=>{p.Nu(),a.enqueueAndForget(()=>Ec(o,y)),A.fromCache&&h.source==="server"?d.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new vc(l,p,{includeMetadataChanges:!0,qa:!0});return yc(o,y)}(await oi(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="firestore.googleapis.com",$a=!0;class Ha{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xc,this.ssl=$a}else this.host=t.host,this.ssl=t.ssl??$a;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=oc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Hf)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dc(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ss{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _d;switch(r.type){case"firstParty":return new Td(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=za.get(e);r&&(x("ComponentProvider","Removing Datastore"),za.delete(e),r.terminate())}(this),Promise.resolve()}}function fp(n,t,e,r={}){var d;n=Jt(n,ss);const s=ci(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&($l(`https://${l}`),Wl("Firestore",!0)),o.host!==xc&&o.host!==l&&Ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!Vr(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=Ct.MOCK_USER;else{p=Hl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ct(A)}n._authCredentials=new yd(new Eu(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zn(this.firestore,t,this._query)}}class _t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Wn(e,_t._jsonSchema))return new _t(t,r||null,new F(it.fromString(e.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:dt("string",_t._jsonSchemaVersion),referencePath:dt("string")};class me extends Zn{constructor(t,e,r){super(t,e,Ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new F(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function Nc(n,t,...e){if(n=Je(n),vu("collection","path",t),n instanceof ss){const r=it.fromString(t,...e);return ia(r),new me(n,null,r)}{if(!(n instanceof _t||n instanceof me))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return ia(r),new me(n.firestore,null,r)}}function Fi(n,t,...e){if(n=Je(n),arguments.length===1&&(t=di.newId()),vu("doc","path",t),n instanceof ss){const r=it.fromString(t,...e);return sa(r),new _t(n,null,new F(r))}{if(!(n instanceof _t||n instanceof me))throw new M(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return sa(r),new _t(n.firestore,n instanceof me?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="AsyncQueue";class Ka{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lc(this,"async_queue_retry"),this._c=()=>{const r=Os();r&&x(Ga,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Os();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Os();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new fe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ln(t))throw t;x(Ga,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,te("INTERNAL UNHANDLED ERROR: ",Wa(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ni.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:Wa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Wa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class on extends ss{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ka(t),this._firestoreClient=void 0,await t}}}function mp(n,t){const e=typeof n=="object"?n:sd(),r=typeof n=="string"?n:kr,s=Zh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=jl("firestore");o&&fp(s,...o)}return s}function Bi(n){if(n._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pp(n),n._firestoreClient}function pp(n){var r,s,o;const t=n._freezeSettings(),e=function(l,h,d,p){return new Fd(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Dc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new cp(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(bt.fromBase64String(t))}catch(e){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Wn(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:dt("string",Ot._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ht._jsonSchemaVersion}}static fromJSON(t){if(Wn(t,Ht._jsonSchema))return new Ht(t.latitude,t.longitude)}}Ht._jsonSchemaVersion="firestore/geoPoint/1.0",Ht._jsonSchema={type:dt("string",Ht._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wn(t,Gt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Gt(t.vectorValues);throw new M(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:dt("string",Gt._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=/^__.*__$/;class _p{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qn(t,this.data,e,this.fieldTransforms)}}function Mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class qi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new qi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return $r(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Mc(this.Ac)&&gp.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class yp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||es(t)}Cc(t,e,r,s=!1){return new qi({Ac:t,methodName:e,Dc:r,path:At.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ep(n){const t=n._freezeSettings(),e=es(n._databaseId);return new yp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function vp(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);Bc("Data must be an object, but it was:",a,r);const l=Lc(r,a);let h,d;if(o.merge)h=new Ft(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const A=Tp(t,y,e);if(!a.contains(A))throw new M(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ip(p,A)||p.push(A)}h=new Ft(p),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new _p(new Mt(l),h,d)}function Oc(n,t){if(Fc(n=Je(n)))return Bc("Unsupported field value:",t,n),Lc(n,t);if(n instanceof kc)return function(r,s){if(!Mc(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Oc(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Ur(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ur(s.serializer,o)}}if(r instanceof Ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:Zu(s.serializer,r._byteString)};if(r instanceof _t){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ai(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gt)return function(a,l){return{mapValue:{fields:{[Pu]:{stringValue:Vu},[Mr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return vi(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${fi(r)}`)}(n,t)}function Lc(n,t){const e={};return Iu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ke(n,(r,s)=>{const o=Oc(s,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Fc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Ht||n instanceof Ot||n instanceof _t||n instanceof kc||n instanceof Gt)}function Bc(n,t,e){if(!Fc(e)||!Tu(e)){const r=fi(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Tp(n,t,e){if((t=Je(t))instanceof Ui)return t._internalPath;if(typeof t=="string")return Uc(n,t);throw $r("Field path arguments must be of type string or ",n,!1,void 0,e)}const wp=new RegExp("[~\\*/\\[\\]]");function Uc(n,t,e){if(t.search(wp)>=0)throw $r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ui(...t.split("."))._internalPath}catch{throw $r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function $r(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(C.INVALID_ARGUMENT,l+n+h)}function Ip(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ap extends qc{data(){return super.data()}}function jc(n,t){return typeof t=="string"?Uc(n,t):t instanceof Ui?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ke(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[Mr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>lt(a.doubleValue));return new Gt(e)}convertGeoPoint(t){return new Ht(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Wr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(zn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=it.fromString(t);nt(ic(r),9688,{name:t});const s=new $n(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ve extends qc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(jc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ve._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ve._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ve._jsonSchema={type:dt("string",Ve._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Cr extends Ve{data(t={}){return super.data(t)}}class De{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Nn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Cr(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new Cr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Cr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Rp(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=De._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=di.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Rp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}De._jsonSchemaVersion="firestore/querySnapshot/1.0",De._jsonSchema={type:dt("string",De._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class ji extends bp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ot(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function Cp(n){n=Jt(n,Zn);const t=Jt(n.firestore,on),e=Bi(t),r=new ji(t);return zc(n._query),dp(e,n._query).then(s=>new De(t,r,n,s))}function $c(n,t,e){n=Jt(n,_t);const r=Jt(n.firestore,on),s=Sp(n.converter,t);return Hc(r,[vp(Ep(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,zt.none())])}function Pp(n){return Hc(Jt(n.firestore,on),[new Ti(n._key,zt.none())])}function Vp(n,...t){var h,d,p;n=Je(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Qa(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Qa(t[r])){const y=t[r];t[r]=(h=y.next)==null?void 0:h.bind(y),t[r+1]=(d=y.error)==null?void 0:d.bind(y),t[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let o,a,l;if(n instanceof _t)a=Jt(n.firestore,on),l=Ei(n._key.path),o={next:y=>{t[r]&&t[r](Dp(a,n,y))},error:t[r+1],complete:t[r+2]};else{const y=Jt(n,Zn);a=Jt(y.firestore,on),l=y._query;const A=new ji(a);o={next:R=>{t[r]&&t[r](new De(a,A,y,R))},error:t[r+1],complete:t[r+2]},zc(n._query)}return function(A,R,N,k){const V=new Pc(k),B=new vc(R,V,N);return A.asyncQueue.enqueueAndForget(async()=>yc(await oi(A),B)),()=>{V.Nu(),A.asyncQueue.enqueueAndForget(async()=>Ec(await oi(A),B))}}(Bi(a),l,s,o)}function Hc(n,t){return function(r,s){const o=new fe;return r.asyncQueue.enqueueAndForget(async()=>tp(await hp(r),s,o)),o.promise}(Bi(n),t)}function Dp(n,t,e){const r=e.docs.get(t._key),s=new ji(n);return new Ve(n,s,t._key,r,new Nn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){un=s})(rd),xr(new Un("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new on(new Ed(r.getProvider("auth-internal")),new wd(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(d.options.projectId,p)}(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xe(ta,ea,t),Xe(ta,ea,"esm2020")})();const xp={apiKey:"AIzaSyAy96lQqZuRueG_ZeABFzDJwqYuZZA4Fgw",authDomain:"the-spraywall-cellar.firebaseapp.com",projectId:"the-spraywall-cellar",storageBucket:"the-spraywall-cellar.firebasestorage.app",messagingSenderId:"491245667170",appId:"1:491245667170:web:5da5f8bcfc245c09b2a23b"},Np=cu(xp),tr=mp(Np),kp="1.0.0",er="boulders";async function Mp(n){try{await $c(Fi(tr,er,n.id),n)}catch(t){throw console.error("Failed to save boulder to Firebase:",t),new Error("Failed to save boulder. Check your connection.")}}async function Op(n){try{const t=n.map(e=>$c(Fi(tr,er,e.id),e));await Promise.all(t)}catch(t){throw console.error("Failed to save boulders to Firebase:",t),new Error("Failed to save boulders. Check your connection.")}}async function Lp(){try{const n=await Cp(Nc(tr,er)),t=[];return n.forEach(e=>{t.push(e.data())}),t}catch(n){return console.error("Failed to load boulders from Firebase:",n),[]}}function Fp(n){return Vp(Nc(tr,er),e=>{const r=[];e.forEach(s=>{r.push(s.data())}),n(r)},e=>{console.error("Error subscribing to boulders:",e)})}async function Bp(n){try{await Pp(Fi(tr,er,n))}catch(t){throw console.error("Failed to delete boulder from Firebase:",t),new Error("Failed to delete boulder. Check your connection.")}}function Up(n){const t={version:kp,exportedAt:Date.now(),boulders:n},e=JSON.stringify(t,null,2),r=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download=`spraywall-boulders-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function qp(n){return new Promise((t,e)=>{const r=new FileReader;r.onload=s=>{var o;try{const a=JSON.parse((o=s.target)==null?void 0:o.result);if(!a.boulders||!Array.isArray(a.boulders))throw new Error("Invalid import file format");t(a.boulders)}catch{e(new Error("Failed to parse import file"))}},r.onerror=()=>{e(new Error("Failed to read file"))},r.readAsText(n)})}const jp="59a6cabc8b017562ccb1f3c9514870b4a677fda5b79788abae3dcea83430cb50";let H={boulders:[],currentBoulder:null,selectedBoulderId:null,mode:"set"},We=null;function Gc(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}async function zp(n){const t=new TextEncoder().encode(n),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(s=>s.toString(16).padStart(2,"0")).join("")}async function $p(n){return await zp(n)===jp}function Hp(n){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;const r=document.createElement("div");r.style.cssText=`
      background: #1f2937;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      max-width: 400px;
      width: 90%;
    `,r.innerHTML=`
      <h3 style="color: white; margin: 0 0 16px 0; font-size: 18px;">${n}</h3>
      <input
        type="password"
        id="password-input"
        placeholder="Enter password"
        style="
          width: 100%;
          padding: 8px 12px;
          background: #374151;
          border: 1px solid #4b5563;
          border-radius: 4px;
          color: white;
          font-size: 14px;
          margin-bottom: 16px;
          box-sizing: border-box;
        "
      />
      <div style="display: flex; gap: 8px; justify-content: flex-end;">
        <button
          id="cancel-btn"
          style="
            padding: 8px 16px;
            background: #4b5563;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          "
        >Cancel</button>
        <button
          id="ok-btn"
          style="
            padding: 8px 16px;
            background: #7c3aed;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          "
        >OK</button>
      </div>
    `,e.appendChild(r),document.body.appendChild(e);const s=r.querySelector("#password-input"),o=r.querySelector("#ok-btn"),a=r.querySelector("#cancel-btn");setTimeout(()=>s.focus(),100);const l=()=>{const d=s.value;document.body.removeChild(e),t(d||null)},h=()=>{document.body.removeChild(e),t(null)};o.addEventListener("click",l),a.addEventListener("click",h),s.addEventListener("keydown",d=>{d.key==="Enter"?l():d.key==="Escape"&&h()})})}function Gp(n,t,e){const r=Date.now();return{id:Gc(),name:n,grade:t,description:e,holds:[],createdAt:r,updatedAt:r}}function Kp(){const n=document.querySelector("#app");n.innerHTML=`
    <div class="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-full md:w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
        <h1 class="text-xl md:text-2xl font-bold mb-1">The Spraywall Cellar</h1>
        <p class="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">Set boulders. Chalk the fuck up. Send it.</p>

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Set boulders
          </button>
          <button id="mode-climb" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Send it!!
          </button>
        </div>

        <!-- Current Boulder Form -->
        <div id="set-mode-content">
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <input
            type="text"
            id="boulder-name"
            placeholder="Boulder name"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            id="boulder-grade"
            placeholder="Grade"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            id="boulder-description"
            placeholder="Description (optional)"
            rows="2"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          ></textarea>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-3 md:py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded font-medium text-sm md:text-base">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-3 md:py-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded font-medium text-sm md:text-base">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded font-medium text-sm md:text-base">
              Finish
            </button>
          </div>
          <hr class="my-3 border-gray-600" />
          <div class="flex gap-2">
            <button id="btn-save" class="flex-1 px-4 py-3 md:py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded font-medium text-sm md:text-base">
              Save!
            </button>
            <button id="btn-clear" class="flex-1 px-4 py-3 md:py-2 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 rounded font-medium text-sm md:text-base">
              Clear
            </button>
          </div>
        </div>
        </div>

        <!-- Boulder List -->
        <div id="climb-mode-content" class="flex-1 overflow-y-auto">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">Your boulders</h2>
            <span class="text-sm text-gray-400" id="boulder-count">0</span>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Export/Import -->
        <div class="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700">
          <div class="flex gap-2">
            <button id="btn-export" class="flex-1 px-4 py-3 md:py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded font-medium text-sm md:text-base">
              Export JSON
            </button>
            <label class="flex-1 px-4 py-3 md:py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded font-medium text-center cursor-pointer text-sm md:text-base">
              Import JSON
              <input type="file" id="input-import" accept=".json" class="hidden" />
            </label>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-gray-950 p-2 md:p-3">
        <!-- Frame -->
        <div class="h-full border-4 border-gray-700 rounded-lg shadow-2xl overflow-hidden relative" style="box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
        <!-- Spraywall Image Container -->
          <div id="panzoom-container" class="spraywall-container h-full w-full flex items-center justify-center">
            <div style="position: relative; display: inline-block;">
              <img
                src="./spraywall.jpg"
                alt="Spraywall"
                class="spraywall-image"
                id="spraywall-img"
                style="display: block;"
              />
              <div id="holds-overlay" class="absolute top-0 left-0 pointer-events-none" style="width: 100%; height: 100%;">
                <!-- Hold markers will be inserted here -->
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `}function Wp(){const n=document.querySelector("#panzoom-container"),t=document.querySelector("#spraywall-img");if(!n||!t)return;const e=()=>{const r=n.parentElement,s=r.clientWidth,o=r.clientHeight,a=t.naturalWidth,l=t.naturalHeight,h=s/a,d=o/l,p=Math.min(h,d),A=Math.max(h,d)*3;We=eu(n,{maxScale:5,minScale:p*.9,cursor:"grab",canvas:!0,step:.1}),We.zoom(A,{animate:!1}),We.pan(0,0,{animate:!1}),r.addEventListener("wheel",R=>{We&&We.zoomWithWheel(R,{step:.1})})};t.complete?e():t.addEventListener("load",e)}function Xa(){return We}function Te(){var s;const n=document.querySelector("#holds-overlay");if(!n)return;n.innerHTML="";const t=((s=H.currentBoulder)==null?void 0:s.holds)||[],e=H.boulders.find(o=>o.id===H.selectedBoulderId);((e==null?void 0:e.holds)||t).forEach(o=>{const a=document.createElement("div");a.className=`hold-marker ${o.type}`,a.style.left=`${o.x}%`,a.style.top=`${o.y}%`,a.dataset.holdId=o.id,a.addEventListener("contextmenu",l=>{l.preventDefault(),Kc(o.id)}),n.appendChild(a)})}function Qp(n,t,e=2){if(!H.currentBoulder)return null;for(const r of H.currentBoulder.holds){const s=Math.abs(r.x-n),o=Math.abs(r.y-t);if(Math.sqrt(s*s+o*o)<e)return r}return null}function Xp(n,t){const e=document.querySelector("#spraywall-img");if(!e)return;const r=e.getBoundingClientRect(),s=(n.clientX-r.left)/r.width*100,o=(n.clientY-r.top)/r.height*100,a=Qp(s,o,1);if(a){Kc(a.id);return}if(!H.currentBoulder){const d=document.querySelector("#boulder-name").value.trim()||"";H.currentBoulder=Gp(d)}const l={id:Gc(),x:Math.max(0,Math.min(100,s)),y:Math.max(0,Math.min(100,o)),type:t};H.currentBoulder.holds.push(l),Te()}function Kc(n){H.currentBoulder&&(H.currentBoulder.holds=H.currentBoulder.holds.filter(t=>t.id!==n),Te())}function zi(){const n=document.querySelector("#mode-set"),t=document.querySelector("#mode-climb"),e=document.querySelector("#set-mode-content"),r=document.querySelector("#climb-mode-content");!n||!t||!e||!r||(H.mode==="set"?(n.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white",t.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",e.style.display="block",r.style.display="none"):(n.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",t.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white",e.style.display="none",r.style.display="block"))}function Ya(n){H.mode=n,zi()}async function Yp(){if(!H.currentBoulder){alert("No boulder to save. Add some holds first!");return}if(H.currentBoulder.holds.length===0){alert("Add at least one hold before saving.");return}const n=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),e=document.querySelector("#boulder-description"),r=n.value.trim();if(!r){alert("Please enter a boulder name."),n.focus();return}const s=t.value.trim();if(!s){alert("Please enter a grade."),t.focus();return}const o=e.value.trim();H.currentBoulder.name=r,H.currentBoulder.grade=s,o?H.currentBoulder.description=o:delete H.currentBoulder.description,H.currentBoulder.updatedAt=Date.now();try{await Mp(H.currentBoulder),H.currentBoulder=null,n.value="",t.value="",e.value="",Te()}catch(a){alert("Failed to save boulder. Please check your connection and try again."),console.error(a)}}function Jp(){if(H.currentBoulder&&H.currentBoulder.holds.length>0&&!confirm("Are you sure you want to clear this boulder? All unsaved changes will be lost."))return;H.currentBoulder=null,H.selectedBoulderId=null;const n=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),e=document.querySelector("#boulder-description");n&&(n.value=""),t&&(t.value=""),e&&(e.value=""),Te(),Hr()}function Hr(){const n=document.querySelector("#boulder-list"),t=document.querySelector("#boulder-count");if(n){if(t&&(t.textContent=H.boulders.length.toString()),H.boulders.length===0){n.innerHTML='<p class="text-gray-500 text-sm">No boulders saved yet.</p>';return}n.innerHTML=H.boulders.sort((e,r)=>r.createdAt-e.createdAt).map(e=>`
        <div
          class="p-4 md:p-3 rounded ${H.selectedBoulderId===e.id?"bg-blue-600":"bg-gray-700 hover:bg-gray-600 active:bg-gray-600"} cursor-pointer"
          data-boulder-id="${e.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${e.name}</h3>
              ${e.grade?`<p class="text-sm md:text-sm text-gray-300">${e.grade}</p>`:""}
              ${e.description?`<p class="text-xs md:text-xs text-gray-400 mt-1 italic">${e.description}</p>`:""}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${e.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2"
                data-edit-boulder="${e.id}"
                title="Edit boulder"
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2"
                data-delete-boulder="${e.id}"
                title="Delete boulder"
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join(""),n.querySelectorAll("[data-boulder-id]").forEach(e=>{e.addEventListener("click",r=>{const s=r.target;if(s.closest("[data-delete-boulder]")||s.closest("[data-edit-boulder]"))return;const o=e.dataset.boulderId;Zp(o)})}),n.querySelectorAll("[data-edit-boulder]").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const s=e.dataset.editBoulder;tg(s)})}),n.querySelectorAll("[data-delete-boulder]").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const s=e.dataset.deleteBoulder;eg(s)})})}}function Zp(n){H.selectedBoulderId===n?H.selectedBoulderId=null:H.selectedBoulderId=n,Hr(),Te()}function tg(n){const t=H.boulders.find(o=>o.id===n);if(!t)return;H.mode="set",zi(),H.currentBoulder={...t,holds:[...t.holds]};const e=document.querySelector("#boulder-name"),r=document.querySelector("#boulder-grade"),s=document.querySelector("#boulder-description");e&&(e.value=t.name),r&&(r.value=t.grade||""),s&&(s.value=t.description||""),Te()}async function eg(n){const t=await Hp("Enter password to delete this boulder:");if(!t)return;if(!await $p(t)){alert("Incorrect password. Boulder not deleted.");return}if(confirm("Are you sure you want to delete this boulder?"))try{await Bp(n),H.selectedBoulderId===n&&(H.selectedBoulderId=null,Te())}catch(r){alert("Failed to delete boulder. Please check your connection and try again."),console.error(r)}}function ng(){var h,d,p,y,A,R,N,k,V;let n=null,t=0,e=0,r=!1;(h=document.querySelector("#mode-set"))==null||h.addEventListener("click",()=>{Ya("set")}),(d=document.querySelector("#mode-climb"))==null||d.addEventListener("click",()=>{Ya("climb")}),(p=document.querySelector("#btn-start"))==null||p.addEventListener("click",()=>{n=n==="start"?null:"start",s()}),(y=document.querySelector("#btn-feet-only"))==null||y.addEventListener("click",()=>{n=n==="feet-only"?null:"feet-only",s()}),(A=document.querySelector("#btn-middle"))==null||A.addEventListener("click",()=>{n=n==="middle"?null:"middle",s()}),(R=document.querySelector("#btn-top"))==null||R.addEventListener("click",()=>{n=n==="top"?null:"top",s()});function s(){const B=document.querySelector("#btn-start"),U=document.querySelector("#btn-feet-only"),G=document.querySelector("#btn-middle"),et=document.querySelector("#btn-top");[B,U,G,et].forEach(ft=>{ft==null||ft.classList.remove("ring-2","ring-white")}),n==="start"&&(B==null||B.classList.add("ring-2","ring-white")),n==="feet-only"&&(U==null||U.classList.add("ring-2","ring-white")),n==="middle"&&(G==null||G.classList.add("ring-2","ring-white")),n==="top"&&(et==null||et.classList.add("ring-2","ring-white"))}const o=document.querySelector("#panzoom-container");o==null||o.addEventListener("panzoomstart",()=>{const B=Xa();if(B){const U=B.getPan();t=U.x,e=U.y,r=!1}}),o==null||o.addEventListener("panzoomchange",()=>{const B=Xa();if(B){const U=B.getPan();(Math.abs(U.x-t)>2||Math.abs(U.y-e)>2)&&(r=!0)}}),o==null||o.addEventListener("panzoomend",()=>{setTimeout(()=>{r=!1},100)});const a=document.querySelector("#spraywall-img");a==null||a.addEventListener("click",B=>{n&&(r||Xp(B,n))}),(N=document.querySelector("#btn-save"))==null||N.addEventListener("click",Yp),(k=document.querySelector("#btn-clear"))==null||k.addEventListener("click",Jp),(V=document.querySelector("#btn-export"))==null||V.addEventListener("click",()=>{if(H.boulders.length===0){alert("No boulders to export.");return}Up(H.boulders)});const l=document.querySelector("#input-import");l==null||l.addEventListener("change",async B=>{var G;const U=(G=B.target.files)==null?void 0:G[0];if(U){try{const et=await qp(U);confirm(`Import ${et.length} boulders? This will add to your current data.`)&&(await Op(et),alert("Boulders imported successfully!"))}catch(et){alert("Failed to import boulders. Please check the file format."),console.error(et)}l.value=""}})}async function Ja(){Kp(),H.boulders=await Lp(),Hr(),Fp(n=>{H.boulders=n,Hr(),H.selectedBoulderId&&Te()}),Wp(),ng(),zi()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ja):Ja();
