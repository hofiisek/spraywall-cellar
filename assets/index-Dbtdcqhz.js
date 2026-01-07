(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var g=function(){return g=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},g.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(t,r){r=r||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),n}));var Pe=typeof document<"u"&&!!document.documentMode,ae;function qe(){return ae||(ae=document.createElement("div").style)}var ve=["webkit","moz","ms"],W={};function ue(e){if(W[e])return W[e];var t=qe();if(e in t)return W[e]=e;for(var r=e[0].toUpperCase()+e.slice(1),n=ve.length;n--;){var i="".concat(ve[n]).concat(r);if(i in t)return W[e]=i}}function J(e,t){return parseFloat(t[ue(e)])||0}function Z(e,t,r){r===void 0&&(r=window.getComputedStyle(e));var n=t==="border"?"Width":"";return{left:J("".concat(t,"Left").concat(n),r),right:J("".concat(t,"Right").concat(n),r),top:J("".concat(t,"Top").concat(n),r),bottom:J("".concat(t,"Bottom").concat(n),r)}}function T(e,t,r){e.style[ue(t)]=r}function Ce(e,t){var r=ue("transform");T(e,"transition","".concat(r," ").concat(t.duration,"ms ").concat(t.easing))}function Ie(e,t,r){var n=t.x,i=t.y,a=t.scale,s=t.isSVG;if(T(e,"transform","scale(".concat(a,") translate(").concat(n,"px, ").concat(i,"px)")),s&&Pe){var h=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",h)}}function ie(e){var t=e.parentNode,r=window.getComputedStyle(e),n=window.getComputedStyle(t),i=e.getBoundingClientRect(),a=t.getBoundingClientRect();return{elem:{style:r,width:i.width,height:i.height,top:i.top,bottom:i.bottom,left:i.left,right:i.right,margin:Z(e,"margin",r),border:Z(e,"border",r)},parent:{style:n,width:a.width,height:a.height,top:a.top,bottom:a.bottom,left:a.left,right:a.right,padding:Z(t,"padding",n),border:Z(t,"border",n)}}}var F={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?F={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(F={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function le(e,t,r,n){F[e].split(" ").forEach(function(i){t.addEventListener(i,r,n)})}function de(e,t,r){F[e].split(" ").forEach(function(n){t.removeEventListener(n,r)})}function xe(e,t){for(var r=e.length;r--;)if(e[r].pointerId===t.pointerId)return r;return-1}function ce(e,t){var r;if(t.touches){r=0;for(var n=0,i=t.touches;n<i.length;n++){var a=i[n];a.pointerId=r++,ce(e,a)}return}r=xe(e,t),r>-1&&e.splice(r,1),e.push(t)}function Ne(e,t){if(t.touches){for(;e.length;)e.pop();return}var r=xe(e,t);r>-1&&e.splice(r,1)}function he(e){e=e.slice(0);for(var t=e.pop(),r;r=e.pop();)t={clientX:(r.clientX-t.clientX)/2+t.clientX,clientY:(r.clientY-t.clientY)/2+t.clientY};return t}function se(e){if(e.length<2)return 0;var t=e[0],r=e[1];return Math.sqrt(Math.pow(Math.abs(r.clientX-t.clientX),2)+Math.pow(Math.abs(r.clientY-t.clientY),2))}function Oe(e){for(var t=e;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1}function ze(e){return(e.getAttribute("class")||"").trim()}function Te(e,t){return e.nodeType===1&&" ".concat(ze(e)," ").indexOf(" ".concat(t," "))>-1}function Ye(e,t){for(var r=e;r!=null;r=r.parentNode)if(Te(r,t.excludeClass)||t.exclude.indexOf(r)>-1)return!0;return!1}var Xe=/^http:[\w\.\/]+svg$/;function ke(e){return Xe.test(e.namespaceURI)&&e.nodeName.toLowerCase()!=="svg"}function De(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}var we={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:Ie,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function Se(e,t){if(!e)throw new Error("Panzoom requires an element as an argument");if(e.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!Oe(e))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=g(g({},we),t);var r=ke(e),n=e.parentNode;n.style.overflow=t.overflow,n.style.userSelect="none",n.style.touchAction=t.touchAction,(t.canvas?n:e).style.cursor=t.cursor,e.style.userSelect="none",e.style.touchAction=t.touchAction,T(e,"transformOrigin",typeof t.origin=="string"?t.origin:r?"0 0":"50% 50%");function i(){n.style.overflow="",n.style.userSelect="",n.style.touchAction="",n.style.cursor="",e.style.cursor="",e.style.userSelect="",e.style.touchAction="",T(e,"transformOrigin","")}function a(o){o===void 0&&(o={});for(var l in o)o.hasOwnProperty(l)&&(t[l]=o[l]);(o.hasOwnProperty("cursor")||o.hasOwnProperty("canvas"))&&(n.style.cursor=e.style.cursor="",(t.canvas?n:e).style.cursor=t.cursor),o.hasOwnProperty("overflow")&&(n.style.overflow=o.overflow),o.hasOwnProperty("touchAction")&&(n.style.touchAction=o.touchAction,e.style.touchAction=o.touchAction)}var s=0,h=0,p=1,w=!1;C(t.startScale,{animate:!1,force:!0}),setTimeout(function(){O(t.startX,t.startY,{animate:!1,force:!0})});function A(o,l,f){if(!f.silent){var m=new CustomEvent(o,{detail:l});e.dispatchEvent(m)}}function q(o,l,f){var m={x:s,y:h,scale:p,isSVG:r,originalEvent:f};return requestAnimationFrame(function(){typeof l.animate=="boolean"&&(l.animate?Ce(e,l):T(e,"transition","none")),l.setTransform(e,m,l),A(o,m,l),A("panzoomchange",m,l)}),m}function P(o,l,f,m){var d=g(g({},t),m),v={x:s,y:h,opts:d};if(!(m!=null&&m.force)&&(d.disablePan||d.panOnlyWhenZoomed&&p===d.startScale))return v;if(o=parseFloat(o),l=parseFloat(l),d.disableXAxis||(v.x=(d.relative?s:0)+o),d.disableYAxis||(v.y=(d.relative?h:0)+l),d.contain){var u=ie(e),x=u.elem.width/p,B=u.elem.height/p,R=x*f,$=B*f,I=(R-x)/2,N=($-B)/2;if(d.contain==="inside"){var te=(-u.elem.margin.left-u.parent.padding.left+I)/f,re=(u.parent.width-R-u.parent.padding.left-u.elem.margin.left-u.parent.border.left-u.parent.border.right+I)/f;v.x=Math.max(Math.min(v.x,re),te);var ne=(-u.elem.margin.top-u.parent.padding.top+N)/f,oe=(u.parent.height-$-u.parent.padding.top-u.elem.margin.top-u.parent.border.top-u.parent.border.bottom+N)/f;v.y=Math.max(Math.min(v.y,oe),ne)}else if(d.contain==="outside"){var te=(-(R-u.parent.width)-u.parent.padding.left-u.parent.border.left-u.parent.border.right+I)/f,re=(I-u.parent.padding.left)/f;v.x=Math.max(Math.min(v.x,re),te);var ne=(-($-u.parent.height)-u.parent.padding.top-u.parent.border.top-u.parent.border.bottom+N)/f,oe=(N-u.parent.padding.top)/f;v.y=Math.max(Math.min(v.y,oe),ne)}}return d.roundPixels&&(v.x=Math.round(v.x),v.y=Math.round(v.y)),v}function L(o,l){var f=g(g({},t),l),m={scale:p,opts:f};if(!(l!=null&&l.force)&&f.disableZoom)return m;var d=t.minScale,v=t.maxScale;if(f.contain){var u=ie(e),x=u.elem.width/p,B=u.elem.height/p;if(x>1&&B>1){var R=u.parent.width-u.parent.border.left-u.parent.border.right,$=u.parent.height-u.parent.border.top-u.parent.border.bottom,I=R/x,N=$/B;t.contain==="inside"?v=Math.min(v,I,N):t.contain==="outside"&&(d=Math.max(d,I,N))}}return m.scale=Math.min(Math.max(o,d),v),m}function O(o,l,f,m){var d=P(o,l,p,f);return s!==d.x||h!==d.y?(s=d.x,h=d.y,q("panzoompan",d.opts,m)):{x:s,y:h,scale:p,isSVG:r,originalEvent:m}}function C(o,l,f){var m=L(o,l),d=m.opts;if(!(!(l!=null&&l.force)&&d.disableZoom)){o=m.scale;var v=s,u=h;if(d.focal){var x=d.focal;v=(x.x/o-x.x/p+s*o)/o,u=(x.y/o-x.y/p+h*o)/o}var B=P(v,u,o,{relative:!1,force:!0});return s=B.x,h=B.y,p=o,q("panzoomzoom",d,f)}}function k(o,l){var f=g(g(g({},t),{animate:!0}),l);return C(p*Math.exp((o?1:-1)*f.step),f)}function y(o){return k(!0,o)}function b(o){return k(!1,o)}function S(o,l,f,m){var d=ie(e),v={width:d.parent.width-d.parent.padding.left-d.parent.padding.right-d.parent.border.left-d.parent.border.right,height:d.parent.height-d.parent.padding.top-d.parent.padding.bottom-d.parent.border.top-d.parent.border.bottom},u=l.clientX-d.parent.left-d.parent.padding.left-d.parent.border.left-d.elem.margin.left,x=l.clientY-d.parent.top-d.parent.padding.top-d.parent.border.top-d.elem.margin.top;r||(u-=d.elem.width/p/2,x-=d.elem.height/p/2);var B={x:u/v.width*(v.width*o),y:x/v.height*(v.height*o)};return C(o,g(g({},f),{animate:!1,focal:B}),m)}function E(o,l){o.preventDefault();var f=g(g(g({},t),l),{animate:!1}),m=o.deltaY===0&&o.deltaX?o.deltaX:o.deltaY,d=m<0?1:-1,v=L(p*Math.exp(d*f.step/3),f).scale;return S(v,o,f,o)}function D(o){var l=g(g(g({},t),{animate:!0,force:!0}),o);p=L(l.startScale,l).scale;var f=P(l.startX,l.startY,p,l);return s=f.x,h=f.y,q("panzoomreset",l)}var H,j,G,U,pe,V,M=[];function _(o){if(!Ye(o.target,t)){ce(M,o),w=!0,t.handleStartEvent(o),H=s,j=h,A("panzoomstart",{x:s,y:h,scale:p,isSVG:r,originalEvent:o},t);var l=he(M);G=l.clientX,U=l.clientY,pe=p,V=se(M)}}function K(o){if(!(!w||H===void 0||j===void 0||G===void 0||U===void 0)){ce(M,o);var l=he(M),f=M.length>1,m=p;if(f){V===0&&(V=se(M));var d=se(M)-V;m=L(d*t.step/80+pe).scale,S(m,l,{animate:!1},o)}(!f||t.pinchAndPan)&&O(H+(l.clientX-G)/m,j+(l.clientY-U)/m,{animate:!1},o)}}function Q(o){M.length===1&&A("panzoomend",{x:s,y:h,scale:p,isSVG:r,originalEvent:o},t),Ne(M,o),w&&(w=!1,H=j=G=U=void 0)}var ee=!1;function me(){ee||(ee=!0,le("down",t.canvas?n:e,_),le("move",document,K,{passive:!0}),le("up",document,Q,{passive:!0}))}function Le(){ee=!1,de("down",t.canvas?n:e,_),de("move",document,K),de("up",document,Q)}return t.noBind||me(),{bind:me,destroy:Le,eventNames:F,getPan:function(){return{x:s,y:h}},getScale:function(){return p},getOptions:function(){return De(t)},handleDown:_,handleMove:K,handleUp:Q,pan:O,reset:D,resetStyle:i,setOptions:a,setStyle:function(o,l){return T(e,o,l)},zoom:C,zoomIn:y,zoomOut:b,zoomToPoint:S,zoomWithWheel:E}}Se.defaultOptions=we;const Ee="spraywall-boulders",Re="1.0.0";function fe(e){try{localStorage.setItem(Ee,JSON.stringify(e))}catch(t){throw console.error("Failed to save boulders to localStorage:",t),new Error("Failed to save boulders. Storage might be full.")}}function $e(){try{const e=localStorage.getItem(Ee);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(e){return console.error("Failed to load boulders from localStorage:",e),[]}}function Fe(e){const t={version:Re,exportedAt:Date.now(),boulders:e},r=JSON.stringify(t,null,2),n=new Blob([r],{type:"application/json"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download=`spraywall-boulders-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}function He(e){return new Promise((t,r)=>{const n=new FileReader;n.onload=i=>{var a;try{const s=JSON.parse((a=i.target)==null?void 0:a.result);if(!s.boulders||!Array.isArray(s.boulders))throw new Error("Invalid import file format");t(s.boulders)}catch{r(new Error("Failed to parse import file"))}},n.onerror=()=>{r(new Error("Failed to read file"))},n.readAsText(e)})}const je="59a6cabc8b017562ccb1f3c9514870b4a677fda5b79788abae3dcea83430cb50";let c={boulders:[],currentBoulder:null,selectedBoulderId:null,mode:"set"},z=null;function Me(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}async function Ge(e){const t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}async function Ue(e){return await Ge(e)===je}function Ve(e,t,r){const n=Date.now();return{id:Me(),name:e,grade:t,description:r,holds:[],createdAt:n,updatedAt:n}}function We(){const e=document.querySelector("#app");e.innerHTML=`
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
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-900 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded font-medium text-sm md:text-base">
              Top
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
  `}function Je(){const e=document.querySelector("#panzoom-container"),t=document.querySelector("#spraywall-img");if(!e||!t)return;const r=()=>{const n=e.parentElement,i=n.clientWidth,a=n.clientHeight,s=t.naturalWidth,h=t.naturalHeight,p=i/s,w=a/h,A=Math.min(p,w),P=Math.max(p,w)*3;z=Se(e,{maxScale:5,minScale:A*.9,cursor:"grab",canvas:!0,step:.1}),z.zoom(P,{animate:!1}),z.pan(0,0,{animate:!1}),n.addEventListener("wheel",L=>{z&&z.zoomWithWheel(L,{step:.1})})};t.complete?r():t.addEventListener("load",r)}function ge(){return z}function Y(){var i;const e=document.querySelector("#holds-overlay");if(!e)return;e.innerHTML="";const t=((i=c.currentBoulder)==null?void 0:i.holds)||[],r=c.boulders.find(a=>a.id===c.selectedBoulderId);((r==null?void 0:r.holds)||t).forEach(a=>{const s=document.createElement("div");s.className=`hold-marker ${a.type}`,s.style.left=`${a.x}%`,s.style.top=`${a.y}%`,s.dataset.holdId=a.id,s.addEventListener("contextmenu",h=>{h.preventDefault(),Be(a.id)}),e.appendChild(s)})}function Ze(e,t,r=2){if(!c.currentBoulder)return null;for(const n of c.currentBoulder.holds){const i=Math.abs(n.x-e),a=Math.abs(n.y-t);if(Math.sqrt(i*i+a*a)<r)return n}return null}function _e(e,t){const r=document.querySelector("#spraywall-img");if(!r)return;const n=r.getBoundingClientRect(),i=(e.clientX-n.left)/n.width*100,a=(e.clientY-n.top)/n.height*100,s=Ze(i,a,1);if(s){Be(s.id);return}if(!c.currentBoulder){const w=document.querySelector("#boulder-name").value.trim()||"";c.currentBoulder=Ve(w)}const h={id:Me(),x:Math.max(0,Math.min(100,i)),y:Math.max(0,Math.min(100,a)),type:t};c.currentBoulder.holds.push(h),Y()}function Be(e){c.currentBoulder&&(c.currentBoulder.holds=c.currentBoulder.holds.filter(t=>t.id!==e),Y())}function Ae(){const e=document.querySelector("#mode-set"),t=document.querySelector("#mode-climb"),r=document.querySelector("#set-mode-content"),n=document.querySelector("#climb-mode-content");!e||!t||!r||!n||(c.mode==="set"?(e.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white",t.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",r.style.display="block",n.style.display="none"):(e.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",t.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white",r.style.display="none",n.style.display="block"))}function ye(e){c.mode=e,Ae()}function Ke(){if(!c.currentBoulder){alert("No boulder to save. Add some holds first!");return}if(c.currentBoulder.holds.length===0){alert("Add at least one hold before saving.");return}const e=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),r=document.querySelector("#boulder-description"),n=e.value.trim();if(!n){alert("Please enter a boulder name."),e.focus();return}const i=t.value.trim();if(!i){alert("Please enter a grade."),t.focus();return}const a=r.value.trim();c.currentBoulder.name=n,c.currentBoulder.grade=i,c.currentBoulder.description=a||void 0,c.currentBoulder.updatedAt=Date.now(),c.boulders.push(c.currentBoulder),fe(c.boulders),c.currentBoulder=null,e.value="",t.value="",r.value="",X(),Y()}function Qe(){c.currentBoulder=null,c.selectedBoulderId=null;const e=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade");e&&(e.value=""),t&&(t.value=""),Y(),X()}function X(){const e=document.querySelector("#boulder-list"),t=document.querySelector("#boulder-count");if(e){if(t&&(t.textContent=c.boulders.length.toString()),c.boulders.length===0){e.innerHTML='<p class="text-gray-500 text-sm">No boulders saved yet.</p>';return}e.innerHTML=c.boulders.sort((r,n)=>n.createdAt-r.createdAt).map(r=>`
        <div
          class="p-4 md:p-3 rounded ${c.selectedBoulderId===r.id?"bg-blue-600":"bg-gray-700 hover:bg-gray-600 active:bg-gray-600"} cursor-pointer"
          data-boulder-id="${r.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${r.name}</h3>
              ${r.grade?`<p class="text-sm md:text-sm text-gray-300">${r.grade}</p>`:""}
              ${r.description?`<p class="text-xs md:text-xs text-gray-400 mt-1 italic">${r.description}</p>`:""}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${r.holds.length} holds</p>
            </div>
            <button
              class="text-red-400 hover:text-red-300 active:text-red-200 ml-2 p-2 -m-2"
              data-delete-boulder="${r.id}"
              title="Delete boulder"
            >
              <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      `).join(""),e.querySelectorAll("[data-boulder-id]").forEach(r=>{r.addEventListener("click",n=>{if(n.target.closest("[data-delete-boulder]"))return;const a=r.dataset.boulderId;et(a)})}),e.querySelectorAll("[data-delete-boulder]").forEach(r=>{r.addEventListener("click",n=>{n.stopPropagation();const i=r.dataset.deleteBoulder;tt(i)})})}}function et(e){c.selectedBoulderId===e?c.selectedBoulderId=null:c.selectedBoulderId=e,X(),Y()}async function tt(e){const t=prompt("Enter password to delete this boulder:");if(!t)return;if(!await Ue(t)){alert("Incorrect password. Boulder not deleted.");return}confirm("Are you sure you want to delete this boulder?")&&(c.boulders=c.boulders.filter(n=>n.id!==e),c.selectedBoulderId===e&&(c.selectedBoulderId=null),fe(c.boulders),X(),Y())}function rt(){var p,w,A,q,P,L,O,C,k;let e=null,t=0,r=0,n=!1;(p=document.querySelector("#mode-set"))==null||p.addEventListener("click",()=>{ye("set")}),(w=document.querySelector("#mode-climb"))==null||w.addEventListener("click",()=>{ye("climb")}),(A=document.querySelector("#btn-start"))==null||A.addEventListener("click",()=>{e=e==="start"?null:"start",i()}),(q=document.querySelector("#btn-feet-only"))==null||q.addEventListener("click",()=>{e=e==="feet-only"?null:"feet-only",i()}),(P=document.querySelector("#btn-middle"))==null||P.addEventListener("click",()=>{e=e==="middle"?null:"middle",i()}),(L=document.querySelector("#btn-top"))==null||L.addEventListener("click",()=>{e=e==="top"?null:"top",i()});function i(){const y=document.querySelector("#btn-start"),b=document.querySelector("#btn-feet-only"),S=document.querySelector("#btn-middle"),E=document.querySelector("#btn-top");[y,b,S,E].forEach(D=>{D==null||D.classList.remove("ring-2","ring-white")}),e==="start"&&(y==null||y.classList.add("ring-2","ring-white")),e==="feet-only"&&(b==null||b.classList.add("ring-2","ring-white")),e==="middle"&&(S==null||S.classList.add("ring-2","ring-white")),e==="top"&&(E==null||E.classList.add("ring-2","ring-white"))}const a=document.querySelector("#panzoom-container");a==null||a.addEventListener("panzoomstart",()=>{const y=ge();if(y){const b=y.getPan();t=b.x,r=b.y,n=!1}}),a==null||a.addEventListener("panzoomchange",()=>{const y=ge();if(y){const b=y.getPan();(Math.abs(b.x-t)>2||Math.abs(b.y-r)>2)&&(n=!0)}}),a==null||a.addEventListener("panzoomend",()=>{setTimeout(()=>{n=!1},100)});const s=document.querySelector("#spraywall-img");s==null||s.addEventListener("click",y=>{e&&(n||_e(y,e))}),(O=document.querySelector("#btn-save"))==null||O.addEventListener("click",Ke),(C=document.querySelector("#btn-clear"))==null||C.addEventListener("click",Qe),(k=document.querySelector("#btn-export"))==null||k.addEventListener("click",()=>{if(c.boulders.length===0){alert("No boulders to export.");return}Fe(c.boulders)});const h=document.querySelector("#input-import");h==null||h.addEventListener("change",async y=>{var S;const b=(S=y.target.files)==null?void 0:S[0];if(b){try{const E=await He(b);confirm(`Import ${E.length} boulders? This will replace your current data.`)&&(c.boulders=E,fe(c.boulders),X(),alert("Boulders imported successfully!"))}catch(E){alert("Failed to import boulders. Please check the file format."),console.error(E)}h.value=""}})}function be(){c.boulders=$e(),We(),X(),Je(),rt(),Ae()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",be):be();
