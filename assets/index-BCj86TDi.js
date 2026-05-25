(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ae=function(){return Ae=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ae.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}));var tp=typeof document<"u"&&!!document.documentMode,Ki;function np(){return Ki||(Ki=document.createElement("div").style)}var Qc=["webkit","moz","ms"],_s={};function zo(n){if(_s[n])return _s[n];var e=np();if(n in e)return _s[n]=n;for(var t=n[0].toUpperCase()+n.slice(1),r=Qc.length;r--;){var s="".concat(Qc[r]).concat(t);if(s in e)return _s[n]=s}}function ys(n,e){return parseFloat(e[zo(n)])||0}function vs(n,e,t){t===void 0&&(t=window.getComputedStyle(n));var r=e==="border"?"Width":"";return{left:ys("".concat(e,"Left").concat(r),t),right:ys("".concat(e,"Right").concat(r),t),top:ys("".concat(e,"Top").concat(r),t),bottom:ys("".concat(e,"Bottom").concat(r),t)}}function qn(n,e,t){n.style[zo(e)]=t}function rp(n,e){var t=zo("transform");qn(n,"transition","".concat(t," ").concat(e.duration,"ms ").concat(e.easing))}function sp(n,e,t){var r=e.x,s=e.y,i=e.scale,a=e.isSVG;if(qn(n,"transform","scale(".concat(i,") translate(").concat(r,"px, ").concat(s,"px)")),a&&tp){var l=window.getComputedStyle(n).getPropertyValue("transform");n.setAttribute("transform",l)}}function Qi(n){var e=n.parentNode,t=window.getComputedStyle(n),r=window.getComputedStyle(e),s=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{elem:{style:t,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,margin:vs(n,"margin",t),border:vs(n,"border",t)},parent:{style:r,width:i.width,height:i.height,top:i.top,bottom:i.bottom,left:i.left,right:i.right,padding:vs(e,"padding",r),border:vs(e,"border",r)}}}var Mr={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?Mr={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(Mr={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function Xi(n,e,t,r){Mr[n].split(" ").forEach(function(s){e.addEventListener(s,t,r)})}function Yi(n,e,t){Mr[n].split(" ").forEach(function(r){e.removeEventListener(r,t)})}function Fu(n,e){for(var t=n.length;t--;)if(n[t].pointerId===e.pointerId)return t;return-1}function mo(n,e){var t;if(e.touches){t=0;for(var r=0,s=e.touches;r<s.length;r++){var i=s[r];i.pointerId=t++,mo(n,i)}return}t=Fu(n,e),t>-1&&n.splice(t,1),n.push(e)}function ip(n,e){if(e.touches){for(;n.length;)n.pop();return}var t=Fu(n,e);t>-1&&n.splice(t,1)}function Xc(n){n=n.slice(0);for(var e=n.pop(),t;t=n.pop();)e={clientX:(t.clientX-e.clientX)/2+e.clientX,clientY:(t.clientY-e.clientY)/2+e.clientY};return e}function Ji(n){if(n.length<2)return 0;var e=n[0],t=n[1];return Math.sqrt(Math.pow(Math.abs(t.clientX-e.clientX),2)+Math.pow(Math.abs(t.clientY-e.clientY),2))}function op(n){for(var e=n;e&&e.parentNode;){if(e.parentNode===document)return!0;e=e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}return!1}function ap(n){return(n.getAttribute("class")||"").trim()}function cp(n,e){return n.nodeType===1&&" ".concat(ap(n)," ").indexOf(" ".concat(e," "))>-1}function lp(n,e){for(var t=n;t!=null;t=t.parentNode)if(cp(t,e.excludeClass)||e.exclude.indexOf(t)>-1)return!0;return!1}var up=/^http:[\w\.\/]+svg$/;function hp(n){return up.test(n.namespaceURI)&&n.nodeName.toLowerCase()!=="svg"}function dp(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}var Bu={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(n){n.preventDefault(),n.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:sp,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function qu(n,e){if(!n)throw new Error("Panzoom requires an element as an argument");if(n.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!op(n))throw new Error("Panzoom should be called on elements that have been attached to the DOM");e=Ae(Ae({},Bu),e);var t=hp(n),r=n.parentNode;r.style.overflow=e.overflow,r.style.userSelect="none",r.style.touchAction=e.touchAction,(e.canvas?r:n).style.cursor=e.cursor,n.style.userSelect="none",n.style.touchAction=e.touchAction,qn(n,"transformOrigin",typeof e.origin=="string"?e.origin:t?"0 0":"50% 50%");function s(){r.style.overflow="",r.style.userSelect="",r.style.touchAction="",r.style.cursor="",n.style.cursor="",n.style.userSelect="",n.style.touchAction="",qn(n,"transformOrigin","")}function i(V){V===void 0&&(V={});for(var q in V)V.hasOwnProperty(q)&&(e[q]=V[q]);(V.hasOwnProperty("cursor")||V.hasOwnProperty("canvas"))&&(r.style.cursor=n.style.cursor="",(e.canvas?r:n).style.cursor=e.cursor),V.hasOwnProperty("overflow")&&(r.style.overflow=V.overflow),V.hasOwnProperty("touchAction")&&(r.style.touchAction=V.touchAction,n.style.touchAction=V.touchAction)}var a=0,l=0,u=1,d=!1;N(e.startScale,{animate:!1,force:!0}),setTimeout(function(){k(e.startX,e.startY,{animate:!1,force:!0})});function p(V,q,Y){if(!Y.silent){var L=new CustomEvent(V,{detail:q});n.dispatchEvent(L)}}function m(V,q,Y){var L={x:a,y:l,scale:u,isSVG:t,originalEvent:Y};return requestAnimationFrame(function(){typeof q.animate=="boolean"&&(q.animate?rp(n,q):qn(n,"transition","none")),q.setTransform(n,L,q),p(V,L,q),p("panzoomchange",L,q)}),L}function E(V,q,Y,L){var x=Ae(Ae({},e),L),$={x:a,y:l,opts:x};if(!(L!=null&&L.force)&&(x.disablePan||x.panOnlyWhenZoomed&&u===x.startScale))return $;if(V=parseFloat(V),q=parseFloat(q),x.disableXAxis||($.x=(x.relative?a:0)+V),x.disableYAxis||($.y=(x.relative?l:0)+q),x.contain){var F=Qi(n),J=F.elem.width/u,ve=F.elem.height/u,Ue=J*Y,pe=ve*Y,Ge=(Ue-J)/2,rt=(pe-ve)/2;if(x.contain==="inside"){var ct=(-F.elem.margin.left-F.parent.padding.left+Ge)/Y,bt=(F.parent.width-Ue-F.parent.padding.left-F.elem.margin.left-F.parent.border.left-F.parent.border.right+Ge)/Y;$.x=Math.max(Math.min($.x,bt),ct);var xn=(-F.elem.margin.top-F.parent.padding.top+rt)/Y,ar=(F.parent.height-pe-F.parent.padding.top-F.elem.margin.top-F.parent.border.top-F.parent.border.bottom+rt)/Y;$.y=Math.max(Math.min($.y,ar),xn)}else if(x.contain==="outside"){var ct=(-(Ue-F.parent.width)-F.parent.padding.left-F.parent.border.left-F.parent.border.right+Ge)/Y,bt=(Ge-F.parent.padding.left)/Y;$.x=Math.max(Math.min($.x,bt),ct);var xn=(-(pe-F.parent.height)-F.parent.padding.top-F.parent.border.top-F.parent.border.bottom+rt)/Y,ar=(rt-F.parent.padding.top)/Y;$.y=Math.max(Math.min($.y,ar),xn)}}return x.roundPixels&&($.x=Math.round($.x),$.y=Math.round($.y)),$}function R(V,q){var Y=Ae(Ae({},e),q),L={scale:u,opts:Y};if(!(q!=null&&q.force)&&Y.disableZoom)return L;var x=e.minScale,$=e.maxScale;if(Y.contain){var F=Qi(n),J=F.elem.width/u,ve=F.elem.height/u;if(J>1&&ve>1){var Ue=F.parent.width-F.parent.border.left-F.parent.border.right,pe=F.parent.height-F.parent.border.top-F.parent.border.bottom,Ge=Ue/J,rt=pe/ve;e.contain==="inside"?$=Math.min($,Ge,rt):e.contain==="outside"&&(x=Math.max(x,Ge,rt))}}return L.scale=Math.min(Math.max(V,x),$),L}function k(V,q,Y,L){var x=E(V,q,u,Y);return a!==x.x||l!==x.y?(a=x.x,l=x.y,m("panzoompan",x.opts,L)):{x:a,y:l,scale:u,isSVG:t,originalEvent:L}}function N(V,q,Y){var L=R(V,q),x=L.opts;if(!(!(q!=null&&q.force)&&x.disableZoom)){V=L.scale;var $=a,F=l;if(x.focal){var J=x.focal;$=(J.x/V-J.x/u+a*V)/V,F=(J.y/V-J.y/u+l*V)/V}var ve=E($,F,V,{relative:!1,force:!0});return a=ve.x,l=ve.y,u=V,m("panzoomzoom",x,Y)}}function C(V,q){var Y=Ae(Ae(Ae({},e),{animate:!0}),q);return N(u*Math.exp((V?1:-1)*Y.step),Y)}function H(V){return C(!0,V)}function W(V){return C(!1,V)}function U(V,q,Y,L){var x=Qi(n),$={width:x.parent.width-x.parent.padding.left-x.parent.padding.right-x.parent.border.left-x.parent.border.right,height:x.parent.height-x.parent.padding.top-x.parent.padding.bottom-x.parent.border.top-x.parent.border.bottom},F=q.clientX-x.parent.left-x.parent.padding.left-x.parent.border.left-x.elem.margin.left,J=q.clientY-x.parent.top-x.parent.padding.top-x.parent.border.top-x.elem.margin.top;t||(F-=x.elem.width/u/2,J-=x.elem.height/u/2);var ve={x:F/$.width*($.width*V),y:J/$.height*($.height*V)};return N(V,Ae(Ae({},Y),{animate:!1,focal:ve}),L)}function B(V,q){V.preventDefault();var Y=Ae(Ae(Ae({},e),q),{animate:!1}),L=V.deltaY===0&&V.deltaX?V.deltaX:V.deltaY,x=L<0?1:-1,$=R(u*Math.exp(x*Y.step/3),Y).scale;return U($,V,Y,V)}function se(V){var q=Ae(Ae(Ae({},e),{animate:!0,force:!0}),V);u=R(q.startScale,q).scale;var Y=E(q.startX,q.startY,u,q);return a=Y.x,l=Y.y,m("panzoomreset",q)}var ie,T,g,y,w,v,I=[];function _(V){if(!lp(V.target,e)){mo(I,V),d=!0,e.handleStartEvent(V),ie=a,T=l,p("panzoomstart",{x:a,y:l,scale:u,isSVG:t,originalEvent:V},e);var q=Xc(I);g=q.clientX,y=q.clientY,w=u,v=Ji(I)}}function ae(V){if(!(!d||ie===void 0||T===void 0||g===void 0||y===void 0)){mo(I,V);var q=Xc(I),Y=I.length>1,L=u;if(Y){v===0&&(v=Ji(I));var x=Ji(I)-v;L=R(x*e.step/80+w).scale,U(L,q,{animate:!1},V)}(!Y||e.pinchAndPan)&&k(ie+(q.clientX-g)/L,T+(q.clientY-y)/L,{animate:!1},V)}}function $e(V){I.length===1&&p("panzoomend",{x:a,y:l,scale:u,isSVG:t,originalEvent:V},e),ip(I,V),d&&(d=!1,ie=T=g=y=void 0)}var tt=!1;function nt(){tt||(tt=!0,Xi("down",e.canvas?r:n,_),Xi("move",document,ae,{passive:!0}),Xi("up",document,$e,{passive:!0}))}function We(){tt=!1,Yi("down",e.canvas?r:n,_),Yi("move",document,ae),Yi("up",document,$e)}return e.noBind||nt(),{bind:nt,destroy:We,eventNames:Mr,getPan:function(){return{x:a,y:l}},getScale:function(){return u},getOptions:function(){return dp(e)},handleDown:_,handleMove:ae,handleUp:$e,pan:k,reset:se,resetStyle:s,setOptions:i,setStyle:function(V,q){return qn(n,V,q)},zoom:N,zoomIn:H,zoomOut:W,zoomToPoint:U,zoomWithWheel:B}}qu.defaultOptions=Bu;const fp=()=>{};var Yc={};/**
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
 */const $u=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(E=64)),r.push(t[p],t[m],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new mp;const E=i<<2|l>>4;if(r.push(E),d!==64){const R=l<<4&240|d>>2;if(r.push(R),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(n){const e=$u(n);return ju.encodeByteArray(e,!0)},Fs=function(n){return gp(n).replace(/\./g,"")},zu=function(n){try{return ju.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yp=()=>_p().__FIREBASE_DEFAULTS__,vp=()=>{if(typeof process>"u"||typeof Yc>"u")return;const n=Yc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ep=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zu(n[1]);return e&&JSON.parse(e)},ai=()=>{try{return fp()||yp()||vp()||Ep()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hu=n=>{var e,t;return(t=(e=ai())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Wu=n=>{const e=Hu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gu=()=>{var n;return(n=ai())==null?void 0:n.config},Ku=n=>{var e;return(e=ai())==null?void 0:e[`_${n}`]};/**
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
 */class wp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function sn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ho(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Qu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fs(JSON.stringify(t)),Fs(JSON.stringify(a)),""].join(".")}const Cr={};function Tp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Cr))Cr[e]?n.emulator.push(e):n.prod.push(e);return n}function Ip(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jc=!1;function Wo(n,e){if(typeof window>"u"||typeof document>"u"||!sn(window.location.host)||Cr[n]===e||Cr[n]||Jc)return;Cr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Tp().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Jc=!0,a()},E}function p(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=Ip(r),R=t("text"),k=document.getElementById(R)||document.createElement("span"),N=t("learnmore"),C=document.getElementById(N)||document.createElement("a"),H=t("preprendIcon"),W=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const U=E.element;l(U),p(C,N);const B=d();u(W,H),U.append(W,k,C,B),document.body.appendChild(U)}i?(k.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Ap(){var e;const n=(e=ai())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cp(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kp(){return!Ap()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Np(){try{return typeof indexedDB=="object"}catch{return!1}}function xp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Dp="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dp,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Vp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new It(s,l,r)}}function Vp(n,e){return n.replace(Op,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Op=/\{\$([^}]+)}/g;function Lp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Zc(i)&&Zc(a)){if(!Tn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zc(n){return n!==null&&typeof n=="object"}/**
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
 */function Qr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mp(n,e){const t=new Up(n,e);return t.subscribe.bind(t)}class Up{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Zi),s.error===void 0&&(s.error=Zi),s.complete===void 0&&(s.complete=Zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zi(){}/**
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
 */function de(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class Bp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new wp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($p(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qp(n){return n===pn?void 0:n}function $p(n){return n.instantiationMode==="EAGER"}/**
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
 */class jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const zp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Hp=ee.INFO,Wp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Gp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Wp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=Hp,this._logHandler=Gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Kp=(n,e)=>e.some(t=>n instanceof t);let el,tl;function Qp(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xp(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xu=new WeakMap,go=new WeakMap,Yu=new WeakMap,eo=new WeakMap,Ko=new WeakMap;function Yp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Xu.set(t,n)}).catch(()=>{}),Ko.set(e,n),e}function Jp(n){if(go.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});go.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zp(n){_o=n(_o)}function em(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(to(this),e,...t);return Yu.set(r,e.sort?e.sort():[e]),Wt(r)}:Xp().includes(n)?function(...e){return n.apply(to(this),e),Wt(Xu.get(this))}:function(...e){return Wt(n.apply(to(this),e))}}function tm(n){return typeof n=="function"?em(n):(n instanceof IDBTransaction&&Jp(n),Kp(n,Qp())?new Proxy(n,_o):n)}function Wt(n){if(n instanceof IDBRequest)return Yp(n);if(eo.has(n))return eo.get(n);const e=tm(n);return e!==n&&(eo.set(n,e),Ko.set(e,n)),e}const to=n=>Ko.get(n);function nm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Wt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Wt(a.result),u.oldVersion,u.newVersion,Wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const rm=["get","getKey","getAll","getAllKeys","count"],sm=["put","add","delete","clear"],no=new Map;function nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return no.set(e,i),i}Zp(n=>({...n,get:(e,t,r)=>nl(e,t)||n.get(e,t,r),has:(e,t)=>!!nl(e,t)||n.has(e,t)}));/**
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
 */class im{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(om(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function om(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",rl="0.14.6";/**
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
 */const kt=new Go("@firebase/app"),am="@firebase/app-compat",cm="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",hm="@firebase/app-check",dm="@firebase/auth",fm="@firebase/auth-compat",pm="@firebase/database",mm="@firebase/data-connect",gm="@firebase/database-compat",_m="@firebase/functions",ym="@firebase/functions-compat",vm="@firebase/installations",Em="@firebase/installations-compat",wm="@firebase/messaging",Tm="@firebase/messaging-compat",Im="@firebase/performance",bm="@firebase/performance-compat",Am="@firebase/remote-config",Rm="@firebase/remote-config-compat",Sm="@firebase/storage",Pm="@firebase/storage-compat",Cm="@firebase/firestore",km="@firebase/ai",Nm="@firebase/firestore-compat",xm="firebase",Dm="12.6.0";/**
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
 */const vo="[DEFAULT]",Vm={[yo]:"fire-core",[am]:"fire-core-compat",[lm]:"fire-analytics",[cm]:"fire-analytics-compat",[hm]:"fire-app-check",[um]:"fire-app-check-compat",[dm]:"fire-auth",[fm]:"fire-auth-compat",[pm]:"fire-rtdb",[mm]:"fire-data-connect",[gm]:"fire-rtdb-compat",[_m]:"fire-fn",[ym]:"fire-fn-compat",[vm]:"fire-iid",[Em]:"fire-iid-compat",[wm]:"fire-fcm",[Tm]:"fire-fcm-compat",[Im]:"fire-perf",[bm]:"fire-perf-compat",[Am]:"fire-rc",[Rm]:"fire-rc-compat",[Sm]:"fire-gcs",[Pm]:"fire-gcs-compat",[Cm]:"fire-fst",[Nm]:"fire-fst-compat",[km]:"fire-vertex","fire-js":"fire-js",[xm]:"fire-js-all"};/**
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
 */const Bs=new Map,Om=new Map,Eo=new Map;function sl(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(Eo.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of Bs.values())sl(t,n);for(const t of Om.values())sl(t,n);return!0}function ci(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Lm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Kr("app","Firebase",Lm);/**
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
 */class Mm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=Dm;function Ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:vo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(t||(t=Gu()),!t)throw Gt.create("no-options");const i=Bs.get(s);if(i){if(Tn(t,i.options)&&Tn(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const a=new jp(s);for(const u of Eo.values())a.addComponent(u);const l=new Mm(t,r,a);return Bs.set(s,l),l}function Qo(n=vo){const e=Bs.get(n);if(!e&&n===vo&&Gu())return Ju();if(!e)throw Gt.create("no-app",{appName:n});return e}function pt(n,e,t){let r=Vm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}In(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Um="firebase-heartbeat-database",Fm=1,Ur="firebase-heartbeat-store";let ro=null;function Zu(){return ro||(ro=nm(Um,Fm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),ro}async function Bm(n){try{const t=(await Zu()).transaction(Ur),r=await t.objectStore(Ur).get(eh(n));return await t.done,r}catch(e){if(e instanceof It)kt.warn(e.message);else{const t=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function il(n,e){try{const r=(await Zu()).transaction(Ur,"readwrite");await r.objectStore(Ur).put(e,eh(n)),await r.done}catch(t){if(t instanceof It)kt.warn(t.message);else{const r=Gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}function eh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qm=1024,$m=30;class jm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ol();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$m){const a=Wm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ol(),{heartbeatsToSend:r,unsentEntries:s}=zm(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function ol(){return new Date().toISOString().substring(0,10)}function zm(n,e=qm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),al(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),al(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Np()?xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Bm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function al(n){return Fs(JSON.stringify({version:2,heartbeats:n})).length}function Wm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Gm(n){In(new Yt("platform-logger",e=>new im(e),"PRIVATE")),In(new Yt("heartbeat",e=>new jm(e),"PRIVATE")),pt(yo,rl,n),pt(yo,rl,"esm2020"),pt("fire-js","")}Gm("");var Km="firebase",Qm="12.7.0";/**
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
 */pt(Km,Qm,"app");var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function y(){}y.prototype=g.prototype,T.F=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(w,v,I){for(var _=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)_[ae-2]=arguments[ae];return g.prototype[v].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)w[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;v<16;++v)w[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],v=T.g[2];let I=T.g[3],_;_=g+(I^y&(v^I))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[2]+606105819&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[6]+2821735955&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[10]+4294925233&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[14]+2792965006&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^I&(y^v))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[11]+643717713&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[15]+3634488961&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[3]+4107603335&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[7]+1735328473&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^I)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[11]+1839030562&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[7]+4139469664&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[3]+3572445317&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[15]+530742520&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~I))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[14]+2878612391&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[10]+4293915773&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[6]+2734768916&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[2]+718787259&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const y=g-this.blockSize,w=this.C;let v=this.h,I=0;for(;I<g;){if(v==0)for(;I<=y;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<g;)if(w[v++]=T.charCodeAt(I++),v==this.blockSize){s(this,w),v=0;break}}else for(;I<g;)if(w[v++]=T[I++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)T[g++]=this.g[y]>>>w&255;return T};function i(T,g){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;const y=[];let w=!0;for(let v=T.length-1;v>=0;v--){const I=T[v]|0;w&&I==g||(y[v]=I,w=!1)}this.g=y}var l={};function u(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return C(d(-T));const g=[];let y=1;for(let w=0;T>=y;w++)g[w]=T/y|0,y*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(p(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let w=m;for(let I=0;I<T.length;I+=8){var v=Math.min(8,T.length-I);const _=parseInt(T.substring(I,I+v),g);v<8?(v=d(Math.pow(g,v)),w=w.j(v).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var m=u(0),E=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();let T=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);T+=(w>=0?w:4294967296+w)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(N(this))return"-"+C(this).toString(T);const g=d(Math.pow(T,6));var y=this;let w="";for(;;){const v=B(y,g).g;y=H(y,v.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=v,k(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=H(this,T),N(T)?-1:k(T)?0:1};function C(T){const g=T.g.length,y=[];for(let w=0;w<g;w++)y[w]=~T.g[w];return new a(y,~T.h).add(E)}n.abs=function(){return N(this)?C(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),y=[];let w=0;for(let v=0;v<=g;v++){let I=w+(this.i(v)&65535)+(T.i(v)&65535),_=(I>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);w=_>>>16,I&=65535,_&=65535,y[v]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(T,g){return T.add(C(g))}n.j=function(T){if(k(this)||k(T))return m;if(N(this))return N(T)?C(this).j(C(T)):C(C(this).j(T));if(N(T))return C(this.j(C(T)));if(this.l(R)<0&&T.l(R)<0)return d(this.m()*T.m());const g=this.g.length+T.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<T.g.length;v++){const I=this.i(w)>>>16,_=this.i(w)&65535,ae=T.i(v)>>>16,$e=T.i(v)&65535;y[2*w+2*v]+=_*$e,W(y,2*w+2*v),y[2*w+2*v+1]+=I*$e,W(y,2*w+2*v+1),y[2*w+2*v+1]+=_*ae,W(y,2*w+2*v+1),y[2*w+2*v+2]+=I*ae,W(y,2*w+2*v+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function W(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function U(T,g){this.g=T,this.h=g}function B(T,g){if(k(g))throw Error("division by zero");if(k(T))return new U(m,m);if(N(T))return g=B(C(T),g),new U(C(g.g),C(g.h));if(N(g))return g=B(T,C(g)),new U(C(g.g),g.h);if(T.g.length>30){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,w=g;w.l(T)<=0;)y=se(y),w=se(w);var v=ie(y,1),I=ie(w,1);for(w=ie(w,2),y=ie(y,2);!k(w);){var _=I.add(w);_.l(T)<=0&&(v=v.add(y),I=_),w=ie(w,1),y=ie(y,1)}return g=H(T,v.j(g)),new U(v,g)}for(v=m;T.l(g)>=0;){for(y=Math.max(1,Math.floor(T.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(y),_=I.j(g);N(_)||_.l(T)>0;)y-=w,I=d(y),_=I.j(g);k(I)&&(I=E),v=v.add(I),T=H(T,_)}return new U(v,T)}n.B=function(T){return B(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function se(T){const g=T.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function ie(T,g){const y=g>>5;g%=32;const w=T.g.length-y,v=[];for(let I=0;I<w;I++)v[I]=g>0?T.i(I+y)>>>g|T.i(I+y+1)<<32-g:T.i(I+y);return new a(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Kt=a}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,Ar,rh,Cs,wo,sh,ih,oh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Es=="object"&&Es];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in h))break e;h=h[b]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,b,A){for(var D=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)D[Z-2]=arguments[Z];return c.prototype[b].apply(f,D)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let f=1;f<arguments.length;f++){const b=arguments[f];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const A=b.length||0;o.length=h+A;for(let D=0;D<A;D++)o[h+D]=b[D]}else o.push(b)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function H(){var o=T;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,h){const f=U.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var U=new N(()=>new B,o=>o.reset());class B{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ie=!1,T=new W,g=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(y)}};function y(){for(var o;o=H();){try{o.h.call(o.g)}catch(h){C(h)}var c=U;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}ie=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function ae(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(ae,v),ae.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),tt=0;function nt(o,c,h,f,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=b,this.key=++tt,this.da=this.fa=!1}function We(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function V(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function q(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Y(o){const c={};for(const h in o)c[h]=o[h];return c}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(o,c){let h,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(h in f)o[h]=f[h];for(let A=0;A<L.length;A++)h=L[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function $(o){this.src=o,this.g={},this.h=0}$.prototype.add=function(o,c,h,f,b){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const D=J(o,c,f,b);return D>-1?(c=o[D],h||(c.fa=!1)):(c=new nt(c,this.src,A,!!f,b),c.fa=h,o.push(c)),c};function F(o,c){const h=c.type;if(h in o.g){var f=o.g[h],b=Array.prototype.indexOf.call(f,c,void 0),A;(A=b>=0)&&Array.prototype.splice.call(f,b,1),A&&(We(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function J(o,c,h,f){for(let b=0;b<o.length;++b){const A=o[b];if(!A.da&&A.listener==c&&A.capture==!!h&&A.ha==f)return b}return-1}var ve="closure_lm_"+(Math.random()*1e6|0),Ue={};function pe(o,c,h,f,b){if(Array.isArray(c)){for(let A=0;A<c.length;A++)pe(o,c[A],h,f,b);return null}return h=ec(h),o&&o[$e]?o.J(c,h,l(f)?!!f.capture:!1,b):Ge(o,c,h,!1,f,b)}function Ge(o,c,h,f,b,A){if(!c)throw Error("Invalid event type");const D=l(b)?!!b.capture:!!b;let Z=Ci(o);if(Z||(o[ve]=Z=new $(o)),h=Z.add(c,h,f,D,A),h.proxy)return h;if(f=rt(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)I||(b=D),b===void 0&&(b=!1),o.addEventListener(c.toString(),f,b);else if(o.attachEvent)o.attachEvent(xn(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function rt(){function o(h){return c.call(o.src,o.listener,h)}const c=ar;return o}function ct(o,c,h,f,b){if(Array.isArray(c))for(var A=0;A<c.length;A++)ct(o,c[A],h,f,b);else f=l(f)?!!f.capture:!!f,h=ec(h),o&&o[$e]?(o=o.i,A=String(c).toString(),A in o.g&&(c=o.g[A],h=J(c,h,f,b),h>-1&&(We(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[A],o.h--)))):o&&(o=Ci(o))&&(c=o.g[c.toString()],o=-1,c&&(o=J(c,h,f,b)),(h=o>-1?c[o]:null)&&bt(h))}function bt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[$e])F(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(xn(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ci(c))?(F(h,o),h.h==0&&(h.src=null,c[ve]=null)):We(o)}}}function xn(o){return o in Ue?Ue[o]:Ue[o]="on"+o}function ar(o,c){if(o.da)o=!0;else{c=new ae(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&bt(o),o=h.call(f,c)}return o}function Ci(o){return o=o[ve],o instanceof $?o:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function ec(o){return typeof o=="function"?o:(o[ki]||(o[ki]=function(c){return o.handleEvent(c)}),o[ki])}function De(){w.call(this),this.i=new $(this),this.M=this,this.G=null}m(De,w),De.prototype[$e]=!0,De.prototype.removeEventListener=function(o,c,h,f){ct(this,o,c,h,f)};function Fe(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var b=c;c=new v(f,o),x(c,b)}b=!0;let A,D;if(h)for(D=h.length-1;D>=0;D--)A=c.g=h[D],b=is(A,f,!0,c)&&b;if(A=c.g=o,b=is(A,f,!0,c)&&b,b=is(A,f,!1,c)&&b,h)for(D=0;D<h.length;D++)A=c.g=h[D],b=is(A,f,!1,c)&&b}De.prototype.N=function(){if(De.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)We(h[f]);delete o.g[c],o.h--}}this.G=null},De.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},De.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function is(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let A=0;A<c.length;++A){const D=c[A];if(D&&!D.da&&D.capture==h){const Z=D.listener,be=D.ha||D.src;D.fa&&F(o.i,D),b=Z.call(be,f)!==!1&&b}}return b&&!f.defaultPrevented}function Cf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function tc(o){o.g=Cf(()=>{o.g=null,o.i&&(o.i=!1,tc(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class kf extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cr(o){w.call(this),this.h=o,this.g={}}m(cr,w);var nc=[];function rc(o){V(o.g,function(c,h){this.g.hasOwnProperty(h)&&bt(c)},o),o.g={}}cr.prototype.N=function(){cr.Z.N.call(this),rc(this)},cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=a.JSON.stringify,Nf=a.JSON.parse,xf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function sc(){}function ic(){}var lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xi(){v.call(this,"d")}m(xi,v);function Di(){v.call(this,"c")}m(Di,v);var ln={},oc=null;function os(){return oc=oc||new De}ln.Ia="serverreachability";function ac(o){v.call(this,ln.Ia,o)}m(ac,v);function ur(o){const c=os();Fe(c,new ac(c))}ln.STAT_EVENT="statevent";function cc(o,c){v.call(this,ln.STAT_EVENT,o),this.stat=c}m(cc,v);function Be(o){const c=os();Fe(c,new cc(c,o))}ln.Ja="timingevent";function lc(o,c){v.call(this,ln.Ja,o),this.size=c}m(lc,v);function hr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function dr(){this.g=!0}dr.prototype.ua=function(){this.g=!1};function Df(o,c,h,f,b,A){o.info(function(){if(o.g)if(A){var D="",Z=A.split("&");for(let ce=0;ce<Z.length;ce++){var be=Z[ce].split("=");if(be.length>1){const Se=be[0];be=be[1];const ut=Se.split("_");D=ut.length>=2&&ut[1]=="type"?D+(Se+"="+be+"&"):D+(Se+"=redacted&")}}}else D=null;else D=A;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+h+`
`+D})}function Vf(o,c,h,f,b,A,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+h+`
`+A+" "+D})}function Dn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Lf(o,h)+(f?" "+f:"")})}function Of(o,c){o.info(function(){return"TIMEOUT: "+c})}dr.prototype.info=function(){};function Lf(o,c){if(!o.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var h=A[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return Ni(A)}catch{return c}}var as={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},uc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hc;function Vi(){}m(Vi,sc),Vi.prototype.g=function(){return new XMLHttpRequest},hc=new Vi;function fr(o){return encodeURIComponent(String(o))}function Mf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Vt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new cr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}var fc={},Oi={};function Li(o,c,h){o.M=1,o.A=ls(lt(c)),o.u=h,o.R=!0,pc(o,null)}function pc(o,c){o.F=Date.now(),cs(o),o.B=lt(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Sc(h.i,"t",f),o.C=0,h=o.j.L,o.h=new dc,o.g=Hc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new kf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(nc[0]=b.toString()),b=nc);for(let A=0;A<b.length;A++){const D=pe(h,b[A],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.J?Y(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),ur(),Df(o.i,o.v,o.B,o.l,o.S,o.u)}Vt.prototype.ba=function(o){o=o.target;const c=this.O;c&&Mt(o)==3?c.j():this.Y(o)},Vt.prototype.Y=function(o){try{if(o==this.g)e:{const Z=Mt(this.g),be=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Vc(this.g)))){this.K||Z!=4||be==7||(be==8||ce<=0?ur(3):ur(2)),Mi(this);var c=this.g.ca();this.X=c;var h=Uf(this);if(this.o=c==200,Vf(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var A=f;break t}}A=null}if(o=A)Dn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ui(this,o);else{this.o=!1,this.m=3,Be(12),un(this),pr(this);break e}}if(this.R){o=!0;let Se;for(;!this.K&&this.C<h.length;)if(Se=Ff(this,h),Se==Oi){Z==4&&(this.m=4,Be(14),o=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==fc){this.m=4,Be(15),Dn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Dn(this.i,this.l,Se,null),Ui(this,Se);if(mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||h.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)Dn(this.i,this.l,h,"[Invalid Chunked Response]"),un(this),pr(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Wi(D),D.P=!0,Be(11))}}else Dn(this.i,this.l,h,null),Ui(this,h);Z==4&&un(this),this.o&&!this.K&&(Z==4?qc(this.j,this):(this.o=!1,cs(this)))}else Zf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),un(this),pr(this)}}}catch{}finally{}};function Uf(o){if(!mc(o))return o.g.la();const c=Vc(o.g);if(c==="")return"";let h="";const f=c.length,b=Mt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return un(o),pr(o),"";o.h.i=new a.TextDecoder}for(let A=0;A<f;A++)o.h.h=!0,h+=o.h.i.decode(c[A],{stream:!(b&&A==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function mc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ff(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Oi:(h=Number(c.substring(h,f)),isNaN(h)?fc:(f+=1,f+h>c.length?Oi:(c=c.slice(f,f+h),o.C=f+h,c)))}Vt.prototype.cancel=function(){this.K=!0,un(this)};function cs(o){o.T=Date.now()+o.H,gc(o,o.H)}function gc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=hr(d(o.aa,o),c)}function Mi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Vt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Of(this.i,this.B),this.M!=2&&(ur(),Be(17)),un(this),this.m=2,pr(this)):gc(this,this.T-o)};function pr(o){o.j.I==0||o.K||qc(o.j,o)}function un(o){Mi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,rc(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ui(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Fi(h.h,o))){if(!o.L&&Fi(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ps(h),ds(h);else break e;Hi(h),Be(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=hr(d(h.Va,h),6e3));vc(h.h)<=1&&h.ta&&(h.ta=void 0)}else dn(h,11)}else if((o.L||h.g==o)&&ps(h),!_(c))for(b=h.Ba.g.parse(c),c=0;c<b.length;c++){let ce=b[c];const Se=ce[0];if(!(Se<=h.K))if(h.K=Se,ce=ce[1],h.I==2)if(ce[0]=="c"){h.M=ce[1],h.ba=ce[2];const ut=ce[3];ut!=null&&(h.ka=ut,h.j.info("VER="+h.ka));const fn=ce[4];fn!=null&&(h.za=fn,h.j.info("SVER="+h.za));const Ut=ce[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(f=1.5*Ut,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ft=o.g;if(Ft){const gs=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gs){var A=f.h;A.g||gs.indexOf("spdy")==-1&&gs.indexOf("quic")==-1&&gs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Bi(A,A.h),A.h=null))}if(f.G){const Gi=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Gi&&(f.wa=Gi,ue(f.J,f.G,Gi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var D=o;if(f.na=zc(f,f.L?f.ba:null,f.W),D.L){Ec(f.h,D);var Z=D,be=f.O;be&&(Z.H=be),Z.D&&(Mi(Z),cs(Z)),f.g=D}else Fc(f);h.i.length>0&&fs(h)}else ce[0]!="stop"&&ce[0]!="close"||dn(h,7);else h.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?dn(h,7):zi(h):ce[0]!="noop"&&h.l&&h.l.qa(ce),h.A=0)}}ur(4)}catch{}}var Bf=class{constructor(o,c){this.g=o,this.map=c}};function _c(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vc(o){return o.h?1:o.g?o.g.size:0}function Fi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Bi(o,c){o.g?o.g.add(c):o.h=c}function Ec(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}_c.prototype.cancel=function(){if(this.i=wc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let b,A=null;f>=0?(b=o[h].substring(0,f),A=o[h].substring(f+1)):b=o[h],c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ot(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Ot?(this.l=o.l,mr(this,o.j),this.o=o.o,this.g=o.g,gr(this,o.u),this.h=o.h,qi(this,Pc(o.i)),this.m=o.m):o&&(c=String(o).match(Tc))?(this.l=!1,mr(this,c[1]||"",!0),this.o=_r(c[2]||""),this.g=_r(c[3]||"",!0),gr(this,c[4]),this.h=_r(c[5]||"",!0),qi(this,c[6]||"",!0),this.m=_r(c[7]||"")):(this.l=!1,this.i=new vr(null,this.l))}Ot.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(yr(c,Ic,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(yr(c,Ic,!0),"@"),o.push(fr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(yr(h,h.charAt(0)=="/"?zf:jf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",yr(h,Wf)),o.join("")},Ot.prototype.resolve=function(o){const c=lt(this);let h=!!o.j;h?mr(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)gr(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=c.h.lastIndexOf("/");b!=-1&&(f=c.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const A=[];for(let D=0;D<b.length;){const Z=b[D++];Z=="."?f&&D==b.length&&A.push(""):Z==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&D==b.length&&A.push("")):(A.push(Z),f=!0)}f=A.join("/")}else f=b}return h?c.h=f:h=o.i.toString()!=="",h?qi(c,Pc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function lt(o){return new Ot(o)}function mr(o,c,h){o.j=h?_r(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function gr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function qi(o,c,h){c instanceof vr?(o.i=c,Gf(o.i,o.l)):(h||(c=yr(c,Hf)),o.i=new vr(c,o.l))}function ue(o,c,h){o.i.set(c,h)}function ls(o){return ue(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function _r(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,$f),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $f(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ic=/[#\/\?@]/g,jf=/[#\?:]/g,zf=/[#\?]/g,Hf=/[#\?@]/g,Wf=/#/g;function vr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&qf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=vr.prototype,n.add=function(o,c){hn(this),this.i=null,o=Vn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function bc(o,c){hn(o),c=Vn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ac(o,c){return hn(o),c=Vn(o,c),o.g.has(c)}n.forEach=function(o,c){hn(this),this.g.forEach(function(h,f){h.forEach(function(b){o.call(c,b,f,this)},this)},this)};function Rc(o,c){hn(o);let h=[];if(typeof c=="string")Ac(o,c)&&(h=h.concat(o.g.get(Vn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return hn(this),this.i=null,o=Vn(this,o),Ac(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Rc(this,o),o.length>0?String(o[0]):c):c};function Sc(o,c,h){bc(o,c),h.length>0&&(o.i=null,o.g.set(Vn(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const b=fr(h);h=Rc(this,h);for(let A=0;A<h.length;A++){let D=b;h[A]!==""&&(D+="="+fr(h[A])),o.push(D)}}return this.i=o.join("&")};function Pc(o){const c=new vr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Vn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Gf(o,c){c&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(h,f){const b=f.toLowerCase();f!=b&&(bc(this,f),Sc(this,b,h))},o)),o.j=c}function Kf(o,c){const h=new dr;if(a.Image){const f=new Image;f.onload=p(Lt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(Lt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(Lt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(Lt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Qf(o,c){const h=new dr,f=new AbortController,b=setTimeout(()=>{f.abort(),Lt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(b),A.ok?Lt(h,"TestPingServer: ok",!0,c):Lt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Lt(h,"TestPingServer: error",!1,c)})}function Lt(o,c,h,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(h)}catch{}}function Xf(){this.g=new xf}function $i(o){this.i=o.Sb||null,this.h=o.ab||!1}m($i,sc),$i.prototype.g=function(){return new us(this.i,this.h)};function us(o,c){De.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(us,De),n=us.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,wr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Er(this):wr(this),this.readyState==3&&Cc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Er(this))},n.Na=function(o){this.g&&(this.response=o,Er(this))},n.ga=function(){this.g&&Er(this)};function Er(o){o.readyState=4,o.l=null,o.j=null,o.B=null,wr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function wr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function kc(o){let c="";return V(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function ji(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=kc(h),typeof o=="string"?h!=null&&fr(h):ue(o,c,h))}function me(o){De.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(me,De);var Yf=/^https?$/i,Jf=["POST","PUT"];n=me.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hc.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(A){Nc(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)h.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Jf,c,void 0)>=0)||f||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,D]of h)this.g.setRequestHeader(A,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){Nc(this,A)}};function Nc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,xc(o),hs(o)}function xc(o){o.A||(o.A=!0,Fe(o,"complete"),Fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Fe(this,"complete"),Fe(this,"abort"),hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Dc(this):this.Xa())},n.Xa=function(){Dc(this)};function Dc(o){if(o.h&&typeof i<"u"){if(o.v&&Mt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Fe(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=A===0){let D=String(o.D).match(Tc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),f=!Yf.test(D?D.toLowerCase():"")}h=f}if(h)Fe(o,"complete"),Fe(o,"success");else{o.o=6;try{var b=Mt(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",xc(o)}}finally{hs(o)}}}}function hs(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Fe(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Nf(c)}};function Vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zf(o){const c={};o=(o.g&&Mt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=Mf(o[f]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=c[b]||[];c[b]=A,A.push(h)}q(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Oc(o){this.za=0,this.i=[],this.j=new dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tr("baseRetryDelayMs",5e3,o),this.Za=Tr("retryDelaySeedMs",1e4,o),this.Ta=Tr("forwardChannelMaxRetries",2,o),this.va=Tr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new _c(o&&o.concurrentRequestLimit),this.Ba=new Xf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Oc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){Be(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=zc(this,null,this.W),fs(this)};function zi(o){if(Lc(o),o.I==3){var c=o.V++,h=lt(o.J);if(ue(h,"SID",o.M),ue(h,"RID",c),ue(h,"TYPE","terminate"),Ir(o,h),c=new Vt(o,o.j,c),c.M=2,c.A=ls(lt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Hc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),cs(c)}jc(o)}function ds(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function Lc(o){ds(o),o.v&&(a.clearTimeout(o.v),o.v=null),ps(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function fs(o){if(!yc(o.h)&&!o.m){o.m=!0;var c=o.Ea;se||g(),ie||(se(),ie=!0),T.add(c,o),o.D=0}}function ep(o,c){return vc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=hr(d(o.Ea,o,c),$c(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Vt(this,this.j,o);let A=this.o;if(this.U&&(A?(A=Y(A),x(A,this.U)):A=this.U),this.u!==null||this.R||(b.J=A,A=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Uc(this,b,c),h=lt(this.J),ue(h,"RID",o),ue(h,"CVER",22),this.G&&ue(h,"X-HTTP-Session-Id",this.G),Ir(this,h),A&&(this.R?c="headers="+fr(kc(A))+"&"+c:this.u&&ji(h,this.u,A)),Bi(this.h,b),this.Ra&&ue(h,"TYPE","init"),this.S?(ue(h,"$req",c),ue(h,"SID","null"),b.U=!0,Li(b,h,null)):Li(b,h,c),this.I=2}}else this.I==3&&(o?Mc(this,o):this.i.length==0||yc(this.h)||Mc(this))};function Mc(o,c){var h;c?h=c.l:h=o.V++;const f=lt(o.J);ue(f,"SID",o.M),ue(f,"RID",h),ue(f,"AID",o.K),Ir(o,f),o.u&&o.o&&ji(f,o.u,o.o),h=new Vt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Uc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Bi(o.h,h),Li(h,f,c)}function Ir(o,c){o.H&&V(o.H,function(h,f){ue(c,f,h)}),o.l&&V({},function(h,f){ue(c,f,h)})}function Uc(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let Z=-1;for(;;){const be=["count="+h];Z==-1?h>0?(Z=b[0].g,be.push("ofs="+Z)):Z=0:be.push("ofs="+Z);let ce=!0;for(let Se=0;Se<h;Se++){var A=b[Se].g;const ut=b[Se].map;if(A-=Z,A<0)Z=Math.max(0,b[Se].g-100),ce=!1;else try{A="req"+A+"_"||"";try{var D=ut instanceof Map?ut:Object.entries(ut);for(const[fn,Ut]of D){let Ft=Ut;l(Ut)&&(Ft=Ni(Ut)),be.push(A+fn+"="+encodeURIComponent(Ft))}}catch(fn){throw be.push(A+"type="+encodeURIComponent("_badmap")),fn}}catch{f&&f(ut)}}if(ce){D=be.join("&");break e}}D=void 0}return o=o.i.splice(0,h),c.G=o,D}function Fc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;se||g(),ie||(se(),ie=!0),T.add(c,o),o.A=0}}function Hi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=hr(d(o.Da,o),$c(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Bc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=hr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),ds(this),Bc(this))};function Wi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Bc(o){o.g=new Vt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=lt(o.na);ue(c,"RID","rpc"),ue(c,"SID",o.M),ue(c,"AID",o.K),ue(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ue(c,"TO",o.ia),ue(c,"TYPE","xmlhttp"),Ir(o,c),o.u&&o.o&&ji(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ls(lt(c)),h.u=null,h.R=!0,pc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ds(this),Hi(this),Be(19))};function ps(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function qc(o,c){var h=null;if(o.g==c){ps(o),Wi(o),o.g=null;var f=2}else if(Fi(o.h,c))h=c.G,Ec(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var b=o.D;f=os(),Fe(f,new lc(f,h)),fs(o)}else Fc(o);else if(b=c.m,b==3||b==0&&c.X>0||!(f==1&&ep(o,c)||f==2&&Hi(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),b){case 1:dn(o,5);break;case 4:dn(o,10);break;case 3:dn(o,6);break;default:dn(o,2)}}}function $c(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function dn(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const b=!f;f=new Ot(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mr(f,"https"),ls(f),b?Kf(f.toString(),h):Qf(f.toString(),h)}else Be(2);o.I=0,o.l&&o.l.pa(c),jc(o),Lc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function jc(o){if(o.I=0,o.ja=[],o.l){const c=wc(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function zc(o,c,h){var f=h instanceof Ot?lt(h):new Ot(h);if(f.g!="")c&&(f.g=c+"."+f.g),gr(f,f.u);else{var b=a.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const A=new Ot(null);f&&mr(A,f),c&&(A.g=c),b&&gr(A,b),h&&(A.h=h),f=A}return h=o.G,c=o.wa,h&&c&&ue(f,h,c),ue(f,"VER",o.ka),Ir(o,f),f}function Hc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new me(new $i({ab:h})):new me(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wc(){}n=Wc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ms(){}ms.prototype.g=function(o,c){return new Ke(o,c)};function Ke(o,c){De.call(this),this.g=new Oc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new On(this)}m(Ke,De),Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){zi(this.g)},Ke.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Ni(o),o=h);c.i.push(new Bf(c.Ya++,o)),c.I==3&&fs(c)},Ke.prototype.N=function(){this.g.l=null,delete this.j,zi(this.g),delete this.g,Ke.Z.N.call(this)};function Gc(o){xi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Gc,xi);function Kc(){Di.call(this),this.status=1}m(Kc,Di);function On(o){this.g=o}m(On,Wc),On.prototype.ra=function(){Fe(this.g,"a")},On.prototype.qa=function(o){Fe(this.g,new Gc(o))},On.prototype.pa=function(o){Fe(this.g,new Kc)},On.prototype.oa=function(){Fe(this.g,"b")},ms.prototype.createWebChannel=ms.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,oh=function(){return new ms},ih=function(){return os()},sh=ln,wo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,Cs=as,uc.COMPLETE="complete",rh=uc,ic.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",De.prototype.listen=De.prototype.J,Ar=ic,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,nh=me}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});const ll="@firebase/firestore",ul="4.9.3";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let tr="12.7.0";/**
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
 */const bn=new Go("@firebase/firestore");function Ln(){return bn.logLevel}function M(n,...e){if(bn.logLevel<=ee.DEBUG){const t=e.map(Xo);bn.debug(`Firestore (${tr}): ${n}`,...t)}}function Nt(n,...e){if(bn.logLevel<=ee.ERROR){const t=e.map(Xo);bn.error(`Firestore (${tr}): ${n}`,...t)}}function Gn(n,...e){if(bn.logLevel<=ee.WARN){const t=e.map(Xo);bn.warn(`Firestore (${tr}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
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
 */function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ah(n,r,t)}function ah(n,e,t){let r=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Nt(r),new Error(r)}function oe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ah(e,s,r)}function X(n,e){return n}/**
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
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ch{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Ym{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Jm{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new ch(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Zm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Zm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new hl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ng(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Yo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ng(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function To(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return so(s)===so(i)?te(s,i):so(s)?1:-1}return te(n.length,e.length)}const rg=55296,sg=57343;function so(n){const e=n.charCodeAt(0);return e>=rg&&e<=sg}function Kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const dl="__name__";class ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return te(e.length,t.length)}static compareSegments(e,t){const r=ht.isNumericId(e),s=ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ht.extractNumericId(e).compare(ht.extractNumericId(t)):To(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kt.fromString(e.substring(4,e.length-2))}}class le extends ht{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const ig=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ht{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return ig.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dl}static keyField(){return new Ne([dl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(le.fromString(e))}static fromName(e){return new j(le.fromString(e).popFirst(5))}static empty(){return new j(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new le(e.slice()))}}/**
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
 */function lh(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function og(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fl(n){if(!j.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pl(n){if(j.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function Qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=li(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xr(n,e){if(!uh(n))throw new O(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const ml=-62135596800,gl=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gl);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ml)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gl}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xr(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ml;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Te("string",he._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new he(0,0))}static max(){return new Q(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fr=-1;function ag(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Jt(s,j.empty(),e)}function cg(n){return new Jt(n.readTime,n.key,Fr)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(Q.min(),j.empty(),Fr)}static max(){return new Jt(Q.max(),j.empty(),Fr)}}function lg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==ug)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function dg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ui.ce=-1;/**
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
 */const Jo=-1;function hi(n){return n==null}function qs(n){return n===0&&1/n==-1/0}function fg(n){return typeof n=="number"&&Number.isInteger(n)&&!qs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const hh="";function pg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_l(e)),e=mg(n.get(t),e);return _l(e)}function mg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case hh:t+="";break;default:t+=i}}return t}function _l(n){return n+hh+""}/**
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
 */function yl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class fe{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ke.RED,this.left=s??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vl(this.data.getIterator())}getIteratorFrom(e){return new vl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class vl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Re(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fh("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=gg.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */const ph="server_timestamp",mh="__type__",gh="__previous_value__",_h="__local_write_time__";function Zo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mh])==null?void 0:r.stringValue)===ph}function di(n){const e=n.mapValue.fields[gh];return Zo(e)?di(e):e}function Br(n){const e=Zt(n.mapValue.fields[_h].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class _g{constructor(e,t,r,s,i,a,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const $s="(default)";class qr{constructor(e,t){this.projectId=e,this.database=t||$s}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database===$s}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yh="__type__",yg="__max__",Ts={mapValue:{}},vh="__vector__",js="value";function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:Eg(n)?9007199254740991:vg(n)?10:11:G(28295,{value:n})}function Et(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Zt(s.timestampValue),l=Zt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ye(s.doubleValue),l=ye(i.doubleValue);return a===l?qs(a)===qs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Kn(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(yl(a)!==yl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Et(a[u],l[u])))return!1;return!0}(n,e);default:return G(52216,{left:n})}}function $r(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function Qn(n,e){if(n===e)return 0;const t=tn(n),r=tn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ye(i.integerValue||i.doubleValue),u=ye(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return El(n.timestampValue,e.timestampValue);case 4:return El(Br(n),Br(e));case 5:return To(n.stringValue,e.stringValue);case 6:return function(i,a){const l=en(i),u=en(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=te(l[d],u[d]);if(p!==0)return p}return te(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=te(ye(i.latitude),ye(a.latitude));return l!==0?l:te(ye(i.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,R,k,N;const l=i.fields||{},u=a.fields||{},d=(E=l[js])==null?void 0:E.arrayValue,p=(R=u[js])==null?void 0:R.arrayValue,m=te(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((N=p==null?void 0:p.values)==null?void 0:N.length)||0);return m!==0?m:wl(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ts.mapValue&&a===Ts.mapValue)return 0;if(i===Ts.mapValue)return 1;if(a===Ts.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const E=To(u[m],p[m]);if(E!==0)return E;const R=Qn(l[u[m]],d[p[m]]);if(R!==0)return R}return te(u.length,p.length)}(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function El(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Zt(n),r=Zt(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function wl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qn(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function Xn(n){return Io(n)}function Io(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return en(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Io(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Io(t.fields[a])}`;return s+"}"}(n.mapValue):G(61005,{value:n})}function ks(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=di(n);return e?16+ks(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ks(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return on(r.fields,(i,a)=>{s+=i.length+ks(a)}),s}(n.mapValue);default:throw G(13486,{value:n})}}function Tl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bo(n){return!!n&&"integerValue"in n}function ea(n){return!!n&&"arrayValue"in n}function Il(n){return!!n&&"nullValue"in n}function bl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ns(n){return!!n&&"mapValue"in n}function vg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[yh])==null?void 0:r.stringValue)===vh}function kr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return on(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return{...n}}function Eg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yg}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=Ne.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=kr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ns(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){on(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(kr(this.value))}}function Eh(n){const e=[];return on(n.fields,(t,r)=>{const s=new Ne([t]);if(Ns(r)){const i=Eh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class Le{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,Q.min(),Q.min(),Q.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,Q.min(),Q.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,Q.min(),Q.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zs{constructor(e,t){this.position=e,this.inclusive=t}}function Al(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=Qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class jr{constructor(e,t="asc"){this.field=e,this.dir=t}}function wg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wh{}class we extends wh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ig(e,t,r):t==="array-contains"?new Rg(e,r):t==="in"?new Sg(e,r):t==="not-in"?new Pg(e,r):t==="array-contains-any"?new Cg(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bg(e,r):new Ag(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qn(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends wh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return Th(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Th(n){return n.op==="and"}function Ih(n){return Tg(n)&&Th(n)}function Tg(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function Ao(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Ih(n))return n.filters.map(e=>Ao(e)).join(",");{const e=n.filters.map(t=>Ao(t)).join(",");return`${n.op}(${e})`}}function bh(n,e){return n instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(n,e):n instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&bh(a,s.filters[l]),!0):!1}(n,e):void G(19439)}function Ah(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Ah).join(" ,")+"}"}(n):"Filter"}class Ig extends we{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class bg extends we{constructor(e,t){super(e,"in",t),this.keys=Rh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ag extends we{constructor(e,t){super(e,"not-in",t),this.keys=Rh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class Rg extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ea(t)&&$r(t.arrayValue,this.value)}}class Sg extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class Pg extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$r(this.value.arrayValue,t)}}class Cg extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
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
 */class kg{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Sl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new kg(n,e,t,r,s,i,a)}function ta(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ao(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.Te=t}return e.Te}function na(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rl(n.startAt,e.startAt)&&Rl(n.endAt,e.endAt)}function Ro(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class sr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ng(n,e,t,r,s,i,a,l){return new sr(n,e,t,r,s,i,a,l)}function ra(n){return new sr(n)}function Pl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sh(n){return n.collectionGroup!==null}function Nr(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Re(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new jr(i,r))}),t.has(Ne.keyField().canonicalString())||e.Ie.push(new jr(Ne.keyField(),r))}return e.Ie}function mt(n){const e=X(n);return e.Ee||(e.Ee=xg(e,Nr(n))),e.Ee}function xg(n,e){if(n.limitType==="F")return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jr(s.field,i)});const t=n.endAt?new zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zs(n.startAt.position,n.startAt.inclusive):null;return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function So(n,e){const t=n.filters.concat([e]);return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Hs(n,e,t){return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fi(n,e){return na(mt(n),mt(e))&&n.limitType===e.limitType}function Ph(n){return`${ta(mt(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ah(s)).join(", ")}]`),hi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(mt(n))}; limitType=${n.limitType})`}function pi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Nr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Al(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Nr(r),s)||r.endAt&&!function(a,l,u){const d=Al(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Nr(r),s))}(n,e)}function Dg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ch(n){return(e,t)=>{let r=!1;for(const s of Nr(n)){const i=Vg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vg(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Qn(u,d):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
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
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dh(this.inner)}size(){return this.innerSize}}/**
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
 */const Og=new fe(j.comparator);function xt(){return Og}const kh=new fe(j.comparator);function Rr(...n){let e=kh;for(const t of n)e=e.insert(t.key,t);return e}function Nh(n){let e=kh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mn(){return xr()}function xh(){return xr()}function xr(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Lg=new fe(j.comparator),Mg=new Re(j.comparator);function ne(...n){let e=Mg;for(const t of n)e=e.add(t);return e}const Ug=new Re(te);function Fg(){return Ug}/**
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
 */function sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(e)?"-0":e}}function Dh(n){return{integerValue:""+n}}function Bg(n,e){return fg(e)?Dh(e):sa(n,e)}/**
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
 */class mi{constructor(){this._=void 0}}function qg(n,e,t){return n instanceof Ws?function(s,i){const a={fields:{[mh]:{stringValue:ph},[_h]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zo(i)&&(i=di(i)),i&&(a.fields[gh]=i),{mapValue:a}}(t,e):n instanceof zr?Oh(n,e):n instanceof Hr?Lh(n,e):function(s,i){const a=Vh(s,i),l=Cl(a)+Cl(s.Ae);return bo(a)&&bo(s.Ae)?Dh(l):sa(s.serializer,l)}(n,e)}function $g(n,e,t){return n instanceof zr?Oh(n,e):n instanceof Hr?Lh(n,e):t}function Vh(n,e){return n instanceof Gs?function(r){return bo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ws extends mi{}class zr extends mi{constructor(e){super(),this.elements=e}}function Oh(n,e){const t=Mh(e);for(const r of n.elements)t.some(s=>Et(s,r))||t.push(r);return{arrayValue:{values:t}}}class Hr extends mi{constructor(e){super(),this.elements=e}}function Lh(n,e){let t=Mh(e);for(const r of n.elements)t=t.filter(s=>!Et(s,r));return{arrayValue:{values:t}}}class Gs extends mi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cl(n){return ye(n.integerValue||n.doubleValue)}function Mh(n){return ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof zr&&s instanceof zr||r instanceof Hr&&s instanceof Hr?Kn(r.elements,s.elements,Et):r instanceof Gs&&s instanceof Gs?Et(r.Ae,s.Ae):r instanceof Ws&&s instanceof Ws}(n.transform,e.transform)}class zg{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gi{}function Uh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _i(n.key,Ye.none()):new Yr(n.key,n.data,Ye.none());{const t=n.data,r=ze.empty();let s=new Re(Ne.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new an(n.key,r,new Qe(s.toArray()),Ye.none())}}function Hg(n,e,t){n instanceof Yr?function(s,i,a){const l=s.value.clone(),u=Nl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof an?function(s,i,a){if(!xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Nl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Fh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Dr(n,e,t,r){return n instanceof Yr?function(i,a,l,u){if(!xs(i.precondition,a))return l;const d=i.value.clone(),p=xl(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof an?function(i,a,l,u){if(!xs(i.precondition,a))return l;const d=xl(i.fieldTransforms,u,a),p=a.data;return p.setAll(Fh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Wg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Vh(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kn(r,s,(i,a)=>jg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yr extends gi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends gi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nl(n,e,t){const r=new Map;oe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,$g(a,l,t[s]))}return r}function xl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,qg(i,a,e))}return r}class _i extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gg extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Uh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,r)=>kl(t,r))&&Kn(this.baseMutations,e.baseMutations,(t,r)=>kl(t,r))}}class ia{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Lg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ia(e,t,r,s)}}/**
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
 */class Qg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,re;function Yg(n){switch(n){case S.OK:return G(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function Bh(n){if(n===void 0)return Nt("GRPC error has no .code"),S.UNKNOWN;switch(n){case Ee.OK:return S.OK;case Ee.CANCELLED:return S.CANCELLED;case Ee.UNKNOWN:return S.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return S.INTERNAL;case Ee.UNAVAILABLE:return S.UNAVAILABLE;case Ee.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ee.NOT_FOUND:return S.NOT_FOUND;case Ee.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ee.ABORTED:return S.ABORTED;case Ee.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ee.DATA_LOSS:return S.DATA_LOSS;default:return G(39323,{code:n})}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jg(){return new TextEncoder}/**
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
 */const Zg=new Kt([4294967295,4294967295],0);function Dl(n){const e=Jg().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function Vl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kt([t,r],0),new Kt([s,i],0)]}class oa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Sr(`Invalid padding: ${t}`);if(r<0)throw new Sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Sr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Kt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Kt.fromNumber(r)));return s.compare(Zg)===1&&(s=new Kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Dl(e),[r,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new oa(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Dl(e),[r,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yi(Q.min(),s,new fe(te),xt(),ne())}}class Jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Jr(r,t,ne(),ne(),ne())}}/**
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
 */class Ds{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class qh{constructor(e,t){this.targetId=e,this.Ce=t}}class $h{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ol{constructor(){this.ve=0,this.Fe=Ll(),this.Me=xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new Jr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ll()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class e_{constructor(e){this.Ge=e,this.ze=new Map,this.je=xt(),this.Je=Is(),this.He=Is(),this.Ye=new fe(te)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ro(i))if(r===0){const a=new j(i.path);this.et(t,a,Le.newNoDocument(a,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=en(r).toUint8Array()}catch(u){if(u instanceof fh)return Gn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new oa(a,s,i)}catch(u){return Gn(u instanceof Sr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Ro(l.target)){const u=new j(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Le.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ne();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new yi(e,t,this.Ye,this.je,r);return this.je=xt(),this.Je=Is(),this.He=Is(),this.Ye=new fe(te),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ol,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Re(te),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Re(te),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ol),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Is(){return new fe(j.comparator)}function Ll(){return new fe(j.comparator)}const t_={asc:"ASCENDING",desc:"DESCENDING"},n_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r_={and:"AND",or:"OR"};class s_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Po(n,e){return n.useProto3Json||hi(e)?e:{value:e}}function Ks(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function i_(n,e){return Ks(n,e.toTimestamp())}function gt(n){return oe(!!n,49232),Q.fromTimestamp(function(t){const r=Zt(t);return new he(r.seconds,r.nanos)}(n))}function aa(n,e){return Co(n,e).canonicalString()}function Co(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zh(n){const e=le.fromString(n);return oe(Qh(e),10190,{key:e.toString()}),e}function ko(n,e){return aa(n.databaseId,e.path)}function io(n,e){const t=zh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Wh(t))}function Hh(n,e){return aa(n.databaseId,e)}function o_(n){const e=zh(n);return e.length===4?le.emptyPath():Wh(e)}function No(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wh(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ml(n,e,t){return{name:ko(n,e),fields:t.value.mapValue.fields}}function a_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(oe(p===void 0||typeof p=="string",58123),xe.fromBase64String(p||"")):(oe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),xe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Bh(d.code);return new O(p,d.message||"")}(a);t=new $h(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=io(n,r.document.name),i=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):Q.min(),l=new ze({mapValue:{fields:r.document.fields}}),u=Le.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ds(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=io(n,r.document),i=r.readTime?gt(r.readTime):Q.min(),a=Le.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ds([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=io(n,r.document),i=r.removedTargetIds||[];t=new Ds([],i,s,null)}else{if(!("filter"in e))return G(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Xg(s,i),l=r.targetId;t=new qh(l,a)}}return t}function c_(n,e){let t;if(e instanceof Yr)t={update:Ml(n,e.key,e.value)};else if(e instanceof _i)t={delete:ko(n,e.key)};else if(e instanceof an)t={update:Ml(n,e.key,e.data),updateMask:__(e.fieldMask)};else{if(!(e instanceof Gg))return G(16599,{Vt:e.type});t={verify:ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Hr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Gs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:i_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(n,e.precondition)),t}function l_(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?gt(s.updateTime):gt(i);return a.isEqual(Q.min())&&(a=gt(i)),new zg(a,s.transformResults||[])}(t,e))):[]}function u_(n,e){return{documents:[Hh(n,e.path)]}}function h_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hh(n,s);const i=function(d){if(d.length!==0)return Kh(at.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:Un(E.field),direction:p_(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Po(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function d_(n){let e=o_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){oe(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const E=Gh(m);return E instanceof at&&Ih(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(E=>function(k){return new jr(Fn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(m){let E;return E=typeof m=="object"?m.value:m,hi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(m){const E=!!m.before,R=m.values||[];return new zs(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const E=!m.before,R=m.values||[];return new zs(R,E)}(t.endAt)),Ng(e,s,a,i,l,"F",u,d)}function f_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fn(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return we.create(Fn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>Gh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function p_(n){return t_[n]}function m_(n){return n_[n]}function g_(n){return r_[n]}function Un(n){return{fieldPath:n.canonicalString()}}function Fn(n){return Ne.fromServerFormat(n.fieldPath)}function Kh(n){return n instanceof we?function(t){if(t.op==="=="){if(bl(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(Il(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bl(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(Il(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:m_(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(s=>Kh(s));return r.length===1?r[0]:{compositeFilter:{op:g_(t.op),filters:r}}}(n):G(54877,{filter:n})}function __(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ht{constructor(e,t,r,s,i=Q.min(),a=Q.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class y_{constructor(e){this.yt=e}}function v_(n){const e=d_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hs(e,e.limit,"L"):e}/**
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
 */class E_{constructor(){this.Cn=new w_}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Jt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class w_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Re(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Re(le.comparator)).toArray()}}/**
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
 */const Ul={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xh=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(Xh,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
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
 */class Yn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yn(0)}static cr(){return new Yn(-1)}}/**
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
 */const Fl="LruGarbageCollector",T_=1048576;function Bl([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class I_{constructor(e){this.Ir=e,this.buffer=new Re(Bl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(Fl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?M(Fl,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.Vr(3e5)})}}class A_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ui.ce);const r=new I_(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ul)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ul):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Ln()<=ee.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function R_(n,e){return new A_(n,e)}/**
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
 */class S_{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class P_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class C_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Dr(r.mutation,s,Qe.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Rr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=xt();const a=xr(),l=function(){return xr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof an)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Dr(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new P_(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=xr();let s=new fe((a,l)=>a-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Qe.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=xh();p.forEach(E=>{if(!i.has(E)){const R=Uh(t.get(E),r.get(E));R!==null&&m.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(mn());let l=Fr,u=i;return a.next(d=>P.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ne())).next(p=>({batchId:l,changes:Nh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=Rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Rr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(m,E){return new sr(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Le.newInvalidDocument(p)))});let l=Rr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Dr(p.mutation,d,Qe.empty(),he.now()),pi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class k_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:v_(s.bundledQuery),readTime:gt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class N_{constructor(){this.overlays=new fe(j.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=mn(),i=t.length+1,a=new j(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new fe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=mn(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=mn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qg(t,r));let i=this.qr.get(t);i===void 0&&(i=ne(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class x_{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ca{constructor(){this.Qr=new Re(Pe.$r),this.Ur=new Re(Pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Pe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Pe(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new j(new le([])),r=new Pe(t,e),s=new Pe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new j(new le([])),r=new Pe(t,e),s=new Pe(t,e+1);let i=ne();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Pe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return j.comparator(e.key,t.key)||te(e.Yr,t.Yr)}static Kr(e,t){return te(e.Yr,t.Yr)||j.comparator(e.key,t.key)}}/**
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
 */class D_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Re(Pe.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kg(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Pe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Jo:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Pe(t,0),s=new Pe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Re(te);return t.forEach(s=>{const i=new Pe(s,0),a=new Pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const a=new Pe(new j(i),0);let l=new Re(te);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},a),P.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const i=new Pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Pe(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class V_{constructor(e){this.ri=e,this.docs=function(){return new fe(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const a=t.path,l=new j(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||lg(cg(p),r)<=0||(s.has(p.key)||pi(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new O_(this)}getSize(e){return P.resolve(this.size)}}class O_ extends S_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class L_{constructor(e){this.persistence=e,this.si=new Cn(t=>ta(t),na),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new ca,this.targetCount=0,this.ai=Yn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
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
 */class Yh{constructor(e,t){this.ui={},this.overlays={},this.ci=new ui(0),this.li=!1,this.li=!0,this.hi=new x_,this.referenceDelegate=e(this),this.Pi=new L_(this),this.indexManager=new E_,this.remoteDocumentCache=function(s){return new V_(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new y_(t),this.Ii=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new D_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new M_(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class M_ extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class la{constructor(e){this.persistence=e,this.Ri=new ca,this.Vi=null}static mi(e){return new la(e)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=j.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qs{constructor(e,t){this.persistence=e,this.pi=new Cn(r=>pg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=R_(this,t)}static mi(e,t){return new Qs(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ks(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ua{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(e,t.fromCache,r,s)}}/**
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
 */class U_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class F_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return kp()?8:dg(Me())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new U_;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Ln()<=ee.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Ln()<=ee.DEBUG&&M("QueryEngine","Query:",Mn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ln()<=ee.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):P.resolve())}ys(e,t){if(Pl(t))return P.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Hs(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,Hs(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,r,s){return Pl(t)||s.isEqual(Q.min())?P.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?P.resolve(null):(Ln()<=ee.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mn(t)),this.vs(e,a,t,ag(s,Fr)).next(l=>l))})}Ds(e,t){let r=new Re(Ch(e));return t.forEach((s,i)=>{pi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Ln()<=ee.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ps.getDocumentsMatchingQuery(e,t,Jt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ha="LocalStore",B_=3e8;class q_{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new fe(te),this.xs=new Cn(i=>ta(i),na),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function $_(n,e,t,r){return new q_(n,e,t,r)}async function Jh(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ne();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function j_(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,E=m.keys();let R=P.resolve();return E.forEach(k=>{R=R.next(()=>p.getEntry(u,k)).next(N=>{const C=d.docVersions.get(k);oe(C!==null,48541),N.version.compareTo(C)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Zh(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function z_(n,e){const t=X(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const E=s.get(m);if(!E)return;l.push(t.Pi.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,p.addedDocuments,m)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(m,R),function(N,C,H){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=B_?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(E,R,p)&&l.push(t.Pi.updateTargetData(i,R))});let u=xt(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(H_(i,a,e.documentUpdates).next(p=>{u=p.ks,d=p.qs})),!r.isEqual(Q.min())){const p=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=s,i))}function H_(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xt();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M(ha,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function W_(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Jo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function G_(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function xo(n,e,t){const r=X(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;M(ha,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ql(n,e,t){const r=X(n);let s=Q.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const m=X(u),E=m.xs.get(p);return E!==void 0?P.resolve(m.Ms.get(E)):m.Pi.getTargetData(d,p)}(r,a,mt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:ne())).next(l=>(K_(r,Dg(e),l),{documents:l,Qs:i})))}function K_(n,e,t){let r=n.Os.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class $l{constructor(){this.activeTargetIds=Fg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q_{constructor(){this.Mo=new $l,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X_{Oo(e){}shutdown(){}}/**
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
 */const jl="ConnectivityMonitor";class zl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(jl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(jl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bs=null;function Do(){return bs===null?bs=function(){return 268435456+Math.round(2147483648*Math.random())}():bs++,"0x"+bs.toString(16)}/**
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
 */const oo="RestConnection",Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===$s?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Do(),l=this.zo(e,t.toUriEncodedString());M(oo,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),p=sn(d);return this.Jo(e,l,u,r,p).then(m=>(M(oo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Gn(oo,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Y_[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Z_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ve="WebChannelConnection";class ey extends J_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Do();return new Promise((l,u)=>{const d=new nh;d.setWithCredentials(!0),d.listenOnce(rh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Cs.NO_ERROR:const m=d.getResponseJson();M(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Cs.TIMEOUT:M(Ve,`RPC '${e}' ${a} timed out`),u(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const E=d.getStatus();if(M(Ve,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R==null?void 0:R.error;if(k&&k.status&&k.message){const N=function(H){const W=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(W)>=0?W:S.UNKNOWN}(k.status);u(new O(N,k.message))}else u(new O(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(S.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ve,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);M(Ve,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=Do(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oh(),l=ih(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");M(Ve,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=a.createWebChannel(p,u);this.I_(m);let E=!1,R=!1;const k=new Z_({Yo:C=>{R?M(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(E||(M(Ve,`Opening RPC '${e}' stream ${s} transport.`),m.open(),E=!0),M(Ve,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),N=(C,H,W)=>{C.listen(H,U=>{try{W(U)}catch(B){setTimeout(()=>{throw B},0)}})};return N(m,Ar.EventType.OPEN,()=>{R||(M(Ve,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),N(m,Ar.EventType.CLOSE,()=>{R||(R=!0,M(Ve,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))}),N(m,Ar.EventType.ERROR,C=>{R||(R=!0,Gn(Ve,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ar.EventType.MESSAGE,C=>{var H;if(!R){const W=C.data[0];oe(!!W,16349);const U=W,B=(U==null?void 0:U.error)||((H=U[0])==null?void 0:H.error);if(B){M(Ve,`RPC '${e}' stream ${s} received error:`,B);const se=B.status;let ie=function(y){const w=Ee[y];if(w!==void 0)return Bh(w)}(se),T=B.message;ie===void 0&&(ie=S.INTERNAL,T="Unknown error status: "+se+" with message "+B.message),R=!0,k.a_(new O(ie,T)),m.close()}else M(Ve,`RPC '${e}' stream ${s} received:`,W),k.u_(W)}}),N(l,sh.STAT_EVENT,C=>{C.stat===wo.PROXY?M(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===wo.NOPROXY&&M(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ao(){return typeof document<"u"?document:null}/**
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
 */function vi(n){return new s_(n,!0)}/**
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
 */class ed{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Hl="PersistentStream";class td{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ed(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(Hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(M(Hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ty extends td{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=a_(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?gt(a.readTime):Q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=No(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ro(u)?{documents:u_(i,u)}:{query:h_(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=jh(i,a.resumeToken);const d=Po(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ks(i,a.snapshotVersion.toTimestamp());const d=Po(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=f_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=No(this.serializer),t.removeTarget=e,this.q_(t)}}class ny extends td{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=l_(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=No(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>c_(this.serializer,r))};this.q_(t)}}/**
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
 */class ry{}class sy extends ry{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Co(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(S.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Co(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class iy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const An="RemoteStore";class oy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{kn(this)&&(M(An,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.Ea.add(4),await Zr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ei(d)}(this))})}),this.Ra=new iy(r,s)}}async function Ei(n){if(kn(n))for(const e of n.da)await e(!0)}async function Zr(n){for(const e of n.da)await e(!1)}function nd(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ma(t)?pa(t):ir(t).O_()&&fa(t,e))}function da(n,e){const t=X(n),r=ir(t);t.Ia.delete(e),r.O_()&&rd(t,e),t.Ia.size===0&&(r.O_()?r.L_():kn(t)&&t.Ra.set("Unknown"))}function fa(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ir(n).Y_(e)}function rd(n,e){n.Va.Ue(e),ir(n).Z_(e)}function pa(n){n.Va=new e_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.Ra.ua()}function ma(n){return kn(n)&&!ir(n).x_()&&n.Ia.size>0}function kn(n){return X(n).Ea.size===0}function sd(n){n.Va=void 0}async function ay(n){n.Ra.set("Online")}async function cy(n){n.Ia.forEach((e,t)=>{fa(n,e)})}async function ly(n,e){sd(n),ma(n)?(n.Ra.ha(e),pa(n)):n.Ra.set("Unknown")}async function uy(n,e,t){if(n.Ra.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){M(An,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xs(n,r)}else if(e instanceof Ds?n.Va.Ze(e):e instanceof qh?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const r=await Zh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(xe.EMPTY_BYTE_STRING,p.snapshotVersion)),rd(i,u);const m=new Ht(p.target,u,d,p.sequenceNumber);fa(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M(An,"Failed to raise snapshot:",r),await Xs(n,r)}}async function Xs(n,e,t){if(!rr(e))throw e;n.Ea.add(1),await Zr(n),n.Ra.set("Offline"),t||(t=()=>Zh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(An,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ei(n)})}function id(n,e){return e().catch(t=>Xs(n,t,e))}async function wi(n){const e=X(n),t=nn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jo;for(;hy(e);)try{const s=await W_(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,dy(e,s)}catch(s){await Xs(e,s)}od(e)&&ad(e)}function hy(n){return kn(n)&&n.Ta.length<10}function dy(n,e){n.Ta.push(e);const t=nn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function od(n){return kn(n)&&!nn(n).x_()&&n.Ta.length>0}function ad(n){nn(n).start()}async function fy(n){nn(n).ra()}async function py(n){const e=nn(n);for(const t of n.Ta)e.ea(t.mutations)}async function my(n,e,t){const r=n.Ta.shift(),s=ia.from(r,e,t);await id(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await wi(n)}async function gy(n,e){e&&nn(n).X_&&await async function(r,s){if(function(a){return Yg(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();nn(r).B_(),await id(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wi(r)}}(n,e),od(n)&&ad(n)}async function Wl(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),M(An,"RemoteStore received new credentials");const r=kn(t);t.Ea.add(3),await Zr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ei(t)}async function _y(n,e){const t=X(n);e?(t.Ea.delete(2),await Ei(t)):e||(t.Ea.add(2),await Zr(t),t.Ra.set("Unknown"))}function ir(n){return n.ma||(n.ma=function(t,r,s){const i=X(t);return i.sa(),new ty(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:ay.bind(null,n),t_:cy.bind(null,n),r_:ly.bind(null,n),H_:uy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),ma(n)?pa(n):n.Ra.set("Unknown")):(await n.ma.stop(),sd(n))})),n.ma}function nn(n){return n.fa||(n.fa=function(t,r,s){const i=X(t);return i.sa(),new ny(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:fy.bind(null,n),r_:gy.bind(null,n),ta:py.bind(null,n),na:my.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await wi(n)):(await n.fa.stop(),n.Ta.length>0&&(M(An,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class ga{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new ga(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _a(n,e){if(Nt("AsyncQueue",`${e}: ${n}`),rr(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Rr(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gl{constructor(){this.ga=new fe(j.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Jn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Jn(e,t,$n.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class vy{constructor(){this.queries=Kl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=Kl(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Kl(){return new Cn(n=>Ph(n),fi)}async function Ey(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new yy,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=_a(a,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ya(t)}async function wy(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ty(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&ya(t)}function Iy(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function ya(n){n.Ca.forEach(e=>{e.next()})}var Vo,Ql;(Ql=Vo||(Vo={})).Ma="default",Ql.Cache="cache";class by{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vo.Cache}}/**
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
 */class cd{constructor(e){this.key=e}}class ld{constructor(e){this.key=e}}class Ay{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=Ch(e),this.tu=new $n(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Gl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const E=s.get(p),R=pi(this.query,m)?m:null,k=!!E&&this.mutatedKeys.has(E.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;E&&R?E.data.isEqual(R.data)?k!==N&&(r.track({type:3,doc:R}),C=!0):this.su(E,R)||(r.track({type:2,doc:R}),C=!0,(u&&this.eu(R,u)>0||d&&this.eu(R,d)<0)&&(l=!0)):!E&&R?(r.track({type:0,doc:R}),C=!0):E&&!R&&(r.track({type:1,doc:E}),C=!0,(u||d)&&(l=!0)),C&&(R?(a=a.add(R),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,m)=>function(R,k){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Rt:C})}};return N(R)-N(k)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new Jn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new ld(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new cd(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const va="SyncEngine";class Ry{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Sy{constructor(e){this.key=e,this.hu=!1}}class Py{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Cn(l=>Ph(l),fi),this.Iu=new Map,this.Eu=new Set,this.du=new fe(j.comparator),this.Au=new Map,this.Ru=new ca,this.Vu={},this.mu=new Map,this.fu=Yn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cy(n,e,t=!0){const r=md(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ud(r,e,t,!0),s}async function ky(n,e){const t=md(n);await ud(t,e,!0,!1)}async function ud(n,e,t,r){const s=await G_(n.localStore,mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Ny(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&nd(n.remoteStore,s),l}async function Ny(n,e,t,r,s){n.pu=(m,E,R)=>async function(N,C,H,W){let U=C.view.ru(H);U.Cs&&(U=await ql(N.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,U)));const B=W&&W.targetChanges.get(C.targetId),se=W&&W.targetMismatches.get(C.targetId)!=null,ie=C.view.applyChanges(U,N.isPrimaryClient,B,se);return Yl(N,C.targetId,ie.au),ie.snapshot}(n,m,E,R);const i=await ql(n.localStore,e,!0),a=new Ay(e,i.Qs),l=a.ru(i.documents),u=Jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Yl(n,t,d.au);const p=new Ry(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function xy(n,e,t){const r=X(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!fi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&da(r.remoteStore,s.targetId),Oo(r,s.targetId)}).catch(nr)):(Oo(r,s.targetId),await xo(r.localStore,s.targetId,!0))}async function Dy(n,e){const t=X(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),da(t.remoteStore,r.targetId))}async function Vy(n,e,t){const r=qy(n);try{const s=await function(a,l){const u=X(a),d=he.now(),p=l.reduce((R,k)=>R.add(k.key),ne());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=xt(),N=ne();return u.Ns.getEntries(R,p).next(C=>{k=C,k.forEach((H,W)=>{W.isValidDocument()||(N=N.add(H))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(C=>{m=C;const H=[];for(const W of l){const U=Wg(W,m.get(W.key).overlayedDocument);U!=null&&H.push(new an(W.key,U,Eh(U.value.mapValue),Ye.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,H,l)}).next(C=>{E=C;const H=C.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(R,C.batchId,H)})}).then(()=>({batchId:E.batchId,changes:Nh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new fe(te)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await es(r,s.changes),await wi(r.remoteStore)}catch(s){const i=_a(s,"Failed to persist write");t.reject(i)}}async function hd(n,e){const t=X(n);try{const r=await z_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?oe(a.hu,14607):s.removedDocuments.size>0&&(oe(a.hu,42227),a.hu=!1))}),await es(t,r,e)}catch(r){await nr(r)}}function Xl(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const E of m.Sa)E.va(l)&&(d=!0)}),d&&ya(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Oy(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new fe(j.comparator);a=a.insert(i,Le.newNoDocument(i,Q.min()));const l=ne().add(i),u=new yi(Q.min(),new Map,new fe(te),a,l);await hd(r,u),r.du=r.du.remove(i),r.Au.delete(e),Ea(r)}else await xo(r.localStore,e,!1).then(()=>Oo(r,e,t)).catch(nr)}async function Ly(n,e){const t=X(n),r=e.batch.batchId;try{const s=await j_(t.localStore,e);fd(t,r,null),dd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await es(t,s)}catch(s){await nr(s)}}async function My(n,e,t){const r=X(n);try{const s=await function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(oe(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);fd(r,e,t),dd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await es(r,s)}catch(s){await nr(s)}}function dd(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function fd(n,e,t){const r=X(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Oo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||pd(n,r)})}function pd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(da(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ea(n))}function Yl(n,e,t){for(const r of t)r instanceof cd?(n.Ru.addReference(r.key,e),Uy(n,r)):r instanceof ld?(M(va,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||pd(n,r.key)):G(19791,{wu:r})}function Uy(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(M(va,"New document in limbo: "+t),n.Eu.add(r),Ea(n))}function Ea(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(le.fromString(e)),r=n.fu.next();n.Au.set(r,new Sy(t)),n.du=n.du.insert(t,r),nd(n.remoteStore,new Ht(mt(ra(t.path)),r,"TargetPurposeLimboResolution",ui.ce))}}async function es(n,e,t){const r=X(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ua.As(u.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(d,E=>P.forEach(E.Es,R=>p.persistence.referenceDelegate.addReference(m,E.targetId,R)).next(()=>P.forEach(E.ds,R=>p.persistence.referenceDelegate.removeReference(m,E.targetId,R)))))}catch(m){if(!rr(m))throw m;M(ha,"Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const R=p.Ms.get(E),k=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(E,N)}}}(r.localStore,i))}async function Fy(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){M(va,"User change. New user:",e.toKey());const r=await Jh(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await es(t,r.Ls)}}function By(n,e){const t=X(n),r=t.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let s=ne();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function md(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=By.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Oy.bind(null,e),e.Pu.H_=Ty.bind(null,e.eventManager),e.Pu.yu=Iy.bind(null,e.eventManager),e}function qy(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ly.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=My.bind(null,e),e}class Ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return $_(this.persistence,new F_,e.initialUser,this.serializer)}Cu(e){return new Yh(la.mi,this.serializer)}Du(e){return new Q_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ys.provider={build:()=>new Ys};class $y extends Ys{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){oe(this.persistence.referenceDelegate instanceof Qs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new b_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Yh(r=>Qs.mi(r,t),this.serializer)}}class Lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fy.bind(null,this.syncEngine),await _y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vy}()}createDatastore(e){const t=vi(e.databaseInfo.databaseId),r=function(i){return new ey(i)}(e.databaseInfo);return function(i,a,l,u){return new sy(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new oy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Xl(this.syncEngine,t,0),function(){return zl.v()?new zl:new X_}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const m=new Py(s,i,a,l,u,d);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);M(An,"RemoteStore shutting down."),i.Ea.add(5),await Zr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Lo.provider={build:()=>new Lo};/**
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
 */class jy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const rn="FirestoreClient";class zy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Yo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(rn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(rn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_a(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function co(n,e){n.asyncQueue.verifyOperationInProgress(),M(rn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hy(n);M(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Wl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Wl(e.remoteStore,s)),n._onlineComponents=e}async function Hy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(rn,"Using user provided OfflineComponentProvider");try{await co(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Gn("Error using user provided cache. Falling back to memory cache: "+t),await co(n,new Ys)}}else M(rn,"Using default OfflineComponentProvider"),await co(n,new $y(void 0));return n._offlineComponents}async function gd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(rn,"Using user provided OnlineComponentProvider"),await Jl(n,n._uninitializedComponentsProvider._online)):(M(rn,"Using default OnlineComponentProvider"),await Jl(n,new Lo))),n._onlineComponents}function Wy(n){return gd(n).then(e=>e.syncEngine)}async function Zl(n){const e=await gd(n),t=e.eventManager;return t.onListen=Cy.bind(null,e.syncEngine),t.onUnlisten=xy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ky.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dy.bind(null,e.syncEngine),t}/**
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
 */function _d(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const eu=new Map;/**
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
 */const yd="firestore.googleapis.com",tu=!0;class nu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yd,this.ssl=tu}else this.host=e.host,this.ssl=e.ssl??tu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T_)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}og("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_d(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ti{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xm;switch(r.type){case"firstParty":return new eg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=eu.get(t);r&&(M("ComponentProvider","Removing Datastore"),eu.delete(t),r.terminate())}(this),Promise.resolve()}}function Gy(n,e,t,r={}){var d;n=Qt(n,Ti);const s=sn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Ho(`https://${l}`),Wo("Firestore",!0)),i.host!==yd&&i.host!==l&&Gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Tn(u,a)&&(n._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Oe.MOCK_USER;else{p=Qu(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Oe(E)}n._authCredentials=new Ym(new ch(p,m))}}/**
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
 */class cn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cn(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Xr(t,Ie._jsonSchema))return new Ie(e,r||null,new j(le.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Te("string",Ie._jsonSchemaVersion),referencePath:Te("string")};class Xt extends cn{constructor(e,t,r){super(e,t,ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new j(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function wa(n,e,...t){if(n=de(n),lh("collection","path",e),n instanceof Ti){const r=le.fromString(e,...t);return pl(r),new Xt(n,null,r)}{if(!(n instanceof Ie||n instanceof Xt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return pl(r),new Xt(n.firestore,null,r)}}function Js(n,e,...t){if(n=de(n),arguments.length===1&&(e=Yo.newId()),lh("doc","path",e),n instanceof Ti){const r=le.fromString(e,...t);return fl(r),new Ie(n,null,new j(r))}{if(!(n instanceof Ie||n instanceof Xt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return fl(r),new Ie(n.firestore,n instanceof Xt?n.converter:null,new j(r))}}/**
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
 */const ru="AsyncQueue";class su{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ed(this,"async_queue_retry"),this._c=()=>{const r=ao();r&&M(ru,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new yn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!rr(e))throw e;M(ru,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nt("INTERNAL UNHANDLED ERROR: ",iu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ga.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:iu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function iu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ou(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Zn extends Ti{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new su,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new su(e),this._firestoreClient=void 0,await e}}}function Ky(n,e){const t=typeof n=="object"?n:Qo(),r=typeof n=="string"?n:$s,s=ci(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wu("firestore");i&&Gy(s,...i)}return s}function Ta(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qy(n),n._firestoreClient}function Qy(n){var r,s,i;const e=n._freezeSettings(),t=function(l,u,d,p){return new _g(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,_d(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new zy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(xe.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xr(e,et._jsonSchema))return et.fromBase64String(e.bytes)}}et._jsonSchemaVersion="firestore/bytes/1.0",et._jsonSchema={type:Te("string",et._jsonSchemaVersion),bytes:Te("string")};/**
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
 */class Ii{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ia{constructor(e){this._methodName=e}}/**
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
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(Xr(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:Te("string",_t._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xr(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new O(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:Te("string",yt._jsonSchemaVersion),vectorValues:Te("object")};/**
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
 */const Xy=/^__.*__$/;class Yy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yr(e,this.data,t,this.fieldTransforms)}}class vd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new an(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ed(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ac:n})}}class ba{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ba({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Zs(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ed(this.Ac)&&Xy.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Jy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vi(e)}Cc(e,t,r,s=!1){return new ba({Ac:e,methodName:t,Dc:r,path:Ne.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Aa(n){const e=n._freezeSettings(),t=vi(n._databaseId);return new Jy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wd(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Ra("Data must be an object, but it was:",a,r);const l=Td(r,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const E=Mo(e,m,t);if(!a.contains(E))throw new O(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);bd(p,E)||p.push(E)}u=new Qe(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new Yy(new ze(l),u,d)}class bi extends Ia{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}function Zy(n,e,t,r){const s=n.Cc(1,e,t);Ra("Data must be an object, but it was:",s,r);const i=[],a=ze.empty();on(r,(u,d)=>{const p=Sa(e,u,t);d=de(d);const m=s.yc(p);if(d instanceof bi)i.push(p);else{const E=ts(d,m);E!=null&&(i.push(p),a.set(p,E))}});const l=new Qe(i);return new vd(a,l,s.fieldTransforms)}function ev(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[Mo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Mo(e,i[E])),u.push(i[E+1]);const d=[],p=ze.empty();for(let E=l.length-1;E>=0;--E)if(!bd(d,l[E])){const R=l[E];let k=u[E];k=de(k);const N=a.yc(R);if(k instanceof bi)d.push(R);else{const C=ts(k,N);C!=null&&(d.push(R),p.set(R,C))}}const m=new Qe(d);return new vd(p,m,a.fieldTransforms)}function tv(n,e,t,r=!1){return ts(t,n.Cc(r?4:3,e))}function ts(n,e){if(Id(n=de(n)))return Ra("Unsupported field value:",e,n),Td(n,e);if(n instanceof Ia)return function(r,s){if(!Ed(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ts(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Bg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:Ks(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ks(s.serializer,i)}}if(r instanceof _t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof et)return{bytesValue:jh(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:aa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yt)return function(a,l){return{mapValue:{fields:{[yh]:{stringValue:vh},[js]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return sa(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${li(r)}`)}(n,e)}function Td(n,e){const t={};return dh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,(r,s)=>{const i=ts(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Id(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof _t||n instanceof et||n instanceof Ie||n instanceof Ia||n instanceof yt)}function Ra(n,e,t){if(!Id(t)||!uh(t)){const r=li(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Mo(n,e,t){if((e=de(e))instanceof Ii)return e._internalPath;if(typeof e=="string")return Sa(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const nv=new RegExp("[~\\*/\\[\\]]");function Sa(n,e,t){if(e.search(nv)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ii(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(S.INVALID_ARGUMENT,l+n+u)}function bd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ad{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rv extends Ad{data(){return super.data()}}function Pa(n,e){return typeof e=="string"?Sa(n,e):e instanceof Ii?e._internalPath:e._delegate._internalPath}/**
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
 */function sv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ca{}class ka extends Ca{}function iv(n,e,...t){let r=[];e instanceof Ca&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof xa).length,l=i.filter(u=>u instanceof Na).length;if(a>1||a>0&&l>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Na extends ka{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Na(e,t,r)}_apply(e){const t=this._parse(e);return Rd(e._query,t),new cn(e.firestore,e.converter,So(e._query,t))}_parse(e){const t=Aa(e.firestore);return function(i,a,l,u,d,p,m){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){cu(m,p);const k=[];for(const N of m)k.push(au(u,i,N));E={arrayValue:{values:k}}}else E=au(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||cu(m,p),E=tv(l,a,m,p==="in"||p==="not-in");return we.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class xa extends Ca{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Rd(a,u),a=So(a,u)}(e._query,t),new cn(e.firestore,e.converter,So(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Da extends ka{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Da(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jr(i,a)}(e._query,this._field,this._direction);return new cn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new sr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ov(n,e="asc"){const t=e,r=Pa("orderBy",n);return Da._create(r,t)}class Va extends ka{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Va(e,t,r)}_apply(e){return new cn(e.firestore,e.converter,Hs(e._query,this._limit,this._limitType))}}function av(n){return Va._create("limit",n,"F")}function au(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sh(e)&&t.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!j.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tl(n,new j(r))}if(t instanceof Ie)return Tl(n,t._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${li(t)}.`)}function cu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rd(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class cv{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return on(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[js].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ye(a.doubleValue));return new yt(t)}convertGeoPoint(e){return new _t(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Br(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);oe(Qh(r),9688,{name:e});const s=new qr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Sd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vn extends Ad{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",vn._jsonSchema={type:Te("string",vn._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class Vs extends vn{data(e={}){return super.data(e)}}class jn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vs(this._firestore,this._userDataWriter,r.key,r,new Pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:lv(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}jn._jsonSchemaVersion="firestore/querySnapshot/1.0",jn._jsonSchema={type:Te("string",jn._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class Pd extends cv{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function uv(n,e,t){n=Qt(n,Ie);const r=Qt(n.firestore,Zn),s=Sd(n.converter,e,t);return Oa(r,[wd(Aa(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ye.none())])}function hv(n){return Oa(Qt(n.firestore,Zn),[new _i(n._key,Ye.none())])}function Cd(n,...e){var u,d,p;n=de(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ou(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ou(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,a,l;if(n instanceof Ie)a=Qt(n.firestore,Zn),l=ra(n._key.path),i={next:m=>{e[r]&&e[r](dv(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Qt(n,cn);a=Qt(m.firestore,Zn),l=m._query;const E=new Pd(a);i={next:R=>{e[r]&&e[r](new jn(a,E,m,R))},error:e[r+1],complete:e[r+2]},sv(n._query)}return function(E,R,k,N){const C=new jy(N),H=new by(R,C,k);return E.asyncQueue.enqueueAndForget(async()=>Ey(await Zl(E),H)),()=>{C.Nu(),E.asyncQueue.enqueueAndForget(async()=>wy(await Zl(E),H))}}(Ta(a),l,s,i)}function Oa(n,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>Vy(await Wy(r),s,i)),i.promise}(Ta(n),e)}function dv(n,e,t){const r=t.docs.get(e._key),s=new Pd(n);return new vn(n,s,e._key,r,new Pr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class fv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Aa(e)}set(e,t,r){this._verifyNotCommitted();const s=lo(e,this._firestore),i=Sd(s.converter,t,r),a=wd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ye.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=lo(e,this._firestore);let a;return a=typeof(t=de(t))=="string"||t instanceof Ii?ev(this._dataReader,"WriteBatch.update",i._key,t,r,s):Zy(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=lo(e,this._firestore);return this._mutations=this._mutations.concat(new _i(t._key,Ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lo(n,e){if((n=de(n)).firestore!==e)throw new O(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function pv(n){return Ta(n=Qt(n,Zn)),new fv(n,e=>Oa(n,e))}(function(e,t=!0){(function(s){tr=s})(Pn),In(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Zn(new Jm(r.getProvider("auth-internal")),new tg(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(d.options.projectId,p)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pt(ll,ul,e),pt(ll,ul,"esm2020")})();function kd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mv=kd,Nd=new Kr("auth","Firebase",kd());/**
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
 */const ei=new Go("@firebase/auth");function gv(n,...e){ei.logLevel<=ee.WARN&&ei.warn(`Auth (${Pn}): ${n}`,...e)}function Os(n,...e){ei.logLevel<=ee.ERROR&&ei.error(`Auth (${Pn}): ${n}`,...e)}/**
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
 */function wt(n,...e){throw Ma(n,...e)}function ot(n,...e){return Ma(n,...e)}function La(n,e,t){const r={...mv(),[e]:t};return new Kr("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return La(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _v(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(n,"argument-error"),La(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ma(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nd.create(n,...e)}function K(n,e,...t){if(!n)throw Ma(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Os(e),new Error(e)}function Dt(n,e){n||Rt(e)}/**
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
 */function Uo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function yv(){return lu()==="http:"||lu()==="https:"}function lu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||Sp()||"connection"in navigator)?navigator.onLine:!0}function Ev(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=bp()||Pp()}get(){return vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ua(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Iv=new ns(3e4,6e4);function Fa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function or(n,e,t,r,s={}){return Dd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Qr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Rp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&sn(n.emulatorConfig.host)&&(d.credentials="include"),xd.fetch()(await Vd(n,n.config.apiHost,t,l),d)})}async function Dd(n,e,t){n._canInitEmulator=!1;const r={...wv,...e};try{const s=new Av(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw As(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw As(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw As(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw La(n,p,d);wt(n,p)}}catch(s){if(s instanceof It)throw s;wt(n,"network-request-failed",{message:String(s)})}}async function bv(n,e,t,r,s={}){const i=await or(n,e,t,r,s);return"mfaPendingCredential"in i&&wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ua(n.config,s):`${n.config.apiScheme}://${s}`;return Tv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Av{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Iv.get())})}}function As(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ot(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Rv(n,e){return or(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return or(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sv(n,e=!1){const t=de(n),r=await t.getIdToken(e),s=Ba(r);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vr(uo(s.auth_time)),issuedAtTime:Vr(uo(s.iat)),expirationTime:Vr(uo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uo(n){return Number(n)*1e3}function Ba(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const s=zu(t);return s?JSON.parse(s):(Os("Failed to decode base64 JWT payload"),null)}catch(s){return Os("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uu(n){const e=Ba(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&Pv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Pv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vr(this.lastLoginAt),this.creationTime=Vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Wr(n,ti(e,{idToken:t}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Od(s.providerUserInfo):[],a=Nv(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function kv(n){const e=de(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Od(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function xv(n,e){const t=await Dd(n,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Vd(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&sn(n.emulatorConfig.host)&&(u.credentials="include"),xd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Dv(n,e){return or(n,"POST","/v2/accounts:revokeToken",Fa(n,e))}/**
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
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=uu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new zn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Bt(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sv(this,e)}reload(){return kv(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Wr(this,Rv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:R,providerData:k,stsTokenManager:N}=t;K(m&&N,e,"internal-error");const C=zn.fromJSON(this.name,N);K(typeof m=="string",e,"internal-error"),Bt(r,e.name),Bt(s,e.name),K(typeof E=="boolean",e,"internal-error"),K(typeof R=="boolean",e,"internal-error"),Bt(i,e.name),Bt(a,e.name),Bt(l,e.name),Bt(u,e.name),Bt(d,e.name),Bt(p,e.name);const H=new it({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(H.providerData=k.map(W=>({...W}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new zn;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Od(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zn;l.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const hu=new Map;function St(n){Dt(n instanceof Function,"Expected a class definition");let e=hu.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hu.set(n,e),e)}/**
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
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ld.type="NONE";const du=Ld;/**
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
 */function Ls(n,e,t){return`firebase:${n}:${e}:${t}`}class Hn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ls("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?it._fromGetAccountInfoResponse(this.auth,t,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hn(St(du),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||St(du);const a=Ls(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const E=await ti(e,{idToken:p}).catch(()=>{});if(!E)break;m=await it._fromGetAccountInfoResponse(e,E,p)}else m=it._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Hn(i,e,r))}}/**
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
 */function fu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($d(e))return"Blackberry";if(jd(e))return"Webos";if(Ud(e))return"Safari";if((e.includes("chrome/")||Fd(e))&&!e.includes("edge/"))return"Chrome";if(qd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Md(n=Me()){return/firefox\//i.test(n)}function Ud(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fd(n=Me()){return/crios\//i.test(n)}function Bd(n=Me()){return/iemobile/i.test(n)}function qd(n=Me()){return/android/i.test(n)}function $d(n=Me()){return/blackberry/i.test(n)}function jd(n=Me()){return/webos/i.test(n)}function qa(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vv(n=Me()){var e;return qa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ov(){return Cp()&&document.documentMode===10}function zd(n=Me()){return qa(n)||qd(n)||jd(n)||$d(n)||/windows phone/i.test(n)||Bd(n)}/**
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
 */function Hd(n,e=[]){let t;switch(n){case"Browser":t=fu(Me());break;case"Worker":t=`${fu(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
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
 */class Lv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mv(n,e={}){return or(n,"GET","/v2/passwordPolicy",Fa(n,e))}/**
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
 */const Uv=6;class Fv{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Uv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Bv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new Lv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(En(this));const t=e?de(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mv(this),t=new Fv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&gv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ai(n){return de(n)}class pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mp(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qv(n){$a=n}function $v(n){return $a.loadJS(n)}function jv(){return $a.gapiScript}function zv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Hv(n,e){const t=ci(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tn(i,e??{}))return s;wt(s,"already-initialized")}return t.initialize({options:e})}function Wv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gv(n,e,t){const r=Ai(n);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wd(e),{host:a,port:l}=Kv(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Tn(d,r.config.emulator)&&Tn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,sn(a)?(Ho(`${i}//${a}${u}`),Wo("Auth",!0)):Qv()}function Wd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kv(n){const e=Wd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:mu(a)}}}function mu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Qv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Wn(n,e){return bv(n,"POST","/v1/accounts:signInWithIdp",Fa(n,e))}/**
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
 */const Xv="http://localhost";class Rn extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Rn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qr(t)}return e}}/**
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
 */class ja{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rs extends ja{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends rs{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class At extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class $t extends rs{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class jt extends rs{constructor(){super("twitter.com")}static credential(e,t){return Rn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),a=gu(r);return new er({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=gu(r);return new er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ri extends It{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ri(e,t,r,s)}}function Kd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,r):i})}async function Yv(n,e,t=!1){const r=await Wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return er._forOperation(n,"link",r)}/**
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
 */async function Jv(n,e,t=!1){const{auth:r}=n;if(Ze(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Wr(n,Kd(r,s,e,n),t);K(i.idToken,r,"internal-error");const a=Ba(i.idToken);K(a,r,"internal-error");const{sub:l}=a;return K(n.uid===l,r,"user-mismatch"),er._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
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
 */async function Zv(n,e,t=!1){if(Ze(n.app))return Promise.reject(En(n));const r="signIn",s=await Kd(n,r,e),i=await er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function eE(n,e,t,r){return de(n).onIdTokenChanged(e,t,r)}function tE(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function nE(n,e,t,r){return de(n).onAuthStateChanged(e,t,r)}function rE(n){return de(n).signOut()}const si="__sak";/**
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
 */class Qd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sE=1e3,iE=10;class Xd extends Qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ov()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},sE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xd.type="LOCAL";const oE=Xd;/**
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
 */class Yd extends Qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yd.type="SESSION";const Jd=Yd;/**
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
 */function aE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ri(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await aE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ri.receivers=[];/**
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
 */function za(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class cE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=za("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function vt(){return window}function lE(n){vt().location.href=n}/**
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
 */function Zd(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function uE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function dE(){return Zd()?self:null}/**
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
 */const ef="firebaseLocalStorageDb",fE=1,ii="firebaseLocalStorage",tf="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Si(n,e){return n.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function pE(){const n=indexedDB.deleteDatabase(ef);return new ss(n).toPromise()}function Bo(){const n=indexedDB.open(ef,fE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ii,{keyPath:tf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ii)?e(r):(r.close(),await pE(),e(await Bo()))})})}async function _u(n,e,t){const r=Si(n,!0).put({[tf]:e,value:t});return new ss(r).toPromise()}async function mE(n,e){const t=Si(n,!1).get(e),r=await new ss(t).toPromise();return r===void 0?null:r.value}function yu(n,e){const t=Si(n,!0).delete(e);return new ss(t).toPromise()}const gE=800,_E=3;class nf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_E)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ri._getInstance(dE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await uE(),!this.activeServiceWorker)return;this.sender=new cE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bo();return await _u(e,si,"1"),await yu(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>_u(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>mE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Si(s,!1).getAll();return new ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nf.type="LOCAL";const yE=nf;new ns(3e4,6e4);/**
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
 */function rf(n,e){return e?St(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ha extends Gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vE(n){return Zv(n.auth,new Ha(n),n.bypassAuthState)}function EE(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Jv(t,new Ha(n),n.bypassAuthState)}async function wE(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Yv(t,new Ha(n),n.bypassAuthState)}/**
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
 */class sf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vE;case"linkViaPopup":case"linkViaRedirect":return wE;case"reauthViaPopup":case"reauthViaRedirect":return EE;default:wt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TE=new ns(2e3,1e4);async function IE(n,e,t){if(Ze(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=Ai(n);_v(n,e,ja);const s=rf(r,t);return new gn(r,"signInViaPopup",e,s).executeNotNull()}class gn extends sf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TE.get())};e()}}gn.currentPopupAction=null;/**
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
 */const bE="pendingRedirect",Ms=new Map;class AE extends sf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ms.get(this.auth._key());if(!e){try{const r=await RE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ms.set(this.auth._key(),e)}return this.bypassAuthState||Ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RE(n,e){const t=CE(e),r=PE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function SE(n,e){Ms.set(n._key(),e)}function PE(n){return St(n._redirectPersistence)}function CE(n){return Ls(bE,n.config.apiKey,n.name)}async function kE(n,e,t=!1){if(Ze(n.app))return Promise.reject(En(n));const r=Ai(n),s=rf(r,e),a=await new AE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const NE=10*60*1e3;class xE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!of(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NE&&this.cachedEventUids.clear(),this.cachedEventUids.has(vu(e))}saveEventToCache(e){this.cachedEventUids.add(vu(e)),this.lastProcessedEventTime=Date.now()}}function vu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function of({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return of(n);default:return!1}}/**
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
 */async function VE(n,e={}){return or(n,"GET","/v1/projects",e)}/**
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
 */const OE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LE=/^https?/;async function ME(n){if(n.config.emulator)return;const{authorizedDomains:e}=await VE(n);for(const t of e)try{if(UE(t))return}catch{}wt(n,"unauthorized-domain")}function UE(n){const e=Uo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!LE.test(t))return!1;if(OE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FE=new ns(3e4,6e4);function Eu(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BE(n){return new Promise((e,t)=>{var s,i,a;function r(){Eu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eu(),t(ot(n,"network-request-failed"))},timeout:FE.get()})}if((i=(s=vt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=vt().gapi)!=null&&a.load)r();else{const l=zv("iframefcb");return vt()[l]=()=>{gapi.load?r():t(ot(n,"network-request-failed"))},$v(`${jv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Us=null,e})}let Us=null;function qE(n){return Us=Us||BE(n),Us}/**
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
 */const $E=new ns(5e3,15e3),jE="__/auth/iframe",zE="emulator/auth/iframe",HE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GE(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ua(e,zE):`https://${n.config.authDomain}/${jE}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},s=WE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Qr(r).slice(1)}`}async function KE(n){const e=await qE(n),t=vt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:GE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ot(n,"network-request-failed"),l=vt().setTimeout(()=>{i(a)},$E.get());function u(){vt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const QE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XE=500,YE=600,JE="_blank",ZE="http://localhost";class wu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ew(n,e,t,r=XE,s=YE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...QE,width:r.toString(),height:s.toString(),top:i,left:a},d=Me().toLowerCase();t&&(l=Fd(d)?JE:t),Md(d)&&(e=e||ZE,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[R,k])=>`${E}${R}=${k},`,"");if(Vv(d)&&l!=="_self")return tw(e||"",l),new wu(null);const m=window.open(e||"",l,p);K(m,n,"popup-blocked");try{m.focus()}catch{}return new wu(m)}function tw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const nw="__/auth/handler",rw="emulator/auth/handler",sw=encodeURIComponent("fac");async function Tu(n,e,t,r,s,i){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:s};if(e instanceof ja){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Lp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof rs){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${sw}=${encodeURIComponent(u)}`:"";return`${iw(n)}?${Qr(l).slice(1)}${d}`}function iw({config:n}){return n.emulator?Ua(n,rw):`https://${n.authDomain}/${nw}`}/**
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
 */const ho="webStorageSupport";class ow{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jd,this._completeRedirectFn=kE,this._overrideRedirectResult=SE}async _openPopup(e,t,r,s){var a;Dt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Tu(e,t,r,Uo(),s);return ew(e,i,za())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Tu(e,t,r,Uo(),s);return lE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await KE(e),r=new xE(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ho,{type:ho},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ho];i!==void 0&&t(!!i),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ME(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zd()||Ud()||qa()}}const aw=ow;var Iu="@firebase/auth",bu="1.12.0";/**
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
 */class cw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uw(n){In(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hd(n)},d=new Bv(r,s,i,u);return Wv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new Yt("auth-internal",e=>{const t=Ai(e.getProvider("auth").getImmediate());return(r=>new cw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Iu,bu,lw(n)),pt(Iu,bu,"esm2020")}/**
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
 */const hw=5*60,dw=Ku("authIdTokenMaxAge")||hw;let Au=null;const fw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>dw)return;const s=t==null?void 0:t.token;Au!==s&&(Au=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pw(n=Qo()){const e=ci(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hv(n,{popupRedirectResolver:aw,persistence:[yE,oE,Jd]}),r=Ku("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=fw(i.toString());tE(t,a,()=>a(t.currentUser)),eE(t,l=>a(l))}}const s=Hu("auth");return s&&Gv(t,`http://${s}`),t}function mw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}qv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",mw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uw("Browser");/**
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
 */const af="firebasestorage.googleapis.com",cf="storageBucket",gw=2*60*1e3,_w=10*60*1e3;/**
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
 */class _e extends It{constructor(e,t,r=0){super(fo(e),`Firebase Storage: ${t} (${fo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function fo(n){return"storage/"+n}function Wa(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(ge.UNKNOWN,n)}function yw(n){return new _e(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function vw(n){return new _e(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ew(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ge.UNAUTHENTICATED,n)}function ww(){return new _e(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Tw(n){return new _e(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Iw(){return new _e(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bw(){return new _e(ge.CANCELED,"User canceled the upload/download.")}function Aw(n){return new _e(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function Rw(n){return new _e(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Sw(){return new _e(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cf+"' property when initializing the app?")}function Pw(){return new _e(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Cw(){return new _e(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kw(n){return new _e(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qo(n){return new _e(ge.INVALID_ARGUMENT,n)}function lf(){return new _e(ge.APP_DELETED,"The Firebase app was deleted.")}function Nw(n){return new _e(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Or(n,e){return new _e(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function br(n){throw new _e(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Xe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Xe.makeFromUrl(e,t)}catch{return new Xe(e,"")}if(r.path==="")return r;throw Rw(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${p}/b/${s}/o${E}`,"i"),k={bucket:1,path:3},N=t===af?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",H=new RegExp(`^https?://${N}/${s}/${C}`,"i"),U=[{regex:l,indices:u,postModify:i},{regex:R,indices:k,postModify:d},{regex:H,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<U.length;B++){const se=U[B],ie=se.regex.exec(e);if(ie){const T=ie[se.indices.bucket];let g=ie[se.indices.path];g||(g=""),r=new Xe(T,g),se.postModify(r);break}}if(r==null)throw Aw(e);return r}}class xw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Dw(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let d=!1;function p(...C){d||(d=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,n(R,u())},C)}function E(){i&&clearTimeout(i)}function R(C,...H){if(d){E();return}if(C){E(),p.call(null,C,...H);return}if(u()||a){E(),p.call(null,C,...H);return}r<64&&(r*=2);let U;l===1?(l=2,U=0):U=(r+Math.random())*1e3,m(U)}let k=!1;function N(C){k||(k=!0,E(),!d&&(s!==null?(C||(l=2),clearTimeout(s),m(0)):C||(l=1)))}return m(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function Vw(n){n(!1)}/**
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
 */function Ow(n){return n!==void 0}function Lw(n){return typeof n=="object"&&!Array.isArray(n)}function Ga(n){return typeof n=="string"||n instanceof String}function Ru(n){return Ka()&&n instanceof Blob}function Ka(){return typeof Blob<"u"}function Su(n,e,t,r){if(r<e)throw qo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Qa(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function uf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var wn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(wn||(wn={}));/**
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
 */function Mw(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class Uw{constructor(e,t,r,s,i,a,l,u,d,p,m,E=!0,R=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,N)=>{this.resolve_=k,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===wn.NO_ERROR,u=i.getStatus();if(!l||Mw(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===wn.ABORT;r(!1,new Rs(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Rs(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Ow(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=Wa();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?lf():bw();a(u)}else{const u=Iw();a(u)}};this.canceled_?t(!1,new Rs(!1,null,!0)):this.backoffId_=Dw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Fw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Bw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $w(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jw(n,e,t,r,s,i,a=!0,l=!1){const u=uf(n.urlParams),d=n.url+u,p=Object.assign({},n.headers);return qw(p,e),Fw(p,t),Bw(p,i),$w(p,r),new Uw(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
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
 */function zw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Hw(...n){const e=zw();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ka())return new Blob(n);throw new _e(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ww(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Gw(n){if(typeof atob>"u")throw kw("base-64");return atob(n)}/**
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
 */const dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class po{constructor(e,t){this.data=e,this.contentType=t||null}}function Kw(n,e){switch(n){case dt.RAW:return new po(hf(e));case dt.BASE64:case dt.BASE64URL:return new po(df(n,e));case dt.DATA_URL:return new po(Xw(e),Yw(e))}throw Wa()}function hf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Qw(n){let e;try{e=decodeURIComponent(n)}catch{throw Or(dt.DATA_URL,"Malformed data URL.")}return hf(e)}function df(n,e){switch(n){case dt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Or(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Or(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Gw(e)}catch(s){throw s.message.includes("polyfill")?s:Or(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class ff{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Or(dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Jw(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Xw(n){const e=new ff(n);return e.base64?df(dt.BASE64,e.rest):Qw(e.rest)}function Yw(n){return new ff(n).contentType}function Jw(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class zt{constructor(e,t){let r=0,s="";Ru(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ru(this.data_)){const r=this.data_,s=Ww(r,e,t);return s===null?null:new zt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new zt(r,!0)}}static getBlob(...e){if(Ka()){const t=e.map(r=>r instanceof zt?r.data_:r);return new zt(Hw.apply(null,t))}else{const t=e.map(a=>Ga(a)?Kw(dt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new zt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function pf(n){let e;try{e=JSON.parse(n)}catch{return null}return Lw(e)?e:null}/**
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
 */function Zw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function eT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function mf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function tT(n,e){return e}class qe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||tT}}let Ss=null;function nT(n){return!Ga(n)||n.length<2?n:mf(n)}function gf(){if(Ss)return Ss;const n=[];n.push(new qe("bucket")),n.push(new qe("generation")),n.push(new qe("metageneration")),n.push(new qe("name","fullPath",!0));function e(i,a){return nT(a)}const t=new qe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new qe("size");return s.xform=r,n.push(s),n.push(new qe("timeCreated")),n.push(new qe("updated")),n.push(new qe("md5Hash",null,!0)),n.push(new qe("cacheControl",null,!0)),n.push(new qe("contentDisposition",null,!0)),n.push(new qe("contentEncoding",null,!0)),n.push(new qe("contentLanguage",null,!0)),n.push(new qe("contentType",null,!0)),n.push(new qe("metadata","customMetadata",!0)),Ss=n,Ss}function rT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Xe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function sT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return rT(r,n),r}function _f(n,e,t){const r=pf(e);return r===null?null:sT(n,r,t)}function iT(n,e,t,r){const s=pf(e);if(s===null||!Ga(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,m=n.fullPath,E="/b/"+a(p)+"/o/"+a(m),R=Qa(E,t,r),k=uf({alt:"media",token:d});return R+k})[0]}function oT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class yf{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function vf(n){if(!n)throw Wa()}function aT(n,e){function t(r,s){const i=_f(n,s,e);return vf(i!==null),i}return t}function cT(n,e){function t(r,s){const i=_f(n,s,e);return vf(i!==null),iT(i,s,n.host,n._protocol)}return t}function Ef(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ww():s=Ew():t.getStatus()===402?s=vw(n.bucket):t.getStatus()===403?s=Tw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function lT(n){const e=Ef(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=yw(n.path)),i.serverResponse=s.serverResponse,i}return t}function uT(n,e,t){const r=e.fullServerUrl(),s=Qa(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new yf(s,i,cT(n,t),a);return l.errorHandler=lT(e),l}function hT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function dT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=hT(null,e)),r}function fT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let B=0;B<2;B++)U=U+Math.random().toString().slice(2);return U}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const d=dT(e,r,s),p=oT(d,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+u+"--",R=zt.getBlob(m,r,E);if(R===null)throw Pw();const k={name:d.fullPath},N=Qa(i,n.host,n._protocol),C="POST",H=n.maxUploadRetryTime,W=new yf(N,C,aT(n,t),H);return W.urlParams=k,W.headers=a,W.body=R.uploadData(),W.errorHandler=Ef(e),W}class pT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw br("cannot .send() more than once");if(sn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw br("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw br("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw br("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw br("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mT extends pT{initXhr(){this.xhr_.responseType="text"}}function wf(){return new mT}/**
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
 */class Sn{constructor(e,t){this._service=e,t instanceof Xe?this._location=t:this._location=Xe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Sn(e,t)}get root(){const e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mf(this._location.path)}get storage(){return this._service}get parent(){const e=Zw(this._location.path);if(e===null)return null;const t=new Xe(this._location.bucket,e);return new Sn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Nw(e)}}function gT(n,e,t){n._throwIfRoot("uploadBytes");const r=fT(n.storage,n._location,gf(),new zt(e,!0),t);return n.storage.makeRequestWithTokens(r,wf).then(s=>({metadata:s,ref:n}))}function _T(n){n._throwIfRoot("getDownloadURL");const e=uT(n.storage,n._location,gf());return n.storage.makeRequestWithTokens(e,wf).then(t=>{if(t===null)throw Cw();return t})}function yT(n,e){const t=eT(n._location.path,e),r=new Xe(n._location.bucket,t);return new Sn(n.storage,r)}/**
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
 */function vT(n){return/^[A-Za-z]+:\/\//.test(n)}function ET(n,e){return new Sn(n,e)}function Tf(n,e){if(n instanceof Xa){const t=n;if(t._bucket==null)throw Sw();const r=new Sn(t,t._bucket);return e!=null?Tf(r,e):r}else return e!==void 0?yT(n,e):n}function wT(n,e){if(e&&vT(e)){if(n instanceof Xa)return ET(n,e);throw qo("To use ref(service, url), the first argument must be a Storage instance.")}else return Tf(n,e)}function Pu(n,e){const t=e==null?void 0:e[cf];return t==null?null:Xe.makeFromBucketSpec(t,n)}function TT(n,e,t,r={}){n.host=`${e}:${t}`;const s=sn(e);s&&(Ho(`https://${n.host}/b`),Wo("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Qu(i,n.app.options.projectId))}class Xa{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=af,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gw,this._maxUploadRetryTime=_w,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=Pu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=Pu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Su("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Su("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new xw(lf());{const a=jw(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Cu="@firebase/storage",ku="0.14.0";/**
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
 */const If="storage";function IT(n,e,t){return n=de(n),gT(n,e,t)}function bT(n){return n=de(n),_T(n)}function AT(n,e){return n=de(n),wT(n,e)}function RT(n=Qo(),e){n=de(n);const r=ci(n,If).getImmediate({identifier:e}),s=Wu("storage");return s&&ST(r,...s),r}function ST(n,e,t,r={}){TT(n,e,t,r)}function PT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Xa(t,r,s,e,Pn)}function CT(){In(new Yt(If,PT,"PUBLIC").setMultipleInstances(!0)),pt(Cu,ku,""),pt(Cu,ku,"esm2020")}CT();const kT={apiKey:"AIzaSyAy96lQqZuRueG_ZeABFzDJwqYuZZA4Fgw",authDomain:"the-spraywall-cellar.firebaseapp.com",projectId:"the-spraywall-cellar",storageBucket:"the-spraywall-cellar.firebasestorage.app",messagingSenderId:"491245667170",appId:"1:491245667170:web:5da5f8bcfc245c09b2a23b"},Ya=Ju(kT),Lr=Ky(Ya),$o=pw(Ya),NT=new At,xT=RT(Ya),bf="boards",DT="boulders";function VT(n=new Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`v${e}${t}${r}`}function OT(){return iv(wa(Lr,bf),ov("version","desc"),av(10))}function LT(n){return n.length===0?null:[...n].sort((e,t)=>e.version!==t.version?e.version<t.version?1:-1:t.createdAt-e.createdAt)[0]}function MT(n){const e=OT();return Cd(e,t=>{const r=t.docs.map(s=>s.data());n(LT(r))},t=>{console.error("Error subscribing to latest board:",t)})}async function UT(n,e){const t=`boards/${e}.jpg`,r=AT(xT,t);await IT(r,n,{contentType:n.type||"image/jpeg"});const s=await bT(r),{width:i,height:a}=await FT(n);return{url:s,path:t,width:i,height:a}}function FT(n){return new Promise((e,t)=>{const r=URL.createObjectURL(n),s=new Image;s.onload=()=>{const i={width:s.naturalWidth,height:s.naturalHeight};URL.revokeObjectURL(r),e(i)},s.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Failed to read image dimensions"))},s.src=r})}function Ja(n){return wa(Lr,bf,n,DT)}async function jo(n,e){try{await uv(Js(Ja(n),e.id),e)}catch(t){throw console.error("Failed to save boulder:",t),new Error("Failed to save boulder. Check your connection.")}}function BT(n,e){return Cd(Ja(n),t=>{const r=[];t.forEach(s=>r.push(s.data())),e(r)},t=>{console.error("Error subscribing to boulders:",t)})}async function qT(n,e){try{await hv(Js(Ja(n),e))}catch(t){throw console.error("Failed to delete boulder:",t),new Error("Failed to delete boulder. Check your connection.")}}function $T(n,e){if(n.length!==4||e.length!==4)throw new Error(`computeHomography requires exactly 4 point pairs (got ${n.length}/${e.length})`);const t=[],r=[];for(let i=0;i<4;i++){const{x:a,y:l}=n[i],{x:u,y:d}=e[i];t.push([a,l,1,0,0,0,-a*u,-l*u]),r.push(u),t.push([0,0,0,a,l,1,-a*d,-l*d]),r.push(d)}const s=zT(t,r);return[[s[0],s[1],s[2]],[s[3],s[4],s[5]],[s[6],s[7],1]]}function Af(n,e){const t=n[0][0]*e.x+n[0][1]*e.y+n[0][2],r=n[1][0]*e.x+n[1][1]*e.y+n[1][2],s=n[2][0]*e.x+n[2][1]*e.y+n[2][2];return{x:t/s,y:r/s}}function jT(n,e){return n.map(t=>{const{x:r,y:s}=Af(e,{x:t.x/100,y:t.y/100});return{...t,x:r*100,y:s*100}})}function zT(n,e){const t=n.length,r=n.map((i,a)=>[...i,e[a]]);for(let i=0;i<t;i++){let a=i,l=Math.abs(r[i][i]);for(let u=i+1;u<t;u++){const d=Math.abs(r[u][i]);d>l&&(l=d,a=u)}if(l<1e-12)throw new Error("Singular matrix in homography solver — pick 4 non-collinear points");if(a!==i){const u=r[i];r[i]=r[a],r[a]=u}for(let u=i+1;u<t;u++){const d=r[u][i]/r[i][i];if(d!==0)for(let p=i;p<=t;p++)r[u][p]-=d*r[i][p]}}const s=new Array(t).fill(0);for(let i=t-1;i>=0;i--){let a=r[i][t];for(let l=i+1;l<t;l++)a-=r[i][l]*s[l];s[i]=a/r[i][i]}return s}const st=4,HT=["#f97316","#22c55e","#3b82f6","#ec4899"];function WT(n){const{currentBoard:e,currentBoulders:t}=n;let r=1,s=null,i=null;const a=[],l=[];let u=null,d=!1;const p=document.createElement("div");p.className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto",p.innerHTML=`
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
  `,document.body.appendChild(p);const m=L=>p.querySelector(L),E=m("#step-title"),R=m("#step-help"),k=Array.from(p.querySelectorAll(".step")),N=m("#image-input"),C=m("#new-img"),H=m("#old-img"),W=m("#preview-img"),U=m("#new-overlay"),B=m("#old-overlay"),se=m("#preview-overlay"),ie=m("#counter-new"),T=m("#counter-old"),g=m("#btn-back"),y=m("#btn-reset"),w=m("#btn-next"),v=m("#btn-confirm"),I=m("#btn-cancel"),_=m("#status");function ae(L,x="info"){_.textContent=L,_.className="mt-3 text-sm "+(x==="error"?"text-red-400":x==="success"?"text-green-400":"text-yellow-400")}function $e(){i&&URL.revokeObjectURL(i),p.remove()}function tt(L){switch(r=L,k.forEach(x=>{x.classList.toggle("hidden",x.dataset.step!==String(L))}),E.textContent=`Step ${L} of 4`,ae(""),g.classList.add("hidden"),y.classList.add("hidden"),w.classList.add("hidden"),v.classList.add("hidden"),L){case 1:R.textContent="Choose the new spraywall photo from your device. Nothing is uploaded yet.";break;case 2:R.textContent=`Click ${st} distinct, easily-identifiable holds on the NEW image. Remember which ones — you'll click the same holds on the current image next.`,g.classList.remove("hidden"),y.classList.toggle("hidden",a.length===0),a.length===st&&w.classList.remove("hidden"),nt("new"),We(U,a);break;case 3:R.textContent=`Now click the SAME ${st} holds on the CURRENT board image, in the SAME order.`,g.classList.remove("hidden"),y.classList.toggle("hidden",l.length===0),l.length===st&&w.classList.remove("hidden"),nt("old"),We(B,l);break;case 4:R.textContent="Review the transformed boulder positions on the new image. Confirm to upload and save.",g.classList.remove("hidden"),v.classList.remove("hidden"),q();break}}function nt(L){const x=L==="new"?ie:T,$=L==="new"?a:l;x.textContent=`${$.length}/${st} points`}function We(L,x){L.innerHTML="",x.forEach(($,F)=>{const J=document.createElement("div");J.style.position="absolute",J.style.left=`${$.x}%`,J.style.top=`${$.y}%`,J.style.width="18px",J.style.height="18px",J.style.transform="translate(-50%, -50%)",J.style.borderRadius="50%",J.style.background=HT[F]??"#fff",J.style.border="2px solid white",J.style.color="white",J.style.fontSize="11px",J.style.fontWeight="bold",J.style.display="flex",J.style.alignItems="center",J.style.justifyContent="center",J.style.pointerEvents="none",J.textContent=String(F+1),L.appendChild(J)})}function V(L,x){const $=L.getBoundingClientRect(),F=(x.clientX-$.left)/$.width*100,J=(x.clientY-$.top)/$.height*100;return{x:Nu(F,0,100),y:Nu(J,0,100)}}function q(){try{const x=l.map(F=>({x:F.x/100,y:F.y/100})),$=a.map(F=>({x:F.x/100,y:F.y/100}));u=$T(x,$)}catch(x){ae(x instanceof Error?x.message:"Failed to compute transform","error"),u=null,v.classList.add("hidden");return}se.innerHTML="";let L=0;for(const x of t)for(const $ of x.holds){const{x:F,y:J}=Af(u,{x:$.x/100,y:$.y/100}),ve=F*100,Ue=J*100;if(ve<-5||ve>105||Ue<-5||Ue>105)continue;L++;const pe=document.createElement("div");pe.style.position="absolute",pe.style.left=`${ve}%`,pe.style.top=`${Ue}%`,pe.style.width="10px",pe.style.height="10px",pe.style.transform="translate(-50%, -50%)",pe.style.borderRadius="50%",pe.style.background=GT($),pe.style.opacity="0.85",pe.style.border="1px solid black",se.appendChild(pe)}ae(`${L} hold${L===1?"":"s"} mapped onto the new image. Confirm if alignment looks correct.`,"info")}async function Y(){if(d)return;if(!u||!s){ae("Missing transform or image — go back and re-pick points.","error");return}d=!0,v.disabled=!0,g.disabled=!0,I.disabled=!0,ae("Uploading image…","info");const L=Date.now(),x=VT(new Date(L)),$=`${L}_${x}`;try{const{url:F,path:J,width:ve,height:Ue}=await UT(s,$);ae("Writing board & boulders…","info");const pe={id:$,version:x,createdAt:L,updatedAt:L,recalibrated:!0,imageUrl:F,imagePath:J,imageWidth:ve,imageHeight:Ue},Ge=pv(Lr);Ge.set(Js(Lr,"boards",$),pe);const rt=wa(Lr,"boards",$,"boulders");for(const ct of t){const bt=jT(ct.holds,u);Ge.set(Js(rt,ct.id),{...ct,holds:bt,updatedAt:L})}await Ge.commit(),ae("Done! New board is live.","success"),setTimeout($e,600)}catch(F){console.error("Recalibration commit failed:",F),ae(F instanceof Error?`Failed: ${F.message}`:"Failed to save new board. Check console.","error"),d=!1,v.disabled=!1,g.disabled=!1,I.disabled=!1}}I.addEventListener("click",$e),g.addEventListener("click",()=>{r>1&&tt(r-1)}),y.addEventListener("click",()=>{r===2?(a.length=0,We(U,a),nt("new"),y.classList.add("hidden"),w.classList.add("hidden")):r===3&&(l.length=0,We(B,l),nt("old"),y.classList.add("hidden"),w.classList.add("hidden"))}),w.addEventListener("click",()=>{r===1&&s?tt(2):r===2&&a.length===st?tt(3):r===3&&l.length===st&&tt(4)}),v.addEventListener("click",Y),N.addEventListener("change",async()=>{var x;const L=(x=N.files)==null?void 0:x[0];if(L){if(!L.type.startsWith("image/")){ae("Please select an image file.","error");return}i&&URL.revokeObjectURL(i),s=L,i=URL.createObjectURL(L),C.src=i,W.src=i,H.src=e.imageUrl,await Promise.all([xu(C),xu(H)]),w.classList.remove("hidden"),ae('Image loaded. Click "Next" to start picking reference holds.',"info")}}),U.addEventListener("click",L=>{a.length>=st||(a.push(V(U,L)),We(U,a),nt("new"),y.classList.remove("hidden"),a.length===st&&w.classList.remove("hidden"))}),B.addEventListener("click",L=>{l.length>=st||(l.push(V(B,L)),We(B,l),nt("old"),y.classList.remove("hidden"),l.length===st&&w.classList.remove("hidden"))}),tt(1)}function Nu(n,e,t){return Math.max(e,Math.min(t,n))}function xu(n){return new Promise(e=>{n.complete&&n.naturalWidth>0?e():(n.addEventListener("load",()=>e(),{once:!0}),n.addEventListener("error",()=>e(),{once:!0}))})}function GT(n){switch(n.type){case"start":return"#16a34a";case"feet-only":return"#eab308";case"middle":return"#ffffff";case"top":return"#ef4444"}}const KT="hofiisek@gmail.com";let z={boulders:[],currentBoulder:null,selectedBoulderId:null,mode:"set"},Bn=null,Je=null,Ce=null,Pt=null,Ct=new Set,oi="grade",He=null,Ps=null,ft=null;function Rf(){return(Je==null?void 0:Je.email)===KT}const QT=["Crimps","Slopers","Pinches","Underclings","Pockets","Dyno","Technical"],Du=100,Vu=250;function Sf(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function XT(n,e,t){const r=Date.now();return{id:Sf(),name:n,grade:e,description:t,holds:[],createdAt:r,updatedAt:r}}function YT(){const n=document.querySelector("#app");n.innerHTML=`
    <div class="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-full md:w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
        <div class="mb-3">
          <h1 class="text-xl md:text-2xl font-bold mb-1">The Spraywall Cellar</h1>
          <p class="text-xs md:text-sm text-gray-400">Set boulders. Chalk the fuck up. Send it.</p>
        </div>
        ${Je?`<p class="text-xs text-gray-500 mb-3">Logged in as: ${Je.email}</p>`:'<p class="text-xs text-yellow-500 mb-3">⚠️ Login to create/edit/delete boulders</p>'}

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
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
            ${QT.map(e=>`
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
          <div class="flex justify-between items-center mb-3 gap-2">
            <h2 class="inline-flex items-center gap-1 bg-gray-700 rounded px-2 py-1 text-xs font-semibold text-gray-300">
              <span>Board:</span>
              <span id="board-version-label" class="font-normal">${He?He.version:"—"}</span>
              <span class="font-normal text-gray-500">(<span id="boulder-count">0</span>)</span>
              ${Rf()?`
              <button id="btn-recalibrate" class="ml-1 p-0.5 text-purple-300 hover:text-purple-200 active:text-purple-100" title="Upload new photo & recalibrate">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4" />
                </svg>
              </button>
              `:""}
            </h2>
            <div class="flex items-center gap-2">
              <div id="boulder-sort" class="flex bg-gray-700 rounded text-xs overflow-hidden">
                <button data-sort="grade" class="px-2 py-1" title="Sort by grade (hardest first)">Grade</button>
                <button data-sort="stars" class="px-2 py-1" title="Sort by stars (best first)">Stars</button>
              </div>
            </div>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Login/Logout Button -->
        <div class="mt-3 md:mt-4">
          ${Je?'<button id="logout-btn" class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded text-sm">Logout</button>':'<button id="login-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">Login with Google</button>'}
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
                ${He?`src="${He.imageUrl}"`:""}
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
  `}function JT(){const n=document.querySelector("#panzoom-container"),e=document.querySelector("#spraywall-img");if(!n||!e)return;const t=()=>{const r=n.parentElement,s=r.clientWidth,i=r.clientHeight,a=e.clientWidth||e.naturalWidth,l=e.clientHeight||e.naturalHeight,u=s/a,d=i/l,p=Math.min(u,d),E=Math.max(u,d);Bn=qu(n,{maxScale:5,minScale:p*.9,cursor:"grab",canvas:!0,step:.1}),Bn.zoom(E,{animate:!1}),Bn.pan(0,0,{animate:!1}),r.addEventListener("wheel",R=>{Bn&&Bn.zoomWithWheel(R,{step:.1})})};e.naturalWidth>0?t():e.addEventListener("load",t,{once:!0})}function Ou(){return Bn}function Tt(){var s;const n=document.querySelector("#holds-overlay");if(!n)return;n.innerHTML="";const e=((s=z.currentBoulder)==null?void 0:s.holds)||[],t=z.boulders.find(i=>i.id===z.selectedBoulderId);((t==null?void 0:t.holds)||e).forEach(i=>{const a=document.createElement("div");a.className=`hold-marker ${i.type}`,a.style.left=`${i.x}%`,a.style.top=`${i.y}%`,a.dataset.holdId=i.id,a.addEventListener("contextmenu",l=>{l.preventDefault(),Pf(i.id)}),n.appendChild(a)})}function ZT(n,e,t=2){if(!z.currentBoulder)return null;for(const r of z.currentBoulder.holds){const s=Math.abs(r.x-n),i=Math.abs(r.y-e);if(Math.sqrt(s*s+i*i)<t)return r}return null}function eI(n,e){const t=document.querySelector("#spraywall-img");if(!t)return;const r=t.getBoundingClientRect(),s=(n.clientX-r.left)/r.width*100,i=(n.clientY-r.top)/r.height*100,a=ZT(s,i,1);if(a){Pf(a.id);return}if(!z.currentBoulder){const d=document.querySelector("#boulder-name").value.trim()||"";z.currentBoulder=XT(d)}const l={id:Sf(),x:Math.max(0,Math.min(100,s)),y:Math.max(0,Math.min(100,i)),type:e};z.currentBoulder.holds.push(l),Tt()}function Pf(n){z.currentBoulder&&(z.currentBoulder.holds=z.currentBoulder.holds.filter(e=>e.id!==n),Tt())}function Za(){const n=document.querySelector("#mode-set"),e=document.querySelector("#mode-climb"),t=document.querySelector("#set-mode-content"),r=document.querySelector("#climb-mode-content");!n||!e||!t||!r||(z.mode==="set"?(n.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white",e.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",t.style.display="block",r.style.display="none"):(n.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",e.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white",t.style.display="none",r.style.display="block"))}function Lu(n){if(n==="climb"){z.currentBoulder=null,z.selectedBoulderId=null;const e=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),r=document.querySelector("#boulder-description");e&&(e.value=""),t&&(t.value=""),r&&(r.value=""),Ce=null,_n(),Tt()}n==="set"&&(z.selectedBoulderId=null,Tt(),Nn()),z.mode=n,Za()}async function tI(){if(!Je){alert("Please login to save boulders.");return}if(!z.currentBoulder){alert("No boulder to save. Add some holds first!");return}if(z.currentBoulder.holds.length===0){alert("Add at least one hold before saving.");return}const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description"),r=n.value.trim();if(!r){alert("Please enter a boulder name."),n.focus();return}if(r.length>Du){alert(`Name must be ${Du} characters or fewer.`),n.focus();return}const s=e.value.trim();if(!s){alert("Please enter a grade."),e.focus();return}if(Pt===null){alert("Please select a star rating.");return}const i=t.value.trim();if(i.length>Vu){alert(`Description must be ${Vu} characters or fewer.`),t.focus();return}if(z.currentBoulder.name=r,z.currentBoulder.grade=s,z.currentBoulder.rating=Pt,i?z.currentBoulder.description=i:delete z.currentBoulder.description,Ct.size>0?z.currentBoulder.tags=[...Ct]:delete z.currentBoulder.tags,z.currentBoulder.updatedAt=Date.now(),!He){alert("No board configured yet. Please reload or contact the admin.");return}try{await jo(He.id,z.currentBoulder),z.currentBoulder=null,n.value="",e.value="",t.value="",Ce=null,_n(),Pt=null,Pi(),Ct.clear(),Gr(),Tt()}catch(a){alert("Failed to save boulder. Please check your connection and try again."),console.error(a)}}function nI(){if(z.currentBoulder&&z.currentBoulder.holds.length>0&&!confirm("Are you sure you want to clear this boulder? All unsaved changes will be lost."))return;z.currentBoulder=null,z.selectedBoulderId=null;const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description");n&&(n.value=""),e&&(e.value=""),t&&(t.value=""),Ce=null,_n(),Pt=null,Pi(),Ct.clear(),Gr(),Tt(),Nn()}function Nn(){const n=document.querySelector("#boulder-list"),e=document.querySelector("#boulder-count");if(n){if(e&&(e.textContent=z.boulders.length.toString()),z.boulders.length===0){n.innerHTML='<p class="text-gray-500 text-sm">No boulders saved yet.</p>';return}n.innerHTML=[...z.boulders].sort((t,r)=>{const s=(r.grade??"").localeCompare(t.grade??""),i=(r.rating??0)-(t.rating??0);if(oi==="grade"){if(s!==0)return s;if(i!==0)return i}else{if(i!==0)return i;if(s!==0)return s}return r.createdAt-t.createdAt}).map(t=>`
        <div
          class="p-4 md:p-3 rounded ${z.selectedBoulderId===t.id?"bg-blue-600":"bg-gray-700 hover:bg-gray-600 active:bg-gray-600"} cursor-pointer"
          data-boulder-id="${t.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${t.name}</h3>
              ${t.grade||t.rating?`
                <p class="text-sm md:text-sm text-gray-300 flex items-center gap-2">
                  ${t.grade?`<span>${t.grade}</span>`:""}
                  ${t.rating?`<span><span class="text-amber-400">${"★".repeat(t.rating)}</span><span class="text-gray-600">${"★".repeat(3-t.rating)}</span></span>`:""}
                </p>
              `:""}
              ${t.description?`<p class="text-xs md:text-xs text-gray-400 mt-1 italic whitespace-pre-wrap break-words">${t.description}</p>`:""}
              ${t.tags&&t.tags.length>0?`
                <div class="flex flex-wrap gap-1 mt-1">
                  ${t.tags.map(s=>`<span class="px-2 py-0.5 rounded bg-gray-500 text-gray-100 text-xs">${s}</span>`).join("")}
                </div>
              `:""}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${t.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="${t.isLocked?"text-yellow-400 hover:text-yellow-300":"text-gray-400 hover:text-gray-300"} active:text-gray-200 p-2 -m-2"
                data-toggle-lock="${t.id}"
                title="${t.isLocked?"Locked":"Unlocked"}"
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${t.isLocked?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />'}
                </svg>
              </button>
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2 ${t.isLocked?"opacity-50":""}"
                data-edit-boulder="${t.id}"
                title="Edit boulder"
                ${t.isLocked?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2 ${t.isLocked?"opacity-50":""}"
                data-delete-boulder="${t.id}"
                title="Delete boulder"
                ${t.isLocked?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join(""),n.querySelectorAll("[data-boulder-id]").forEach(t=>{t.addEventListener("click",r=>{const s=r.target;if(s.closest("[data-delete-boulder]")||s.closest("[data-edit-boulder]")||s.closest("[data-toggle-lock]"))return;const i=t.dataset.boulderId;rI(i)})}),n.querySelectorAll("[data-toggle-lock]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const s=t.dataset.toggleLock;sI(s)})}),n.querySelectorAll("[data-edit-boulder]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const s=t.dataset.editBoulder,i=z.boulders.find(a=>a.id===s);i!=null&&i.isLocked||iI(s)})}),n.querySelectorAll("[data-delete-boulder]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const s=t.dataset.deleteBoulder,i=z.boulders.find(a=>a.id===s);i!=null&&i.isLocked||oI(s)})})}}function rI(n){z.selectedBoulderId===n?z.selectedBoulderId=null:z.selectedBoulderId=n,Nn(),Tt()}async function sI(n){if((Je==null?void 0:Je.email)!=="hofiisek@gmail.com"){alert("Only the admin can lock/unlock boulders.");return}const e=z.boulders.find(t=>t.id===n);if(e&&He){if(!e.isLocked){e.isLocked=!0;try{await jo(He.id,e)}catch(t){alert("Failed to lock boulder. Please check your connection."),console.error(t)}return}e.isLocked=!1;try{await jo(He.id,e)}catch(t){alert("Failed to unlock boulder. Please check your connection."),console.error(t)}}}async function iI(n){if(!Je){alert("Please login to edit boulders.");return}const e=z.boulders.find(i=>i.id===n);if(!e||!confirm("Are you sure you want to edit this boulder?"))return;z.mode="set",Za(),z.selectedBoulderId=null,z.currentBoulder={...e,holds:[...e.holds]};const t=document.querySelector("#boulder-name"),r=document.querySelector("#boulder-grade"),s=document.querySelector("#boulder-description");t&&(t.value=e.name),r&&(r.value=e.grade||""),s&&(s.value=e.description||""),Pt=e.rating??null,Pi(),Ct=new Set(e.tags??[]),Gr(),Tt()}async function oI(n){if(!Je){alert("Please login to delete boulders.");return}if(confirm("Are you sure you want to delete this boulder?")&&He)try{await qT(He.id,n),z.selectedBoulderId===n&&(z.selectedBoulderId=null,Tt())}catch(e){alert("Failed to delete boulder. Please check your connection and try again."),console.error(e)}}function _n(){const n=document.querySelector("#btn-start"),e=document.querySelector("#btn-feet-only"),t=document.querySelector("#btn-middle"),r=document.querySelector("#btn-top");[n,e,t,r].forEach(s=>{s==null||s.classList.remove("ring-2","ring-white")}),Ce==="start"&&(n==null||n.classList.add("ring-2","ring-white")),Ce==="feet-only"&&(e==null||e.classList.add("ring-2","ring-white")),Ce==="middle"&&(t==null||t.classList.add("ring-2","ring-white")),Ce==="top"&&(r==null||r.classList.add("ring-2","ring-white"))}function Pi(){document.querySelectorAll("#boulder-rating [data-rating]").forEach(n=>{const e=Number(n.dataset.rating),t=Pt!==null&&e<=Pt;n.classList.toggle("text-amber-400",t),n.classList.toggle("text-gray-500",!t)})}function Gr(){document.querySelectorAll("#boulder-tags [data-tag]").forEach(n=>{const e=n.dataset.tag,t=Ct.has(e);n.classList.toggle("bg-amber-400",t),n.classList.toggle("text-gray-900",t),n.classList.toggle("bg-gray-600",!t),n.classList.toggle("text-gray-300",!t)})}function Mu(){document.querySelectorAll("#boulder-sort [data-sort]").forEach(n=>{const e=n.dataset.sort===oi;n.classList.toggle("bg-blue-600",e),n.classList.toggle("text-white",e),n.classList.toggle("text-gray-300",!e)})}function aI(){var i,a,l,u,d,p,m,E,R,k,N,C,H,W;let n=0,e=0,t=!1;(i=document.querySelector("#login-btn"))==null||i.addEventListener("click",async()=>{try{await IE($o,NT)}catch(U){console.error("Login failed:",U),alert("Failed to login. Please try again.")}}),(a=document.querySelector("#logout-btn"))==null||a.addEventListener("click",async()=>{confirm("Are you sure you want to logout?")&&await rE($o)}),(l=document.querySelector("#mode-set"))==null||l.addEventListener("click",()=>{Lu("set")}),(u=document.querySelector("#mode-climb"))==null||u.addEventListener("click",()=>{Lu("climb")}),(d=document.querySelector("#btn-start"))==null||d.addEventListener("click",()=>{Ce=Ce==="start"?null:"start",_n()}),(p=document.querySelector("#btn-feet-only"))==null||p.addEventListener("click",()=>{Ce=Ce==="feet-only"?null:"feet-only",_n()}),(m=document.querySelector("#btn-middle"))==null||m.addEventListener("click",()=>{Ce=Ce==="middle"?null:"middle",_n()}),(E=document.querySelector("#btn-top"))==null||E.addEventListener("click",()=>{Ce=Ce==="top"?null:"top",_n()}),(R=document.querySelector("#boulder-rating"))==null||R.addEventListener("click",U=>{const B=U.target.closest("[data-rating]");if(!B)return;const se=Number(B.dataset.rating);Pt=Pt===se?null:se,Pi()}),(k=document.querySelector("#boulder-tags"))==null||k.addEventListener("click",U=>{const B=U.target.closest("[data-tag]");if(!B)return;const se=B.dataset.tag;Ct.has(se)?Ct.delete(se):Ct.add(se),Gr()}),Gr(),(N=document.querySelector("#boulder-sort"))==null||N.addEventListener("click",U=>{const B=U.target.closest("[data-sort]");if(!B)return;const se=B.dataset.sort;se!==oi&&(oi=se,Mu(),Nn())}),Mu();const r=document.querySelector("#panzoom-container");r==null||r.addEventListener("panzoomstart",()=>{const U=Ou();if(U){const B=U.getPan();n=B.x,e=B.y,t=!1}}),r==null||r.addEventListener("panzoomchange",()=>{const U=Ou();if(U){const B=U.getPan();(Math.abs(B.x-n)>2||Math.abs(B.y-e)>2)&&(t=!0)}}),r==null||r.addEventListener("panzoomend",()=>{setTimeout(()=>{t=!1},100)});const s=document.querySelector("#spraywall-img");s==null||s.addEventListener("click",U=>{Ce&&(t||eI(U,Ce))}),(C=document.querySelector("#btn-save"))==null||C.addEventListener("click",tI),(H=document.querySelector("#btn-clear"))==null||H.addEventListener("click",nI),(W=document.querySelector("#btn-recalibrate"))==null||W.addEventListener("click",()=>{if(Rf()){if(!He){alert("Wait for the current board to load before recalibrating.");return}WT({currentBoard:He,currentBoulders:z.boulders})}})}async function Uu(){nE($o,async n=>{Je=n,await uI()})}function cI(n){ft&&(ft(),ft=null),ft=BT(n,e=>{z.boulders=e,Nn(),z.selectedBoulderId&&Tt()})}function lI(n){He=n;const e=document.querySelector("#spraywall-img");e&&(n?e.src=n.imageUrl:e.removeAttribute("src"));const t=document.querySelector("#board-version-label");t&&(t.textContent=n?n.version:"—"),n?cI(n.id):(ft&&(ft(),ft=null),z.boulders=[],Nn())}async function uI(){Ps&&(Ps(),Ps=null),ft&&(ft(),ft=null),YT(),Nn(),Ps=MT(n=>{lI(n)}),JT(),aI(),Za()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Uu):Uu();
