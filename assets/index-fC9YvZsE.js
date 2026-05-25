(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Re=function(){return Re=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Re.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}));var ap=typeof document<"u"&&!!document.documentMode,Ji;function cp(){return Ji||(Ji=document.createElement("div").style)}var Jc=["webkit","moz","ms"],ws={};function Qo(n){if(ws[n])return ws[n];var e=cp();if(n in e)return ws[n]=n;for(var t=n[0].toUpperCase()+n.slice(1),r=Jc.length;r--;){var s="".concat(Jc[r]).concat(t);if(s in e)return ws[n]=s}}function Ts(n,e){return parseFloat(e[Qo(n)])||0}function Is(n,e,t){t===void 0&&(t=window.getComputedStyle(n));var r=e==="border"?"Width":"";return{left:Ts("".concat(e,"Left").concat(r),t),right:Ts("".concat(e,"Right").concat(r),t),top:Ts("".concat(e,"Top").concat(r),t),bottom:Ts("".concat(e,"Bottom").concat(r),t)}}function jn(n,e,t){n.style[Qo(e)]=t}function lp(n,e){var t=Qo("transform");jn(n,"transition","".concat(t," ").concat(e.duration,"ms ").concat(e.easing))}function up(n,e,t){var r=e.x,s=e.y,i=e.scale,a=e.isSVG;if(jn(n,"transform","scale(".concat(i,") translate(").concat(r,"px, ").concat(s,"px)")),a&&ap){var l=window.getComputedStyle(n).getPropertyValue("transform");n.setAttribute("transform",l)}}function Zi(n){var e=n.parentNode,t=window.getComputedStyle(n),r=window.getComputedStyle(e),s=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{elem:{style:t,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,margin:Is(n,"margin",t),border:Is(n,"border",t)},parent:{style:r,width:i.width,height:i.height,top:i.top,bottom:i.bottom,left:i.left,right:i.right,padding:Is(e,"padding",r),border:Is(e,"border",r)}}}var qr={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?qr={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(qr={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function eo(n,e,t,r){qr[n].split(" ").forEach(function(s){e.addEventListener(s,t,r)})}function to(n,e,t){qr[n].split(" ").forEach(function(r){e.removeEventListener(r,t)})}function $u(n,e){for(var t=n.length;t--;)if(n[t].pointerId===e.pointerId)return t;return-1}function vo(n,e){var t;if(e.touches){t=0;for(var r=0,s=e.touches;r<s.length;r++){var i=s[r];i.pointerId=t++,vo(n,i)}return}t=$u(n,e),t>-1&&n.splice(t,1),n.push(e)}function hp(n,e){if(e.touches){for(;n.length;)n.pop();return}var t=$u(n,e);t>-1&&n.splice(t,1)}function Zc(n){n=n.slice(0);for(var e=n.pop(),t;t=n.pop();)e={clientX:(t.clientX-e.clientX)/2+e.clientX,clientY:(t.clientY-e.clientY)/2+e.clientY};return e}function no(n){if(n.length<2)return 0;var e=n[0],t=n[1];return Math.sqrt(Math.pow(Math.abs(t.clientX-e.clientX),2)+Math.pow(Math.abs(t.clientY-e.clientY),2))}function dp(n){for(var e=n;e&&e.parentNode;){if(e.parentNode===document)return!0;e=e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}return!1}function fp(n){return(n.getAttribute("class")||"").trim()}function pp(n,e){return n.nodeType===1&&" ".concat(fp(n)," ").indexOf(" ".concat(e," "))>-1}function mp(n,e){for(var t=n;t!=null;t=t.parentNode)if(pp(t,e.excludeClass)||e.exclude.indexOf(t)>-1)return!0;return!1}var gp=/^http:[\w\.\/]+svg$/;function _p(n){return gp.test(n.namespaceURI)&&n.nodeName.toLowerCase()!=="svg"}function yp(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}var ju={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(n){n.preventDefault(),n.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:up,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function zu(n,e){if(!n)throw new Error("Panzoom requires an element as an argument");if(n.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!dp(n))throw new Error("Panzoom should be called on elements that have been attached to the DOM");e=Re(Re({},ju),e);var t=_p(n),r=n.parentNode;r.style.overflow=e.overflow,r.style.userSelect="none",r.style.touchAction=e.touchAction,(e.canvas?r:n).style.cursor=e.cursor,n.style.userSelect="none",n.style.touchAction=e.touchAction,jn(n,"transformOrigin",typeof e.origin=="string"?e.origin:t?"0 0":"50% 50%");function s(){r.style.overflow="",r.style.userSelect="",r.style.touchAction="",r.style.cursor="",n.style.cursor="",n.style.userSelect="",n.style.touchAction="",jn(n,"transformOrigin","")}function i(V){V===void 0&&(V={});for(var B in V)V.hasOwnProperty(B)&&(e[B]=V[B]);(V.hasOwnProperty("cursor")||V.hasOwnProperty("canvas"))&&(r.style.cursor=n.style.cursor="",(e.canvas?r:n).style.cursor=e.cursor),V.hasOwnProperty("overflow")&&(r.style.overflow=V.overflow),V.hasOwnProperty("touchAction")&&(r.style.touchAction=V.touchAction,n.style.touchAction=V.touchAction)}var a=0,l=0,u=1,d=!1;N(e.startScale,{animate:!1,force:!0}),setTimeout(function(){k(e.startX,e.startY,{animate:!1,force:!0})});function p(V,B,J){if(!J.silent){var L=new CustomEvent(V,{detail:B});n.dispatchEvent(L)}}function m(V,B,J){var L={x:a,y:l,scale:u,isSVG:t,originalEvent:J};return requestAnimationFrame(function(){typeof B.animate=="boolean"&&(B.animate?lp(n,B):jn(n,"transition","none")),B.setTransform(n,L,B),p(V,L,B),p("panzoomchange",L,B)}),L}function E(V,B,J,L){var D=Re(Re({},e),L),q={x:a,y:l,opts:D};if(!(L!=null&&L.force)&&(D.disablePan||D.panOnlyWhenZoomed&&u===D.startScale))return q;if(V=parseFloat(V),B=parseFloat(B),D.disableXAxis||(q.x=(D.relative?a:0)+V),D.disableYAxis||(q.y=(D.relative?l:0)+B),D.contain){var U=Zi(n),Z=U.elem.width/u,Ee=U.elem.height/u,Fe=Z*J,me=Ee*J,Ge=(Fe-Z)/2,nt=(me-Ee)/2;if(D.contain==="inside"){var at=(-U.elem.margin.left-U.parent.padding.left+Ge)/J,bt=(U.parent.width-Fe-U.parent.padding.left-U.elem.margin.left-U.parent.border.left-U.parent.border.right+Ge)/J;q.x=Math.max(Math.min(q.x,bt),at);var Vn=(-U.elem.margin.top-U.parent.padding.top+nt)/J,ur=(U.parent.height-me-U.parent.padding.top-U.elem.margin.top-U.parent.border.top-U.parent.border.bottom+nt)/J;q.y=Math.max(Math.min(q.y,ur),Vn)}else if(D.contain==="outside"){var at=(-(Fe-U.parent.width)-U.parent.padding.left-U.parent.border.left-U.parent.border.right+Ge)/J,bt=(Ge-U.parent.padding.left)/J;q.x=Math.max(Math.min(q.x,bt),at);var Vn=(-(me-U.parent.height)-U.parent.padding.top-U.parent.border.top-U.parent.border.bottom+nt)/J,ur=(nt-U.parent.padding.top)/J;q.y=Math.max(Math.min(q.y,ur),Vn)}}return D.roundPixels&&(q.x=Math.round(q.x),q.y=Math.round(q.y)),q}function R(V,B){var J=Re(Re({},e),B),L={scale:u,opts:J};if(!(B!=null&&B.force)&&J.disableZoom)return L;var D=e.minScale,q=e.maxScale;if(J.contain){var U=Zi(n),Z=U.elem.width/u,Ee=U.elem.height/u;if(Z>1&&Ee>1){var Fe=U.parent.width-U.parent.border.left-U.parent.border.right,me=U.parent.height-U.parent.border.top-U.parent.border.bottom,Ge=Fe/Z,nt=me/Ee;e.contain==="inside"?q=Math.min(q,Ge,nt):e.contain==="outside"&&(D=Math.max(D,Ge,nt))}}return L.scale=Math.min(Math.max(V,D),q),L}function k(V,B,J,L){var D=E(V,B,u,J);return a!==D.x||l!==D.y?(a=D.x,l=D.y,m("panzoompan",D.opts,L)):{x:a,y:l,scale:u,isSVG:t,originalEvent:L}}function N(V,B,J){var L=R(V,B),D=L.opts;if(!(!(B!=null&&B.force)&&D.disableZoom)){V=L.scale;var q=a,U=l;if(D.focal){var Z=D.focal;q=(Z.x/V-Z.x/u+a*V)/V,U=(Z.y/V-Z.y/u+l*V)/V}var Ee=E(q,U,V,{relative:!1,force:!0});return a=Ee.x,l=Ee.y,u=V,m("panzoomzoom",D,J)}}function C(V,B){var J=Re(Re(Re({},e),{animate:!0}),B);return N(u*Math.exp((V?1:-1)*J.step),J)}function H(V){return C(!0,V)}function W(V){return C(!1,V)}function z(V,B,J,L){var D=Zi(n),q={width:D.parent.width-D.parent.padding.left-D.parent.padding.right-D.parent.border.left-D.parent.border.right,height:D.parent.height-D.parent.padding.top-D.parent.padding.bottom-D.parent.border.top-D.parent.border.bottom},U=B.clientX-D.parent.left-D.parent.padding.left-D.parent.border.left-D.elem.margin.left,Z=B.clientY-D.parent.top-D.parent.padding.top-D.parent.border.top-D.elem.margin.top;t||(U-=D.elem.width/u/2,Z-=D.elem.height/u/2);var Ee={x:U/q.width*(q.width*V),y:Z/q.height*(q.height*V)};return N(V,Re(Re({},J),{animate:!1,focal:Ee}),L)}function F(V,B){V.preventDefault();var J=Re(Re(Re({},e),B),{animate:!1}),L=V.deltaY===0&&V.deltaX?V.deltaX:V.deltaY,D=L<0?1:-1,q=R(u*Math.exp(D*J.step/3),J).scale;return z(q,V,J,V)}function ee(V){var B=Re(Re(Re({},e),{animate:!0,force:!0}),V);u=R(B.startScale,B).scale;var J=E(B.startX,B.startY,u,B);return a=J.x,l=J.y,m("panzoomreset",B)}var Y,w,g,y,T,v,I=[];function _(V){if(!mp(V.target,e)){vo(I,V),d=!0,e.handleStartEvent(V),Y=a,w=l,p("panzoomstart",{x:a,y:l,scale:u,isSVG:t,originalEvent:V},e);var B=Zc(I);g=B.clientX,y=B.clientY,T=u,v=no(I)}}function ae(V){if(!(!d||Y===void 0||w===void 0||g===void 0||y===void 0)){vo(I,V);var B=Zc(I),J=I.length>1,L=u;if(J){v===0&&(v=no(I));var D=no(I)-v;L=R(D*e.step/80+T).scale,z(L,B,{animate:!1},V)}(!J||e.pinchAndPan)&&k(Y+(B.clientX-g)/L,w+(B.clientY-y)/L,{animate:!1},V)}}function je(V){I.length===1&&p("panzoomend",{x:a,y:l,scale:u,isSVG:t,originalEvent:V},e),hp(I,V),d&&(d=!1,Y=w=g=y=void 0)}var et=!1;function tt(){et||(et=!0,eo("down",e.canvas?r:n,_),eo("move",document,ae,{passive:!0}),eo("up",document,je,{passive:!0}))}function We(){et=!1,to("down",e.canvas?r:n,_),to("move",document,ae),to("up",document,je)}return e.noBind||tt(),{bind:tt,destroy:We,eventNames:qr,getPan:function(){return{x:a,y:l}},getScale:function(){return u},getOptions:function(){return yp(e)},handleDown:_,handleMove:ae,handleUp:je,pan:k,reset:ee,resetStyle:s,setOptions:i,setStyle:function(V,B){return jn(n,V,B)},zoom:N,zoomIn:H,zoomOut:W,zoomToPoint:z,zoomWithWheel:F}}zu.defaultOptions=ju;const vp=()=>{};var el={};/**
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
 */const Hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ep=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(E=64)),r.push(t[p],t[m],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ep(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new wp;const E=i<<2|l>>4;if(r.push(E),d!==64){const R=l<<4&240|d>>2;if(r.push(R),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tp=function(n){const e=Hu(n);return Wu.encodeByteArray(e,!0)},js=function(n){return Tp(n).replace(/\./g,"")},Gu=function(n){try{return Wu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>Ip().__FIREBASE_DEFAULTS__,Ap=()=>{if(typeof process>"u"||typeof el>"u")return;const n=el.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gu(n[1]);return e&&JSON.parse(e)},ui=()=>{try{return vp()||bp()||Ap()||Rp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ku=n=>{var e,t;return(t=(e=ui())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qu=n=>{const e=Ku(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xu=()=>{var n;return(n=ui())==null?void 0:n.config},Yu=n=>{var e;return(e=ui())==null?void 0:e[`_${n}`]};/**
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
 */class Sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function on(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ju(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[js(JSON.stringify(t)),js(JSON.stringify(a)),""].join(".")}const Dr={};function Pp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dr))Dr[e]?n.emulator.push(e):n.prod.push(e);return n}function Cp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let tl=!1;function Yo(n,e){if(typeof window>"u"||typeof document>"u"||!on(window.location.host)||Dr[n]===e||Dr[n]||tl)return;Dr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Pp().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{tl=!0,a()},E}function p(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=Cp(r),R=t("text"),k=document.getElementById(R)||document.createElement("span"),N=t("learnmore"),C=document.getElementById(N)||document.createElement("a"),H=t("preprendIcon"),W=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const z=E.element;l(z),p(C,N);const F=d();u(W,H),z.append(W,k,C,F),document.body.appendChild(z)}i?(k.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Np(){var e;const n=(e=ui())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Op(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lp(){return!Np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Up(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fp="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fp,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Bp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new It(s,l,r)}}function Bp(n,e){return n.replace(qp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qp=/\{\$([^}]+)}/g;function $p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function In(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(nl(i)&&nl(a)){if(!In(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nl(n){return n!==null&&typeof n=="object"}/**
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
 */function Zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jp(n,e){const t=new zp(n,e);return t.subscribe.bind(t)}class zp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ro),s.error===void 0&&(s.error=ro),s.complete===void 0&&(s.complete=ro);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ro(){}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class Jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class Wp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kp(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(n){return n===mn?void 0:n}function Kp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Xp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Yp=ne.INFO,Jp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Zp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Jp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=Yp,this._logHandler=Zp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const em=(n,e)=>e.some(t=>n instanceof t);let rl,sl;function tm(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nm(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zu=new WeakMap,Eo=new WeakMap,eh=new WeakMap,so=new WeakMap,Zo=new WeakMap;function rm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Zu.set(t,n)}).catch(()=>{}),Zo.set(e,n),e}function sm(n){if(Eo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Eo.set(n,e)}let wo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Eo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||eh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function im(n){wo=n(wo)}function om(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(io(this),e,...t);return eh.set(r,e.sort?e.sort():[e]),Gt(r)}:nm().includes(n)?function(...e){return n.apply(io(this),e),Gt(Zu.get(this))}:function(...e){return Gt(n.apply(io(this),e))}}function am(n){return typeof n=="function"?om(n):(n instanceof IDBTransaction&&sm(n),em(n,tm())?new Proxy(n,wo):n)}function Gt(n){if(n instanceof IDBRequest)return rm(n);if(so.has(n))return so.get(n);const e=am(n);return e!==n&&(so.set(n,e),Zo.set(e,n)),e}const io=n=>Zo.get(n);function cm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Gt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Gt(a.result),u.oldVersion,u.newVersion,Gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const lm=["get","getKey","getAll","getAllKeys","count"],um=["put","add","delete","clear"],oo=new Map;function il(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=um.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return oo.set(e,i),i}im(n=>({...n,get:(e,t,r)=>il(e,t)||n.get(e,t,r),has:(e,t)=>!!il(e,t)||n.has(e,t)}));/**
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
 */class hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const To="@firebase/app",ol="0.14.6";/**
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
 */const Nt=new Jo("@firebase/app"),fm="@firebase/app-compat",pm="@firebase/analytics-compat",mm="@firebase/analytics",gm="@firebase/app-check-compat",_m="@firebase/app-check",ym="@firebase/auth",vm="@firebase/auth-compat",Em="@firebase/database",wm="@firebase/data-connect",Tm="@firebase/database-compat",Im="@firebase/functions",bm="@firebase/functions-compat",Am="@firebase/installations",Rm="@firebase/installations-compat",Sm="@firebase/messaging",Pm="@firebase/messaging-compat",Cm="@firebase/performance",km="@firebase/performance-compat",Nm="@firebase/remote-config",Dm="@firebase/remote-config-compat",xm="@firebase/storage",Vm="@firebase/storage-compat",Om="@firebase/firestore",Lm="@firebase/ai",Mm="@firebase/firestore-compat",Um="firebase",Fm="12.6.0";/**
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
 */const Io="[DEFAULT]",Bm={[To]:"fire-core",[fm]:"fire-core-compat",[mm]:"fire-analytics",[pm]:"fire-analytics-compat",[_m]:"fire-app-check",[gm]:"fire-app-check-compat",[ym]:"fire-auth",[vm]:"fire-auth-compat",[Em]:"fire-rtdb",[wm]:"fire-data-connect",[Tm]:"fire-rtdb-compat",[Im]:"fire-fn",[bm]:"fire-fn-compat",[Am]:"fire-iid",[Rm]:"fire-iid-compat",[Sm]:"fire-fcm",[Pm]:"fire-fcm-compat",[Cm]:"fire-perf",[km]:"fire-perf-compat",[Nm]:"fire-rc",[Dm]:"fire-rc-compat",[xm]:"fire-gcs",[Vm]:"fire-gcs-compat",[Om]:"fire-fst",[Mm]:"fire-fst-compat",[Lm]:"fire-vertex","fire-js":"fire-js",[Um]:"fire-js-all"};/**
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
 */const zs=new Map,qm=new Map,bo=new Map;function al(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(bo.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,n);for(const t of zs.values())al(t,n);for(const t of qm.values())al(t,n);return!0}function hi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $m={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Jr("app","Firebase",$m);/**
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
 */class jm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cn=Fm;function th(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Io,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=Xu()),!t)throw Kt.create("no-options");const i=zs.get(s);if(i){if(In(t,i.options)&&In(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const a=new Qp(s);for(const u of bo.values())a.addComponent(u);const l=new jm(t,r,a);return zs.set(s,l),l}function ea(n=Io){const e=zs.get(n);if(!e&&n===Io&&Xu())return th();if(!e)throw Kt.create("no-app",{appName:n});return e}function ft(n,e,t){let r=Bm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}bn(new Jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zm="firebase-heartbeat-database",Hm=1,$r="firebase-heartbeat-store";let ao=null;function nh(){return ao||(ao=cm(zm,Hm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($r)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),ao}async function Wm(n){try{const t=(await nh()).transaction($r),r=await t.objectStore($r).get(rh(n));return await t.done,r}catch(e){if(e instanceof It)Nt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(t.message)}}}async function cl(n,e){try{const r=(await nh()).transaction($r,"readwrite");await r.objectStore($r).put(e,rh(n)),await r.done}catch(t){if(t instanceof It)Nt.warn(t.message);else{const r=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(r.message)}}}function rh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gm=1024,Km=30;class Qm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ym(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ll();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Km){const a=Jm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ll(),{heartbeatsToSend:r,unsentEntries:s}=Xm(this._heartbeatsCache.heartbeats),i=js(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Nt.warn(t),""}}}function ll(){return new Date().toISOString().substring(0,10)}function Xm(n,e=Gm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ul(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ul(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ul(n){return js(JSON.stringify({version:2,heartbeats:n})).length}function Jm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zm(n){bn(new Jt("platform-logger",e=>new hm(e),"PRIVATE")),bn(new Jt("heartbeat",e=>new Qm(e),"PRIVATE")),ft(To,ol,n),ft(To,ol,"esm2020"),ft("fire-js","")}Zm("");var eg="firebase",tg="12.7.0";/**
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
 */ft(eg,tg,"app");var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,sh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.F=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(T,v,I){for(var _=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)_[ae-2]=arguments[ae];return g.prototype[v].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,y){y||(y=0);const T=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)T[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;v<16;++v)T[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],v=w.g[2];let I=w.g[3],_;_=g+(I^y&(v^I))+T[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+T[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+T[2]+606105819&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+T[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+T[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+T[6]+2821735955&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+T[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+T[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+T[10]+4294925233&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+T[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+T[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+T[14]+2792965006&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+T[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^I&(y^v))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+T[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+T[11]+643717713&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+T[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+T[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+T[15]+3634488961&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+T[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+T[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+T[3]+4107603335&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+T[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+T[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+T[7]+1735328473&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+T[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^I)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+T[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+T[11]+1839030562&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+T[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+T[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+T[7]+4139469664&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+T[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+T[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+T[3]+3572445317&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+T[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+T[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+T[15]+530742520&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+T[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~I))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+T[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+T[14]+2878612391&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+T[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+T[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+T[10]+4293915773&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+T[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+T[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+T[6]+2734768916&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+T[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+T[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+T[2]+718787259&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.v=function(w,g){g===void 0&&(g=w.length);const y=g-this.blockSize,T=this.C;let v=this.h,I=0;for(;I<g;){if(v==0)for(;I<=y;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<g;)if(T[v++]=w.charCodeAt(I++),v==this.blockSize){s(this,T),v=0;break}}else for(;I<g;)if(T[v++]=w[I++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)w[g++]=this.g[y]>>>T&255;return w};function i(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;const y=[];let T=!0;for(let v=w.length-1;v>=0;v--){const I=w[v]|0;T&&I==g||(y[v]=I,T=!1)}this.g=y}var l={};function u(w){return-128<=w&&w<128?i(w,function(g){return new a([g|0],g<0?-1:0)}):new a([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return C(d(-w));const g=[];let y=1;for(let T=0;w>=y;T++)g[T]=w/y|0,y*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return C(p(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let T=m;for(let I=0;I<w.length;I+=8){var v=Math.min(8,w.length-I);const _=parseInt(w.substring(I,I+v),g);v<8?(v=d(Math.pow(g,v)),T=T.j(v).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var m=u(0),E=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();let w=0,g=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);w+=(T>=0?T:4294967296+T)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(N(this))return"-"+C(this).toString(w);const g=d(Math.pow(w,6));var y=this;let T="";for(;;){const v=F(y,g).g;y=H(y,v.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=v,k(y))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=H(this,w),N(w)?-1:k(w)?0:1};function C(w){const g=w.g.length,y=[];for(let T=0;T<g;T++)y[T]=~w.g[T];return new a(y,~w.h).add(E)}n.abs=function(){return N(this)?C(this):this},n.add=function(w){const g=Math.max(this.g.length,w.g.length),y=[];let T=0;for(let v=0;v<=g;v++){let I=T+(this.i(v)&65535)+(w.i(v)&65535),_=(I>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);T=_>>>16,I&=65535,_&=65535,y[v]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(w,g){return w.add(C(g))}n.j=function(w){if(k(this)||k(w))return m;if(N(this))return N(w)?C(this).j(C(w)):C(C(this).j(w));if(N(w))return C(this.j(C(w)));if(this.l(R)<0&&w.l(R)<0)return d(this.m()*w.m());const g=this.g.length+w.g.length,y=[];for(var T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let v=0;v<w.g.length;v++){const I=this.i(T)>>>16,_=this.i(T)&65535,ae=w.i(v)>>>16,je=w.i(v)&65535;y[2*T+2*v]+=_*je,W(y,2*T+2*v),y[2*T+2*v+1]+=I*je,W(y,2*T+2*v+1),y[2*T+2*v+1]+=_*ae,W(y,2*T+2*v+1),y[2*T+2*v+2]+=I*ae,W(y,2*T+2*v+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new a(y,0)};function W(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function z(w,g){this.g=w,this.h=g}function F(w,g){if(k(g))throw Error("division by zero");if(k(w))return new z(m,m);if(N(w))return g=F(C(w),g),new z(C(g.g),C(g.h));if(N(g))return g=F(w,C(g)),new z(C(g.g),g.h);if(w.g.length>30){if(N(w)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,T=g;T.l(w)<=0;)y=ee(y),T=ee(T);var v=Y(y,1),I=Y(T,1);for(T=Y(T,2),y=Y(y,2);!k(T);){var _=I.add(T);_.l(w)<=0&&(v=v.add(y),I=_),T=Y(T,1),y=Y(y,1)}return g=H(w,v.j(g)),new z(v,g)}for(v=m;w.l(g)>=0;){for(y=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(y),_=I.j(g);N(_)||_.l(w)>0;)y-=T,I=d(y),_=I.j(g);k(I)&&(I=E),v=v.add(I),w=H(w,_)}return new z(v,w)}n.B=function(w){return F(this,w).h},n.and=function(w){const g=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},n.or=function(w){const g=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},n.xor=function(w){const g=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function ee(w){const g=w.g.length+1,y=[];for(let T=0;T<g;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function Y(w,g){const y=g>>5;g%=32;const T=w.g.length-y,v=[];for(let I=0;I<T;I++)v[I]=g>0?w.i(I+y)>>>g|w.i(I+y+1)<<32-g:w.i(I+y);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,sh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Qt=a}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ih,Pr,oh,xs,Ao,ah,ch,lh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in h))break e;h=h[b]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,b,A){for(var x=Array(arguments.length-2),te=2;te<arguments.length;te++)x[te-2]=arguments[te];return c.prototype[b].apply(f,x)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let f=1;f<arguments.length;f++){const b=arguments[f];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const A=b.length||0;o.length=h+A;for(let x=0;x<A;x++)o[h+x]=b[x]}else o.push(b)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function H(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,h){const f=z.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var z=new N(()=>new F,o=>o.reset());class F{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,Y=!1,w=new W,g=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(y)}};function y(){for(var o;o=H();){try{o.h.call(o.g)}catch(h){C(h)}var c=z;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}Y=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function ae(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(ae,v),ae.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),et=0;function tt(o,c,h,f,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=b,this.key=++et,this.da=this.fa=!1}function We(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function V(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function B(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function J(o){const c={};for(const h in o)c[h]=o[h];return c}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(o,c){let h,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(h in f)o[h]=f[h];for(let A=0;A<L.length;A++)h=L[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function q(o){this.src=o,this.g={},this.h=0}q.prototype.add=function(o,c,h,f,b){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const x=Z(o,c,f,b);return x>-1?(c=o[x],h||(c.fa=!1)):(c=new tt(c,this.src,A,!!f,b),c.fa=h,o.push(c)),c};function U(o,c){const h=c.type;if(h in o.g){var f=o.g[h],b=Array.prototype.indexOf.call(f,c,void 0),A;(A=b>=0)&&Array.prototype.splice.call(f,b,1),A&&(We(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Z(o,c,h,f){for(let b=0;b<o.length;++b){const A=o[b];if(!A.da&&A.listener==c&&A.capture==!!h&&A.ha==f)return b}return-1}var Ee="closure_lm_"+(Math.random()*1e6|0),Fe={};function me(o,c,h,f,b){if(Array.isArray(c)){for(let A=0;A<c.length;A++)me(o,c[A],h,f,b);return null}return h=rc(h),o&&o[je]?o.J(c,h,l(f)?!!f.capture:!1,b):Ge(o,c,h,!1,f,b)}function Ge(o,c,h,f,b,A){if(!c)throw Error("Invalid event type");const x=l(b)?!!b.capture:!!b;let te=xi(o);if(te||(o[Ee]=te=new q(o)),h=te.add(c,h,f,x,A),h.proxy)return h;if(f=nt(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)I||(b=x),b===void 0&&(b=!1),o.addEventListener(c.toString(),f,b);else if(o.attachEvent)o.attachEvent(Vn(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function nt(){function o(h){return c.call(o.src,o.listener,h)}const c=ur;return o}function at(o,c,h,f,b){if(Array.isArray(c))for(var A=0;A<c.length;A++)at(o,c[A],h,f,b);else f=l(f)?!!f.capture:!!f,h=rc(h),o&&o[je]?(o=o.i,A=String(c).toString(),A in o.g&&(c=o.g[A],h=Z(c,h,f,b),h>-1&&(We(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[A],o.h--)))):o&&(o=xi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Z(c,h,f,b)),(h=o>-1?c[o]:null)&&bt(h))}function bt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[je])U(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Vn(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=xi(c))?(U(h,o),h.h==0&&(h.src=null,c[Ee]=null)):We(o)}}}function Vn(o){return o in Fe?Fe[o]:Fe[o]="on"+o}function ur(o,c){if(o.da)o=!0;else{c=new ae(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&bt(o),o=h.call(f,c)}return o}function xi(o){return o=o[Ee],o instanceof q?o:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function rc(o){return typeof o=="function"?o:(o[Vi]||(o[Vi]=function(c){return o.handleEvent(c)}),o[Vi])}function Ve(){T.call(this),this.i=new q(this),this.M=this,this.G=null}m(Ve,T),Ve.prototype[je]=!0,Ve.prototype.removeEventListener=function(o,c,h,f){at(this,o,c,h,f)};function Be(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var b=c;c=new v(f,o),D(c,b)}b=!0;let A,x;if(h)for(x=h.length-1;x>=0;x--)A=c.g=h[x],b=ls(A,f,!0,c)&&b;if(A=c.g=o,b=ls(A,f,!0,c)&&b,b=ls(A,f,!1,c)&&b,h)for(x=0;x<h.length;x++)A=c.g=h[x],b=ls(A,f,!1,c)&&b}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)We(h[f]);delete o.g[c],o.h--}}this.G=null},Ve.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ve.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function ls(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let A=0;A<c.length;++A){const x=c[A];if(x&&!x.da&&x.capture==h){const te=x.listener,Ae=x.ha||x.src;x.fa&&U(o.i,x),b=te.call(Ae,f)!==!1&&b}}return b&&!f.defaultPrevented}function Of(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function sc(o){o.g=Of(()=>{o.g=null,o.i&&(o.i=!1,sc(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Lf extends T{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:sc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(o){T.call(this),this.h=o,this.g={}}m(hr,T);var ic=[];function oc(o){V(o.g,function(c,h){this.g.hasOwnProperty(h)&&bt(c)},o),o.g={}}hr.prototype.N=function(){hr.Z.N.call(this),oc(this)},hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oi=a.JSON.stringify,Mf=a.JSON.parse,Uf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ac(){}function cc(){}var dr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Li(){v.call(this,"d")}m(Li,v);function Mi(){v.call(this,"c")}m(Mi,v);var un={},lc=null;function us(){return lc=lc||new Ve}un.Ia="serverreachability";function uc(o){v.call(this,un.Ia,o)}m(uc,v);function fr(o){const c=us();Be(c,new uc(c))}un.STAT_EVENT="statevent";function hc(o,c){v.call(this,un.STAT_EVENT,o),this.stat=c}m(hc,v);function qe(o){const c=us();Be(c,new hc(c,o))}un.Ja="timingevent";function dc(o,c){v.call(this,un.Ja,o),this.size=c}m(dc,v);function pr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function mr(){this.g=!0}mr.prototype.ua=function(){this.g=!1};function Ff(o,c,h,f,b,A){o.info(function(){if(o.g)if(A){var x="",te=A.split("&");for(let ce=0;ce<te.length;ce++){var Ae=te[ce].split("=");if(Ae.length>1){const Pe=Ae[0];Ae=Ae[1];const lt=Pe.split("_");x=lt.length>=2&&lt[1]=="type"?x+(Pe+"="+Ae+"&"):x+(Pe+"=redacted&")}}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+h+`
`+x})}function Bf(o,c,h,f,b,A,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+h+`
`+A+" "+x})}function On(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+$f(o,h)+(f?" "+f:"")})}function qf(o,c){o.info(function(){return"TIMEOUT: "+c})}mr.prototype.info=function(){};function $f(o,c){if(!o.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var h=A[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let x=1;x<f.length;x++)f[x]=""}}}}return Oi(A)}catch{return c}}var hs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},pc;function Ui(){}m(Ui,ac),Ui.prototype.g=function(){return new XMLHttpRequest},pc=new Ui;function gr(o){return encodeURIComponent(String(o))}function jf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Ot(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mc}function mc(){this.i=null,this.g="",this.h=!1}var gc={},Fi={};function Bi(o,c,h){o.M=1,o.A=fs(ct(c)),o.u=h,o.R=!0,_c(o,null)}function _c(o,c){o.F=Date.now(),ds(o),o.B=ct(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),kc(h.i,"t",f),o.C=0,h=o.j.L,o.h=new mc,o.g=Kc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Lf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(ic[0]=b.toString()),b=ic);for(let A=0;A<b.length;A++){const x=me(h,b[A],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=o.J?J(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),fr(),Ff(o.i,o.v,o.B,o.l,o.S,o.u)}Ot.prototype.ba=function(o){o=o.target;const c=this.O;c&&Ut(o)==3?c.j():this.Y(o)},Ot.prototype.Y=function(o){try{if(o==this.g)e:{const te=Ut(this.g),Ae=this.g.ya(),ce=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Mc(this.g)))){this.K||te!=4||Ae==7||(Ae==8||ce<=0?fr(3):fr(2)),qi(this);var c=this.g.ca();this.X=c;var h=zf(this);if(this.o=c==200,Bf(this.i,this.v,this.B,this.l,this.S,te,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var A=f;break t}}A=null}if(o=A)On(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$i(this,o);else{this.o=!1,this.m=3,qe(12),hn(this),_r(this);break e}}if(this.R){o=!0;let Pe;for(;!this.K&&this.C<h.length;)if(Pe=Hf(this,h),Pe==Fi){te==4&&(this.m=4,qe(14),o=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==gc){this.m=4,qe(15),On(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else On(this.i,this.l,Pe,null),$i(this,Pe);if(yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||h.length!=0||this.h.h||(this.m=1,qe(16),o=!1),this.o=this.o&&o,!o)On(this.i,this.l,h,"[Invalid Chunked Response]"),hn(this),_r(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Xi(x),x.P=!0,qe(11))}}else On(this.i,this.l,h,null),$i(this,h);te==4&&hn(this),this.o&&!this.K&&(te==4?zc(this.j,this):(this.o=!1,ds(this)))}else ip(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),hn(this),_r(this)}}}catch{}finally{}};function zf(o){if(!yc(o))return o.g.la();const c=Mc(o.g);if(c==="")return"";let h="";const f=c.length,b=Ut(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hn(o),_r(o),"";o.h.i=new a.TextDecoder}for(let A=0;A<f;A++)o.h.h=!0,h+=o.h.i.decode(c[A],{stream:!(b&&A==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function yc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Hf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Fi:(h=Number(c.substring(h,f)),isNaN(h)?gc:(f+=1,f+h>c.length?Fi:(c=c.slice(f,f+h),o.C=f+h,c)))}Ot.prototype.cancel=function(){this.K=!0,hn(this)};function ds(o){o.T=Date.now()+o.H,vc(o,o.H)}function vc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=pr(d(o.aa,o),c)}function qi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ot.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qf(this.i,this.B),this.M!=2&&(fr(),qe(17)),hn(this),this.m=2,_r(this)):vc(this,this.T-o)};function _r(o){o.j.I==0||o.K||zc(o.j,o)}function hn(o){qi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,oc(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function $i(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||ji(h.h,o))){if(!o.L&&ji(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ys(h),gs(h);else break e;Qi(h),qe(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=pr(d(h.Va,h),6e3));Tc(h.h)<=1&&h.ta&&(h.ta=void 0)}else fn(h,11)}else if((o.L||h.g==o)&&ys(h),!_(c))for(b=h.Ba.g.parse(c),c=0;c<b.length;c++){let ce=b[c];const Pe=ce[0];if(!(Pe<=h.K))if(h.K=Pe,ce=ce[1],h.I==2)if(ce[0]=="c"){h.M=ce[1],h.ba=ce[2];const lt=ce[3];lt!=null&&(h.ka=lt,h.j.info("VER="+h.ka));const pn=ce[4];pn!=null&&(h.za=pn,h.j.info("SVER="+h.za));const Ft=ce[5];Ft!=null&&typeof Ft=="number"&&Ft>0&&(f=1.5*Ft,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Bt=o.g;if(Bt){const Es=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Es){var A=f.h;A.g||Es.indexOf("spdy")==-1&&Es.indexOf("quic")==-1&&Es.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(zi(A,A.h),A.h=null))}if(f.G){const Yi=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(f.wa=Yi,he(f.J,f.G,Yi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var x=o;if(f.na=Gc(f,f.L?f.ba:null,f.W),x.L){Ic(f.h,x);var te=x,Ae=f.O;Ae&&(te.H=Ae),te.D&&(qi(te),ds(te)),f.g=x}else $c(f);h.i.length>0&&_s(h)}else ce[0]!="stop"&&ce[0]!="close"||fn(h,7);else h.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?fn(h,7):Ki(h):ce[0]!="noop"&&h.l&&h.l.qa(ce),h.A=0)}}fr(4)}catch{}}var Wf=class{constructor(o,c){this.g=o,this.map=c}};function Ec(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Tc(o){return o.h?1:o.g?o.g.size:0}function ji(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function zi(o,c){o.g?o.g.add(c):o.h=c}function Ic(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ec.prototype.cancel=function(){if(this.i=bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let b,A=null;f>=0?(b=o[h].substring(0,f),A=o[h].substring(f+1)):b=o[h],c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Lt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Lt?(this.l=o.l,yr(this,o.j),this.o=o.o,this.g=o.g,vr(this,o.u),this.h=o.h,Hi(this,Nc(o.i)),this.m=o.m):o&&(c=String(o).match(Ac))?(this.l=!1,yr(this,c[1]||"",!0),this.o=Er(c[2]||""),this.g=Er(c[3]||"",!0),vr(this,c[4]),this.h=Er(c[5]||"",!0),Hi(this,c[6]||"",!0),this.m=Er(c[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}Lt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(wr(c,Rc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(wr(c,Rc,!0),"@"),o.push(gr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(wr(h,h.charAt(0)=="/"?Xf:Qf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",wr(h,Jf)),o.join("")},Lt.prototype.resolve=function(o){const c=ct(this);let h=!!o.j;h?yr(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)vr(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=c.h.lastIndexOf("/");b!=-1&&(f=c.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const A=[];for(let x=0;x<b.length;){const te=b[x++];te=="."?f&&x==b.length&&A.push(""):te==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&x==b.length&&A.push("")):(A.push(te),f=!0)}f=A.join("/")}else f=b}return h?c.h=f:h=o.i.toString()!=="",h?Hi(c,Nc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function ct(o){return new Lt(o)}function yr(o,c,h){o.j=h?Er(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function vr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Hi(o,c,h){c instanceof Tr?(o.i=c,Zf(o.i,o.l)):(h||(c=wr(c,Yf)),o.i=new Tr(c,o.l))}function he(o,c,h){o.i.set(c,h)}function fs(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Er(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function wr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Kf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rc=/[#\/\?@]/g,Qf=/[#\?:]/g,Xf=/[#\?]/g,Yf=/[#\?@]/g,Jf=/#/g;function Tr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&Gf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Tr.prototype,n.add=function(o,c){dn(this),this.i=null,o=Ln(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Sc(o,c){dn(o),c=Ln(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Pc(o,c){return dn(o),c=Ln(o,c),o.g.has(c)}n.forEach=function(o,c){dn(this),this.g.forEach(function(h,f){h.forEach(function(b){o.call(c,b,f,this)},this)},this)};function Cc(o,c){dn(o);let h=[];if(typeof c=="string")Pc(o,c)&&(h=h.concat(o.g.get(Ln(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return dn(this),this.i=null,o=Ln(this,o),Pc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Cc(this,o),o.length>0?String(o[0]):c):c};function kc(o,c,h){Sc(o,c),h.length>0&&(o.i=null,o.g.set(Ln(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const b=gr(h);h=Cc(this,h);for(let A=0;A<h.length;A++){let x=b;h[A]!==""&&(x+="="+gr(h[A])),o.push(x)}}return this.i=o.join("&")};function Nc(o){const c=new Tr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Ln(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Zf(o,c){c&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(h,f){const b=f.toLowerCase();f!=b&&(Sc(this,f),kc(this,b,h))},o)),o.j=c}function ep(o,c){const h=new mr;if(a.Image){const f=new Image;f.onload=p(Mt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(Mt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(Mt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(Mt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function tp(o,c){const h=new mr,f=new AbortController,b=setTimeout(()=>{f.abort(),Mt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(b),A.ok?Mt(h,"TestPingServer: ok",!0,c):Mt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Mt(h,"TestPingServer: error",!1,c)})}function Mt(o,c,h,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(h)}catch{}}function np(){this.g=new Uf}function Wi(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Wi,ac),Wi.prototype.g=function(){return new ps(this.i,this.h)};function ps(o,c){Ve.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ps,Ve),n=ps.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,br(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Dc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Ir(this):br(this),this.readyState==3&&Dc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ir(this))},n.Na=function(o){this.g&&(this.response=o,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(o){o.readyState=4,o.l=null,o.j=null,o.B=null,br(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function br(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xc(o){let c="";return V(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Gi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=xc(h),typeof o=="string"?h!=null&&gr(h):he(o,c,h))}function ge(o){Ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ge,Ve);var rp=/^https?$/i,sp=["POST","PUT"];n=ge.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():pc.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(A){Vc(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)h.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(sp,c,void 0)>=0)||f||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of h)this.g.setRequestHeader(A,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){Vc(this,A)}};function Vc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Oc(o),ms(o)}function Oc(o){o.A||(o.A=!0,Be(o,"complete"),Be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Be(this,"complete"),Be(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Lc(this):this.Xa())},n.Xa=function(){Lc(this)};function Lc(o){if(o.h&&typeof i<"u"){if(o.v&&Ut(o)==4)setTimeout(o.Ca.bind(o),0);else if(Be(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=A===0){let x=String(o.D).match(Ac)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!rp.test(x?x.toLowerCase():"")}h=f}if(h)Be(o,"complete"),Be(o,"success");else{o.o=6;try{var b=Ut(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",Oc(o)}}finally{ms(o)}}}}function ms(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Be(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Mf(c)}};function Mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ip(o){const c={};o=(o.g&&Ut(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=jf(o[f]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=c[b]||[];c[b]=A,A.push(h)}B(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Uc(o){this.za=0,this.i=[],this.j=new mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ec(o&&o.concurrentRequestLimit),this.Ba=new np,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){qe(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Gc(this,null,this.W),_s(this)};function Ki(o){if(Fc(o),o.I==3){var c=o.V++,h=ct(o.J);if(he(h,"SID",o.M),he(h,"RID",c),he(h,"TYPE","terminate"),Rr(o,h),c=new Ot(o,o.j,c),c.M=2,c.A=fs(ct(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Kc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ds(c)}Wc(o)}function gs(o){o.g&&(Xi(o),o.g.cancel(),o.g=null)}function Fc(o){gs(o),o.v&&(a.clearTimeout(o.v),o.v=null),ys(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _s(o){if(!wc(o.h)&&!o.m){o.m=!0;var c=o.Ea;ee||g(),Y||(ee(),Y=!0),w.add(c,o),o.D=0}}function op(o,c){return Tc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=pr(d(o.Ea,o,c),Hc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Ot(this,this.j,o);let A=this.o;if(this.U&&(A?(A=J(A),D(A,this.U)):A=this.U),this.u!==null||this.R||(b.J=A,A=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=qc(this,b,c),h=ct(this.J),he(h,"RID",o),he(h,"CVER",22),this.G&&he(h,"X-HTTP-Session-Id",this.G),Rr(this,h),A&&(this.R?c="headers="+gr(xc(A))+"&"+c:this.u&&Gi(h,this.u,A)),zi(this.h,b),this.Ra&&he(h,"TYPE","init"),this.S?(he(h,"$req",c),he(h,"SID","null"),b.U=!0,Bi(b,h,null)):Bi(b,h,c),this.I=2}}else this.I==3&&(o?Bc(this,o):this.i.length==0||wc(this.h)||Bc(this))};function Bc(o,c){var h;c?h=c.l:h=o.V++;const f=ct(o.J);he(f,"SID",o.M),he(f,"RID",h),he(f,"AID",o.K),Rr(o,f),o.u&&o.o&&Gi(f,o.u,o.o),h=new Ot(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=qc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),zi(o.h,h),Bi(h,f,c)}function Rr(o,c){o.H&&V(o.H,function(h,f){he(c,f,h)}),o.l&&V({},function(h,f){he(c,f,h)})}function qc(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let te=-1;for(;;){const Ae=["count="+h];te==-1?h>0?(te=b[0].g,Ae.push("ofs="+te)):te=0:Ae.push("ofs="+te);let ce=!0;for(let Pe=0;Pe<h;Pe++){var A=b[Pe].g;const lt=b[Pe].map;if(A-=te,A<0)te=Math.max(0,b[Pe].g-100),ce=!1;else try{A="req"+A+"_"||"";try{var x=lt instanceof Map?lt:Object.entries(lt);for(const[pn,Ft]of x){let Bt=Ft;l(Ft)&&(Bt=Oi(Ft)),Ae.push(A+pn+"="+encodeURIComponent(Bt))}}catch(pn){throw Ae.push(A+"type="+encodeURIComponent("_badmap")),pn}}catch{f&&f(lt)}}if(ce){x=Ae.join("&");break e}}x=void 0}return o=o.i.splice(0,h),c.G=o,x}function $c(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;ee||g(),Y||(ee(),Y=!0),w.add(c,o),o.A=0}}function Qi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=pr(d(o.Da,o),Hc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,jc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=pr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),gs(this),jc(this))};function Xi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function jc(o){o.g=new Ot(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=ct(o.na);he(c,"RID","rpc"),he(c,"SID",o.M),he(c,"AID",o.K),he(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(c,"TO",o.ia),he(c,"TYPE","xmlhttp"),Rr(o,c),o.u&&o.o&&Gi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=fs(ct(c)),h.u=null,h.R=!0,_c(h,o)}n.Va=function(){this.C!=null&&(this.C=null,gs(this),Qi(this),qe(19))};function ys(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function zc(o,c){var h=null;if(o.g==c){ys(o),Xi(o),o.g=null;var f=2}else if(ji(o.h,c))h=c.G,Ic(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var b=o.D;f=us(),Be(f,new dc(f,h)),_s(o)}else $c(o);else if(b=c.m,b==3||b==0&&c.X>0||!(f==1&&op(o,c)||f==2&&Qi(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),b){case 1:fn(o,5);break;case 4:fn(o,10);break;case 3:fn(o,6);break;default:fn(o,2)}}}function Hc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function fn(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const b=!f;f=new Lt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||yr(f,"https"),fs(f),b?ep(f.toString(),h):tp(f.toString(),h)}else qe(2);o.I=0,o.l&&o.l.pa(c),Wc(o),Fc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Wc(o){if(o.I=0,o.ja=[],o.l){const c=bc(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Gc(o,c,h){var f=h instanceof Lt?ct(h):new Lt(h);if(f.g!="")c&&(f.g=c+"."+f.g),vr(f,f.u);else{var b=a.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const A=new Lt(null);f&&yr(A,f),c&&(A.g=c),b&&vr(A,b),h&&(A.h=h),f=A}return h=o.G,c=o.wa,h&&c&&he(f,h,c),he(f,"VER",o.ka),Rr(o,f),f}function Kc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ge(new Wi({ab:h})):new ge(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qc(){}n=Qc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vs(){}vs.prototype.g=function(o,c){return new Ke(o,c)};function Ke(o,c){Ve.call(this),this.g=new Uc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Mn(this)}m(Ke,Ve),Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Ki(this.g)},Ke.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Oi(o),o=h);c.i.push(new Wf(c.Ya++,o)),c.I==3&&_s(c)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,Ke.Z.N.call(this)};function Xc(o){Li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Xc,Li);function Yc(){Mi.call(this),this.status=1}m(Yc,Mi);function Mn(o){this.g=o}m(Mn,Qc),Mn.prototype.ra=function(){Be(this.g,"a")},Mn.prototype.qa=function(o){Be(this.g,new Xc(o))},Mn.prototype.pa=function(o){Be(this.g,new Yc)},Mn.prototype.oa=function(){Be(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,lh=function(){return new vs},ch=function(){return us()},ah=un,Ao={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,xs=hs,fc.COMPLETE="complete",oh=fc,cc.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Pr=cc,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,ih=ge}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const dl="@firebase/firestore",fl="4.9.3";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let sr="12.7.0";/**
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
 */const An=new Jo("@firebase/firestore");function Un(){return An.logLevel}function M(n,...e){if(An.logLevel<=ne.DEBUG){const t=e.map(ta);An.debug(`Firestore (${sr}): ${n}`,...t)}}function Dt(n,...e){if(An.logLevel<=ne.ERROR){const t=e.map(ta);An.error(`Firestore (${sr}): ${n}`,...t)}}function Qn(n,...e){if(An.logLevel<=ne.WARN){const t=e.map(ta);An.warn(`Firestore (${sr}): ${n}`,...t)}}function ta(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,uh(n,r,t)}function uh(n,e,t){let r=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function oe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||uh(e,s,r)}function X(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sg{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new hh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class ig{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class og{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ig(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ag{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class na{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function Ro(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return co(s)===co(i)?re(s,i):co(s)?1:-1}return re(n.length,e.length)}const lg=55296,ug=57343;function co(n){const e=n.charCodeAt(0);return e>=lg&&e<=ug}function Xn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const ml="__name__";class ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return re(e.length,t.length)}static compareSegments(e,t){const r=ut.isNumericId(e),s=ut.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):Ro(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class ue extends ut{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends ut{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ml}static keyField(){return new De([ml])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ue.fromString(e))}static fromName(e){return new $(ue.fromString(e).popFirst(5))}static empty(){return new $(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ue(e.slice()))}}/**
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
 */function dh(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dg(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gl(n){if(!$.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _l(n){if($.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function di(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function Xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=di(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function es(n,e){if(!fh(n))throw new O(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const yl=-62135596800,vl=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vl);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yl)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vl}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(es(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Ie("string",de._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new de(0,0))}static max(){return new Q(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jr=-1;function fg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new Zt(s,$.empty(),e)}function pg(n){return new Zt(n.readTime,n.key,jr)}class Zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Zt(Q.min(),$.empty(),jr)}static max(){return new Zt(Q.max(),$.empty(),jr)}}function mg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
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
 */const gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _g{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ir(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==gg)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function or(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fi.ce=-1;/**
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
 */const ra=-1;function pi(n){return n==null}function Hs(n){return n===0&&1/n==-1/0}function vg(n){return typeof n=="number"&&Number.isInteger(n)&&!Hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ph="";function Eg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=El(e)),e=wg(n.get(t),e);return El(e)}function wg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ph:t+="";break;default:t+=i}}return t}function El(n){return n+ph+""}/**
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
 */function wl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tl(this.data.getIterator())}getIteratorFrom(e){return new Tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Se(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gh("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const Tg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=Tg.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */const _h="server_timestamp",yh="__type__",vh="__previous_value__",Eh="__local_write_time__";function sa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[yh])==null?void 0:r.stringValue)===_h}function mi(n){const e=n.mapValue.fields[vh];return sa(e)?mi(e):e}function zr(n){const e=en(n.mapValue.fields[Eh].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class Ig{constructor(e,t,r,s,i,a,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const Ws="(default)";class Hr{constructor(e,t){this.projectId=e,this.database=t||Ws}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database===Ws}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wh="__type__",bg="__max__",Rs={mapValue:{}},Th="__vector__",Gs="value";function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sa(n)?4:Rg(n)?9007199254740991:Ag(n)?10:11:G(28295,{value:n})}function Et(n,e){if(n===e)return!0;const t=nn(n);if(t!==nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zr(n).isEqual(zr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=en(s.timestampValue),l=en(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return tn(s.bytesValue).isEqual(tn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),l=ve(i.doubleValue);return a===l?Hs(a)===Hs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wl(a)!==wl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Et(a[u],l[u])))return!1;return!0}(n,e);default:return G(52216,{left:n})}}function Wr(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function Yn(n,e){if(n===e)return 0;const t=nn(n),r=nn(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ve(i.integerValue||i.doubleValue),u=ve(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Il(n.timestampValue,e.timestampValue);case 4:return Il(zr(n),zr(e));case 5:return Ro(n.stringValue,e.stringValue);case 6:return function(i,a){const l=tn(i),u=tn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=re(l[d],u[d]);if(p!==0)return p}return re(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=re(ve(i.latitude),ve(a.latitude));return l!==0?l:re(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return bl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,R,k,N;const l=i.fields||{},u=a.fields||{},d=(E=l[Gs])==null?void 0:E.arrayValue,p=(R=u[Gs])==null?void 0:R.arrayValue,m=re(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((N=p==null?void 0:p.values)==null?void 0:N.length)||0);return m!==0?m:bl(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Rs.mapValue&&a===Rs.mapValue)return 0;if(i===Rs.mapValue)return 1;if(a===Rs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const E=Ro(u[m],p[m]);if(E!==0)return E;const R=Yn(l[u[m]],d[p[m]]);if(R!==0)return R}return re(u.length,p.length)}(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function Il(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=en(n),r=en(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function bl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Yn(t[s],r[s]);if(i)return i}return re(t.length,r.length)}function Jn(n){return So(n)}function So(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=en(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return tn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=So(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${So(t.fields[a])}`;return s+"}"}(n.mapValue):G(61005,{value:n})}function Vs(n){switch(nn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mi(n);return e?16+Vs(e):16;case 5:return 2*n.stringValue.length;case 6:return tn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Vs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return an(r.fields,(i,a)=>{s+=i.length+Vs(a)}),s}(n.mapValue);default:throw G(13486,{value:n})}}function Al(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Po(n){return!!n&&"integerValue"in n}function ia(n){return!!n&&"arrayValue"in n}function Rl(n){return!!n&&"nullValue"in n}function Sl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Os(n){return!!n&&"mapValue"in n}function Ag(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wh])==null?void 0:r.stringValue)===Th}function xr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xr(n.arrayValue.values[t]);return e}return{...n}}function Rg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bg}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Os(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xr(t)}setAll(e){let t=De.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=xr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Os(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Os(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){an(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(xr(this.value))}}function Ih(n){const e=[];return an(n.fields,(t,r)=>{const s=new De([t]);if(Os(r)){const i=Ih(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class Me{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,Q.min(),Q.min(),Q.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new Me(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Me(e,2,t,Q.min(),Q.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,Q.min(),Q.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ks{constructor(e,t){this.position=e,this.inclusive=t}}function Pl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=Yn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class bh{}class Te extends bh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cg(e,t,r):t==="array-contains"?new Dg(e,r):t==="in"?new xg(e,r):t==="not-in"?new Vg(e,r):t==="array-contains-any"?new Og(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kg(e,r):new Ng(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yn(t,this.value)):t!==null&&nn(this.value)===nn(t)&&this.matchesComparison(Yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends bh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return Ah(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ah(n){return n.op==="and"}function Rh(n){return Pg(n)&&Ah(n)}function Pg(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function Co(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+Jn(n.value);if(Rh(n))return n.filters.map(e=>Co(e)).join(",");{const e=n.filters.map(t=>Co(t)).join(",");return`${n.op}(${e})`}}function Sh(n,e){return n instanceof Te?function(r,s){return s instanceof Te&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(n,e):n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Sh(a,s.filters[l]),!0):!1}(n,e):void G(19439)}function Ph(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${Jn(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Ph).join(" ,")+"}"}(n):"Filter"}class Cg extends Te{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class kg extends Te{constructor(e,t){super(e,"in",t),this.keys=Ch("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ng extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Ch("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ch(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Dg extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ia(t)&&Wr(t.arrayValue,this.value)}}class xg extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wr(this.value.arrayValue,t)}}class Vg extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wr(this.value.arrayValue,t)}}class Og extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ia(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wr(this.value.arrayValue,r))}}/**
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
 */class Lg{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function kl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Lg(n,e,t,r,s,i,a)}function oa(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Co(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jn(r)).join(",")),e.Te=t}return e.Te}function aa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cl(n.startAt,e.startAt)&&Cl(n.endAt,e.endAt)}function ko(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ar{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Mg(n,e,t,r,s,i,a,l){return new ar(n,e,t,r,s,i,a,l)}function ca(n){return new ar(n)}function Nl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kh(n){return n.collectionGroup!==null}function Vr(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Se(De.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Gr(i,r))}),t.has(De.keyField().canonicalString())||e.Ie.push(new Gr(De.keyField(),r))}return e.Ie}function pt(n){const e=X(n);return e.Ee||(e.Ee=Ug(e,Vr(n))),e.Ee}function Ug(n,e){if(n.limitType==="F")return kl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gr(s.field,i)});const t=n.endAt?new Ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ks(n.startAt.position,n.startAt.inclusive):null;return kl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function No(n,e){const t=n.filters.concat([e]);return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Do(n,e,t){return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gi(n,e){return aa(pt(n),pt(e))&&n.limitType===e.limitType}function Nh(n){return`${oa(pt(n))}|lt:${n.limitType}`}function Fn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ph(s)).join(", ")}]`),pi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Jn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Jn(s)).join(",")),`Target(${r})`}(pt(n))}; limitType=${n.limitType})`}function _i(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Pl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Vr(r),s)||r.endAt&&!function(a,l,u){const d=Pl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Vr(r),s))}(n,e)}function Fg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dh(n){return(e,t)=>{let r=!1;for(const s of Vr(n)){const i=Bg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bg(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Yn(u,d):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){an(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
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
 */const qg=new pe($.comparator);function xt(){return qg}const xh=new pe($.comparator);function Cr(...n){let e=xh;for(const t of n)e=e.insert(t.key,t);return e}function Vh(n){let e=xh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function gn(){return Or()}function Oh(){return Or()}function Or(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const $g=new pe($.comparator),jg=new Se($.comparator);function se(...n){let e=jg;for(const t of n)e=e.add(t);return e}const zg=new Se(re);function Hg(){return zg}/**
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
 */function la(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hs(e)?"-0":e}}function Lh(n){return{integerValue:""+n}}function Wg(n,e){return vg(e)?Lh(e):la(n,e)}/**
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
 */class yi{constructor(){this._=void 0}}function Gg(n,e,t){return n instanceof Qs?function(s,i){const a={fields:{[yh]:{stringValue:_h},[Eh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sa(i)&&(i=mi(i)),i&&(a.fields[vh]=i),{mapValue:a}}(t,e):n instanceof Kr?Uh(n,e):n instanceof Qr?Fh(n,e):function(s,i){const a=Mh(s,i),l=Dl(a)+Dl(s.Ae);return Po(a)&&Po(s.Ae)?Lh(l):la(s.serializer,l)}(n,e)}function Kg(n,e,t){return n instanceof Kr?Uh(n,e):n instanceof Qr?Fh(n,e):t}function Mh(n,e){return n instanceof Xs?function(r){return Po(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qs extends yi{}class Kr extends yi{constructor(e){super(),this.elements=e}}function Uh(n,e){const t=Bh(e);for(const r of n.elements)t.some(s=>Et(s,r))||t.push(r);return{arrayValue:{values:t}}}class Qr extends yi{constructor(e){super(),this.elements=e}}function Fh(n,e){let t=Bh(e);for(const r of n.elements)t=t.filter(s=>!Et(s,r));return{arrayValue:{values:t}}}class Xs extends yi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Dl(n){return ve(n.integerValue||n.doubleValue)}function Bh(n){return ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Kr&&s instanceof Kr||r instanceof Qr&&s instanceof Qr?Xn(r.elements,s.elements,Et):r instanceof Xs&&s instanceof Xs?Et(r.Ae,s.Ae):r instanceof Qs&&s instanceof Qs}(n.transform,e.transform)}class Xg{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vi{}function qh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ei(n.key,Ye.none()):new ts(n.key,n.data,Ye.none());{const t=n.data,r=He.empty();let s=new Se(De.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new cn(n.key,r,new Qe(s.toArray()),Ye.none())}}function Yg(n,e,t){n instanceof ts?function(s,i,a){const l=s.value.clone(),u=Vl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof cn?function(s,i,a){if(!Ls(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Vl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll($h(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Lr(n,e,t,r){return n instanceof ts?function(i,a,l,u){if(!Ls(i.precondition,a))return l;const d=i.value.clone(),p=Ol(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof cn?function(i,a,l,u){if(!Ls(i.precondition,a))return l;const d=Ol(i.fieldTransforms,u,a),p=a.data;return p.setAll($h(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Ls(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Jg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Mh(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function xl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xn(r,s,(i,a)=>Qg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ts extends vi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cn extends vi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $h(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Vl(n,e,t){const r=new Map;oe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Kg(a,l,t[s]))}return r}function Ol(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Gg(i,a,e))}return r}class Ei extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zg extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Oh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=qh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,(t,r)=>xl(t,r))&&Xn(this.baseMutations,e.baseMutations,(t,r)=>xl(t,r))}}class ua{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return $g}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ua(e,t,r,s)}}/**
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
 */class t_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,ie;function r_(n){switch(n){case S.OK:return G(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function jh(n){if(n===void 0)return Dt("GRPC error has no .code"),S.UNKNOWN;switch(n){case we.OK:return S.OK;case we.CANCELLED:return S.CANCELLED;case we.UNKNOWN:return S.UNKNOWN;case we.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case we.INTERNAL:return S.INTERNAL;case we.UNAVAILABLE:return S.UNAVAILABLE;case we.UNAUTHENTICATED:return S.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case we.NOT_FOUND:return S.NOT_FOUND;case we.ALREADY_EXISTS:return S.ALREADY_EXISTS;case we.PERMISSION_DENIED:return S.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case we.ABORTED:return S.ABORTED;case we.OUT_OF_RANGE:return S.OUT_OF_RANGE;case we.UNIMPLEMENTED:return S.UNIMPLEMENTED;case we.DATA_LOSS:return S.DATA_LOSS;default:return G(39323,{code:n})}}(ie=we||(we={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s_(){return new TextEncoder}/**
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
 */const i_=new Qt([4294967295,4294967295],0);function Ll(n){const e=s_().encode(n),t=new sh;return t.update(e),new Uint8Array(t.digest())}function Ml(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qt([t,r],0),new Qt([s,i],0)]}class ha{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new kr(`Invalid padding: ${t}`);if(r<0)throw new kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new kr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Qt.fromNumber(r)));return s.compare(i_)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ll(e),[r,s]=Ml(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ha(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Ll(e),[r,s]=Ml(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new wi(Q.min(),s,new pe(re),xt(),se())}}class ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ns(r,t,se(),se(),se())}}/**
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
 */class Ms{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class zh{constructor(e,t){this.targetId=e,this.Ce=t}}class Hh{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ul{constructor(){this.ve=0,this.Fe=Fl(),this.Me=xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new ns(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Fl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class o_{constructor(e){this.Ge=e,this.ze=new Map,this.je=xt(),this.Je=Ss(),this.He=Ss(),this.Ye=new pe(re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ko(i))if(r===0){const a=new $(i.path);this.et(t,a,Me.newNoDocument(a,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=tn(r).toUint8Array()}catch(u){if(u instanceof gh)return Qn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ha(a,s,i)}catch(u){return Qn(u instanceof kr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&ko(l.target)){const u=new $(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Me.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=se();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new wi(e,t,this.Ye,this.je,r);return this.je=xt(),this.Je=Ss(),this.He=Ss(),this.Ye=new pe(re),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ul,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ul),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ss(){return new pe($.comparator)}function Fl(){return new pe($.comparator)}const a_={asc:"ASCENDING",desc:"DESCENDING"},c_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l_={and:"AND",or:"OR"};class u_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xo(n,e){return n.useProto3Json||pi(e)?e:{value:e}}function Ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function h_(n,e){return Ys(n,e.toTimestamp())}function mt(n){return oe(!!n,49232),Q.fromTimestamp(function(t){const r=en(t);return new de(r.seconds,r.nanos)}(n))}function da(n,e){return Vo(n,e).canonicalString()}function Vo(n,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gh(n){const e=ue.fromString(n);return oe(Jh(e),10190,{key:e.toString()}),e}function Oo(n,e){return da(n.databaseId,e.path)}function lo(n,e){const t=Gh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Qh(t))}function Kh(n,e){return da(n.databaseId,e)}function d_(n){const e=Gh(n);return e.length===4?ue.emptyPath():Qh(e)}function Lo(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qh(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Bl(n,e,t){return{name:Oo(n,e),fields:t.value.mapValue.fields}}function f_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(oe(p===void 0||typeof p=="string",58123),xe.fromBase64String(p||"")):(oe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),xe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?S.UNKNOWN:jh(d.code);return new O(p,d.message||"")}(a);t=new Hh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lo(n,r.document.name),i=mt(r.document.updateTime),a=r.document.createTime?mt(r.document.createTime):Q.min(),l=new He({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ms(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lo(n,r.document),i=r.readTime?mt(r.readTime):Q.min(),a=Me.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ms([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lo(n,r.document),i=r.removedTargetIds||[];t=new Ms([],i,s,null)}else{if(!("filter"in e))return G(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new n_(s,i),l=r.targetId;t=new zh(l,a)}}return t}function p_(n,e){let t;if(e instanceof ts)t={update:Bl(n,e.key,e.value)};else if(e instanceof Ei)t={delete:Oo(n,e.key)};else if(e instanceof cn)t={update:Bl(n,e.key,e.data),updateMask:I_(e.fieldMask)};else{if(!(e instanceof Zg))return G(16599,{Vt:e.type});t={verify:Oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Kr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:h_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(n,e.precondition)),t}function m_(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?mt(s.updateTime):mt(i);return a.isEqual(Q.min())&&(a=mt(i)),new Xg(a,s.transformResults||[])}(t,e))):[]}function g_(n,e){return{documents:[Kh(n,e.path)]}}function __(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kh(n,s);const i=function(d){if(d.length!==0)return Yh(ot.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:Bn(E.field),direction:E_(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=xo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function y_(n){let e=d_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){oe(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const E=Xh(m);return E instanceof ot&&Rh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(E=>function(k){return new Gr(qn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(m){let E;return E=typeof m=="object"?m.value:m,pi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(m){const E=!!m.before,R=m.values||[];return new Ks(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const E=!m.before,R=m.values||[];return new Ks(R,E)}(t.endAt)),Mg(e,s,a,i,l,"F",u,d)}function v_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qn(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qn(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qn(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qn(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return Te.create(qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>Xh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function E_(n){return a_[n]}function w_(n){return c_[n]}function T_(n){return l_[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function qn(n){return De.fromServerFormat(n.fieldPath)}function Yh(n){return n instanceof Te?function(t){if(t.op==="=="){if(Sl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Rl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Rl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:w_(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(s=>Yh(s));return r.length===1?r[0]:{compositeFilter:{op:T_(t.op),filters:r}}}(n):G(54877,{filter:n})}function I_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wt{constructor(e,t,r,s,i=Q.min(),a=Q.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b_{constructor(e){this.yt=e}}function A_(n){const e=y_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Do(e,e.limit,"L"):e}/**
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
 */class R_{constructor(){this.Cn=new S_}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Zt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class S_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(ue.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(ue.comparator)).toArray()}}/**
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
 */const ql={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zh=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Zh,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */class Zn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zn(0)}static cr(){return new Zn(-1)}}/**
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
 */const $l="LruGarbageCollector",P_=1048576;function jl([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class C_{constructor(e){this.Ir=e,this.buffer=new Se(jl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class k_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M($l,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){or(t)?M($l,"Ignoring IndexedDB error during garbage collection: ",t):await ir(t)}await this.Vr(3e5)})}}class N_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(fi.ce);const r=new C_(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(ql)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ql):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Un()<=ne.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function D_(n,e){return new N_(n,e)}/**
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
 */class x_{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class V_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class O_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Lr(r.mutation,s,Qe.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=gn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Cr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=gn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=xt();const a=Or(),l=function(){return Or()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof cn)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Lr(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new V_(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Or();let s=new pe((a,l)=>a-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Qe.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Oh();p.forEach(E=>{if(!i.has(E)){const R=qh(t.get(E),r.get(E));R!==null&&m.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(gn());let l=jr,u=i;return a.next(d=>P.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(p=>({batchId:l,changes:Vh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Cr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(m,E){return new ar(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Me.newInvalidDocument(p)))});let l=Cr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Lr(p.mutation,d,Qe.empty(),de.now()),_i(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class L_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:mt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:A_(s.bundledQuery),readTime:mt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class M_{constructor(){this.overlays=new pe($.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=gn(),i=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=gn(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=gn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new t_(t,r));let i=this.qr.get(t);i===void 0&&(i=se(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class U_{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class fa{constructor(){this.Qr=new Se(Ce.$r),this.Ur=new Se(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new $(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=se();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||re(e.Yr,t.Yr)}static Kr(e,t){return re(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
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
 */class F_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(Ce.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new e_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ra:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(re);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new $(i),0);let l=new Se(re);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},a),P.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class B_{constructor(e){this.ri=e,this.docs=function(){return new pe($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Me.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const a=t.path,l=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||mg(pg(p),r)<=0||(s.has(p.key)||_i(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new q_(this)}getSize(e){return P.resolve(this.size)}}class q_ extends x_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class $_{constructor(e){this.persistence=e,this.si=new kn(t=>oa(t),aa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new fa,this.targetCount=0,this.ai=Zn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
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
 */class ed{constructor(e,t){this.ui={},this.overlays={},this.ci=new fi(0),this.li=!1,this.li=!0,this.hi=new U_,this.referenceDelegate=e(this),this.Pi=new $_(this),this.indexManager=new R_,this.remoteDocumentCache=function(s){return new B_(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new b_(t),this.Ii=new L_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new M_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new F_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new j_(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class j_ extends _g{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.Ri=new fa,this.Vi=null}static mi(e){return new pa(e)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=$.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Js{constructor(e,t){this.persistence=e,this.pi=new kn(r=>Eg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=D_(this,t)}static mi(e,t){return new Js(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vs(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ma{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ma(e,t.fromCache,r,s)}}/**
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
 */class z_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class H_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Lp()?8:yg(Ue())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new z_;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Un()<=ne.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Un()<=ne.DEBUG&&M("QueryEngine","Query:",Fn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Un()<=ne.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):P.resolve())}ys(e,t){if(Nl(t))return P.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Do(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=se(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,Do(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,r,s){return Nl(t)||s.isEqual(Q.min())?P.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?P.resolve(null):(Un()<=ne.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fn(t)),this.vs(e,a,t,fg(s,jr)).next(l=>l))})}Ds(e,t){let r=new Se(Dh(e));return t.forEach((s,i)=>{_i(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Un()<=ne.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fn(t)),this.ps.getDocumentsMatchingQuery(e,t,Zt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ga="LocalStore",W_=3e8;class G_{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new pe(re),this.xs=new kn(i=>oa(i),aa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function K_(n,e,t,r){return new G_(n,e,t,r)}async function td(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=se();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function Q_(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,E=m.keys();let R=P.resolve();return E.forEach(k=>{R=R.next(()=>p.getEntry(u,k)).next(N=>{const C=d.docVersions.get(k);oe(C!==null,48541),N.version.compareTo(C)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function nd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function X_(n,e){const t=X(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const E=s.get(m);if(!E)return;l.push(t.Pi.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,p.addedDocuments,m)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(m,R),function(N,C,H){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=W_?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(E,R,p)&&l.push(t.Pi.updateTargetData(i,R))});let u=xt(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(Y_(i,a,e.documentUpdates).next(p=>{u=p.ks,d=p.qs})),!r.isEqual(Q.min())){const p=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=s,i))}function Y_(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xt();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M(ga,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function J_(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ra),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Z_(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Mo(n,e,t){const r=X(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!or(a))throw a;M(ga,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function zl(n,e,t){const r=X(n);let s=Q.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const m=X(u),E=m.xs.get(p);return E!==void 0?P.resolve(m.Ms.get(E)):m.Pi.getTargetData(d,p)}(r,a,pt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:se())).next(l=>(ey(r,Fg(e),l),{documents:l,Qs:i})))}function ey(n,e,t){let r=n.Os.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Hl{constructor(){this.activeTargetIds=Hg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ty{constructor(){this.Mo=new Hl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ny{Oo(e){}shutdown(){}}/**
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
 */const Wl="ConnectivityMonitor";class Gl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(Wl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(Wl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ps=null;function Uo(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}/**
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
 */const uo="RestConnection",ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ws?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Uo(),l=this.zo(e,t.toUriEncodedString());M(uo,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),p=on(d);return this.Jo(e,l,u,r,p).then(m=>(M(uo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Qn(uo,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=ry[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class iy{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Oe="WebChannelConnection";class oy extends sy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Uo();return new Promise((l,u)=>{const d=new ih;d.setWithCredentials(!0),d.listenOnce(oh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xs.NO_ERROR:const m=d.getResponseJson();M(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case xs.TIMEOUT:M(Oe,`RPC '${e}' ${a} timed out`),u(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const E=d.getStatus();if(M(Oe,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R==null?void 0:R.error;if(k&&k.status&&k.message){const N=function(H){const W=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(W)>=0?W:S.UNKNOWN}(k.status);u(new O(N,k.message))}else u(new O(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(S.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Oe,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);M(Oe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=Uo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=lh(),l=ch(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");M(Oe,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=a.createWebChannel(p,u);this.I_(m);let E=!1,R=!1;const k=new iy({Yo:C=>{R?M(Oe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(E||(M(Oe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),E=!0),M(Oe,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),N=(C,H,W)=>{C.listen(H,z=>{try{W(z)}catch(F){setTimeout(()=>{throw F},0)}})};return N(m,Pr.EventType.OPEN,()=>{R||(M(Oe,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),N(m,Pr.EventType.CLOSE,()=>{R||(R=!0,M(Oe,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))}),N(m,Pr.EventType.ERROR,C=>{R||(R=!0,Qn(Oe,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),N(m,Pr.EventType.MESSAGE,C=>{var H;if(!R){const W=C.data[0];oe(!!W,16349);const z=W,F=(z==null?void 0:z.error)||((H=z[0])==null?void 0:H.error);if(F){M(Oe,`RPC '${e}' stream ${s} received error:`,F);const ee=F.status;let Y=function(y){const T=we[y];if(T!==void 0)return jh(T)}(ee),w=F.message;Y===void 0&&(Y=S.INTERNAL,w="Unknown error status: "+ee+" with message "+F.message),R=!0,k.a_(new O(Y,w)),m.close()}else M(Oe,`RPC '${e}' stream ${s} received:`,W),k.u_(W)}}),N(l,ah.STAT_EVENT,C=>{C.stat===Ao.PROXY?M(Oe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Ao.NOPROXY&&M(Oe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ho(){return typeof document<"u"?document:null}/**
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
 */function Ti(n){return new u_(n,!0)}/**
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
 */class rd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Kl="PersistentStream";class sd{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(Kl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(M(Kl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ay extends sd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=f_(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?mt(a.readTime):Q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Lo(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=ko(u)?{documents:g_(i,u)}:{query:__(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wh(i,a.resumeToken);const d=xo(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ys(i,a.snapshotVersion.toTimestamp());const d=xo(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=v_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Lo(this.serializer),t.removeTarget=e,this.q_(t)}}class cy extends sd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=m_(e.writeResults,e.commitTime),r=mt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Lo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>p_(this.serializer,r))};this.q_(t)}}/**
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
 */class ly{}class uy extends ly{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Vo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(S.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Vo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class hy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Rn="RemoteStore";class dy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Nn(this)&&(M(Rn,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.Ea.add(4),await rs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ii(d)}(this))})}),this.Ra=new hy(r,s)}}async function Ii(n){if(Nn(n))for(const e of n.da)await e(!0)}async function rs(n){for(const e of n.da)await e(!1)}function id(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ea(t)?va(t):cr(t).O_()&&ya(t,e))}function _a(n,e){const t=X(n),r=cr(t);t.Ia.delete(e),r.O_()&&od(t,e),t.Ia.size===0&&(r.O_()?r.L_():Nn(t)&&t.Ra.set("Unknown"))}function ya(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cr(n).Y_(e)}function od(n,e){n.Va.Ue(e),cr(n).Z_(e)}function va(n){n.Va=new o_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),cr(n).start(),n.Ra.ua()}function Ea(n){return Nn(n)&&!cr(n).x_()&&n.Ia.size>0}function Nn(n){return X(n).Ea.size===0}function ad(n){n.Va=void 0}async function fy(n){n.Ra.set("Online")}async function py(n){n.Ia.forEach((e,t)=>{ya(n,e)})}async function my(n,e){ad(n),Ea(n)?(n.Ra.ha(e),va(n)):n.Ra.set("Unknown")}async function gy(n,e,t){if(n.Ra.set("Online"),e instanceof Hh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){M(Rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zs(n,r)}else if(e instanceof Ms?n.Va.Ze(e):e instanceof zh?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const r=await nd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(xe.EMPTY_BYTE_STRING,p.snapshotVersion)),od(i,u);const m=new Wt(p.target,u,d,p.sequenceNumber);ya(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M(Rn,"Failed to raise snapshot:",r),await Zs(n,r)}}async function Zs(n,e,t){if(!or(e))throw e;n.Ea.add(1),await rs(n),n.Ra.set("Offline"),t||(t=()=>nd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(Rn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ii(n)})}function cd(n,e){return e().catch(t=>Zs(n,t,e))}async function bi(n){const e=X(n),t=rn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ra;for(;_y(e);)try{const s=await J_(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,yy(e,s)}catch(s){await Zs(e,s)}ld(e)&&ud(e)}function _y(n){return Nn(n)&&n.Ta.length<10}function yy(n,e){n.Ta.push(e);const t=rn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ld(n){return Nn(n)&&!rn(n).x_()&&n.Ta.length>0}function ud(n){rn(n).start()}async function vy(n){rn(n).ra()}async function Ey(n){const e=rn(n);for(const t of n.Ta)e.ea(t.mutations)}async function wy(n,e,t){const r=n.Ta.shift(),s=ua.from(r,e,t);await cd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await bi(n)}async function Ty(n,e){e&&rn(n).X_&&await async function(r,s){if(function(a){return r_(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();rn(r).B_(),await cd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bi(r)}}(n,e),ld(n)&&ud(n)}async function Ql(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),M(Rn,"RemoteStore received new credentials");const r=Nn(t);t.Ea.add(3),await rs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ii(t)}async function Iy(n,e){const t=X(n);e?(t.Ea.delete(2),await Ii(t)):e||(t.Ea.add(2),await rs(t),t.Ra.set("Unknown"))}function cr(n){return n.ma||(n.ma=function(t,r,s){const i=X(t);return i.sa(),new ay(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:fy.bind(null,n),t_:py.bind(null,n),r_:my.bind(null,n),H_:gy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Ea(n)?va(n):n.Ra.set("Unknown")):(await n.ma.stop(),ad(n))})),n.ma}function rn(n){return n.fa||(n.fa=function(t,r,s){const i=X(t);return i.sa(),new cy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:vy.bind(null,n),r_:Ty.bind(null,n),ta:Ey.bind(null,n),na:wy.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await bi(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Rn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class wa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new wa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),or(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zn{static emptySet(e){return new zn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Cr(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xl{constructor(){this.ga=new pe($.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class er{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new er(e,t,zn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class by{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ay{constructor(){this.queries=Yl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=Yl(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Yl(){return new kn(n=>Nh(n),gi)}async function Ry(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new by,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ta(a,`Initialization of query '${Fn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ia(t)}async function Sy(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Py(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Ia(t)}function Cy(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Ia(n){n.Ca.forEach(e=>{e.next()})}var Fo,Jl;(Jl=Fo||(Fo={})).Ma="default",Jl.Cache="cache";class ky{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fo.Cache}}/**
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
 */class hd{constructor(e){this.key=e}}class dd{constructor(e){this.key=e}}class Ny{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=Dh(e),this.tu=new zn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Xl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const E=s.get(p),R=_i(this.query,m)?m:null,k=!!E&&this.mutatedKeys.has(E.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;E&&R?E.data.isEqual(R.data)?k!==N&&(r.track({type:3,doc:R}),C=!0):this.su(E,R)||(r.track({type:2,doc:R}),C=!0,(u&&this.eu(R,u)>0||d&&this.eu(R,d)<0)&&(l=!0)):!E&&R?(r.track({type:0,doc:R}),C=!0):E&&!R&&(r.track({type:1,doc:E}),C=!0,(u||d)&&(l=!0)),C&&(R?(a=a.add(R),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,m)=>function(R,k){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Rt:C})}};return N(R)-N(k)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new er(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new dd(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new hd(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return er.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ba="SyncEngine";class Dy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xy{constructor(e){this.key=e,this.hu=!1}}class Vy{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new kn(l=>Nh(l),gi),this.Iu=new Map,this.Eu=new Set,this.du=new pe($.comparator),this.Au=new Map,this.Ru=new fa,this.Vu={},this.mu=new Map,this.fu=Zn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Oy(n,e,t=!0){const r=yd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await fd(r,e,t,!0),s}async function Ly(n,e){const t=yd(n);await fd(t,e,!0,!1)}async function fd(n,e,t,r){const s=await Z_(n.localStore,pt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await My(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&id(n.remoteStore,s),l}async function My(n,e,t,r,s){n.pu=(m,E,R)=>async function(N,C,H,W){let z=C.view.ru(H);z.Cs&&(z=await zl(N.localStore,C.query,!1).then(({documents:w})=>C.view.ru(w,z)));const F=W&&W.targetChanges.get(C.targetId),ee=W&&W.targetMismatches.get(C.targetId)!=null,Y=C.view.applyChanges(z,N.isPrimaryClient,F,ee);return eu(N,C.targetId,Y.au),Y.snapshot}(n,m,E,R);const i=await zl(n.localStore,e,!0),a=new Ny(e,i.Qs),l=a.ru(i.documents),u=ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);eu(n,t,d.au);const p=new Dy(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Uy(n,e,t){const r=X(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!gi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&_a(r.remoteStore,s.targetId),Bo(r,s.targetId)}).catch(ir)):(Bo(r,s.targetId),await Mo(r.localStore,s.targetId,!0))}async function Fy(n,e){const t=X(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_a(t.remoteStore,r.targetId))}async function By(n,e,t){const r=Gy(n);try{const s=await function(a,l){const u=X(a),d=de.now(),p=l.reduce((R,k)=>R.add(k.key),se());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=xt(),N=se();return u.Ns.getEntries(R,p).next(C=>{k=C,k.forEach((H,W)=>{W.isValidDocument()||(N=N.add(H))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(C=>{m=C;const H=[];for(const W of l){const z=Jg(W,m.get(W.key).overlayedDocument);z!=null&&H.push(new cn(W.key,z,Ih(z.value.mapValue),Ye.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,H,l)}).next(C=>{E=C;const H=C.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(R,C.batchId,H)})}).then(()=>({batchId:E.batchId,changes:Vh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new pe(re)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await ss(r,s.changes),await bi(r.remoteStore)}catch(s){const i=Ta(s,"Failed to persist write");t.reject(i)}}async function pd(n,e){const t=X(n);try{const r=await X_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?oe(a.hu,14607):s.removedDocuments.size>0&&(oe(a.hu,42227),a.hu=!1))}),await ss(t,r,e)}catch(r){await ir(r)}}function Zl(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const E of m.Sa)E.va(l)&&(d=!0)}),d&&Ia(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qy(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new pe($.comparator);a=a.insert(i,Me.newNoDocument(i,Q.min()));const l=se().add(i),u=new wi(Q.min(),new Map,new pe(re),a,l);await pd(r,u),r.du=r.du.remove(i),r.Au.delete(e),Aa(r)}else await Mo(r.localStore,e,!1).then(()=>Bo(r,e,t)).catch(ir)}async function $y(n,e){const t=X(n),r=e.batch.batchId;try{const s=await Q_(t.localStore,e);gd(t,r,null),md(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,s)}catch(s){await ir(s)}}async function jy(n,e,t){const r=X(n);try{const s=await function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(oe(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);gd(r,e,t),md(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,s)}catch(s){await ir(s)}}function md(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function gd(n,e,t){const r=X(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||_d(n,r)})}function _d(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(_a(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Aa(n))}function eu(n,e,t){for(const r of t)r instanceof hd?(n.Ru.addReference(r.key,e),zy(n,r)):r instanceof dd?(M(ba,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||_d(n,r.key)):G(19791,{wu:r})}function zy(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(M(ba,"New document in limbo: "+t),n.Eu.add(r),Aa(n))}function Aa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new $(ue.fromString(e)),r=n.fu.next();n.Au.set(r,new xy(t)),n.du=n.du.insert(t,r),id(n.remoteStore,new Wt(pt(ca(t.path)),r,"TargetPurposeLimboResolution",fi.ce))}}async function ss(n,e,t){const r=X(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ma.As(u.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(d,E=>P.forEach(E.Es,R=>p.persistence.referenceDelegate.addReference(m,E.targetId,R)).next(()=>P.forEach(E.ds,R=>p.persistence.referenceDelegate.removeReference(m,E.targetId,R)))))}catch(m){if(!or(m))throw m;M(ga,"Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const R=p.Ms.get(E),k=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(E,N)}}}(r.localStore,i))}async function Hy(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){M(ba,"User change. New user:",e.toKey());const r=await td(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ls)}}function Wy(n,e){const t=X(n),r=t.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function yd(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qy.bind(null,e),e.Pu.H_=Py.bind(null,e.eventManager),e.Pu.yu=Cy.bind(null,e.eventManager),e}function Gy(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$y.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jy.bind(null,e),e}class ei{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return K_(this.persistence,new H_,e.initialUser,this.serializer)}Cu(e){return new ed(pa.mi,this.serializer)}Du(e){return new ty}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ei.provider={build:()=>new ei};class Ky extends ei{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){oe(this.persistence.referenceDelegate instanceof Js,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new k_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new ed(r=>Js.mi(r,t),this.serializer)}}class qo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hy.bind(null,this.syncEngine),await Iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ay}()}createDatastore(e){const t=Ti(e.databaseInfo.databaseId),r=function(i){return new oy(i)}(e.databaseInfo);return function(i,a,l,u){return new uy(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new dy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Zl(this.syncEngine,t,0),function(){return Gl.v()?new Gl:new ny}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const m=new Vy(s,i,a,l,u,d);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);M(Rn,"RemoteStore shutting down."),i.Ea.add(5),await rs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}qo.provider={build:()=>new qo};/**
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
 */class Qy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const sn="FirestoreClient";class Xy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(sn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(sn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ta(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),M(sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await td(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yy(n);M(sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ql(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ql(e.remoteStore,s)),n._onlineComponents=e}async function Yy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(sn,"Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qn("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new ei)}}else M(sn,"Using default OfflineComponentProvider"),await fo(n,new Ky(void 0));return n._offlineComponents}async function vd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(sn,"Using user provided OnlineComponentProvider"),await tu(n,n._uninitializedComponentsProvider._online)):(M(sn,"Using default OnlineComponentProvider"),await tu(n,new qo))),n._onlineComponents}function Jy(n){return vd(n).then(e=>e.syncEngine)}async function nu(n){const e=await vd(n),t=e.eventManager;return t.onListen=Oy.bind(null,e.syncEngine),t.onUnlisten=Uy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ly.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Fy.bind(null,e.syncEngine),t}/**
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
 */function Ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ru=new Map;/**
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
 */const wd="firestore.googleapis.com",su=!0;class iu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wd,this.ssl=su}else this.host=e.host,this.ssl=e.ssl??su;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<P_)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ed(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ai{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ng;switch(r.type){case"firstParty":return new og(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ru.get(t);r&&(M("ComponentProvider","Removing Datastore"),ru.delete(t),r.terminate())}(this),Promise.resolve()}}function Zy(n,e,t,r={}){var d;n=Xt(n,Ai);const s=on(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Xo(`https://${l}`),Yo("Firestore",!0)),i.host!==wd&&i.host!==l&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!In(u,a)&&(n._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Le.MOCK_USER;else{p=Ju(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Le(E)}n._authCredentials=new rg(new hh(p,m))}}/**
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
 */class Dn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(es(t,be._jsonSchema))return new be(e,r||null,new $(ue.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Ie("string",be._jsonSchemaVersion),referencePath:Ie("string")};class Yt extends Dn{constructor(e,t,r){super(e,t,ca(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new $(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function Ra(n,e,...t){if(n=fe(n),dh("collection","path",e),n instanceof Ai){const r=ue.fromString(e,...t);return _l(r),new Yt(n,null,r)}{if(!(n instanceof be||n instanceof Yt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return _l(r),new Yt(n.firestore,null,r)}}function ti(n,e,...t){if(n=fe(n),arguments.length===1&&(e=na.newId()),dh("doc","path",e),n instanceof Ai){const r=ue.fromString(e,...t);return gl(r),new be(n,null,new $(r))}{if(!(n instanceof be||n instanceof Yt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return gl(r),new be(n.firestore,n instanceof Yt?n.converter:null,new $(r))}}/**
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
 */const ou="AsyncQueue";class au{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rd(this,"async_queue_retry"),this._c=()=>{const r=ho();r&&M(ou,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new vn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!or(e))throw e;M(ou,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",cu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=wa.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:cu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function cu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function lu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class tr extends Ai{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new au,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new au(e),this._firestoreClient=void 0,await e}}}function ev(n,e){const t=typeof n=="object"?n:ea(),r=typeof n=="string"?n:Ws,s=hi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qu("firestore");i&&Zy(s,...i)}return s}function Sa(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tv(n),n._firestoreClient}function tv(n){var r,s,i;const e=n._freezeSettings(),t=function(l,u,d,p){return new Ig(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ed(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Xy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(xe.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(es(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:Ie("string",Ze._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class Ri{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pa{constructor(e){this._methodName=e}}/**
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
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gt._jsonSchemaVersion}}static fromJSON(e){if(es(e,gt._jsonSchema))return new gt(e.latitude,e.longitude)}}gt._jsonSchemaVersion="firestore/geoPoint/1.0",gt._jsonSchema={type:Ie("string",gt._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class _t{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(es(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new _t(e.vectorValues);throw new O(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:Ie("string",_t._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const nv=/^__.*__$/;class rv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}class Td{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Id(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ac:n})}}class Ca{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ca({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ni(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Id(this.Ac)&&nv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ti(e)}Cc(e,t,r,s=!1){return new Ca({Ac:e,methodName:t,Dc:r,path:De.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ka(n){const e=n._freezeSettings(),t=Ti(n._databaseId);return new sv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bd(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Na("Data must be an object, but it was:",a,r);const l=Ad(r,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const E=$o(e,m,t);if(!a.contains(E))throw new O(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Sd(p,E)||p.push(E)}u=new Qe(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new rv(new He(l),u,d)}class Si extends Pa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Si}}function iv(n,e,t,r){const s=n.Cc(1,e,t);Na("Data must be an object, but it was:",s,r);const i=[],a=He.empty();an(r,(u,d)=>{const p=Da(e,u,t);d=fe(d);const m=s.yc(p);if(d instanceof Si)i.push(p);else{const E=is(d,m);E!=null&&(i.push(p),a.set(p,E))}});const l=new Qe(i);return new Td(a,l,s.fieldTransforms)}function ov(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[$o(e,r,t)],u=[s];if(i.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push($o(e,i[E])),u.push(i[E+1]);const d=[],p=He.empty();for(let E=l.length-1;E>=0;--E)if(!Sd(d,l[E])){const R=l[E];let k=u[E];k=fe(k);const N=a.yc(R);if(k instanceof Si)d.push(R);else{const C=is(k,N);C!=null&&(d.push(R),p.set(R,C))}}const m=new Qe(d);return new Td(p,m,a.fieldTransforms)}function av(n,e,t,r=!1){return is(t,n.Cc(r?4:3,e))}function is(n,e){if(Rd(n=fe(n)))return Na("Unsupported field value:",e,n),Ad(n,e);if(n instanceof Pa)return function(r,s){if(!Id(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=is(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:Ys(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ys(s.serializer,i)}}if(r instanceof gt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ze)return{bytesValue:Wh(s.serializer,r._byteString)};if(r instanceof be){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:da(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _t)return function(a,l){return{mapValue:{fields:{[wh]:{stringValue:Th},[Gs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return la(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${di(r)}`)}(n,e)}function Ad(n,e){const t={};return mh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,(r,s)=>{const i=is(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Rd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof gt||n instanceof Ze||n instanceof be||n instanceof Pa||n instanceof _t)}function Na(n,e,t){if(!Rd(t)||!fh(t)){const r=di(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function $o(n,e,t){if((e=fe(e))instanceof Ri)return e._internalPath;if(typeof e=="string")return Da(n,e);throw ni("Field path arguments must be of type string or ",n,!1,void 0,t)}const cv=new RegExp("[~\\*/\\[\\]]");function Da(n,e,t){if(e.search(cv)>=0)throw ni(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ri(...e.split("."))._internalPath}catch{throw ni(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ni(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(S.INVALID_ARGUMENT,l+n+u)}function Sd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Pd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lv extends Pd{data(){return super.data()}}function xa(n,e){return typeof e=="string"?Da(n,e):e instanceof Ri?e._internalPath:e._delegate._internalPath}/**
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
 */function uv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Va{}class Cd extends Va{}function hv(n,e,...t){let r=[];e instanceof Va&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof La).length,l=i.filter(u=>u instanceof Oa).length;if(a>1||a>0&&l>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Oa extends Cd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Oa(e,t,r)}_apply(e){const t=this._parse(e);return kd(e._query,t),new Dn(e.firestore,e.converter,No(e._query,t))}_parse(e){const t=ka(e.firestore);return function(i,a,l,u,d,p,m){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){hu(m,p);const k=[];for(const N of m)k.push(uu(u,i,N));E={arrayValue:{values:k}}}else E=uu(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||hu(m,p),E=av(l,a,m,p==="in"||p==="not-in");return Te.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class La extends Va{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new La(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)kd(a,u),a=No(a,u)}(e._query,t),new Dn(e.firestore,e.converter,No(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ma extends Cd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ma(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gr(i,a)}(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ar(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function dv(n,e="asc"){const t=e,r=xa("orderBy",n);return Ma._create(r,t)}function uu(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kh(e)&&t.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!$.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Al(n,new $(r))}if(t instanceof be)return Al(n,t._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${di(t)}.`)}function hu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kd(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fv{convertValue(e,t="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return an(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Gs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ve(a.doubleValue));return new _t(t)}convertGeoPoint(e){return new gt(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=mi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const t=en(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);oe(Jh(r),9688,{name:e});const s=new Hr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Nd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class En extends Pd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=En._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}En._jsonSchemaVersion="firestore/documentSnapshot/1.0",En._jsonSchema={type:Ie("string",En._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Us extends En{data(e={}){return super.data(e)}}class Hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new Nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:pv(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=na.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:Ie("string",Hn._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Dd extends fv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function mv(n,e,t){n=Xt(n,be);const r=Xt(n.firestore,tr),s=Nd(n.converter,e,t);return Ua(r,[bd(ka(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ye.none())])}function gv(n){return Ua(Xt(n.firestore,tr),[new Ei(n._key,Ye.none())])}function xd(n,...e){var u,d,p;n=fe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||lu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(lu(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,a,l;if(n instanceof be)a=Xt(n.firestore,tr),l=ca(n._key.path),i={next:m=>{e[r]&&e[r](_v(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Xt(n,Dn);a=Xt(m.firestore,tr),l=m._query;const E=new Dd(a);i={next:R=>{e[r]&&e[r](new Hn(a,E,m,R))},error:e[r+1],complete:e[r+2]},uv(n._query)}return function(E,R,k,N){const C=new Qy(N),H=new ky(R,C,k);return E.asyncQueue.enqueueAndForget(async()=>Ry(await nu(E),H)),()=>{C.Nu(),E.asyncQueue.enqueueAndForget(async()=>Sy(await nu(E),H))}}(Sa(a),l,s,i)}function Ua(n,e){return function(r,s){const i=new vn;return r.asyncQueue.enqueueAndForget(async()=>By(await Jy(r),s,i)),i.promise}(Sa(n),e)}function _v(n,e,t){const r=t.docs.get(e._key),s=new Dd(n);return new En(n,s,e._key,r,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class yv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ka(e)}set(e,t,r){this._verifyNotCommitted();const s=po(e,this._firestore),i=Nd(s.converter,t,r),a=bd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ye.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=po(e,this._firestore);let a;return a=typeof(t=fe(t))=="string"||t instanceof Ri?ov(this._dataReader,"WriteBatch.update",i._key,t,r,s):iv(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=po(e,this._firestore);return this._mutations=this._mutations.concat(new Ei(t._key,Ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function po(n,e){if((n=fe(n)).firestore!==e)throw new O(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function vv(n){return Sa(n=Xt(n,tr)),new yv(n,e=>Ua(n,e))}(function(e,t=!0){(function(s){sr=s})(Cn),bn(new Jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new tr(new sg(r.getProvider("auth-internal")),new ag(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(d.options.projectId,p)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ft(dl,fl,e),ft(dl,fl,"esm2020")})();function Vd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ev=Vd,Od=new Jr("auth","Firebase",Vd());/**
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
 */const ri=new Jo("@firebase/auth");function wv(n,...e){ri.logLevel<=ne.WARN&&ri.warn(`Auth (${Cn}): ${n}`,...e)}function Fs(n,...e){ri.logLevel<=ne.ERROR&&ri.error(`Auth (${Cn}): ${n}`,...e)}/**
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
 */function wt(n,...e){throw Ba(n,...e)}function it(n,...e){return Ba(n,...e)}function Fa(n,e,t){const r={...Ev(),[e]:t};return new Jr("auth","Firebase",r).create(e,{appName:n.name})}function wn(n){return Fa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(n,"argument-error"),Fa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ba(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Od.create(n,...e)}function K(n,e,...t){if(!n)throw Ba(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function Vt(n,e){n||Rt(e)}/**
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
 */function jo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Iv(){return du()==="http:"||du()==="https:"}function du(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function bv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iv()||xp()||"connection"in navigator)?navigator.onLine:!0}function Av(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class os{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=kp()||Vp()}get(){return bv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qa(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ld{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pv=new os(3e4,6e4);function $a(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function lr(n,e,t,r,s={}){return Md(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Zr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Dp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&on(n.emulatorConfig.host)&&(d.credentials="include"),Ld.fetch()(await Ud(n,n.config.apiHost,t,l),d)})}async function Md(n,e,t){n._canInitEmulator=!1;const r={...Rv,...e};try{const s=new kv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Cs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Cs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Cs(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fa(n,p,d);wt(n,p)}}catch(s){if(s instanceof It)throw s;wt(n,"network-request-failed",{message:String(s)})}}async function Cv(n,e,t,r,s={}){const i=await lr(n,e,t,r,s);return"mfaPendingCredential"in i&&wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ud(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?qa(n.config,s):`${n.config.apiScheme}://${s}`;return Sv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class kv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Pv.get())})}}function Cs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=it(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Nv(n,e){return lr(n,"POST","/v1/accounts:delete",e)}async function si(n,e){return lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dv(n,e=!1){const t=fe(n),r=await t.getIdToken(e),s=ja(r);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mr(mo(s.auth_time)),issuedAtTime:Mr(mo(s.iat)),expirationTime:Mr(mo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mo(n){return Number(n)*1e3}function ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gu(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fu(n){const e=ja(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&xv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Vv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ii(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Xr(n,si(e,{idToken:t}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Fd(s.providerUserInfo):[],a=Lv(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function Ov(n){const e=fe(n);await ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Mv(n,e){const t=await Md(n,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ud(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&on(n.emulatorConfig.host)&&(u.credentials="include"),Ld.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Uv(n,e){return lr(n,"POST","/v2/accounts:revokeToken",$a(n,e))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=fu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function qt(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Vv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xr(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dv(this,e)}reload(){return Ov(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Xr(this,Nv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:R,providerData:k,stsTokenManager:N}=t;K(m&&N,e,"internal-error");const C=Wn.fromJSON(this.name,N);K(typeof m=="string",e,"internal-error"),qt(r,e.name),qt(s,e.name),K(typeof E=="boolean",e,"internal-error"),K(typeof R=="boolean",e,"internal-error"),qt(i,e.name),qt(a,e.name),qt(l,e.name),qt(u,e.name),qt(d,e.name),qt(p,e.name);const H=new st({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(H.providerData=k.map(W=>({...W}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wn;s.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ii(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wn;l.updateFromIdToken(r);const u=new st({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const pu=new Map;function St(n){Vt(n instanceof Function,"Expected a class definition");let e=pu.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pu.set(n,e),e)}/**
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
 */class Bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bd.type="NONE";const mu=Bd;/**
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
 */function Bs(n,e,t){return`firebase:${n}:${e}:${t}`}class Gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await si(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gn(St(mu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||St(mu);const a=Bs(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const E=await si(e,{idToken:p}).catch(()=>{});if(!E)break;m=await st._fromGetAccountInfoResponse(e,E,p)}else m=st._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Gn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Gn(i,e,r))}}/**
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
 */function gu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wd(e))return"Blackberry";if(Gd(e))return"Webos";if($d(e))return"Safari";if((e.includes("chrome/")||jd(e))&&!e.includes("edge/"))return"Chrome";if(Hd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qd(n=Ue()){return/firefox\//i.test(n)}function $d(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jd(n=Ue()){return/crios\//i.test(n)}function zd(n=Ue()){return/iemobile/i.test(n)}function Hd(n=Ue()){return/android/i.test(n)}function Wd(n=Ue()){return/blackberry/i.test(n)}function Gd(n=Ue()){return/webos/i.test(n)}function za(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fv(n=Ue()){var e;return za(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Bv(){return Op()&&document.documentMode===10}function Kd(n=Ue()){return za(n)||Hd(n)||Gd(n)||Wd(n)||/windows phone/i.test(n)||zd(n)}/**
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
 */function Qd(n,e=[]){let t;switch(n){case"Browser":t=gu(Ue());break;case"Worker":t=`${gu(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${r}`}/**
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
 */class qv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $v(n,e={}){return lr(n,"GET","/v2/passwordPolicy",$a(n,e))}/**
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
 */const jv=6;class zv{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Hv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _u(this),this.idTokenSubscription=new _u(this),this.beforeStateQueue=new qv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await si(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(wn(this));const t=e?fe(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $v(this),t=new zv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Uv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&wv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pi(n){return fe(n)}class _u{constructor(e){this.auth=e,this.observer=null,this.addObserver=jp(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wv(n){Ha=n}function Gv(n){return Ha.loadJS(n)}function Kv(){return Ha.gapiScript}function Qv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Xv(n,e){const t=hi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(In(i,e??{}))return s;wt(s,"already-initialized")}return t.initialize({options:e})}function Yv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jv(n,e,t){const r=Pi(n);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xd(e),{host:a,port:l}=Zv(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(In(d,r.config.emulator)&&In(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,on(a)?(Xo(`${i}//${a}${u}`),Yo("Auth",!0)):eE()}function Xd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zv(n){const e=Xd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yu(a)}}}function yu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function eE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Kn(n,e){return Cv(n,"POST","/v1/accounts:signInWithIdp",$a(n,e))}/**
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
 */const tE="http://localhost";class Sn extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Sn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:tE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zr(t)}return e}}/**
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
 */class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class as extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends as{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class At extends as{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class jt extends as{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class zt extends as{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),a=vu(r);return new nr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vu(r);return new nr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class oi extends It{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new oi(e,t,r,s)}}function Jd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(n,i,e,r):i})}async function nE(n,e,t=!1){const r=await Xr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nr._forOperation(n,"link",r)}/**
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
 */async function rE(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await Xr(n,Jd(r,s,e,n),t);K(i.idToken,r,"internal-error");const a=ja(i.idToken);K(a,r,"internal-error");const{sub:l}=a;return K(n.uid===l,r,"user-mismatch"),nr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
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
 */async function sE(n,e,t=!1){if(Je(n.app))return Promise.reject(wn(n));const r="signIn",s=await Jd(n,r,e),i=await nr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function iE(n,e,t,r){return fe(n).onIdTokenChanged(e,t,r)}function oE(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function aE(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function cE(n){return fe(n).signOut()}const ai="__sak";/**
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
 */class Zd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lE=1e3,uE=10;class ef extends Zd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Bv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ef.type="LOCAL";const hE=ef;/**
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
 */class tf extends Zd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tf.type="SESSION";const nf=tf;/**
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
 */function dE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ci{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ci(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await dE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ci.receivers=[];/**
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
 */function Ga(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Ga("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function yt(){return window}function pE(n){yt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function rf(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function mE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function _E(){return rf()?self:null}/**
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
 */const sf="firebaseLocalStorageDb",yE=1,ci="firebaseLocalStorage",of="fbase_key";class cs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(n,e){return n.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function vE(){const n=indexedDB.deleteDatabase(sf);return new cs(n).toPromise()}function Ho(){const n=indexedDB.open(sf,yE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ci,{keyPath:of})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ci)?e(r):(r.close(),await vE(),e(await Ho()))})})}async function Eu(n,e,t){const r=ki(n,!0).put({[of]:e,value:t});return new cs(r).toPromise()}async function EE(n,e){const t=ki(n,!1).get(e),r=await new cs(t).toPromise();return r===void 0?null:r.value}function wu(n,e){const t=ki(n,!0).delete(e);return new cs(t).toPromise()}const wE=800,TE=3;class af{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ho(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>TE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ci._getInstance(_E()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await mE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ho();return await Eu(e,ai,"1"),await wu(e,ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>EE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ki(s,!1).getAll();return new cs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}af.type="LOCAL";const IE=af;new os(3e4,6e4);/**
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
 */function cf(n,e){return e?St(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ka extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bE(n){return sE(n.auth,new Ka(n),n.bypassAuthState)}function AE(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),rE(t,new Ka(n),n.bypassAuthState)}async function RE(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),nE(t,new Ka(n),n.bypassAuthState)}/**
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
 */class lf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return AE;default:wt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SE=new os(2e3,1e4);async function PE(n,e,t){if(Je(n.app))return Promise.reject(it(n,"operation-not-supported-in-this-environment"));const r=Pi(n);Tv(n,e,Wa);const s=cf(r,t);return new _n(r,"signInViaPopup",e,s).executeNotNull()}class _n extends lf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SE.get())};e()}}_n.currentPopupAction=null;/**
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
 */const CE="pendingRedirect",qs=new Map;class kE extends lf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const r=await NE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NE(n,e){const t=VE(e),r=xE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function DE(n,e){qs.set(n._key(),e)}function xE(n){return St(n._redirectPersistence)}function VE(n){return Bs(CE,n.config.apiKey,n.name)}async function OE(n,e,t=!1){if(Je(n.app))return Promise.reject(wn(n));const r=Pi(n),s=cf(r,e),a=await new kE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const LE=10*60*1e3;class ME{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tu(e))}saveEventToCache(e){this.cachedEventUids.add(Tu(e)),this.lastProcessedEventTime=Date.now()}}function Tu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uf(n);default:return!1}}/**
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
 */async function FE(n,e={}){return lr(n,"GET","/v1/projects",e)}/**
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
 */const BE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qE=/^https?/;async function $E(n){if(n.config.emulator)return;const{authorizedDomains:e}=await FE(n);for(const t of e)try{if(jE(t))return}catch{}wt(n,"unauthorized-domain")}function jE(n){const e=jo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!qE.test(t))return!1;if(BE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const zE=new os(3e4,6e4);function Iu(){const n=yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function HE(n){return new Promise((e,t)=>{var s,i,a;function r(){Iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iu(),t(it(n,"network-request-failed"))},timeout:zE.get()})}if((i=(s=yt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=yt().gapi)!=null&&a.load)r();else{const l=Qv("iframefcb");return yt()[l]=()=>{gapi.load?r():t(it(n,"network-request-failed"))},Gv(`${Kv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw $s=null,e})}let $s=null;function WE(n){return $s=$s||HE(n),$s}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const GE=new os(5e3,15e3),KE="__/auth/iframe",QE="emulator/auth/iframe",XE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JE(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qa(e,QE):`https://${n.config.authDomain}/${KE}`,r={apiKey:e.apiKey,appName:n.name,v:Cn},s=YE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zr(r).slice(1)}`}async function ZE(n){const e=await WE(n),t=yt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:JE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=it(n,"network-request-failed"),l=yt().setTimeout(()=>{i(a)},GE.get());function u(){yt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ew={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tw=500,nw=600,rw="_blank",sw="http://localhost";class bu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iw(n,e,t,r=tw,s=nw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ew,width:r.toString(),height:s.toString(),top:i,left:a},d=Ue().toLowerCase();t&&(l=jd(d)?rw:t),qd(d)&&(e=e||sw,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[R,k])=>`${E}${R}=${k},`,"");if(Fv(d)&&l!=="_self")return ow(e||"",l),new bu(null);const m=window.open(e||"",l,p);K(m,n,"popup-blocked");try{m.focus()}catch{}return new bu(m)}function ow(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const aw="__/auth/handler",cw="emulator/auth/handler",lw=encodeURIComponent("fac");async function Au(n,e,t,r,s,i){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cn,eventId:s};if(e instanceof Wa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",$p(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof as){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${lw}=${encodeURIComponent(u)}`:"";return`${uw(n)}?${Zr(l).slice(1)}${d}`}function uw({config:n}){return n.emulator?qa(n,cw):`https://${n.authDomain}/${aw}`}/**
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
 */const go="webStorageSupport";class hw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nf,this._completeRedirectFn=OE,this._overrideRedirectResult=DE}async _openPopup(e,t,r,s){var a;Vt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Au(e,t,r,jo(),s);return iw(e,i,Ga())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Au(e,t,r,jo(),s);return pE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ZE(e),r=new ME(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(go,{type:go},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[go];i!==void 0&&t(!!i),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$E(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kd()||$d()||za()}}const dw=hw;var Ru="@firebase/auth",Su="1.12.0";/**
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
 */class fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mw(n){bn(new Jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qd(n)},d=new Hv(r,s,i,u);return Yv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),bn(new Jt("auth-internal",e=>{const t=Pi(e.getProvider("auth").getImmediate());return(r=>new fw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Ru,Su,pw(n)),ft(Ru,Su,"esm2020")}/**
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
 */const gw=5*60,_w=Yu("authIdTokenMaxAge")||gw;let Pu=null;const yw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_w)return;const s=t==null?void 0:t.token;Pu!==s&&(Pu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vw(n=ea()){const e=hi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xv(n,{popupRedirectResolver:dw,persistence:[IE,hE,nf]}),r=Yu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=yw(i.toString());oE(t,a,()=>a(t.currentUser)),iE(t,l=>a(l))}}const s=Ku("auth");return s&&Jv(t,`http://${s}`),t}function Ew(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Wv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mw("Browser");/**
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
 */const hf="firebasestorage.googleapis.com",df="storageBucket",ww=2*60*1e3,Tw=10*60*1e3;/**
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
 */class ye extends It{constructor(e,t,r=0){super(_o(e),`Firebase Storage: ${t} (${_o(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _o(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function _o(n){return"storage/"+n}function Qa(){const n="An unknown error occurred, please check the error payload for server response.";return new ye(_e.UNKNOWN,n)}function Iw(n){return new ye(_e.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bw(n){return new ye(_e.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Aw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(_e.UNAUTHENTICATED,n)}function Rw(){return new ye(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Sw(n){return new ye(_e.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Pw(){return new ye(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cw(){return new ye(_e.CANCELED,"User canceled the upload/download.")}function kw(n){return new ye(_e.INVALID_URL,"Invalid URL '"+n+"'.")}function Nw(n){return new ye(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Dw(){return new ye(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+df+"' property when initializing the app?")}function xw(){return new ye(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Vw(){return new ye(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ow(n){return new ye(_e.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wo(n){return new ye(_e.INVALID_ARGUMENT,n)}function ff(){return new ye(_e.APP_DELETED,"The Firebase app was deleted.")}function Lw(n){return new ye(_e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ur(n,e){return new ye(_e.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Sr(n){throw new ye(_e.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Xe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xe.makeFromUrl(e,t)}catch{return new Xe(e,"")}if(r.path==="")return r;throw Nw(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${p}/b/${s}/o${E}`,"i"),k={bucket:1,path:3},N=t===hf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",H=new RegExp(`^https?://${N}/${s}/${C}`,"i"),z=[{regex:l,indices:u,postModify:i},{regex:R,indices:k,postModify:d},{regex:H,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<z.length;F++){const ee=z[F],Y=ee.regex.exec(e);if(Y){const w=Y[ee.indices.bucket];let g=Y[ee.indices.path];g||(g=""),r=new Xe(w,g),ee.postModify(r);break}}if(r==null)throw kw(e);return r}}class Mw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Uw(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let d=!1;function p(...C){d||(d=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,n(R,u())},C)}function E(){i&&clearTimeout(i)}function R(C,...H){if(d){E();return}if(C){E(),p.call(null,C,...H);return}if(u()||a){E(),p.call(null,C,...H);return}r<64&&(r*=2);let z;l===1?(l=2,z=0):z=(r+Math.random())*1e3,m(z)}let k=!1;function N(C){k||(k=!0,E(),!d&&(s!==null?(C||(l=2),clearTimeout(s),m(0)):C||(l=1)))}return m(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function Fw(n){n(!1)}/**
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
 */function Bw(n){return n!==void 0}function qw(n){return typeof n=="object"&&!Array.isArray(n)}function Xa(n){return typeof n=="string"||n instanceof String}function Cu(n){return Ya()&&n instanceof Blob}function Ya(){return typeof Blob<"u"}function ku(n,e,t,r){if(r<e)throw Wo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Wo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ja(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Tn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Tn||(Tn={}));/**
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
 */function $w(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class jw{constructor(e,t,r,s,i,a,l,u,d,p,m,E=!0,R=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,N)=>{this.resolve_=k,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ks(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Tn.NO_ERROR,u=i.getStatus();if(!l||$w(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Tn.ABORT;r(!1,new ks(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new ks(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Bw(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=Qa();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?ff():Cw();a(u)}else{const u=Pw();a(u)}};this.canceled_?t(!1,new ks(!1,null,!0)):this.backoffId_=Uw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ks{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function zw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Hw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ww(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Gw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Kw(n,e,t,r,s,i,a=!0,l=!1){const u=pf(n.urlParams),d=n.url+u,p=Object.assign({},n.headers);return Ww(p,e),zw(p,t),Hw(p,i),Gw(p,r),new jw(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
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
 */function Qw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xw(...n){const e=Qw();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ya())return new Blob(n);throw new ye(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Yw(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Jw(n){if(typeof atob>"u")throw Ow("base-64");return atob(n)}/**
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
 */const ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yo{constructor(e,t){this.data=e,this.contentType=t||null}}function Zw(n,e){switch(n){case ht.RAW:return new yo(mf(e));case ht.BASE64:case ht.BASE64URL:return new yo(gf(n,e));case ht.DATA_URL:return new yo(tT(e),nT(e))}throw Qa()}function mf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eT(n){let e;try{e=decodeURIComponent(n)}catch{throw Ur(ht.DATA_URL,"Malformed data URL.")}return mf(e)}function gf(n,e){switch(n){case ht.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ur(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ht.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ur(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Jw(e)}catch(s){throw s.message.includes("polyfill")?s:Ur(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class _f{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ur(ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=rT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tT(n){const e=new _f(n);return e.base64?gf(ht.BASE64,e.rest):eT(e.rest)}function nT(n){return new _f(n).contentType}function rT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ht{constructor(e,t){let r=0,s="";Cu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Cu(this.data_)){const r=this.data_,s=Yw(r,e,t);return s===null?null:new Ht(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ht(r,!0)}}static getBlob(...e){if(Ya()){const t=e.map(r=>r instanceof Ht?r.data_:r);return new Ht(Xw.apply(null,t))}else{const t=e.map(a=>Xa(a)?Zw(ht.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new Ht(s,!0)}}uploadData(){return this.data_}}/**
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
 */function yf(n){let e;try{e=JSON.parse(n)}catch{return null}return qw(e)?e:null}/**
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
 */function sT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function iT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function vf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function oT(n,e){return e}class $e{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||oT}}let Ns=null;function aT(n){return!Xa(n)||n.length<2?n:vf(n)}function Ef(){if(Ns)return Ns;const n=[];n.push(new $e("bucket")),n.push(new $e("generation")),n.push(new $e("metageneration")),n.push(new $e("name","fullPath",!0));function e(i,a){return aT(a)}const t=new $e("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new $e("size");return s.xform=r,n.push(s),n.push(new $e("timeCreated")),n.push(new $e("updated")),n.push(new $e("md5Hash",null,!0)),n.push(new $e("cacheControl",null,!0)),n.push(new $e("contentDisposition",null,!0)),n.push(new $e("contentEncoding",null,!0)),n.push(new $e("contentLanguage",null,!0)),n.push(new $e("contentType",null,!0)),n.push(new $e("metadata","customMetadata",!0)),Ns=n,Ns}function cT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Xe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function lT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return cT(r,n),r}function wf(n,e,t){const r=yf(e);return r===null?null:lT(n,r,t)}function uT(n,e,t,r){const s=yf(e);if(s===null||!Xa(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,m=n.fullPath,E="/b/"+a(p)+"/o/"+a(m),R=Ja(E,t,r),k=pf({alt:"media",token:d});return R+k})[0]}function hT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Tf{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function If(n){if(!n)throw Qa()}function dT(n,e){function t(r,s){const i=wf(n,s,e);return If(i!==null),i}return t}function fT(n,e){function t(r,s){const i=wf(n,s,e);return If(i!==null),uT(i,s,n.host,n._protocol)}return t}function bf(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Rw():s=Aw():t.getStatus()===402?s=bw(n.bucket):t.getStatus()===403?s=Sw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pT(n){const e=bf(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Iw(n.path)),i.serverResponse=s.serverResponse,i}return t}function mT(n,e,t){const r=e.fullServerUrl(),s=Ja(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Tf(s,i,fT(n,t),a);return l.errorHandler=pT(e),l}function gT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _T(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=gT(null,e)),r}function yT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let z="";for(let F=0;F<2;F++)z=z+Math.random().toString().slice(2);return z}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const d=_T(e,r,s),p=hT(d,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+u+"--",R=Ht.getBlob(m,r,E);if(R===null)throw xw();const k={name:d.fullPath},N=Ja(i,n.host,n._protocol),C="POST",H=n.maxUploadRetryTime,W=new Tf(N,C,dT(n,t),H);return W.urlParams=k,W.headers=a,W.body=R.uploadData(),W.errorHandler=bf(e),W}class vT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Tn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Tn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Tn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Sr("cannot .send() more than once");if(on(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Sr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Sr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Sr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Sr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ET extends vT{initXhr(){this.xhr_.responseType="text"}}function Af(){return new ET}/**
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
 */class Pn{constructor(e,t){this._service=e,t instanceof Xe?this._location=t:this._location=Xe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Pn(e,t)}get root(){const e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vf(this._location.path)}get storage(){return this._service}get parent(){const e=sT(this._location.path);if(e===null)return null;const t=new Xe(this._location.bucket,e);return new Pn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Lw(e)}}function wT(n,e,t){n._throwIfRoot("uploadBytes");const r=yT(n.storage,n._location,Ef(),new Ht(e,!0),t);return n.storage.makeRequestWithTokens(r,Af).then(s=>({metadata:s,ref:n}))}function TT(n){n._throwIfRoot("getDownloadURL");const e=mT(n.storage,n._location,Ef());return n.storage.makeRequestWithTokens(e,Af).then(t=>{if(t===null)throw Vw();return t})}function IT(n,e){const t=iT(n._location.path,e),r=new Xe(n._location.bucket,t);return new Pn(n.storage,r)}/**
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
 */function bT(n){return/^[A-Za-z]+:\/\//.test(n)}function AT(n,e){return new Pn(n,e)}function Rf(n,e){if(n instanceof Za){const t=n;if(t._bucket==null)throw Dw();const r=new Pn(t,t._bucket);return e!=null?Rf(r,e):r}else return e!==void 0?IT(n,e):n}function RT(n,e){if(e&&bT(e)){if(n instanceof Za)return AT(n,e);throw Wo("To use ref(service, url), the first argument must be a Storage instance.")}else return Rf(n,e)}function Nu(n,e){const t=e==null?void 0:e[df];return t==null?null:Xe.makeFromBucketSpec(t,n)}function ST(n,e,t,r={}){n.host=`${e}:${t}`;const s=on(e);s&&(Xo(`https://${n.host}/b`),Yo("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ju(i,n.app.options.projectId))}class Za{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=hf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ww,this._maxUploadRetryTime=Tw,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=Nu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=Nu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ku("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ku("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Mw(ff());{const a=Kw(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Du="@firebase/storage",xu="0.14.0";/**
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
 */const Sf="storage";function PT(n,e,t){return n=fe(n),wT(n,e,t)}function CT(n){return n=fe(n),TT(n)}function kT(n,e){return n=fe(n),RT(n,e)}function NT(n=ea(),e){n=fe(n);const r=hi(n,Sf).getImmediate({identifier:e}),s=Qu("storage");return s&&DT(r,...s),r}function DT(n,e,t,r={}){ST(n,e,t,r)}function xT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Za(t,r,s,e,Cn)}function VT(){bn(new Jt(Sf,xT,"PUBLIC").setMultipleInstances(!0)),ft(Du,xu,""),ft(Du,xu,"esm2020")}VT();const OT={apiKey:"AIzaSyAy96lQqZuRueG_ZeABFzDJwqYuZZA4Fgw",authDomain:"the-spraywall-cellar.firebaseapp.com",projectId:"the-spraywall-cellar",storageBucket:"the-spraywall-cellar.firebasestorage.app",messagingSenderId:"491245667170",appId:"1:491245667170:web:5da5f8bcfc245c09b2a23b"},ec=th(OT),Fr=ev(ec),Go=vw(ec),LT=new At,MT=NT(ec),Pf="boards",UT="boulders";function FT(n=new Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`v${e}${t}${r}`}function BT(n){const e=hv(Ra(Fr,Pf),dv("version","desc"));return xd(e,t=>{const r=t.docs.map(s=>s.data());r.sort((s,i)=>s.version!==i.version?s.version<i.version?1:-1:i.createdAt-s.createdAt),n(r,r[0]??null)},t=>{console.error("Error subscribing to boards:",t)})}async function qT(n,e){const t=`boards/${e}.jpg`,r=kT(MT,t);await PT(r,n,{contentType:n.type||"image/jpeg"});const s=await CT(r),{width:i,height:a}=await $T(n);return{url:s,path:t,width:i,height:a}}function $T(n){return new Promise((e,t)=>{const r=URL.createObjectURL(n),s=new Image;s.onload=()=>{const i={width:s.naturalWidth,height:s.naturalHeight};URL.revokeObjectURL(r),e(i)},s.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Failed to read image dimensions"))},s.src=r})}function tc(n){return Ra(Fr,Pf,n,UT)}async function Ko(n,e){try{await mv(ti(tc(n),e.id),e)}catch(t){throw console.error("Failed to save boulder:",t),new Error("Failed to save boulder. Check your connection.")}}function jT(n,e){return xd(tc(n),t=>{const r=[];t.forEach(s=>r.push(s.data())),e(r)},t=>{console.error("Error subscribing to boulders:",t)})}async function zT(n,e){try{await gv(ti(tc(n),e))}catch(t){throw console.error("Failed to delete boulder:",t),new Error("Failed to delete boulder. Check your connection.")}}function HT(n,e){if(n.length!==4||e.length!==4)throw new Error(`computeHomography requires exactly 4 point pairs (got ${n.length}/${e.length})`);const t=[],r=[];for(let i=0;i<4;i++){const{x:a,y:l}=n[i],{x:u,y:d}=e[i];t.push([a,l,1,0,0,0,-a*u,-l*u]),r.push(u),t.push([0,0,0,a,l,1,-a*d,-l*d]),r.push(d)}const s=GT(t,r);return[[s[0],s[1],s[2]],[s[3],s[4],s[5]],[s[6],s[7],1]]}function Cf(n,e){const t=n[0][0]*e.x+n[0][1]*e.y+n[0][2],r=n[1][0]*e.x+n[1][1]*e.y+n[1][2],s=n[2][0]*e.x+n[2][1]*e.y+n[2][2];return{x:t/s,y:r/s}}function WT(n,e){return n.map(t=>{const{x:r,y:s}=Cf(e,{x:t.x/100,y:t.y/100});return{...t,x:r*100,y:s*100}})}function GT(n,e){const t=n.length,r=n.map((i,a)=>[...i,e[a]]);for(let i=0;i<t;i++){let a=i,l=Math.abs(r[i][i]);for(let u=i+1;u<t;u++){const d=Math.abs(r[u][i]);d>l&&(l=d,a=u)}if(l<1e-12)throw new Error("Singular matrix in homography solver — pick 4 non-collinear points");if(a!==i){const u=r[i];r[i]=r[a],r[a]=u}for(let u=i+1;u<t;u++){const d=r[u][i]/r[i][i];if(d!==0)for(let p=i;p<=t;p++)r[u][p]-=d*r[i][p]}}const s=new Array(t).fill(0);for(let i=t-1;i>=0;i--){let a=r[i][t];for(let l=i+1;l<t;l++)a-=r[i][l]*s[l];s[i]=a/r[i][i]}return s}const rt=4,KT=["#f97316","#22c55e","#3b82f6","#ec4899"];function QT(n){const{currentBoard:e,currentBoulders:t}=n;let r=1,s=null,i=null;const a=[],l=[];let u=null,d=!1;const p=document.createElement("div");p.className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto",p.innerHTML=`
    <div class="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto p-4 md:p-6">
      <div class="mb-4">
        <h2 class="text-xl md:text-2xl font-bold">Upload new spraywall image &amp; recalibrate</h2>
        <p id="step-title" class="text-sm text-gray-300 mt-1 font-medium"></p>
        <p id="step-help" class="text-sm text-gray-400"></p>
      </div>

      <!-- Step 1: file picker -->
      <div data-step="1" class="step hidden">
        <label class="block text-sm font-medium mb-2">New spraywall photo</label>
        <input id="image-input" type="file" accept="image/*"
          class="block w-full text-sm text-gray-300 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
      </div>

      <!-- Step 2: click 4 points on NEW image -->
      <div data-step="2" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-new"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="new-img" src="" class="block w-full h-auto select-none" />
          <div id="new-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 3: click same 4 points on CURRENT image -->
      <div data-step="3" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-old"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="old-img" src="" class="block w-full h-auto select-none" />
          <div id="old-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 4: confirmation with preview -->
      <div data-step="4" class="step hidden">
        <p class="text-xs text-gray-400 mb-1">
          Preview: existing boulders' holds remapped onto the new image. Verify alignment, then confirm.
        </p>
        <div class="relative inline-block w-full bg-black">
          <img id="preview-img" src="" class="block w-full h-auto select-none" />
          <div id="preview-overlay" class="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mt-4">
        <button id="btn-back" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">&larr; Back</button>
        <button id="btn-reset" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Reset points</button>
        <button id="btn-next" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600">Next &rarr;</button>
        <button id="btn-confirm" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-700">
          Confirm recalibration
        </button>
        <button id="btn-cancel" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Cancel</button>
      </div>

      <div id="status" class="mt-3 text-sm text-yellow-400"></div>
    </div>
  `,document.body.appendChild(p);const m=L=>p.querySelector(L),E=m("#step-title"),R=m("#step-help"),k=Array.from(p.querySelectorAll(".step")),N=m("#image-input"),C=m("#new-img"),H=m("#old-img"),W=m("#preview-img"),z=m("#new-overlay"),F=m("#old-overlay"),ee=m("#preview-overlay"),Y=m("#counter-new"),w=m("#counter-old"),g=m("#btn-back"),y=m("#btn-reset"),T=m("#btn-next"),v=m("#btn-confirm"),I=m("#btn-cancel"),_=m("#status");function ae(L,D="info"){_.textContent=L,_.className="mt-3 text-sm "+(D==="error"?"text-red-400":D==="success"?"text-green-400":"text-yellow-400")}function je(){i&&URL.revokeObjectURL(i),p.remove()}function et(L){switch(r=L,k.forEach(D=>{D.classList.toggle("hidden",D.dataset.step!==String(L))}),E.textContent=`Step ${L} of 4`,ae(""),g.classList.add("hidden"),y.classList.add("hidden"),T.classList.add("hidden"),v.classList.add("hidden"),L){case 1:R.textContent="Choose the new spraywall photo from your device. Nothing is uploaded yet.";break;case 2:R.textContent=`Click ${rt} distinct, easily-identifiable holds on the NEW image. Remember which ones — you'll click the same holds on the current image next.`,g.classList.remove("hidden"),y.classList.toggle("hidden",a.length===0),a.length===rt&&T.classList.remove("hidden"),tt("new"),We(z,a);break;case 3:R.textContent=`Now click the SAME ${rt} holds on the CURRENT board image, in the SAME order.`,g.classList.remove("hidden"),y.classList.toggle("hidden",l.length===0),l.length===rt&&T.classList.remove("hidden"),tt("old"),We(F,l);break;case 4:R.textContent="Review the transformed boulder positions on the new image. Confirm to upload and save.",g.classList.remove("hidden"),v.classList.remove("hidden"),B();break}}function tt(L){const D=L==="new"?Y:w,q=L==="new"?a:l;D.textContent=`${q.length}/${rt} points`}function We(L,D){L.innerHTML="",D.forEach((q,U)=>{const Z=document.createElement("div");Z.style.position="absolute",Z.style.left=`${q.x}%`,Z.style.top=`${q.y}%`,Z.style.width="18px",Z.style.height="18px",Z.style.transform="translate(-50%, -50%)",Z.style.borderRadius="50%",Z.style.background=KT[U]??"#fff",Z.style.border="2px solid white",Z.style.color="white",Z.style.fontSize="11px",Z.style.fontWeight="bold",Z.style.display="flex",Z.style.alignItems="center",Z.style.justifyContent="center",Z.style.pointerEvents="none",Z.textContent=String(U+1),L.appendChild(Z)})}function V(L,D){const q=L.getBoundingClientRect(),U=(D.clientX-q.left)/q.width*100,Z=(D.clientY-q.top)/q.height*100;return{x:Vu(U,0,100),y:Vu(Z,0,100)}}function B(){try{const D=l.map(U=>({x:U.x/100,y:U.y/100})),q=a.map(U=>({x:U.x/100,y:U.y/100}));u=HT(D,q)}catch(D){ae(D instanceof Error?D.message:"Failed to compute transform","error"),u=null,v.classList.add("hidden");return}ee.innerHTML="";let L=0;for(const D of t)for(const q of D.holds){const{x:U,y:Z}=Cf(u,{x:q.x/100,y:q.y/100}),Ee=U*100,Fe=Z*100;if(Ee<-5||Ee>105||Fe<-5||Fe>105)continue;L++;const me=document.createElement("div");me.style.position="absolute",me.style.left=`${Ee}%`,me.style.top=`${Fe}%`,me.style.width="10px",me.style.height="10px",me.style.transform="translate(-50%, -50%)",me.style.borderRadius="50%",me.style.background=XT(q),me.style.opacity="0.85",me.style.border="1px solid black",ee.appendChild(me)}ae(`${L} hold${L===1?"":"s"} mapped onto the new image. Confirm if alignment looks correct.`,"info")}async function J(){if(d)return;if(!u||!s){ae("Missing transform or image — go back and re-pick points.","error");return}d=!0,v.disabled=!0,g.disabled=!0,I.disabled=!0,ae("Uploading image…","info");const L=Date.now(),D=FT(new Date(L)),q=`${L}_${D}`;try{const{url:U,path:Z,width:Ee,height:Fe}=await qT(s,q);ae("Writing board & boulders…","info");const me={id:q,version:D,createdAt:L,updatedAt:L,recalibrated:!0,imageUrl:U,imagePath:Z,imageWidth:Ee,imageHeight:Fe},Ge=vv(Fr);Ge.set(ti(Fr,"boards",q),me);const nt=Ra(Fr,"boards",q,"boulders");for(const at of t){const bt=WT(at.holds,u);Ge.set(ti(nt,at.id),{...at,holds:bt,updatedAt:L})}await Ge.commit(),ae("Done! New board is live.","success"),setTimeout(je,600)}catch(U){console.error("Recalibration commit failed:",U),ae(U instanceof Error?`Failed: ${U.message}`:"Failed to save new board. Check console.","error"),d=!1,v.disabled=!1,g.disabled=!1,I.disabled=!1}}I.addEventListener("click",je),g.addEventListener("click",()=>{r>1&&et(r-1)}),y.addEventListener("click",()=>{r===2?(a.length=0,We(z,a),tt("new"),y.classList.add("hidden"),T.classList.add("hidden")):r===3&&(l.length=0,We(F,l),tt("old"),y.classList.add("hidden"),T.classList.add("hidden"))}),T.addEventListener("click",()=>{r===1&&s?et(2):r===2&&a.length===rt?et(3):r===3&&l.length===rt&&et(4)}),v.addEventListener("click",J),N.addEventListener("change",async()=>{var D;const L=(D=N.files)==null?void 0:D[0];if(L){if(!L.type.startsWith("image/")){ae("Please select an image file.","error");return}i&&URL.revokeObjectURL(i),s=L,i=URL.createObjectURL(L),C.src=i,W.src=i,H.src=e.imageUrl,await Promise.all([Ou(C),Ou(H)]),T.classList.remove("hidden"),ae('Image loaded. Click "Next" to start picking reference holds.',"info")}}),z.addEventListener("click",L=>{a.length>=rt||(a.push(V(z,L)),We(z,a),tt("new"),y.classList.remove("hidden"),a.length===rt&&T.classList.remove("hidden"))}),F.addEventListener("click",L=>{l.length>=rt||(l.push(V(F,L)),We(F,l),tt("old"),y.classList.remove("hidden"),l.length===rt&&T.classList.remove("hidden"))}),et(1)}function Vu(n,e,t){return Math.max(e,Math.min(t,n))}function Ou(n){return new Promise(e=>{n.complete&&n.naturalWidth>0?e():(n.addEventListener("load",()=>e(),{once:!0}),n.addEventListener("error",()=>e(),{once:!0}))})}function XT(n){switch(n.type){case"start":return"#16a34a";case"feet-only":return"#eab308";case"middle":return"#ffffff";case"top":return"#ef4444"}}const YT="hofiisek@gmail.com";let j={boulders:[],currentBoulder:null,selectedBoulderId:null,mode:"set"},$n=null,vt=null,ke=null,Pt=null,Ct=new Set,li="grade",le=null,nc=[],Br=null,Ds=null,dt=null;const kt="Historical board is read-only. Switch to the current board to make changes.";function rr(){return(vt==null?void 0:vt.email)===YT}function xn(){return!!le&&le.id===Br}const JT=["Crimps","Slopers","Pinches","Underclings","Pockets","Dyno","Technical"],Lu=100,Mu=250;function kf(){return`${Date.now()}-${Math.random().toString(36).slice(2,11)}`}function ZT(n,e,t){const r=Date.now();return{id:kf(),name:n,grade:e,description:t,holds:[],createdAt:r,updatedAt:r}}function eI(){const n=document.querySelector("#app");n.innerHTML=`
    <div class="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-full md:w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
        <div class="mb-3">
          <h1 class="text-xl md:text-2xl font-bold mb-1">The Spraywall Cellar</h1>
          <p class="text-xs md:text-sm text-gray-400">Set boulders. Chalk the fuck up. Send it.</p>
        </div>
        ${vt?`<p class="text-xs text-gray-500 mb-3">Logged in as: ${vt.email}</p>`:'<p class="text-xs text-yellow-500 mb-3">⚠️ Login to create/edit/delete boulders</p>'}

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed">
            Set boulders
          </button>
          <button id="mode-climb" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Send hard!
          </button>
        </div>

        <!-- Current Boulder Form -->
        <div id="set-mode-content">
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <input
            type="text"
            id="boulder-name"
            placeholder="Name"
            maxlength="100"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            id="boulder-grade"
            required
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:text-gray-400"
          >
            <option value="" disabled selected>Grade</option>
            ${["5a","5a+","5b","5b+","5c","5c+","6a","6a+","6b","6b+","6c","6c+","7a","7a+","7b","7b+","7c","7c+"].map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <div class="mb-2">
            <div id="boulder-rating" class="flex gap-1">
              ${[1,2,3].map(e=>`
                <button
                  type="button"
                  data-rating="${e}"
                  class="rating-star p-2 -m-1 text-gray-500 hover:text-amber-300"
                  title="${e} star${e>1?"s":""}"
                >
                  <svg class="w-7 h-7 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </button>
              `).join("")}
            </div>
          </div>
          <textarea
            id="boulder-description"
            placeholder="Description (optional)"
            rows="2"
            maxlength="250"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          ></textarea>
          <div id="boulder-tags" class="flex flex-wrap gap-2 mb-3">
            ${JT.map(e=>`
              <button type="button" data-tag="${e}" class="px-3 py-1 rounded text-sm bg-gray-600 text-gray-300 hover:bg-gray-500">${e}</button>
            `).join("")}
          </div>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-3 md:py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded font-medium text-sm md:text-base">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-3 md:py-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded font-medium text-sm md:text-base">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-white hover:bg-gray-200 active:bg-gray-300 text-gray-900 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded font-medium text-sm md:text-base">
              Top
            </button>
          </div>
          <hr class="my-3 border-gray-600" />
          <div class="flex gap-2">
            <button id="btn-save" class="flex-1 px-4 py-3 md:py-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded font-medium text-sm md:text-base">
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
          <div class="mb-2">
            <h2 class="inline-flex items-center gap-1 bg-gray-700 rounded px-2 py-1 text-xs font-semibold text-gray-300">
              <span>Board:</span>
              ${rr()?`
                <select id="board-version-select" class="bg-gray-700 text-gray-300 font-normal cursor-pointer outline-none">
                  <!-- populated by renderBoardSelector() -->
                </select>
              `:`
                <span id="board-version-label" class="font-normal">${le?le.version:"—"}</span>
              `}
              <span class="font-normal text-gray-500">(<span id="boulder-count">0</span>)</span>
              ${rr()?`
              <button id="btn-recalibrate" class="ml-1 p-0.5 text-purple-300 hover:text-purple-200 active:text-purple-100" title="Upload new photo & recalibrate">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4" />
                </svg>
              </button>
              `:""}
            </h2>
          </div>
          <div class="mb-3">
            <div id="boulder-sort" class="inline-flex bg-gray-700 rounded text-xs overflow-hidden">
              <button data-sort="grade" class="px-2 py-1" title="Sort by grade (hardest first)">Grade</button>
              <button data-sort="stars" class="px-2 py-1" title="Sort by stars (best first)">Stars</button>
            </div>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Login/Logout Button -->
        <div class="mt-3 md:mt-4">
          ${vt?'<button id="logout-btn" class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded text-sm">Logout</button>':'<button id="login-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">Login with Google</button>'}
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
                ${le?`src="${le.imageUrl}"`:""}
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
  `}function tI(){const n=document.querySelector("#panzoom-container"),e=document.querySelector("#spraywall-img");if(!n||!e)return;const t=()=>{const r=n.parentElement,s=r.clientWidth,i=r.clientHeight,a=e.clientWidth||e.naturalWidth,l=e.clientHeight||e.naturalHeight,u=s/a,d=i/l,p=Math.min(u,d),E=Math.max(u,d);$n=zu(n,{maxScale:5,minScale:p*.9,cursor:"grab",canvas:!0,step:.1}),$n.zoom(E,{animate:!1}),$n.pan(0,0,{animate:!1}),r.addEventListener("wheel",R=>{$n&&$n.zoomWithWheel(R,{step:.1})})};e.naturalWidth>0?t():e.addEventListener("load",t,{once:!0})}function Uu(){return $n}function Tt(){var s;const n=document.querySelector("#holds-overlay");if(!n)return;n.innerHTML="";const e=((s=j.currentBoulder)==null?void 0:s.holds)||[],t=j.boulders.find(i=>i.id===j.selectedBoulderId);((t==null?void 0:t.holds)||e).forEach(i=>{const a=document.createElement("div");a.className=`hold-marker ${i.type}`,a.style.left=`${i.x}%`,a.style.top=`${i.y}%`,a.dataset.holdId=i.id,a.addEventListener("contextmenu",l=>{l.preventDefault(),Nf(i.id)}),n.appendChild(a)})}function nI(n,e,t=2){if(!j.currentBoulder)return null;for(const r of j.currentBoulder.holds){const s=Math.abs(r.x-n),i=Math.abs(r.y-e);if(Math.sqrt(s*s+i*i)<t)return r}return null}function rI(n,e){const t=document.querySelector("#spraywall-img");if(!t)return;const r=t.getBoundingClientRect(),s=(n.clientX-r.left)/r.width*100,i=(n.clientY-r.top)/r.height*100,a=nI(s,i,1);if(a){Nf(a.id);return}if(!j.currentBoulder){const d=document.querySelector("#boulder-name").value.trim()||"";j.currentBoulder=ZT(d)}const l={id:kf(),x:Math.max(0,Math.min(100,s)),y:Math.max(0,Math.min(100,i)),type:e};j.currentBoulder.holds.push(l),Tt()}function Nf(n){j.currentBoulder&&(j.currentBoulder.holds=j.currentBoulder.holds.filter(e=>e.id!==n),Tt())}function Ni(){const n=document.querySelector("#mode-set"),e=document.querySelector("#mode-climb"),t=document.querySelector("#set-mode-content"),r=document.querySelector("#climb-mode-content");if(!n||!e||!t||!r)return;const s="disabled:opacity-50 disabled:cursor-not-allowed";j.mode==="set"?(n.className=`flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white ${s}`,e.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",t.style.display="block",r.style.display="none"):(n.className=`flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white ${s}`,e.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white",t.style.display="none",r.style.display="block")}function Fu(n){if(n==="climb"){j.currentBoulder=null,j.selectedBoulderId=null;const e=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),r=document.querySelector("#boulder-description");e&&(e.value=""),t&&(t.value=""),r&&(r.value=""),ke=null,yn(),Tt()}n==="set"&&(j.selectedBoulderId=null,Tt(),ln()),j.mode=n,Ni()}async function sI(){if(!vt){alert("Please login to save boulders.");return}if(!xn()){alert(kt);return}if(!j.currentBoulder){alert("No boulder to save. Add some holds first!");return}if(j.currentBoulder.holds.length===0){alert("Add at least one hold before saving.");return}const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description"),r=n.value.trim();if(!r){alert("Please enter a boulder name."),n.focus();return}if(r.length>Lu){alert(`Name must be ${Lu} characters or fewer.`),n.focus();return}const s=e.value.trim();if(!s){alert("Please enter a grade."),e.focus();return}if(Pt===null){alert("Please select a star rating.");return}const i=t.value.trim();if(i.length>Mu){alert(`Description must be ${Mu} characters or fewer.`),t.focus();return}if(j.currentBoulder.name=r,j.currentBoulder.grade=s,j.currentBoulder.rating=Pt,i?j.currentBoulder.description=i:delete j.currentBoulder.description,Ct.size>0?j.currentBoulder.tags=[...Ct]:delete j.currentBoulder.tags,j.currentBoulder.updatedAt=Date.now(),!le){alert("No board configured yet. Please reload or contact the admin.");return}try{await Ko(le.id,j.currentBoulder),j.currentBoulder=null,n.value="",e.value="",t.value="",ke=null,yn(),Pt=null,Di(),Ct.clear(),Yr(),Tt()}catch(a){alert("Failed to save boulder. Please check your connection and try again."),console.error(a)}}function iI(){if(j.currentBoulder&&j.currentBoulder.holds.length>0&&!confirm("Are you sure you want to clear this boulder? All unsaved changes will be lost."))return;j.currentBoulder=null,j.selectedBoulderId=null;const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description");n&&(n.value=""),e&&(e.value=""),t&&(t.value=""),ke=null,yn(),Pt=null,Di(),Ct.clear(),Yr(),Tt(),ln()}function ln(){const n=document.querySelector("#boulder-list"),e=document.querySelector("#boulder-count");if(!n)return;if(e&&(e.textContent=j.boulders.length.toString()),j.boulders.length===0){n.innerHTML='<p class="text-gray-500 text-sm">No boulders saved yet.</p>';return}const t=!xn();n.innerHTML=[...j.boulders].sort((r,s)=>{const i=(s.grade??"").localeCompare(r.grade??""),a=(s.rating??0)-(r.rating??0);if(li==="grade"){if(i!==0)return i;if(a!==0)return a}else{if(a!==0)return a;if(i!==0)return i}return s.createdAt-r.createdAt}).map(r=>{const s=j.selectedBoulderId===r.id,i=t,a=t||!!r.isLocked,l=t||!!r.isLocked,u=t?kt:r.isLocked?"Locked":"Unlocked",d=t?kt:"Edit boulder",p=t?kt:"Delete boulder";return`
        <div
          class="p-4 md:p-3 rounded ${s?"bg-blue-600":"bg-gray-700 hover:bg-gray-600 active:bg-gray-600"} cursor-pointer"
          data-boulder-id="${r.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${r.name}</h3>
              ${r.grade||r.rating?`
                <p class="text-sm md:text-sm text-gray-300 flex items-center gap-2">
                  ${r.grade?`<span>${r.grade}</span>`:""}
                  ${r.rating?`<span><span class="text-amber-400">${"★".repeat(r.rating)}</span><span class="text-gray-600">${"★".repeat(3-r.rating)}</span></span>`:""}
                </p>
              `:""}
              ${r.description?`<p class="text-xs md:text-xs text-gray-400 mt-1 italic whitespace-pre-wrap break-words">${r.description}</p>`:""}
              ${r.tags&&r.tags.length>0?`
                <div class="flex flex-wrap gap-1 mt-1">
                  ${r.tags.map(m=>`<span class="px-2 py-0.5 rounded bg-gray-500 text-gray-100 text-xs">${m}</span>`).join("")}
                </div>
              `:""}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${r.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="${r.isLocked?"text-yellow-400 hover:text-yellow-300":"text-gray-400 hover:text-gray-300"} active:text-gray-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-toggle-lock="${r.id}"
                title="${u}"
                ${i?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${r.isLocked?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />'}
                </svg>
              </button>
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-edit-boulder="${r.id}"
                title="${d}"
                ${a?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-delete-boulder="${r.id}"
                title="${p}"
                ${l?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `}).join(""),n.querySelectorAll("[data-boulder-id]").forEach(r=>{r.addEventListener("click",s=>{const i=s.target;if(i.closest("[data-delete-boulder]")||i.closest("[data-edit-boulder]")||i.closest("[data-toggle-lock]"))return;const a=r.dataset.boulderId;oI(a)})}),n.querySelectorAll("[data-toggle-lock]").forEach(r=>{r.addEventListener("click",s=>{s.stopPropagation();const i=r.dataset.toggleLock;aI(i)})}),n.querySelectorAll("[data-edit-boulder]").forEach(r=>{r.addEventListener("click",s=>{s.stopPropagation();const i=r.dataset.editBoulder,a=j.boulders.find(l=>l.id===i);a!=null&&a.isLocked||cI(i)})}),n.querySelectorAll("[data-delete-boulder]").forEach(r=>{r.addEventListener("click",s=>{s.stopPropagation();const i=r.dataset.deleteBoulder,a=j.boulders.find(l=>l.id===i);a!=null&&a.isLocked||lI(i)})})}function oI(n){j.selectedBoulderId===n?j.selectedBoulderId=null:j.selectedBoulderId=n,ln(),Tt()}async function aI(n){if(!rr()){alert("Only the admin can lock/unlock boulders.");return}if(!xn()){alert(kt);return}const e=j.boulders.find(t=>t.id===n);if(e&&le){if(!e.isLocked){e.isLocked=!0;try{await Ko(le.id,e)}catch(t){alert("Failed to lock boulder. Please check your connection."),console.error(t)}return}e.isLocked=!1;try{await Ko(le.id,e)}catch(t){alert("Failed to unlock boulder. Please check your connection."),console.error(t)}}}async function cI(n){if(!vt){alert("Please login to edit boulders.");return}if(!xn()){alert(kt);return}const e=j.boulders.find(i=>i.id===n);if(!e||!confirm("Are you sure you want to edit this boulder?"))return;j.mode="set",Ni(),j.selectedBoulderId=null,j.currentBoulder={...e,holds:[...e.holds]};const t=document.querySelector("#boulder-name"),r=document.querySelector("#boulder-grade"),s=document.querySelector("#boulder-description");t&&(t.value=e.name),r&&(r.value=e.grade||""),s&&(s.value=e.description||""),Pt=e.rating??null,Di(),Ct=new Set(e.tags??[]),Yr(),Tt()}async function lI(n){if(!vt){alert("Please login to delete boulders.");return}if(!xn()){alert(kt);return}if(confirm("Are you sure you want to delete this boulder?")&&le)try{await zT(le.id,n),j.selectedBoulderId===n&&(j.selectedBoulderId=null,Tt())}catch(e){alert("Failed to delete boulder. Please check your connection and try again."),console.error(e)}}function yn(){const n=document.querySelector("#btn-start"),e=document.querySelector("#btn-feet-only"),t=document.querySelector("#btn-middle"),r=document.querySelector("#btn-top");[n,e,t,r].forEach(s=>{s==null||s.classList.remove("ring-2","ring-white")}),ke==="start"&&(n==null||n.classList.add("ring-2","ring-white")),ke==="feet-only"&&(e==null||e.classList.add("ring-2","ring-white")),ke==="middle"&&(t==null||t.classList.add("ring-2","ring-white")),ke==="top"&&(r==null||r.classList.add("ring-2","ring-white"))}function Di(){document.querySelectorAll("#boulder-rating [data-rating]").forEach(n=>{const e=Number(n.dataset.rating),t=Pt!==null&&e<=Pt;n.classList.toggle("text-amber-400",t),n.classList.toggle("text-gray-500",!t)})}function Yr(){document.querySelectorAll("#boulder-tags [data-tag]").forEach(n=>{const e=n.dataset.tag,t=Ct.has(e);n.classList.toggle("bg-amber-400",t),n.classList.toggle("text-gray-900",t),n.classList.toggle("bg-gray-600",!t),n.classList.toggle("text-gray-300",!t)})}function Bu(){document.querySelectorAll("#boulder-sort [data-sort]").forEach(n=>{const e=n.dataset.sort===li;n.classList.toggle("bg-blue-600",e),n.classList.toggle("text-white",e),n.classList.toggle("text-gray-300",!e)})}function uI(){var i,a,l,u,d,p,m,E,R,k,N,C,H,W,z;let n=0,e=0,t=!1;(i=document.querySelector("#login-btn"))==null||i.addEventListener("click",async()=>{try{await PE(Go,LT)}catch(F){console.error("Login failed:",F),alert("Failed to login. Please try again.")}}),(a=document.querySelector("#logout-btn"))==null||a.addEventListener("click",async()=>{confirm("Are you sure you want to logout?")&&await cE(Go)}),(l=document.querySelector("#mode-set"))==null||l.addEventListener("click",()=>{Fu("set")}),(u=document.querySelector("#mode-climb"))==null||u.addEventListener("click",()=>{Fu("climb")}),(d=document.querySelector("#btn-start"))==null||d.addEventListener("click",()=>{ke=ke==="start"?null:"start",yn()}),(p=document.querySelector("#btn-feet-only"))==null||p.addEventListener("click",()=>{ke=ke==="feet-only"?null:"feet-only",yn()}),(m=document.querySelector("#btn-middle"))==null||m.addEventListener("click",()=>{ke=ke==="middle"?null:"middle",yn()}),(E=document.querySelector("#btn-top"))==null||E.addEventListener("click",()=>{ke=ke==="top"?null:"top",yn()}),(R=document.querySelector("#boulder-rating"))==null||R.addEventListener("click",F=>{const ee=F.target.closest("[data-rating]");if(!ee)return;const Y=Number(ee.dataset.rating);Pt=Pt===Y?null:Y,Di()}),(k=document.querySelector("#boulder-tags"))==null||k.addEventListener("click",F=>{const ee=F.target.closest("[data-tag]");if(!ee)return;const Y=ee.dataset.tag;Ct.has(Y)?Ct.delete(Y):Ct.add(Y),Yr()}),Yr(),(N=document.querySelector("#boulder-sort"))==null||N.addEventListener("click",F=>{const ee=F.target.closest("[data-sort]");if(!ee)return;const Y=ee.dataset.sort;Y!==li&&(li=Y,Bu(),ln())}),Bu();const r=document.querySelector("#panzoom-container");r==null||r.addEventListener("panzoomstart",()=>{const F=Uu();if(F){const ee=F.getPan();n=ee.x,e=ee.y,t=!1}}),r==null||r.addEventListener("panzoomchange",()=>{const F=Uu();if(F){const ee=F.getPan();(Math.abs(ee.x-n)>2||Math.abs(ee.y-e)>2)&&(t=!0)}}),r==null||r.addEventListener("panzoomend",()=>{setTimeout(()=>{t=!1},100)});const s=document.querySelector("#spraywall-img");s==null||s.addEventListener("click",F=>{ke&&(t||rI(F,ke))}),(C=document.querySelector("#btn-save"))==null||C.addEventListener("click",sI),(H=document.querySelector("#btn-clear"))==null||H.addEventListener("click",iI),(W=document.querySelector("#btn-recalibrate"))==null||W.addEventListener("click",()=>{if(rr()){if(!le){alert("Wait for the current board to load before recalibrating.");return}if(!xn()){alert("Switch to the current board before recalibrating.");return}QT({currentBoard:le,currentBoulders:j.boulders})}}),(z=document.querySelector("#board-version-select"))==null||z.addEventListener("change",F=>{const ee=F.target.value,Y=nc.find(w=>w.id===ee);Y&&Df(Y)})}async function qu(){aE(Go,async n=>{vt=n,await dI()})}function hI(n){dt&&(dt(),dt=null),dt=jT(n,e=>{j.boulders=e,ln(),j.selectedBoulderId&&Tt()})}function Df(n){le=n;const e=document.querySelector("#spraywall-img");e&&(n?e.src=n.imageUrl:e.removeAttribute("src"));const t=document.querySelector("#board-version-label");t&&(t.textContent=n?n.version:"—"),n?hI(n.id):(dt&&(dt(),dt=null),j.boulders=[],ln()),xf(),Vf()}function xf(){const n=document.querySelector("#board-version-select");n&&(n.innerHTML=nc.map(e=>{const t=e.id===Br?" (current)":" (legacy)",r=e.id===(le==null?void 0:le.id)?"selected":"";return`<option value="${e.id}" ${r}>${e.version}${t}</option>`}).join(""))}function Vf(){const n=!xn(),e=document.querySelector("#btn-recalibrate");e&&(e.style.display=rr()&&!n?"":"none");const t=document.querySelector("#mode-set");t&&(t.disabled=n,t.title=n?kt:""),n&&j.mode==="set"&&(j.mode="climb",Ni());const r=document.querySelector("#btn-save");r&&(r.disabled=n,r.title=n?kt:""),ln()}async function dI(){Ds&&(Ds(),Ds=null),dt&&(dt(),dt=null),eI(),ln(),Ds=BT((n,e)=>{nc=n;const t=(e==null?void 0:e.id)??null,r=Br===null,s=t!==Br,i=!rr()&&(le==null?void 0:le.id)!==t;if(Br=t,r||s||i)Df(e);else{const a=n.find(l=>l.id===(le==null?void 0:le.id))??null;a&&(le=a),xf(),Vf()}}),tI(),uI(),Ni()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qu):qu();
