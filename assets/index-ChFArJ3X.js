(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}})();const Ge=!1,Xe=(t,r)=>t===r,ee=Symbol("solid-proxy"),Me=typeof Proxy=="function",ae={equals:Xe};let Se=Oe;const N=1,te=2,Ie={owned:null,cleanups:null,context:null,owner:null};var z=null;let ne=null,We=null,C=null,S=null,P=null,se=0;function Te(t,r){const l=C,a=z,i=t.length===0,o=r===void 0?a:r,d=i?Ie:{owned:null,cleanups:null,context:o?o.context:null,owner:o},c=i?t:()=>t(()=>_(()=>K(d)));z=d,C=null;try{return Y(c,!0)}finally{C=l,z=a}}function ie(t,r){r=r?Object.assign({},ae,r):ae;const l={value:t,observers:null,observerSlots:null,comparator:r.equals||void 0},a=i=>(typeof i=="function"&&(i=i(l.value)),Pe(l,i));return[Ee.bind(l),a]}function k(t,r,l){const a=ve(t,r,!1,N);W(a)}function Ye(t,r,l){Se=ta;const a=ve(t,r,!1,N);a.user=!0,P?P.push(a):W(a)}function F(t,r,l){l=l?Object.assign({},ae,l):ae;const a=ve(t,r,!0,0);return a.observers=null,a.observerSlots=null,a.comparator=l.equals||void 0,W(a),Ee.bind(a)}function _(t){if(C===null)return t();const r=C;C=null;try{return t()}finally{C=r}}function Ae(t){return z===null||(z.cleanups===null?z.cleanups=[t]:z.cleanups.push(t)),t}function He(){return z}const[kt,$t]=ie(!1);function Qe(t,r){const l=Symbol("context");return{id:l,Provider:la(l),defaultValue:t}}function Je(t){let r;return z&&z.context&&(r=z.context[t.id])!==void 0?r:t.defaultValue}function Ze(t){const r=F(t),l=F(()=>pe(r()));return l.toArray=()=>{const a=l();return Array.isArray(a)?a:a!=null?[a]:[]},l}function Ee(){if(this.sources&&this.state)if(this.state===N)W(this);else{const t=S;S=null,Y(()=>le(this),!1),S=t}if(C){const t=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(t)):(C.sources=[this],C.sourceSlots=[t]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function Pe(t,r,l){let a=t.value;return(!t.comparator||!t.comparator(a,r))&&(t.value=r,t.observers&&t.observers.length&&Y(()=>{for(let i=0;i<t.observers.length;i+=1){const o=t.observers[i],d=ne&&ne.running;d&&ne.disposed.has(o),(d?!o.tState:!o.state)&&(o.pure?S.push(o):P.push(o),o.observers&&_e(o)),d||(o.state=N)}if(S.length>1e6)throw S=[],new Error},!1)),r}function W(t){if(!t.fn)return;K(t);const r=se;ea(t,t.value,r)}function ea(t,r,l){let a;const i=z,o=C;C=z=t;try{a=t.fn(r)}catch(d){return t.pure&&(t.state=N,t.owned&&t.owned.forEach(K),t.owned=null),t.updatedAt=l+1,Ne(d)}finally{C=o,z=i}(!t.updatedAt||t.updatedAt<=l)&&(t.updatedAt!=null&&"observers"in t?Pe(t,a):t.value=a,t.updatedAt=l)}function ve(t,r,l,a=N,i){const o={fn:t,state:a,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:z,context:z?z.context:null,pure:l};return z===null||z!==Ie&&(z.owned?z.owned.push(o):z.owned=[o]),o}function re(t){if(t.state===0)return;if(t.state===te)return le(t);if(t.suspense&&_(t.suspense.inFallback))return t.suspense.effects.push(t);const r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<se);)t.state&&r.push(t);for(let l=r.length-1;l>=0;l--)if(t=r[l],t.state===N)W(t);else if(t.state===te){const a=S;S=null,Y(()=>le(t,r[0]),!1),S=a}}function Y(t,r){if(S)return t();let l=!1;r||(S=[]),P?l=!0:P=[],se++;try{const a=t();return aa(l),a}catch(a){l||(P=null),S=null,Ne(a)}}function aa(t){if(S&&(Oe(S),S=null),t)return;const r=P;P=null,r.length&&Y(()=>Se(r),!1)}function Oe(t){for(let r=0;r<t.length;r++)re(t[r])}function ta(t){let r,l=0;for(r=0;r<t.length;r++){const a=t[r];a.user?t[l++]=a:re(a)}for(r=0;r<l;r++)re(t[r])}function le(t,r){t.state=0;for(let l=0;l<t.sources.length;l+=1){const a=t.sources[l];if(a.sources){const i=a.state;i===N?a!==r&&(!a.updatedAt||a.updatedAt<se)&&re(a):i===te&&le(a,r)}}}function _e(t){for(let r=0;r<t.observers.length;r+=1){const l=t.observers[r];l.state||(l.state=te,l.pure?S.push(l):P.push(l),l.observers&&_e(l))}}function K(t){let r;if(t.sources)for(;t.sources.length;){const l=t.sources.pop(),a=t.sourceSlots.pop(),i=l.observers;if(i&&i.length){const o=i.pop(),d=l.observerSlots.pop();a<i.length&&(o.sourceSlots[d]=a,i[a]=o,l.observerSlots[a]=d)}}if(t.tOwned){for(r=t.tOwned.length-1;r>=0;r--)K(t.tOwned[r]);delete t.tOwned}if(t.owned){for(r=t.owned.length-1;r>=0;r--)K(t.owned[r]);t.owned=null}if(t.cleanups){for(r=t.cleanups.length-1;r>=0;r--)t.cleanups[r]();t.cleanups=null}t.state=0}function ra(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function Ne(t,r=z){throw ra(t)}function pe(t){if(typeof t=="function"&&!t.length)return pe(t());if(Array.isArray(t)){const r=[];for(let l=0;l<t.length;l++){const a=pe(t[l]);Array.isArray(a)?r.push.apply(r,a):r.push(a)}return r}return t}function la(t,r){return function(a){let i;return k(()=>i=_(()=>(z.context={...z.context,[t]:a.value},Ze(()=>a.children))),void 0),i}}function n(t,r){return _(()=>t(r||{}))}function J(){return!0}const ge={get(t,r,l){return r===ee?l:t.get(r)},has(t,r){return r===ee?!0:t.has(r)},set:J,deleteProperty:J,getOwnPropertyDescriptor(t,r){return{configurable:!0,enumerable:!0,get(){return t.get(r)},set:J,deleteProperty:J}},ownKeys(t){return t.keys()}};function ce(t){return(t=typeof t=="function"?t():t)?t:{}}function sa(){for(let t=0,r=this.length;t<r;++t){const l=this[t]();if(l!==void 0)return l}}function de(...t){let r=!1;for(let d=0;d<t.length;d++){const c=t[d];r=r||!!c&&ee in c,t[d]=typeof c=="function"?(r=!0,F(c)):c}if(Me&&r)return new Proxy({get(d){for(let c=t.length-1;c>=0;c--){const f=ce(t[c])[d];if(f!==void 0)return f}},has(d){for(let c=t.length-1;c>=0;c--)if(d in ce(t[c]))return!0;return!1},keys(){const d=[];for(let c=0;c<t.length;c++)d.push(...Object.keys(ce(t[c])));return[...new Set(d)]}},ge);const l={},a=Object.create(null);for(let d=t.length-1;d>=0;d--){const c=t[d];if(!c)continue;const f=Object.getOwnPropertyNames(c);for(let h=f.length-1;h>=0;h--){const m=f[h];if(m==="__proto__"||m==="constructor")continue;const v=Object.getOwnPropertyDescriptor(c,m);if(!a[m])a[m]=v.get?{enumerable:!0,configurable:!0,get:sa.bind(l[m]=[v.get.bind(c)])}:v.value!==void 0?v:void 0;else{const b=l[m];b&&(v.get?b.push(v.get.bind(c)):v.value!==void 0&&b.push(()=>v.value))}}}const i={},o=Object.keys(a);for(let d=o.length-1;d>=0;d--){const c=o[d],f=a[c];f&&f.get?Object.defineProperty(i,c,f):i[c]=f?f.value:void 0}return i}function Le(t,...r){if(Me&&ee in t){const i=new Set(r.length>1?r.flat():r[0]),o=r.map(d=>new Proxy({get(c){return d.includes(c)?t[c]:void 0},has(c){return d.includes(c)&&c in t},keys(){return d.filter(c=>c in t)}},ge));return o.push(new Proxy({get(d){return i.has(d)?void 0:t[d]},has(d){return i.has(d)?!1:d in t},keys(){return Object.keys(t).filter(d=>!i.has(d))}},ge)),o}const l={},a=r.map(()=>({}));for(const i of Object.getOwnPropertyNames(t)){const o=Object.getOwnPropertyDescriptor(t,i),d=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let c=!1,f=0;for(const h of r)h.includes(i)&&(c=!0,d?a[f][i]=o.value:Object.defineProperty(a[f],i,o)),++f;c||(d?l[i]=o.value:Object.defineProperty(l,i,o))}return[...a,l]}const ia=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],oa=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...ia]),na=new Set(["innerHTML","textContent","innerText","children"]),ca=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),da=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function ya(t,r){const l=da[t];return typeof l=="object"?l[r]?l.$:void 0:l}const ua=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),fa=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),pa={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},L=t=>F(()=>t());function ga(t,r,l){let a=l.length,i=r.length,o=a,d=0,c=0,f=r[i-1].nextSibling,h=null;for(;d<i||c<o;){if(r[d]===l[c]){d++,c++;continue}for(;r[i-1]===l[o-1];)i--,o--;if(i===d){const m=o<a?c?l[c-1].nextSibling:l[o-c]:f;for(;c<o;)t.insertBefore(l[c++],m)}else if(o===c)for(;d<i;)(!h||!h.has(r[d]))&&r[d].remove(),d++;else if(r[d]===l[o-1]&&l[c]===r[i-1]){const m=r[--i].nextSibling;t.insertBefore(l[c++],r[d++].nextSibling),t.insertBefore(l[--o],m),r[i]=l[o]}else{if(!h){h=new Map;let v=c;for(;v<o;)h.set(l[v],v++)}const m=h.get(r[d]);if(m!=null)if(c<m&&m<o){let v=d,b=1,I;for(;++v<i&&v<o&&!((I=h.get(r[v]))==null||I!==m+b);)b++;if(b>m-c){const D=r[d];for(;c<m;)t.insertBefore(l[c++],D)}else t.replaceChild(l[c++],r[d++])}else d++;else r[d++].remove()}}}const we="_$DX_DELEGATE";function ha(t,r,l,a={}){let i;return Te(o=>{i=o,r===document?t():y(r,t(),r.firstChild?null:void 0,l)},a.owner),()=>{i(),r.textContent=""}}function M(t,r,l,a){let i;const o=()=>{const c=document.createElement("template");return c.innerHTML=t,c.content.firstChild},d=()=>(i||(i=o())).cloneNode(!0);return d.cloneNode=d,d}function oe(t,r=window.document){const l=r[we]||(r[we]=new Set);for(let a=0,i=t.length;a<i;a++){const o=t[a];l.has(o)||(l.add(o),r.addEventListener(o,za))}}function x(t,r,l){l==null?t.removeAttribute(r):t.setAttribute(r,l)}function ma(t,r,l,a){a==null?t.removeAttributeNS(r,l):t.setAttributeNS(r,l,a)}function va(t,r,l){l?t.setAttribute(r,""):t.removeAttribute(r)}function $(t,r){r==null?t.removeAttribute("class"):t.className=r}function je(t,r,l,a){if(a)Array.isArray(l)?(t[`$$${r}`]=l[0],t[`$$${r}Data`]=l[1]):t[`$$${r}`]=l;else if(Array.isArray(l)){const i=l[0];t.addEventListener(r,l[0]=o=>i.call(t,l[1],o))}else t.addEventListener(r,l,typeof l!="function"&&l)}function wa(t,r,l={}){const a=Object.keys(r||{}),i=Object.keys(l);let o,d;for(o=0,d=i.length;o<d;o++){const c=i[o];!c||c==="undefined"||r[c]||(be(t,c,!1),delete l[c])}for(o=0,d=a.length;o<d;o++){const c=a[o],f=!!r[c];!c||c==="undefined"||l[c]===f||!f||(be(t,c,!0),l[c]=f)}return l}function ba(t,r,l){if(!r)return l?x(t,"style"):r;const a=t.style;if(typeof r=="string")return a.cssText=r;typeof l=="string"&&(a.cssText=l=void 0),l||(l={}),r||(r={});let i,o;for(o in l)r[o]==null&&a.removeProperty(o),delete l[o];for(o in r)i=r[o],i!==l[o]&&(a.setProperty(o,i),l[o]=i);return l}function qe(t,r={},l,a){const i={};return k(()=>i.children=G(t,r.children,i.children)),k(()=>typeof r.ref=="function"&&ka(r.ref,t)),k(()=>$a(t,r,l,!0,i,!0)),i}function ka(t,r,l){return _(()=>t(r,l))}function y(t,r,l,a){if(l!==void 0&&!a&&(a=[]),typeof r!="function")return G(t,r,a,l);k(i=>G(t,r(),i,l),a)}function $a(t,r,l,a,i={},o=!1){r||(r={});for(const d in i)if(!(d in r)){if(d==="children")continue;i[d]=ke(t,d,null,i[d],l,o,r)}for(const d in r){if(d==="children")continue;const c=r[d];i[d]=ke(t,d,c,i[d],l,o,r)}}function xa(t){return t.toLowerCase().replace(/-([a-z])/g,(r,l)=>l.toUpperCase())}function be(t,r,l){const a=r.trim().split(/\s+/);for(let i=0,o=a.length;i<o;i++)t.classList.toggle(a[i],l)}function ke(t,r,l,a,i,o,d){let c,f,h,m,v;if(r==="style")return ba(t,l,a);if(r==="classList")return wa(t,l,a);if(l===a)return a;if(r==="ref")o||l(t);else if(r.slice(0,3)==="on:"){const b=r.slice(3);a&&t.removeEventListener(b,a,typeof a!="function"&&a),l&&t.addEventListener(b,l,typeof l!="function"&&l)}else if(r.slice(0,10)==="oncapture:"){const b=r.slice(10);a&&t.removeEventListener(b,a,!0),l&&t.addEventListener(b,l,!0)}else if(r.slice(0,2)==="on"){const b=r.slice(2).toLowerCase(),I=ua.has(b);if(!I&&a){const D=Array.isArray(a)?a[0]:a;t.removeEventListener(b,D)}(I||l)&&(je(t,b,l,I),I&&oe([b]))}else if(r.slice(0,5)==="attr:")x(t,r.slice(5),l);else if(r.slice(0,5)==="bool:")va(t,r.slice(5),l);else if((v=r.slice(0,5)==="prop:")||(h=na.has(r))||!i&&((m=ya(r,t.tagName))||(f=oa.has(r)))||(c=t.nodeName.includes("-")||"is"in d))v&&(r=r.slice(5),f=!0),r==="class"||r==="className"?$(t,l):c&&!f&&!h?t[xa(r)]=l:t[m||r]=l;else{const b=i&&r.indexOf(":")>-1&&pa[r.split(":")[0]];b?ma(t,b,r,l):x(t,ca[r]||r,l)}return l}function za(t){let r=t.target;const l=`$$${t.type}`,a=t.target,i=t.currentTarget,o=f=>Object.defineProperty(t,"target",{configurable:!0,value:f}),d=()=>{const f=r[l];if(f&&!r.disabled){const h=r[`${l}Data`];if(h!==void 0?f.call(r,h,t):f.call(r,t),t.cancelBubble)return}return r.host&&typeof r.host!="string"&&!r.host._$host&&r.contains(t.target)&&o(r.host),!0},c=()=>{for(;d()&&(r=r._$host||r.parentNode||r.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return r||document}}),t.composedPath){const f=t.composedPath();o(f[0]);for(let h=0;h<f.length-2&&(r=f[h],!!d());h++){if(r._$host){r=r._$host,c();break}if(r.parentNode===i)break}}else c();o(a)}function G(t,r,l,a,i){for(;typeof l=="function";)l=l();if(r===l)return l;const o=typeof r,d=a!==void 0;if(t=d&&l[0]&&l[0].parentNode||t,o==="string"||o==="number"){if(o==="number"&&(r=r.toString(),r===l))return l;if(d){let c=l[0];c&&c.nodeType===3?c.data!==r&&(c.data=r):c=document.createTextNode(r),l=q(t,l,a,c)}else l!==""&&typeof l=="string"?l=t.firstChild.data=r:l=t.textContent=r}else if(r==null||o==="boolean")l=q(t,l,a);else{if(o==="function")return k(()=>{let c=r();for(;typeof c=="function";)c=c();l=G(t,c,l,a)}),()=>l;if(Array.isArray(r)){const c=[],f=l&&Array.isArray(l);if(he(c,r,l,i))return k(()=>l=G(t,c,l,a,!0)),()=>l;if(c.length===0){if(l=q(t,l,a),d)return l}else f?l.length===0?$e(t,c,a):ga(t,l,c):(l&&q(t),$e(t,c));l=c}else if(r.nodeType){if(Array.isArray(l)){if(d)return l=q(t,l,a,r);q(t,l,null,r)}else l==null||l===""||!t.firstChild?t.appendChild(r):t.replaceChild(r,t.firstChild);l=r}}return l}function he(t,r,l,a){let i=!1;for(let o=0,d=r.length;o<d;o++){let c=r[o],f=l&&l[t.length],h;if(!(c==null||c===!0||c===!1))if((h=typeof c)=="object"&&c.nodeType)t.push(c);else if(Array.isArray(c))i=he(t,c,f)||i;else if(h==="function")if(a){for(;typeof c=="function";)c=c();i=he(t,Array.isArray(c)?c:[c],Array.isArray(f)?f:[f])||i}else t.push(c),i=!0;else{const m=String(c);f&&f.nodeType===3&&f.data===m?t.push(f):t.push(document.createTextNode(m))}}return i}function $e(t,r,l=null){for(let a=0,i=r.length;a<i;a++)t.insertBefore(r[a],l)}function q(t,r,l,a){if(l===void 0)return t.textContent="";const i=a||document.createTextNode("");if(r.length){let o=!1;for(let d=r.length-1;d>=0;d--){const c=r[d];if(i!==c){const f=c.parentNode===t;!o&&!d?f?t.replaceChild(i,c):t.insertBefore(i,l):f&&c.remove()}else o=!0}}else t.insertBefore(i,l);return[i]}const Ca="http://www.w3.org/2000/svg";function Ma(t,r=!1,l=void 0){return r?document.createElementNS(Ca,t):document.createElement(t,{is:l})}function Sa(t,r){const l=F(t);return F(()=>{const a=l();switch(typeof a){case"function":return _(()=>a(r));case"string":const i=fa.has(a),o=Ma(a,i,_(()=>r.is));return qe(o,r,i),o}})}function Ia(t){const[,r]=Le(t,["component"]);return Sa(()=>t.component,r)}let Ta={data:""},Aa=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Ta,Ha=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ea=/\/\*[^]*?\*\/|  +/g,xe=/\n+/g,j=(t,r)=>{let l="",a="",i="";for(let o in t){let d=t[o];o[0]=="@"?o[1]=="i"?l=o+" "+d+";":a+=o[1]=="f"?j(d,o):o+"{"+j(d,o[1]=="k"?"":r)+"}":typeof d=="object"?a+=j(d,r?r.replace(/([^,])+/g,c=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,c):c?c+" "+f:f)):o):d!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=j.p?j.p(o,d):o+":"+d+";")}return l+(r&&i?r+"{"+i+"}":i)+a},A={},Re=t=>{if(typeof t=="object"){let r="";for(let l in t)r+=l+Re(t[l]);return r}return t},Pa=(t,r,l,a,i)=>{let o=Re(t),d=A[o]||(A[o]=(f=>{let h=0,m=11;for(;h<f.length;)m=101*m+f.charCodeAt(h++)>>>0;return"go"+m})(o));if(!A[d]){let f=o!==t?t:(h=>{let m,v,b=[{}];for(;m=Ha.exec(h.replace(Ea,""));)m[4]?b.shift():m[3]?(v=m[3].replace(xe," ").trim(),b.unshift(b[0][v]=b[0][v]||{})):b[0][m[1]]=m[2].replace(xe," ").trim();return b[0]})(t);A[d]=j(i?{["@keyframes "+d]:f}:f,l?"":"."+d)}let c=l&&A.g?A.g:null;return l&&(A.g=A[d]),((f,h,m,v)=>{v?h.data=h.data.replace(v,f):h.data.indexOf(f)===-1&&(h.data=m?f+h.data:h.data+f)})(A[d],r,a,c),d},Oa=(t,r,l)=>t.reduce((a,i,o)=>{let d=r[o];if(d&&d.call){let c=d(l),f=c&&c.props&&c.props.className||/^go/.test(c)&&c;d=f?"."+f:c&&typeof c=="object"?c.props?"":j(c,""):c===!1?"":c}return a+i+(d??"")},"");function w(t){let r=this||{},l=t.call?t(r.p):t;return Pa(l.unshift?l.raw?Oa(l,[].slice.call(arguments,1),r.p):l.reduce((a,i)=>Object.assign(a,i&&i.call?i(r.p):i),{}):l,Aa(r.target),r.g,r.o,r.k)}w.bind({g:1});w.bind({k:1});const _a=Qe();function Na(t){let r=this||{};return(...l)=>{const a=i=>{const o=Je(_a),d=de(i,{theme:o}),c=de(d,{get class(){const I=d.class,D="class"in d&&/^go[0-9]+/.test(I);let Ke=w.apply({target:r.target,o:D,p:d,g:r.g},l);return[I,Ke].filter(Boolean).join(" ")}}),[f,h]=Le(c,["as","theme"]),m=h,v=f.as||t;let b;return typeof v=="function"?b=v(m):r.g==1?(b=document.createElement(v),qe(b,m)):b=Ia(de({component:v},m)),b};return a.class=i=>_(()=>w.apply({target:r.target,p:i,g:r.g},l)),a}}const La=new Proxy(Na,{get(t,r){return t(r)}});function s(t){return`${t/16}rem`}const Fe={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{color:{lightMode:{"surface-tint":()=>e.raw.sys.color.lightMode.primary(),"surface-tint-color":()=>e.raw.sys.color.lightMode.primary(),"on-error-container":()=>e.raw.ref.palette.error10(),"on-error":()=>e.raw.ref.palette.error100(),"error-container":()=>e.raw.ref.palette.error90(),"on-tertiary-container":()=>e.raw.ref.palette.tertiary10(),"on-tertiary":()=>e.raw.ref.palette.tertiary100(),"tertiary-container":()=>e.raw.ref.palette.tertiary90(),tertiary:()=>e.raw.ref.palette.tertiary40(),shadow:()=>e.raw.ref.palette.neutral0(),error:()=>e.raw.ref.palette.error40(),outline:()=>e.raw.ref.palette["neutral-variant50"](),"outline-variant":()=>e.raw.ref.palette["neutral-variant80"](),"on-background":()=>e.raw.ref.palette.neutral10(),background:()=>e.raw.ref.palette.neutral99(),"inverse-on-surface":()=>e.raw.ref.palette.neutral95(),"inverse-surface":()=>e.raw.ref.palette.neutral20(),"on-surface-variant":()=>e.raw.ref.palette["neutral-variant30"](),"on-surface":()=>e.raw.ref.palette.neutral10(),"surface-variant":()=>e.raw.ref.palette["neutral-variant90"](),surface:()=>e.raw.ref.palette.neutral99(),"surface-container":()=>e.raw.ref.palette.neutral94(),"surface-container-highest":()=>e.raw.ref.palette.neutral90(),"on-secondary-container":()=>e.raw.ref.palette.secondary10(),"on-secondary":()=>e.raw.ref.palette.secondary100(),"secondary-container":()=>e.raw.ref.palette.secondary90(),secondary:()=>e.raw.ref.palette.secondary40(),"inverse-primary":()=>e.raw.ref.palette.primary80(),"on-primary-container":()=>e.raw.ref.palette.primary10(),"on-primary":()=>e.raw.ref.palette.primary100(),"primary-container":()=>e.raw.ref.palette.primary90(),primary:()=>e.raw.ref.palette.primary40()},darkMode:{"surface-tint":()=>e.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>e.raw.sys.color.darkMode.primary(),"on-error-container":()=>e.raw.ref.palette.error80(),"on-error":()=>e.raw.ref.palette.error20(),"error-container":()=>e.raw.ref.palette.error30(),"on-tertiary-container":()=>e.raw.ref.palette.tertiary90(),"on-tertiary":()=>e.raw.ref.palette.tertiary20(),"tertiary-container":()=>e.raw.ref.palette.tertiary30(),tertiary:()=>e.raw.ref.palette.tertiary80(),shadow:()=>e.raw.ref.palette.neutral0(),error:()=>e.raw.ref.palette.error80(),outline:()=>e.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>e.raw.ref.palette["neutral-variant30"](),"on-background":()=>e.raw.ref.palette.neutral90(),background:()=>e.raw.ref.palette.neutral10(),"inverse-on-surface":()=>e.raw.ref.palette.neutral20(),"inverse-surface":()=>e.raw.ref.palette.neutral90(),"on-surface-variant":()=>e.raw.ref.palette["neutral-variant80"](),"on-surface":()=>e.raw.ref.palette.neutral90(),"surface-variant":()=>e.raw.ref.palette["neutral-variant30"](),surface:()=>e.raw.ref.palette.neutral10(),"surface-container":()=>e.raw.ref.palette.neutral12(),"surface-container-highest":()=>e.raw.ref.palette.neutral22(),"on-secondary-container":()=>e.raw.ref.palette.secondary90(),"on-secondary":()=>e.raw.ref.palette.secondary20(),"secondary-container":()=>e.raw.ref.palette.secondary30(),secondary:()=>e.raw.ref.palette.secondary80(),"inverse-primary":()=>e.raw.ref.palette.primary40(),"on-primary-container":()=>e.raw.ref.palette.primary90(),"on-primary":()=>e.raw.ref.palette.primary20(),"primary-container":()=>e.raw.ref.palette.primary30(),primary:()=>e.raw.ref.palette.primary80()}}}};let u={raw:{ref:Fe.ref,sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(11),size:()=>s(11),weight:()=>u.raw.ref.typeface["weight-medium"](),font:()=>u.raw.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(12),size:()=>s(12),weight:()=>u.raw.ref.typeface["weight-medium"](),font:()=>u.raw.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.10000000149011612),tracking:()=>s(.10000000149011612),"size-value":()=>s(14),size:()=>s(14),weight:()=>u.raw.ref.typeface["weight-medium"](),font:()=>u.raw.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.4000000059604645),tracking:()=>s(.4000000059604645),"size-value":()=>s(12),size:()=>s(12),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.25),tracking:()=>s(.25),"size-value":()=>s(14),size:()=>s(14),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(24),"line-height":()=>s(24),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(16),size:()=>s(16),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.10000000149011612),tracking:()=>s(.10000000149011612),"size-value":()=>s(14),size:()=>s(14),weight:()=>u.raw.ref.typeface["weight-medium"](),font:()=>u.raw.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(24),"line-height":()=>s(24),"tracking-value":()=>s(.15000000596046448),tracking:()=>s(.15000000596046448),"size-value":()=>s(16),size:()=>s(16),weight:()=>u.raw.ref.typeface["weight-medium"](),font:()=>u.raw.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(28),"line-height":()=>s(28),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(22),size:()=>s(22),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(32),"line-height":()=>s(32),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(24),size:()=>s(24),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(36),"line-height":()=>s(36),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(28),size:()=>s(28),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(40),"line-height":()=>s(40),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(32),size:()=>s(32),font:()=>u.raw.ref.typeface.brand(),weight:()=>u.raw.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(44),"line-height":()=>s(44),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(36),size:()=>s(36),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(52),"line-height":()=>s(52),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(45),size:()=>s(45),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(64),"line-height":()=>s(64),"tracking-value":()=>s(-.25),tracking:()=>s(-.25),"size-value":()=>s(57),size:()=>s(57),weight:()=>u.raw.ref.typeface["weight-regular"](),font:()=>u.raw.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>u.raw.sys.color.darkMode.primary()},"level5-value":()=>1,level5:()=>1,"level4-value":()=>8,level4:()=>8,"level3-value":()=>6,level3:()=>6,"level2-value":()=>3,level2:()=>3,"level1-value":()=>1,level1:()=>1,"level0-value":()=>0,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066},"focus-indicator":{"outer-offset":()=>s(2),thickness:()=>s(3)}},shape:{corner:{"extra-large":{top:{size:()=>s(0),"top-left":()=>s(28),"top-right":()=>s(28)},size:()=>s(28)},large:{top:{size:()=>s(0),"top-left":()=>s(16),"top-right":()=>s(16)},end:{size:()=>s(0),"top-right":()=>s(16),"bottom-right":()=>s(16)},size:()=>s(16)},medium:()=>s(12),small:()=>s(8),"extra-small":{top:{size:()=>s(0),"top-left":()=>s(4),"top-right":()=>s(4)},size:()=>s(4)},none:()=>s(0),full:()=>s(60)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{darkMode:{"surface-tint":()=>u.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>u.raw.sys.color.darkMode.primary(),"on-error-container":()=>u.raw.ref.palette.error80(),"on-error":()=>u.raw.ref.palette.error20(),"error-container":()=>u.raw.ref.palette.error30(),"on-tertiary-container":()=>u.raw.ref.palette.tertiary90(),"on-tertiary":()=>u.raw.ref.palette.tertiary20(),"tertiary-container":()=>u.raw.ref.palette.tertiary30(),tertiary:()=>u.raw.ref.palette.tertiary80(),shadow:()=>u.raw.ref.palette.neutral0(),error:()=>u.raw.ref.palette.error80(),outline:()=>u.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>u.raw.ref.palette["neutral-variant30"](),"on-background":()=>u.raw.ref.palette.neutral90(),background:()=>u.raw.ref.palette.neutral10(),"inverse-on-surface":()=>u.raw.ref.palette.neutral20(),"inverse-surface":()=>u.raw.ref.palette.neutral90(),"on-surface-variant":()=>u.raw.ref.palette["neutral-variant80"](),"on-surface":()=>u.raw.ref.palette.neutral90(),"surface-variant":()=>u.raw.ref.palette["neutral-variant30"](),surface:()=>u.raw.ref.palette.neutral10(),"surface-container":()=>u.raw.ref.palette.neutral12(),"surface-container-highest":()=>u.raw.ref.palette.neutral22(),"on-secondary-container":()=>u.raw.ref.palette.secondary90(),"on-secondary":()=>u.raw.ref.palette.secondary20(),"secondary-container":()=>u.raw.ref.palette.secondary30(),secondary:()=>u.raw.ref.palette.secondary80(),"inverse-primary":()=>u.raw.ref.palette.primary40(),"on-primary-container":()=>u.raw.ref.palette.primary90(),"on-primary":()=>u.raw.ref.palette.primary20(),"primary-container":()=>u.raw.ref.palette.primary30(),primary:()=>u.raw.ref.palette.primary80()},lightMode:{"surface-tint":()=>u.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>u.raw.sys.color.darkMode.primary(),"on-error-container":()=>u.raw.ref.palette.error80(),"on-error":()=>u.raw.ref.palette.error20(),"error-container":()=>u.raw.ref.palette.error30(),"on-tertiary-container":()=>u.raw.ref.palette.tertiary90(),"on-tertiary":()=>u.raw.ref.palette.tertiary20(),"tertiary-container":()=>u.raw.ref.palette.tertiary30(),tertiary:()=>u.raw.ref.palette.tertiary80(),shadow:()=>u.raw.ref.palette.neutral0(),error:()=>u.raw.ref.palette.error80(),outline:()=>u.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>u.raw.ref.palette["neutral-variant30"](),"on-background":()=>u.raw.ref.palette.neutral90(),background:()=>u.raw.ref.palette.neutral10(),"inverse-on-surface":()=>u.raw.ref.palette.neutral20(),"inverse-surface":()=>u.raw.ref.palette.neutral90(),"on-surface-variant":()=>u.raw.ref.palette["neutral-variant80"](),"on-surface":()=>u.raw.ref.palette.neutral90(),"surface-variant":()=>u.raw.ref.palette["neutral-variant30"](),surface:()=>u.raw.ref.palette.neutral10(),"surface-container":()=>u.raw.ref.palette.neutral12(),"surface-container-highest":()=>u.raw.ref.palette.neutral22(),"on-secondary-container":()=>u.raw.ref.palette.secondary90(),"on-secondary":()=>u.raw.ref.palette.secondary20(),"secondary-container":()=>u.raw.ref.palette.secondary30(),secondary:()=>u.raw.ref.palette.secondary80(),"inverse-primary":()=>u.raw.ref.palette.primary40(),"on-primary-container":()=>u.raw.ref.palette.primary90(),"on-primary":()=>u.raw.ref.palette.primary20(),"primary-container":()=>u.raw.ref.palette.primary30(),primary:()=>u.raw.ref.palette.primary80()}}}},ref:{palette:{error0:"var(--uk-ref-palette-error00)",error10:"var(--uk-ref-palette-error10)",error20:"var(--uk-ref-palette-error20)",error30:"var(--uk-ref-palette-error30)",error40:"var(--uk-ref-palette-error40)",error50:"var(--uk-ref-palette-error50)",error60:"var(--uk-ref-palette-error60)",error70:"var(--uk-ref-palette-error70)",error80:"var(--uk-ref-palette-error80)",error90:"var(--uk-ref-palette-error90)",error95:"var(--uk-ref-palette-error95)",error99:"var(--uk-ref-palette-error99)",error100:"var(--uk-ref-palette-error100)",tertiary0:"var(--uk-ref-palette-tertiary0)",tertiary10:"var(--uk-ref-palette-tertiary10)",tertiary20:"var(--uk-ref-palette-tertiary20)",tertiary30:"var(--uk-ref-palette-tertiary30)",tertiary40:"var(--uk-ref-palette-tertiary40)",tertiary50:"var(--uk-ref-palette-tertiary50)",tertiary60:"var(--uk-ref-palette-tertiary60)",tertiary70:"var(--uk-ref-palette-tertiary70)",tertiary80:"var(--uk-ref-palette-tertiary80)",tertiary90:"var(--uk-ref-palette-tertiary90)",tertiary95:"var(--uk-ref-palette-tertiary95)",tertiary99:"var(--uk-ref-palette-tertiary99)",tertiary100:"var(--uk-ref-palette-tertiary100)",secondary0:"var(--uk-ref-palette-secondary0)",secondary10:"var(--uk-ref-palette-secondary10)",secondary20:"var(--uk-ref-palette-secondary20)",secondary30:"var(--uk-ref-palette-secondary30)",secondary40:"var(--uk-ref-palette-secondary40)",secondary50:"var(--uk-ref-palette-secondary50)",secondary60:"var(--uk-ref-palette-secondary60)",secondary70:"var(--uk-ref-palette-secondary70)",secondary80:"var(--uk-ref-palette-secondary80)",secondary90:"var(--uk-ref-palette-secondary90)",secondary95:"var(--uk-ref-palette-secondary95)",secondary99:"var(--uk-ref-palette-secondary99)",secondary100:"var(--uk-ref-palette-secondary100)",primary0:"var(--uk-ref-palette-primary0)",primary10:"var(--uk-ref-palette-primary10)",primary20:"var(--uk-ref-palette-primary20)",primary30:"var(--uk-ref-palette-primary30)",primary40:"var(--uk-ref-palette-primary40)",primary50:"var(--uk-ref-palette-primary50)",primary60:"var(--uk-ref-palette-primary60)",primary70:"var(--uk-ref-palette-primary70)",primary80:"var(--uk-ref-palette-primary80)",primary90:"var(--uk-ref-palette-primary90)",primary95:"var(--uk-ref-palette-primary95)",primary99:"var(--uk-ref-palette-primary99)",primary100:"var(--uk-ref-palette-primary100)","neutral-variant0":"var(--uk-ref-palette-neutral-variant0)","neutral-variant10":"var(--uk-ref-palette-neutral-variant10)","neutral-variant20":"var(--uk-ref-palette-neutral-variant20)","neutral-variant30":"var(--uk-ref-palette-neutral-variant30)","neutral-variant40":"var(--uk-ref-palette-neutral-variant40)","neutral-variant50":"var(--uk-ref-palette-neutral-variant50)","neutral-variant60":"var(--uk-ref-palette-neutral-variant60)","neutral-variant70":"var(--uk-ref-palette-neutral-variant70)","neutral-variant80":"var(--uk-ref-palette-neutral-variant80)","neutral-variant90":"var(--uk-ref-palette-neutral-variant90)","neutral-variant95":"var(--uk-ref-palette-neutral-variant95)","neutral-variant99":"var(--uk-ref-palette-neutral-variant99)","neutral-variant100":"var(--uk-ref-palette-neutral-variant100)",neutral0:"var(--uk-ref-palette-neutral0)",neutral10:"var(--uk-ref-palette-neutral10)",neutral12:"var(--uk-ref-palette-neutral12)",neutral20:"var(--uk-ref-palette-neutral20)",neutral22:"var(--uk-ref-palette-neutral22)",neutral30:"var(--uk-ref-palette-neutral30)",neutral40:"var(--uk-ref-palette-neutral40)",neutral50:"var(--uk-ref-palette-neutral50)",neutral60:"var(--uk-ref-palette-neutral60)",neutral70:"var(--uk-ref-palette-neutral70)",neutral80:"var(--uk-ref-palette-neutral80)",neutral90:"var(--uk-ref-palette-neutral90)",neutral94:"var(--uk-ref-palette-neutral94)",neutral95:"var(--uk-ref-palette-neutral95)",neutral99:"var(--uk-ref-palette-neutral99)",neutral100:"var(--uk-ref-palette-neutral100)",black:"var(--uk-ref-palette-black)",white:"var(--uk-ref-palette-white)"},typeface:{plain:"var(--uk-ref-typeface-plain)",brand:"var(--uk-ref-typeface-brand)","weight-bold":"var(--uk-ref-typeface-weight-bold)","weight-medium":"var(--uk-ref-typeface-weight-medium)","weight-regular":"var(--uk-ref-typeface-weight-regular)"}},sys:{typescale:{"label-small":{"text-transform":"var(--uk-sys-typescale-label-small-text-transform)","axis-value":"var(--uk-sys-typescale-label-small-axis-value)","font-style":"var(--uk-sys-typescale-label-small-font-style)","text-decoration":"var(--uk-sys-typescale-label-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-small-line-height-value)","line-height":"var(--uk-sys-typescale-label-small-line-height)","tracking-value":"var(--uk-sys-typescale-label-small-tracking-value)",tracking:"var(--uk-sys-typescale-label-small-tracking)","size-value":"var(--uk-sys-typescale-label-small-size-value)",size:"var(--uk-sys-typescale-label-small-size)",weight:"var(--uk-sys-typescale-label-small-weight)",font:"var(--uk-sys-typescale-label-small-font)"},"label-medium":{"text-transform":"var(--uk-sys-typescale-label-medium-text-transform)","axis-value":"var(--uk-sys-typescale-label-medium-axis-value)","font-style":"var(--uk-sys-typescale-label-medium-font-style)","text-decoration":"var(--uk-sys-typescale-label-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-medium-line-height-value)","line-height":"var(--uk-sys-typescale-label-medium-line-height)","tracking-value":"var(--uk-sys-typescale-label-medium-tracking-value)",tracking:"var(--uk-sys-typescale-label-medium-tracking)","size-value":"var(--uk-sys-typescale-label-medium-size-value)",size:"var(--uk-sys-typescale-label-medium-size)",weight:"var(--uk-sys-typescale-label-medium-weight)",font:"var(--uk-sys-typescale-label-medium-font)"},"label-large":{"text-transform":"var(--uk-sys-typescale-label-large-text-transform)","axis-value":"var(--uk-sys-typescale-label-large-axis-value)","font-style":"var(--uk-sys-typescale-label-large-font-style)","text-decoration":"var(--uk-sys-typescale-label-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-large-line-height-value)","line-height":"var(--uk-sys-typescale-label-large-line-height)","tracking-value":"var(--uk-sys-typescale-label-large-tracking-value)",tracking:"var(--uk-sys-typescale-label-large-tracking)","size-value":"var(--uk-sys-typescale-label-large-size-value)",size:"var(--uk-sys-typescale-label-large-size)",weight:"var(--uk-sys-typescale-label-large-weight)",font:"var(--uk-sys-typescale-label-large-font)"},"body-small":{"text-transform":"var(--uk-sys-typescale-body-small-text-transform)","axis-value":"var(--uk-sys-typescale-body-small-axis-value)","font-style":"var(--uk-sys-typescale-body-small-font-style)","text-decoration":"var(--uk-sys-typescale-body-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-small-line-height-value)","line-height":"var(--uk-sys-typescale-body-small-line-height)","tracking-value":"var(--uk-sys-typescale-body-small-tracking-value)",tracking:"var(--uk-sys-typescale-body-small-tracking)","size-value":"var(--uk-sys-typescale-body-small-size-value)",size:"var(--uk-sys-typescale-body-small-size)",weight:"var(--uk-sys-typescale-body-small-weight)",font:"var(--uk-sys-typescale-body-small-font)"},"body-medium":{"text-transform":"var(--uk-sys-typescale-body-medium-text-transform)","axis-value":"var(--uk-sys-typescale-body-medium-axis-value)","font-style":"var(--uk-sys-typescale-body-medium-font-style)","text-decoration":"var(--uk-sys-typescale-body-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-medium-line-height-value)","line-height":"var(--uk-sys-typescale-body-medium-line-height)","tracking-value":"var(--uk-sys-typescale-body-medium-tracking-value)",tracking:"var(--uk-sys-typescale-body-medium-tracking)","size-value":"var(--uk-sys-typescale-body-medium-size-value)",size:"var(--uk-sys-typescale-body-medium-size)",weight:"var(--uk-sys-typescale-body-medium-weight)",font:"var(--uk-sys-typescale-body-medium-font)"},"body-large":{"text-transform":"var(--uk-sys-typescale-body-large-text-transform)","axis-value":"var(--uk-sys-typescale-body-large-axis-value)","font-style":"var(--uk-sys-typescale-body-large-font-style)","text-decoration":"var(--uk-sys-typescale-body-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-large-line-height-value)","line-height":"var(--uk-sys-typescale-body-large-line-height)","tracking-value":"var(--uk-sys-typescale-body-large-tracking-value)",tracking:"var(--uk-sys-typescale-body-large-tracking)","size-value":"var(--uk-sys-typescale-body-large-size-value)",size:"var(--uk-sys-typescale-body-large-size)",weight:"var(--uk-sys-typescale-body-large-weight)",font:"var(--uk-sys-typescale-body-large-font)"},"title-small":{"text-transform":"var(--uk-sys-typescale-title-small-text-transform)","axis-value":"var(--uk-sys-typescale-title-small-axis-value)","font-style":"var(--uk-sys-typescale-title-small-font-style)","text-decoration":"var(--uk-sys-typescale-title-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-small-line-height-value)","line-height":"var(--uk-sys-typescale-title-small-line-height)","tracking-value":"var(--uk-sys-typescale-title-small-tracking-value)",tracking:"var(--uk-sys-typescale-title-small-tracking)","size-value":"var(--uk-sys-typescale-title-small-size-value)",size:"var(--uk-sys-typescale-title-small-size)",weight:"var(--uk-sys-typescale-title-small-weight)",font:"var(--uk-sys-typescale-title-small-font)"},"title-medium":{"text-transform":"var(--uk-sys-typescale-title-medium-text-transform)","axis-value":"var(--uk-sys-typescale-title-medium-axis-value)","font-style":"var(--uk-sys-typescale-title-medium-font-style)","text-decoration":"var(--uk-sys-typescale-title-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-medium-line-height-value)","line-height":"var(--uk-sys-typescale-title-medium-line-height)","tracking-value":"var(--uk-sys-typescale-title-medium-tracking-value)",tracking:"var(--uk-sys-typescale-title-medium-tracking)","size-value":"var(--uk-sys-typescale-title-medium-size-value)",size:"var(--uk-sys-typescale-title-medium-size)",weight:"var(--uk-sys-typescale-title-medium-weight)",font:"var(--uk-sys-typescale-title-medium-font)"},"title-large":{"text-transform":"var(--uk-sys-typescale-title-large-text-transform)","axis-value":"var(--uk-sys-typescale-title-large-axis-value)","font-style":"var(--uk-sys-typescale-title-large-font-style)","text-decoration":"var(--uk-sys-typescale-title-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-large-line-height-value)","line-height":"var(--uk-sys-typescale-title-large-line-height)","tracking-value":"var(--uk-sys-typescale-title-large-tracking-value)",tracking:"var(--uk-sys-typescale-title-large-tracking)","size-value":"var(--uk-sys-typescale-title-large-size-value)",size:"var(--uk-sys-typescale-title-large-size)",weight:"var(--uk-sys-typescale-title-large-weight)",font:"var(--uk-sys-typescale-title-large-font)"},"headline-small":{"text-transform":"var(--uk-sys-typescale-headline-small-text-transform)","axis-value":"var(--uk-sys-typescale-headline-small-axis-value)","font-style":"var(--uk-sys-typescale-headline-small-font-style)","text-decoration":"var(--uk-sys-typescale-headline-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-small-line-height-value)","line-height":"var(--uk-sys-typescale-headline-small-line-height)","tracking-value":"var(--uk-sys-typescale-headline-small-tracking-value)",tracking:"var(--uk-sys-typescale-headline-small-tracking)","size-value":"var(--uk-sys-typescale-headline-small-size-value)",size:"var(--uk-sys-typescale-headline-small-size)",weight:"var(--uk-sys-typescale-headline-small-weight)",font:"var(--uk-sys-typescale-headline-small-font)"},"headline-medium":{"text-transform":"var(--uk-sys-typescale-headline-medium-text-transform)","axis-value":"var(--uk-sys-typescale-headline-medium-axis-value)","font-style":"var(--uk-sys-typescale-headline-medium-font-style)","text-decoration":"var(--uk-sys-typescale-headline-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-medium-line-height-value)","line-height":"var(--uk-sys-typescale-headline-medium-line-height)","tracking-value":"var(--uk-sys-typescale-headline-medium-tracking-value)",tracking:"var(--uk-sys-typescale-headline-medium-tracking)","size-value":"var(--uk-sys-typescale-headline-medium-size-value)",size:"var(--uk-sys-typescale-headline-medium-size)",weight:"var(--uk-sys-typescale-headline-medium-weight)",font:"var(--uk-sys-typescale-headline-medium-font)"},"headline-large":{"text-transform":"var(--uk-sys-typescale-headline-large-text-transform)","axis-value":"var(--uk-sys-typescale-headline-large-axis-value)","font-style":"var(--uk-sys-typescale-headline-large-font-style)","text-decoration":"var(--uk-sys-typescale-headline-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-large-line-height-value)","line-height":"var(--uk-sys-typescale-headline-large-line-height)","tracking-value":"var(--uk-sys-typescale-headline-large-tracking-value)",tracking:"var(--uk-sys-typescale-headline-large-tracking)","size-value":"var(--uk-sys-typescale-headline-large-size-value)",size:"var(--uk-sys-typescale-headline-large-size)",weight:"var(--uk-sys-typescale-headline-large-weight)",font:"var(--uk-sys-typescale-headline-large-font)"},"display-small":{"text-transform":"var(--uk-sys-typescale-display-small-text-transform)","axis-value":"var(--uk-sys-typescale-display-small-axis-value)","font-style":"var(--uk-sys-typescale-display-small-font-style)","text-decoration":"var(--uk-sys-typescale-display-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-small-line-height-value)","line-height":"var(--uk-sys-typescale-display-small-line-height)","tracking-value":"var(--uk-sys-typescale-display-small-tracking-value)",tracking:"var(--uk-sys-typescale-display-small-tracking)","size-value":"var(--uk-sys-typescale-display-small-size-value)",size:"var(--uk-sys-typescale-display-small-size)",weight:"var(--uk-sys-typescale-display-small-weight)",font:"var(--uk-sys-typescale-display-small-font)"},"display-medium":{"text-transform":"var(--uk-sys-typescale-display-medium-text-transform)","axis-value":"var(--uk-sys-typescale-display-medium-axis-value)","font-style":"var(--uk-sys-typescale-display-medium-font-style)","text-decoration":"var(--uk-sys-typescale-display-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-medium-line-height-value)","line-height":"var(--uk-sys-typescale-display-medium-line-height)","tracking-value":"var(--uk-sys-typescale-display-medium-tracking-value)",tracking:"var(--uk-sys-typescale-display-medium-tracking)","size-value":"var(--uk-sys-typescale-display-medium-size-value)",size:"var(--uk-sys-typescale-display-medium-size)",weight:"var(--uk-sys-typescale-display-medium-weight)",font:"var(--uk-sys-typescale-display-medium-font)"},"display-large":{"text-transform":"var(--uk-sys-typescale-display-large-text-transform)","axis-value":"var(--uk-sys-typescale-display-large-axis-value)","font-style":"var(--uk-sys-typescale-display-large-font-style)","text-decoration":"var(--uk-sys-typescale-display-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-large-line-height-value)","line-height":"var(--uk-sys-typescale-display-large-line-height)","tracking-value":"var(--uk-sys-typescale-display-large-tracking-value)",tracking:"var(--uk-sys-typescale-display-large-tracking)","size-value":"var(--uk-sys-typescale-display-large-size-value)",size:"var(--uk-sys-typescale-display-large-size)",weight:"var(--uk-sys-typescale-display-large-weight)",font:"var(--uk-sys-typescale-display-large-font)"}},elevation:{surface:{"tint-color":"var(--uk-sys-elevation-surface-tint-color)"},"level5-value":"var(--uk-sys-elevation-level5-value)",level5:"var(--uk-sys-elevation-level5)","level4-value":"var(--uk-sys-elevation-level4-value)",level4:"var(--uk-sys-elevation-level4)","level3-value":"var(--uk-sys-elevation-level3-value)",level3:"var(--uk-sys-elevation-level3)","level2-value":"var(--uk-sys-elevation-level2-value)",level2:"var(--uk-sys-elevation-level2)","level1-value":"var(--uk-sys-elevation-level1-value)",level1:"var(--uk-sys-elevation-level1)","level0-value":"var(--uk-sys-elevation-level0-value)",level0:"var(--uk-sys-elevation-level0)"},state:{dragged:{"state-layer-opacity":"var(--uk-sys-state-dragged-state-layer-opacity)"},pressed:{"state-layer-opacity":"var(--uk-sys-state-pressed-state-layer-opacity)"},focus:{"state-layer-opacity":"var(--uk-sys-state-focus-state-layer-opacity)"},hover:{"state-layer-opacity":"var(--uk-sys-state-hover-state-layer-opacity)"},"focus-indicator":{"outer-offset":"var(--uk-sys-state-focus-indicator-outer-offset)",thickness:"var(--uk-sys-state-focus-indicator-thickness)"}},shape:{corner:{"extra-large":{top:{size:"var(--uk-sys-shape-corner-extra-large-default-size)","top-left":"var(--uk-sys-shape-corner-extra-large-top-left)","top-right":"var(--uk-sys-shape-corner-extra-large-top-right)"},size:"var(--uk-sys-shape-corner-extra-large-default-size)"},large:{top:{size:"var(--uk-sys-shape-corner-large-top-default-size)","top-left":"var(--uk-sys-shape-corner-large-top-top-left)","top-right":"var(--uk-sys-shape-corner-large-top-top-right)"},end:{size:"var(--uk-sys-shape-corner-large-end-default-size)","top-right":"var(--uk-sys-shape-corner-large-end-top-right)","bottom-right":"var(--uk-sys-shape-corner-large-end-bottom-right)"},size:"var(--uk-sys-shape-corner-large-end-default-size)"},medium:"var(--uk-sys-shape-corner-medium-default-size)",small:"var(--uk-sys-shape-corner-small-default-size)","extra-small":{top:{size:"var(--uk-sys-shape-corner-extra-small-top-default-size)","top-left":"var(--uk-sys-shape-corner-extra-small-top-top-left)","top-right":"var(--uk-sys-shape-corner-extra-small-top-top-right)"},size:"var(--uk-sys-shape-corner-extra-small-top-family)"},none:"var(--uk-sys-shape-corner-none-default-size)",full:"var(--uk-sys-shape-corner-full)"}},motion:{easing:{emphasized:{normal:"var(--uk-sys-motion-easing-emphasized-normal)",accelerate:"var(--uk-sys-motion-easing-emphasized-accelerate)",decelerate:"var(--uk-sys-motion-easing-emphasized-decelerate)"},standard:{normal:"var(--uk-sys-motion-easing-standard-normal)",accelerate:"var(--uk-sys-motion-easing-standard-accelerate)",decelerate:"var(--uk-sys-motion-easing-standard-decelerate)"},linear:"var(--uk-sys-motion-easing-linear)"},"duration-1000":"var(--uk-sys-motion-duration-1000)","duration-900":"var(--uk-sys-motion-duration-900)","duration-800":"var(--uk-sys-motion-duration-800)","duration-700":"var(--uk-sys-motion-duration-700)","duration-600":"var(--uk-sys-motion-duration-600)","duration-550":"var(--uk-sys-motion-duration-550)","duration-500":"var(--uk-sys-motion-duration-500)","duration-450":"var(--uk-sys-motion-duration-450)","duration-400":"var(--uk-sys-motion-duration-400)","duration-350":"var(--uk-sys-motion-duration-350)","duration-300":"var(--uk-sys-motion-duration-300)","duration-250":"var(--uk-sys-motion-duration-250)","duration-200":"var(--uk-sys-motion-duration-200)","duration-150":"var(--uk-sys-motion-duration-150)","duration-100":"var(--uk-sys-motion-duration-100)","duration-50":"var(--uk-sys-motion-duration-50)","path-standard-path":"var(--uk-sys-motion-path-standard-path)"},color:{"surface-tint":"var(--uk-sys-color-surface-tint)","surface-tint-color":"var(--uk-sys-color-surface-tint-color)","on-error-container":"var(--uk-sys-color-on-error-container)","on-error":"var(--uk-sys-color-on-error)","error-container":"var(--uk-sys-color-error-container)","on-tertiary-container":"var(--uk-sys-color-on-tertiary-container)","on-tertiary":"var(--uk-sys-color-on-tertiary)","tertiary-container":"var(--uk-sys-color-tertiary-container)",tertiary:"var(--uk-sys-color-tertiary)",shadow:"var(--uk-sys-color-shadow)",error:"var(--uk-sys-color-error)",outline:"var(--uk-sys-color-outline)","outline-variant":"var(--uk-sys-color-outline-variant)","on-background":"var(--uk-sys-color-on-background)",background:"var(--uk-sys-color-background)","inverse-on-surface":"var(--uk-sys-color-inverse-on-surface)","inverse-surface":"var(--uk-sys-color-inverse-surface)","on-surface-variant":"var(--uk-sys-color-on-surface-variant)","on-surface":"var(--uk-sys-color-on-surface)","surface-variant":"var(--uk-sys-color-surface-variant)",surface:"var(--uk-sys-color-surface)","surface-container":"var(--uk-sys-color-surface-container)","surface-container-highest":"var(--uk-sys-color-surface-container-highest)","on-secondary-container":"var(--uk-sys-color-on-secondary-container)","on-secondary":"var(--uk-sys-color-on-secondary)","secondary-container":"var(--uk-sys-color-secondary-container)",secondary:"var(--uk-sys-color-secondary)","inverse-primary":"var(--uk-sys-color-inverse-primary)","on-primary-container":"var(--uk-sys-color-on-primary-container)","on-primary":"var(--uk-sys-color-on-primary)","primary-container":"var(--uk-sys-color-primary-container)",primary:"var(--uk-sys-color-primary)"}}};function ze(t){let r=parseInt(t.slice(1,3),16),l=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);return`${r}, ${l}, ${a}`}function ja(t,r,l){for(const i of Object.keys(t.sys.color.lightMode)){let o=t.sys.color.lightMode[i]();e.raw.sys.color.lightMode[i]=()=>ze(o)}for(const i of Object.keys(t.sys.color.darkMode)){let o=t.sys.color.darkMode[i]();e.raw.sys.color.darkMode[i]=()=>ze(o)}u.raw.ref.palette={...u.raw.ref.palette,...t.ref.palette},u.raw.ref.typeface={...u.raw.ref.typeface,...t.ref.typeface};function a(i,o){r.style.setProperty(i.slice(4,-1),o())}a(e.ref.palette.error0,e.raw.ref.palette.error0),a(e.ref.palette.error10,e.raw.ref.palette.error10),a(e.ref.palette.error20,e.raw.ref.palette.error20),a(e.ref.palette.error30,e.raw.ref.palette.error30),a(e.ref.palette.error40,e.raw.ref.palette.error40),a(e.ref.palette.error50,e.raw.ref.palette.error50),a(e.ref.palette.error60,e.raw.ref.palette.error60),a(e.ref.palette.error70,e.raw.ref.palette.error70),a(e.ref.palette.error80,e.raw.ref.palette.error80),a(e.ref.palette.error90,e.raw.ref.palette.error90),a(e.ref.palette.error95,e.raw.ref.palette.error95),a(e.ref.palette.error99,e.raw.ref.palette.error99),a(e.ref.palette.error100,e.raw.ref.palette.error100),a(e.ref.palette.tertiary0,e.raw.ref.palette.tertiary0),a(e.ref.palette.tertiary10,e.raw.ref.palette.tertiary10),a(e.ref.palette.tertiary20,e.raw.ref.palette.tertiary20),a(e.ref.palette.tertiary30,e.raw.ref.palette.tertiary30),a(e.ref.palette.tertiary40,e.raw.ref.palette.tertiary40),a(e.ref.palette.tertiary50,e.raw.ref.palette.tertiary50),a(e.ref.palette.tertiary60,e.raw.ref.palette.tertiary60),a(e.ref.palette.tertiary70,e.raw.ref.palette.tertiary70),a(e.ref.palette.tertiary80,e.raw.ref.palette.tertiary80),a(e.ref.palette.tertiary90,e.raw.ref.palette.tertiary90),a(e.ref.palette.tertiary95,e.raw.ref.palette.tertiary95),a(e.ref.palette.tertiary99,e.raw.ref.palette.tertiary99),a(e.ref.palette.tertiary100,e.raw.ref.palette.tertiary100),a(e.ref.palette.secondary0,e.raw.ref.palette.secondary0),a(e.ref.palette.secondary10,e.raw.ref.palette.secondary10),a(e.ref.palette.secondary20,e.raw.ref.palette.secondary20),a(e.ref.palette.secondary30,e.raw.ref.palette.secondary30),a(e.ref.palette.secondary40,e.raw.ref.palette.secondary40),a(e.ref.palette.secondary50,e.raw.ref.palette.secondary50),a(e.ref.palette.secondary60,e.raw.ref.palette.secondary60),a(e.ref.palette.secondary70,e.raw.ref.palette.secondary70),a(e.ref.palette.secondary80,e.raw.ref.palette.secondary80),a(e.ref.palette.secondary90,e.raw.ref.palette.secondary90),a(e.ref.palette.secondary95,e.raw.ref.palette.secondary95),a(e.ref.palette.secondary99,e.raw.ref.palette.secondary99),a(e.ref.palette.secondary100,e.raw.ref.palette.secondary100),a(e.ref.palette.primary0,e.raw.ref.palette.primary0),a(e.ref.palette.primary10,e.raw.ref.palette.primary10),a(e.ref.palette.primary20,e.raw.ref.palette.primary20),a(e.ref.palette.primary30,e.raw.ref.palette.primary30),a(e.ref.palette.primary40,e.raw.ref.palette.primary40),a(e.ref.palette.primary50,e.raw.ref.palette.primary50),a(e.ref.palette.primary60,e.raw.ref.palette.primary60),a(e.ref.palette.primary70,e.raw.ref.palette.primary70),a(e.ref.palette.primary80,e.raw.ref.palette.primary80),a(e.ref.palette.primary90,e.raw.ref.palette.primary90),a(e.ref.palette.primary95,e.raw.ref.palette.primary95),a(e.ref.palette.primary99,e.raw.ref.palette.primary99),a(e.ref.palette.primary100,e.raw.ref.palette.primary100),a(e.ref.palette["neutral-variant0"],e.raw.ref.palette["neutral-variant0"]),a(e.ref.palette["neutral-variant10"],e.raw.ref.palette["neutral-variant10"]),a(e.ref.palette["neutral-variant20"],e.raw.ref.palette["neutral-variant20"]),a(e.ref.palette["neutral-variant30"],e.raw.ref.palette["neutral-variant30"]),a(e.ref.palette["neutral-variant40"],e.raw.ref.palette["neutral-variant40"]),a(e.ref.palette["neutral-variant50"],e.raw.ref.palette["neutral-variant50"]),a(e.ref.palette["neutral-variant60"],e.raw.ref.palette["neutral-variant60"]),a(e.ref.palette["neutral-variant70"],e.raw.ref.palette["neutral-variant70"]),a(e.ref.palette["neutral-variant80"],e.raw.ref.palette["neutral-variant80"]),a(e.ref.palette["neutral-variant90"],e.raw.ref.palette["neutral-variant90"]),a(e.ref.palette["neutral-variant95"],e.raw.ref.palette["neutral-variant95"]),a(e.ref.palette["neutral-variant99"],e.raw.ref.palette["neutral-variant99"]),a(e.ref.palette["neutral-variant100"],e.raw.ref.palette["neutral-variant100"]),a(e.ref.palette.neutral0,e.raw.ref.palette.neutral0),a(e.ref.palette.neutral10,e.raw.ref.palette.neutral10),a(e.ref.palette.neutral12,e.raw.ref.palette.neutral12),a(e.ref.palette.neutral20,e.raw.ref.palette.neutral20),a(e.ref.palette.neutral22,e.raw.ref.palette.neutral22),a(e.ref.palette.neutral30,e.raw.ref.palette.neutral30),a(e.ref.palette.neutral40,e.raw.ref.palette.neutral40),a(e.ref.palette.neutral50,e.raw.ref.palette.neutral50),a(e.ref.palette.neutral60,e.raw.ref.palette.neutral60),a(e.ref.palette.neutral70,e.raw.ref.palette.neutral70),a(e.ref.palette.neutral80,e.raw.ref.palette.neutral80),a(e.ref.palette.neutral90,e.raw.ref.palette.neutral90),a(e.ref.palette.neutral94,e.raw.ref.palette.neutral94),a(e.ref.palette.neutral95,e.raw.ref.palette.neutral95),a(e.ref.palette.neutral99,e.raw.ref.palette.neutral99),a(e.ref.palette.neutral100,e.raw.ref.palette.neutral100),a(e.ref.palette.black,e.raw.ref.palette.black),a(e.ref.palette.white,e.raw.ref.palette.white),a(e.ref.typeface.plain,e.raw.ref.typeface.plain),a(e.ref.typeface.brand,e.raw.ref.typeface.brand),a(e.ref.typeface["weight-bold"],e.raw.ref.typeface["weight-bold"]),a(e.ref.typeface["weight-medium"],e.raw.ref.typeface["weight-medium"]),a(e.ref.typeface["weight-regular"],e.raw.ref.typeface["weight-regular"]),a(e.sys.typescale["label-small"]["text-transform"],e.raw.sys.typescale["label-small"]["text-transform"]),a(e.sys.typescale["label-small"]["axis-value"],e.raw.sys.typescale["label-small"]["axis-value"]),a(e.sys.typescale["label-small"]["font-style"],e.raw.sys.typescale["label-small"]["font-style"]),a(e.sys.typescale["label-small"]["text-decoration"],e.raw.sys.typescale["label-small"]["text-decoration"]),a(e.sys.typescale["label-small"]["line-height-value"],e.raw.sys.typescale["label-small"]["line-height-value"]),a(e.sys.typescale["label-small"]["line-height"],e.raw.sys.typescale["label-small"]["line-height"]),a(e.sys.typescale["label-small"]["tracking-value"],e.raw.sys.typescale["label-small"]["tracking-value"]),a(e.sys.typescale["label-small"].tracking,e.raw.sys.typescale["label-small"].tracking),a(e.sys.typescale["label-small"]["size-value"],e.raw.sys.typescale["label-small"]["size-value"]),a(e.sys.typescale["label-small"].size,e.raw.sys.typescale["label-small"].size),a(e.sys.typescale["label-small"].weight,e.raw.sys.typescale["label-small"].weight),a(e.sys.typescale["label-small"].font,e.raw.sys.typescale["label-small"].font),a(e.sys.typescale["label-medium"]["text-transform"],e.raw.sys.typescale["label-medium"]["text-transform"]),a(e.sys.typescale["label-medium"]["axis-value"],e.raw.sys.typescale["label-medium"]["axis-value"]),a(e.sys.typescale["label-medium"]["font-style"],e.raw.sys.typescale["label-medium"]["font-style"]),a(e.sys.typescale["label-medium"]["text-decoration"],e.raw.sys.typescale["label-medium"]["text-decoration"]),a(e.sys.typescale["label-medium"]["line-height-value"],e.raw.sys.typescale["label-medium"]["line-height-value"]),a(e.sys.typescale["label-medium"]["line-height"],e.raw.sys.typescale["label-medium"]["line-height"]),a(e.sys.typescale["label-medium"]["tracking-value"],e.raw.sys.typescale["label-medium"]["tracking-value"]),a(e.sys.typescale["label-medium"].tracking,e.raw.sys.typescale["label-medium"].tracking),a(e.sys.typescale["label-medium"]["size-value"],e.raw.sys.typescale["label-medium"]["size-value"]),a(e.sys.typescale["label-medium"].size,e.raw.sys.typescale["label-medium"].size),a(e.sys.typescale["label-medium"].weight,e.raw.sys.typescale["label-medium"].weight),a(e.sys.typescale["label-medium"].font,e.raw.sys.typescale["label-medium"].font),a(e.sys.typescale["label-large"]["text-transform"],e.raw.sys.typescale["label-large"]["text-transform"]),a(e.sys.typescale["label-large"]["axis-value"],e.raw.sys.typescale["label-large"]["axis-value"]),a(e.sys.typescale["label-large"]["font-style"],e.raw.sys.typescale["label-large"]["font-style"]),a(e.sys.typescale["label-large"]["text-decoration"],e.raw.sys.typescale["label-large"]["text-decoration"]),a(e.sys.typescale["label-large"]["line-height-value"],e.raw.sys.typescale["label-large"]["line-height-value"]),a(e.sys.typescale["label-large"]["line-height"],e.raw.sys.typescale["label-large"]["line-height"]),a(e.sys.typescale["label-large"]["tracking-value"],e.raw.sys.typescale["label-large"]["tracking-value"]),a(e.sys.typescale["label-large"].tracking,e.raw.sys.typescale["label-large"].tracking),a(e.sys.typescale["label-large"]["size-value"],e.raw.sys.typescale["label-large"]["size-value"]),a(e.sys.typescale["label-large"].size,e.raw.sys.typescale["label-large"].size),a(e.sys.typescale["label-large"].weight,e.raw.sys.typescale["label-large"].weight),a(e.sys.typescale["label-large"].font,e.raw.sys.typescale["label-large"].font),a(e.sys.typescale["body-small"]["text-transform"],e.raw.sys.typescale["body-small"]["text-transform"]),a(e.sys.typescale["body-small"]["axis-value"],e.raw.sys.typescale["body-small"]["axis-value"]),a(e.sys.typescale["body-small"]["font-style"],e.raw.sys.typescale["body-small"]["font-style"]),a(e.sys.typescale["body-small"]["text-decoration"],e.raw.sys.typescale["body-small"]["text-decoration"]),a(e.sys.typescale["body-small"]["line-height-value"],e.raw.sys.typescale["body-small"]["line-height-value"]),a(e.sys.typescale["body-small"]["line-height"],e.raw.sys.typescale["body-small"]["line-height"]),a(e.sys.typescale["body-small"]["tracking-value"],e.raw.sys.typescale["body-small"]["tracking-value"]),a(e.sys.typescale["body-small"].tracking,e.raw.sys.typescale["body-small"].tracking),a(e.sys.typescale["body-small"]["size-value"],e.raw.sys.typescale["body-small"]["size-value"]),a(e.sys.typescale["body-small"].size,e.raw.sys.typescale["body-small"].size),a(e.sys.typescale["body-small"].weight,e.raw.sys.typescale["body-small"].weight),a(e.sys.typescale["body-small"].font,e.raw.sys.typescale["body-small"].font),a(e.sys.typescale["body-medium"]["text-transform"],e.raw.sys.typescale["body-medium"]["text-transform"]),a(e.sys.typescale["body-medium"]["axis-value"],e.raw.sys.typescale["body-medium"]["axis-value"]),a(e.sys.typescale["body-medium"]["font-style"],e.raw.sys.typescale["body-medium"]["font-style"]),a(e.sys.typescale["body-medium"]["text-decoration"],e.raw.sys.typescale["body-medium"]["text-decoration"]),a(e.sys.typescale["body-medium"]["line-height-value"],e.raw.sys.typescale["body-medium"]["line-height-value"]),a(e.sys.typescale["body-medium"]["line-height"],e.raw.sys.typescale["body-medium"]["line-height"]),a(e.sys.typescale["body-medium"]["tracking-value"],e.raw.sys.typescale["body-medium"]["tracking-value"]),a(e.sys.typescale["body-medium"].tracking,e.raw.sys.typescale["body-medium"].tracking),a(e.sys.typescale["body-medium"]["size-value"],e.raw.sys.typescale["body-medium"]["size-value"]),a(e.sys.typescale["body-medium"].size,e.raw.sys.typescale["body-medium"].size),a(e.sys.typescale["body-medium"].weight,e.raw.sys.typescale["body-medium"].weight),a(e.sys.typescale["body-medium"].font,e.raw.sys.typescale["body-medium"].font),a(e.sys.typescale["body-large"]["text-transform"],e.raw.sys.typescale["body-large"]["text-transform"]),a(e.sys.typescale["body-large"]["axis-value"],e.raw.sys.typescale["body-large"]["axis-value"]),a(e.sys.typescale["body-large"]["font-style"],e.raw.sys.typescale["body-large"]["font-style"]),a(e.sys.typescale["body-large"]["text-decoration"],e.raw.sys.typescale["body-large"]["text-decoration"]),a(e.sys.typescale["body-large"]["line-height-value"],e.raw.sys.typescale["body-large"]["line-height-value"]),a(e.sys.typescale["body-large"]["line-height"],e.raw.sys.typescale["body-large"]["line-height"]),a(e.sys.typescale["body-large"]["tracking-value"],e.raw.sys.typescale["body-large"]["tracking-value"]),a(e.sys.typescale["body-large"].tracking,e.raw.sys.typescale["body-large"].tracking),a(e.sys.typescale["body-large"]["size-value"],e.raw.sys.typescale["body-large"]["size-value"]),a(e.sys.typescale["body-large"].size,e.raw.sys.typescale["body-large"].size),a(e.sys.typescale["body-large"].weight,e.raw.sys.typescale["body-large"].weight),a(e.sys.typescale["body-large"].font,e.raw.sys.typescale["body-large"].font),a(e.sys.typescale["title-small"]["text-transform"],e.raw.sys.typescale["title-small"]["text-transform"]),a(e.sys.typescale["title-small"]["axis-value"],e.raw.sys.typescale["title-small"]["axis-value"]),a(e.sys.typescale["title-small"]["font-style"],e.raw.sys.typescale["title-small"]["font-style"]),a(e.sys.typescale["title-small"]["text-decoration"],e.raw.sys.typescale["title-small"]["text-decoration"]),a(e.sys.typescale["title-small"]["line-height-value"],e.raw.sys.typescale["title-small"]["line-height-value"]),a(e.sys.typescale["title-small"]["line-height"],e.raw.sys.typescale["title-small"]["line-height"]),a(e.sys.typescale["title-small"]["tracking-value"],e.raw.sys.typescale["title-small"]["tracking-value"]),a(e.sys.typescale["title-small"].tracking,e.raw.sys.typescale["title-small"].tracking),a(e.sys.typescale["title-small"]["size-value"],e.raw.sys.typescale["title-small"]["size-value"]),a(e.sys.typescale["title-small"].size,e.raw.sys.typescale["title-small"].size),a(e.sys.typescale["title-small"].weight,e.raw.sys.typescale["title-small"].weight),a(e.sys.typescale["title-small"].font,e.raw.sys.typescale["title-small"].font),a(e.sys.typescale["title-medium"]["text-transform"],e.raw.sys.typescale["title-medium"]["text-transform"]),a(e.sys.typescale["title-medium"]["axis-value"],e.raw.sys.typescale["title-medium"]["axis-value"]),a(e.sys.typescale["title-medium"]["font-style"],e.raw.sys.typescale["title-medium"]["font-style"]),a(e.sys.typescale["title-medium"]["text-decoration"],e.raw.sys.typescale["title-medium"]["text-decoration"]),a(e.sys.typescale["title-medium"]["line-height-value"],e.raw.sys.typescale["title-medium"]["line-height-value"]),a(e.sys.typescale["title-medium"]["line-height"],e.raw.sys.typescale["title-medium"]["line-height"]),a(e.sys.typescale["title-medium"]["tracking-value"],e.raw.sys.typescale["title-medium"]["tracking-value"]),a(e.sys.typescale["title-medium"].tracking,e.raw.sys.typescale["title-medium"].tracking),a(e.sys.typescale["title-medium"]["size-value"],e.raw.sys.typescale["title-medium"]["size-value"]),a(e.sys.typescale["title-medium"].size,e.raw.sys.typescale["title-medium"].size),a(e.sys.typescale["title-medium"].weight,e.raw.sys.typescale["title-medium"].weight),a(e.sys.typescale["title-medium"].font,e.raw.sys.typescale["title-medium"].font),a(e.sys.typescale["title-large"]["text-transform"],e.raw.sys.typescale["title-large"]["text-transform"]),a(e.sys.typescale["title-large"]["axis-value"],e.raw.sys.typescale["title-large"]["axis-value"]),a(e.sys.typescale["title-large"]["font-style"],e.raw.sys.typescale["title-large"]["font-style"]),a(e.sys.typescale["title-large"]["text-decoration"],e.raw.sys.typescale["title-large"]["text-decoration"]),a(e.sys.typescale["title-large"]["line-height-value"],e.raw.sys.typescale["title-large"]["line-height-value"]),a(e.sys.typescale["title-large"]["line-height"],e.raw.sys.typescale["title-large"]["line-height"]),a(e.sys.typescale["title-large"]["tracking-value"],e.raw.sys.typescale["title-large"]["tracking-value"]),a(e.sys.typescale["title-large"].tracking,e.raw.sys.typescale["title-large"].tracking),a(e.sys.typescale["title-large"]["size-value"],e.raw.sys.typescale["title-large"]["size-value"]),a(e.sys.typescale["title-large"].size,e.raw.sys.typescale["title-large"].size),a(e.sys.typescale["title-large"].weight,e.raw.sys.typescale["title-large"].weight),a(e.sys.typescale["title-large"].font,e.raw.sys.typescale["title-large"].font),a(e.sys.typescale["headline-small"]["text-transform"],e.raw.sys.typescale["headline-small"]["text-transform"]),a(e.sys.typescale["headline-small"]["axis-value"],e.raw.sys.typescale["headline-small"]["axis-value"]),a(e.sys.typescale["headline-small"]["font-style"],e.raw.sys.typescale["headline-small"]["font-style"]),a(e.sys.typescale["headline-small"]["text-decoration"],e.raw.sys.typescale["headline-small"]["text-decoration"]),a(e.sys.typescale["headline-small"]["line-height-value"],e.raw.sys.typescale["headline-small"]["line-height-value"]),a(e.sys.typescale["headline-small"]["line-height"],e.raw.sys.typescale["headline-small"]["line-height"]),a(e.sys.typescale["headline-small"]["tracking-value"],e.raw.sys.typescale["headline-small"]["tracking-value"]),a(e.sys.typescale["headline-small"].tracking,e.raw.sys.typescale["headline-small"].tracking),a(e.sys.typescale["headline-small"]["size-value"],e.raw.sys.typescale["headline-small"]["size-value"]),a(e.sys.typescale["headline-small"].size,e.raw.sys.typescale["headline-small"].size),a(e.sys.typescale["headline-small"].weight,e.raw.sys.typescale["headline-small"].weight),a(e.sys.typescale["headline-small"].font,e.raw.sys.typescale["headline-small"].font),a(e.sys.typescale["headline-medium"]["text-transform"],e.raw.sys.typescale["headline-medium"]["text-transform"]),a(e.sys.typescale["headline-medium"]["axis-value"],e.raw.sys.typescale["headline-medium"]["axis-value"]),a(e.sys.typescale["headline-medium"]["font-style"],e.raw.sys.typescale["headline-medium"]["font-style"]),a(e.sys.typescale["headline-medium"]["text-decoration"],e.raw.sys.typescale["headline-medium"]["text-decoration"]),a(e.sys.typescale["headline-medium"]["line-height-value"],e.raw.sys.typescale["headline-medium"]["line-height-value"]),a(e.sys.typescale["headline-medium"]["line-height"],e.raw.sys.typescale["headline-medium"]["line-height"]),a(e.sys.typescale["headline-medium"]["tracking-value"],e.raw.sys.typescale["headline-medium"]["tracking-value"]),a(e.sys.typescale["headline-medium"].tracking,e.raw.sys.typescale["headline-medium"].tracking),a(e.sys.typescale["headline-medium"]["size-value"],e.raw.sys.typescale["headline-medium"]["size-value"]),a(e.sys.typescale["headline-medium"].size,e.raw.sys.typescale["headline-medium"].size),a(e.sys.typescale["headline-medium"].weight,e.raw.sys.typescale["headline-medium"].weight),a(e.sys.typescale["headline-medium"].font,e.raw.sys.typescale["headline-medium"].font),a(e.sys.typescale["headline-large"]["text-transform"],e.raw.sys.typescale["headline-large"]["text-transform"]),a(e.sys.typescale["headline-large"]["axis-value"],e.raw.sys.typescale["headline-large"]["axis-value"]),a(e.sys.typescale["headline-large"]["font-style"],e.raw.sys.typescale["headline-large"]["font-style"]),a(e.sys.typescale["headline-large"]["text-decoration"],e.raw.sys.typescale["headline-large"]["text-decoration"]),a(e.sys.typescale["headline-large"]["line-height-value"],e.raw.sys.typescale["headline-large"]["line-height-value"]),a(e.sys.typescale["headline-large"]["line-height"],e.raw.sys.typescale["headline-large"]["line-height"]),a(e.sys.typescale["headline-large"]["tracking-value"],e.raw.sys.typescale["headline-large"]["tracking-value"]),a(e.sys.typescale["headline-large"].tracking,e.raw.sys.typescale["headline-large"].tracking),a(e.sys.typescale["headline-large"]["size-value"],e.raw.sys.typescale["headline-large"]["size-value"]),a(e.sys.typescale["headline-large"].size,e.raw.sys.typescale["headline-large"].size),a(e.sys.typescale["headline-large"].weight,e.raw.sys.typescale["headline-large"].weight),a(e.sys.typescale["headline-large"].font,e.raw.sys.typescale["headline-large"].font),a(e.sys.typescale["display-small"]["text-transform"],e.raw.sys.typescale["display-small"]["text-transform"]),a(e.sys.typescale["display-small"]["axis-value"],e.raw.sys.typescale["display-small"]["axis-value"]),a(e.sys.typescale["display-small"]["font-style"],e.raw.sys.typescale["display-small"]["font-style"]),a(e.sys.typescale["display-small"]["text-decoration"],e.raw.sys.typescale["display-small"]["text-decoration"]),a(e.sys.typescale["display-small"]["line-height-value"],e.raw.sys.typescale["display-small"]["line-height-value"]),a(e.sys.typescale["display-small"]["line-height"],e.raw.sys.typescale["display-small"]["line-height"]),a(e.sys.typescale["display-small"]["tracking-value"],e.raw.sys.typescale["display-small"]["tracking-value"]),a(e.sys.typescale["display-small"].tracking,e.raw.sys.typescale["display-small"].tracking),a(e.sys.typescale["display-small"]["size-value"],e.raw.sys.typescale["display-small"]["size-value"]),a(e.sys.typescale["display-small"].size,e.raw.sys.typescale["display-small"].size),a(e.sys.typescale["display-small"].weight,e.raw.sys.typescale["display-small"].weight),a(e.sys.typescale["display-small"].font,e.raw.sys.typescale["display-small"].font),a(e.sys.typescale["display-medium"]["text-transform"],e.raw.sys.typescale["display-medium"]["text-transform"]),a(e.sys.typescale["display-medium"]["axis-value"],e.raw.sys.typescale["display-medium"]["axis-value"]),a(e.sys.typescale["display-medium"]["font-style"],e.raw.sys.typescale["display-medium"]["font-style"]),a(e.sys.typescale["display-medium"]["text-decoration"],e.raw.sys.typescale["display-medium"]["text-decoration"]),a(e.sys.typescale["display-medium"]["line-height-value"],e.raw.sys.typescale["display-medium"]["line-height-value"]),a(e.sys.typescale["display-medium"]["line-height"],e.raw.sys.typescale["display-medium"]["line-height"]),a(e.sys.typescale["display-medium"]["tracking-value"],e.raw.sys.typescale["display-medium"]["tracking-value"]),a(e.sys.typescale["display-medium"].tracking,e.raw.sys.typescale["display-medium"].tracking),a(e.sys.typescale["display-medium"]["size-value"],e.raw.sys.typescale["display-medium"]["size-value"]),a(e.sys.typescale["display-medium"].size,e.raw.sys.typescale["display-medium"].size),a(e.sys.typescale["display-medium"].weight,e.raw.sys.typescale["display-medium"].weight),a(e.sys.typescale["display-medium"].font,e.raw.sys.typescale["display-medium"].font),a(e.sys.typescale["display-large"]["text-transform"],e.raw.sys.typescale["display-large"]["text-transform"]),a(e.sys.typescale["display-large"]["axis-value"],e.raw.sys.typescale["display-large"]["axis-value"]),a(e.sys.typescale["display-large"]["font-style"],e.raw.sys.typescale["display-large"]["font-style"]),a(e.sys.typescale["display-large"]["text-decoration"],e.raw.sys.typescale["display-large"]["text-decoration"]),a(e.sys.typescale["display-large"]["line-height-value"],e.raw.sys.typescale["display-large"]["line-height-value"]),a(e.sys.typescale["display-large"]["line-height"],e.raw.sys.typescale["display-large"]["line-height"]),a(e.sys.typescale["display-large"]["tracking-value"],e.raw.sys.typescale["display-large"]["tracking-value"]),a(e.sys.typescale["display-large"].tracking,e.raw.sys.typescale["display-large"].tracking),a(e.sys.typescale["display-large"]["size-value"],e.raw.sys.typescale["display-large"]["size-value"]),a(e.sys.typescale["display-large"].size,e.raw.sys.typescale["display-large"].size),a(e.sys.typescale["display-large"].weight,e.raw.sys.typescale["display-large"].weight),a(e.sys.typescale["display-large"].font,e.raw.sys.typescale["display-large"].font),a(e.sys.elevation.surface["tint-color"],e.raw.sys.elevation.surface["tint-color"]),a(e.sys.state.dragged["state-layer-opacity"],()=>e.raw.sys.state.dragged["state-layer-opacity"]().toString()),a(e.sys.state.pressed["state-layer-opacity"],()=>e.raw.sys.state.pressed["state-layer-opacity"]().toString()),a(e.sys.state.focus["state-layer-opacity"],()=>e.raw.sys.state.focus["state-layer-opacity"]().toString()),a(e.sys.state.hover["state-layer-opacity"],()=>e.raw.sys.state.hover["state-layer-opacity"]().toString()),a(e.sys.state["focus-indicator"]["outer-offset"],e.raw.sys.state["focus-indicator"]["outer-offset"]),a(e.sys.state["focus-indicator"].thickness,e.raw.sys.state["focus-indicator"].thickness),a(e.sys.shape.corner["extra-large"].top.size,e.raw.sys.shape.corner["extra-large"].top.size),a(e.sys.shape.corner["extra-large"].top["top-left"],e.raw.sys.shape.corner["extra-large"].top["top-left"]),a(e.sys.shape.corner["extra-large"].top["top-right"],e.raw.sys.shape.corner["extra-large"].top["top-right"]),a(e.sys.shape.corner["extra-large"].size,e.raw.sys.shape.corner["extra-large"].size),a(e.sys.shape.corner.large.top.size,e.raw.sys.shape.corner.large.top.size),a(e.sys.shape.corner.large.top["top-left"],e.raw.sys.shape.corner.large.top["top-left"]),a(e.sys.shape.corner.large.top["top-right"],e.raw.sys.shape.corner.large.top["top-right"]),a(e.sys.shape.corner.large.end.size,e.raw.sys.shape.corner.large.end.size),a(e.sys.shape.corner.large.end["top-right"],e.raw.sys.shape.corner.large.end["top-right"]),a(e.sys.shape.corner.large.end["bottom-right"],e.raw.sys.shape.corner.large.end["bottom-right"]),a(e.sys.shape.corner.large.size,e.raw.sys.shape.corner.large.size),a(e.sys.shape.corner.medium,e.raw.sys.shape.corner.medium),a(e.sys.shape.corner.small,e.raw.sys.shape.corner.small),a(e.sys.shape.corner["extra-small"].top.size,e.raw.sys.shape.corner["extra-small"].top.size),a(e.sys.shape.corner["extra-small"].top["top-left"],e.raw.sys.shape.corner["extra-small"].top["top-left"]),a(e.sys.shape.corner["extra-small"].top["top-right"],e.raw.sys.shape.corner["extra-small"].top["top-right"]),a(e.sys.shape.corner["extra-small"].size,e.raw.sys.shape.corner["extra-small"].size),a(e.sys.shape.corner.none,e.raw.sys.shape.corner.none),a(e.sys.shape.corner.full,e.raw.sys.shape.corner.full),a(e.sys.motion.easing.emphasized.normal,e.raw.sys.motion.easing.emphasized.normal),a(e.sys.motion.easing.emphasized.accelerate,e.raw.sys.motion.easing.emphasized.accelerate),a(e.sys.motion.easing.emphasized.decelerate,e.raw.sys.motion.easing.emphasized.decelerate),a(e.sys.motion.easing.standard.normal,e.raw.sys.motion.easing.standard.normal),a(e.sys.motion.easing.standard.accelerate,e.raw.sys.motion.easing.standard.accelerate),a(e.sys.motion.easing.standard.decelerate,e.raw.sys.motion.easing.standard.decelerate),a(e.sys.motion.easing.linear,e.raw.sys.motion.easing.linear),a(e.sys.motion["duration-1000"],e.raw.sys.motion["duration-1000"]),a(e.sys.motion["duration-900"],e.raw.sys.motion["duration-900"]),a(e.sys.motion["duration-800"],e.raw.sys.motion["duration-800"]),a(e.sys.motion["duration-700"],e.raw.sys.motion["duration-700"]),a(e.sys.motion["duration-600"],e.raw.sys.motion["duration-600"]),a(e.sys.motion["duration-550"],e.raw.sys.motion["duration-550"]),a(e.sys.motion["duration-500"],e.raw.sys.motion["duration-500"]),a(e.sys.motion["duration-450"],e.raw.sys.motion["duration-450"]),a(e.sys.motion["duration-400"],e.raw.sys.motion["duration-400"]),a(e.sys.motion["duration-350"],e.raw.sys.motion["duration-350"]),a(e.sys.motion["duration-300"],e.raw.sys.motion["duration-300"]),a(e.sys.motion["duration-250"],e.raw.sys.motion["duration-250"]),a(e.sys.motion["duration-200"],e.raw.sys.motion["duration-200"]),a(e.sys.motion["duration-150"],e.raw.sys.motion["duration-150"]),a(e.sys.motion["duration-100"],e.raw.sys.motion["duration-100"]),a(e.sys.motion["duration-50"],e.raw.sys.motion["duration-50"]),a(e.sys.motion["path-standard-path"],e.raw.sys.motion["path-standard-path"]),l==="light"&&(a(e.sys.color["surface-tint"],e.raw.sys.color.lightMode["surface-tint"]),a(e.sys.color["surface-tint-color"],e.raw.sys.color.lightMode["surface-tint-color"]),a(e.sys.color["on-error-container"],e.raw.sys.color.lightMode["on-error-container"]),a(e.sys.color["on-error"],e.raw.sys.color.lightMode["on-error"]),a(e.sys.color["error-container"],e.raw.sys.color.lightMode["error-container"]),a(e.sys.color["on-tertiary-container"],e.raw.sys.color.lightMode["on-tertiary-container"]),a(e.sys.color["on-tertiary"],e.raw.sys.color.lightMode["on-tertiary"]),a(e.sys.color["tertiary-container"],e.raw.sys.color.lightMode["tertiary-container"]),a(e.sys.color.tertiary,e.raw.sys.color.lightMode.tertiary),a(e.sys.color.shadow,e.raw.sys.color.lightMode.shadow),a(e.sys.color.error,e.raw.sys.color.lightMode.error),a(e.sys.color.outline,e.raw.sys.color.lightMode.outline),a(e.sys.color["outline-variant"],e.raw.sys.color.lightMode["outline-variant"]),a(e.sys.color["on-background"],e.raw.sys.color.lightMode["on-background"]),a(e.sys.color.background,e.raw.sys.color.lightMode.background),a(e.sys.color["inverse-on-surface"],e.raw.sys.color.lightMode["inverse-on-surface"]),a(e.sys.color["inverse-surface"],e.raw.sys.color.lightMode["inverse-surface"]),a(e.sys.color["on-surface-variant"],e.raw.sys.color.lightMode["on-surface-variant"]),a(e.sys.color["on-surface"],e.raw.sys.color.lightMode["on-surface"]),a(e.sys.color["surface-variant"],e.raw.sys.color.lightMode["surface-variant"]),a(e.sys.color.surface,e.raw.sys.color.lightMode.surface),a(e.sys.color["surface-container"],e.raw.sys.color.lightMode["surface-container"]),a(e.sys.color["surface-container-highest"],e.raw.sys.color.lightMode["surface-container-highest"]),a(e.sys.color["on-secondary-container"],e.raw.sys.color.lightMode["on-secondary-container"]),a(e.sys.color["on-secondary"],e.raw.sys.color.lightMode["on-secondary"]),a(e.sys.color["secondary-container"],e.raw.sys.color.lightMode["secondary-container"]),a(e.sys.color.secondary,e.raw.sys.color.lightMode.secondary),a(e.sys.color["inverse-primary"],e.raw.sys.color.lightMode["inverse-primary"]),a(e.sys.color["on-primary-container"],e.raw.sys.color.lightMode["on-primary-container"]),a(e.sys.color["on-primary"],e.raw.sys.color.lightMode["on-primary"]),a(e.sys.color["primary-container"],e.raw.sys.color.lightMode["primary-container"]),a(e.sys.color.primary,e.raw.sys.color.lightMode.primary)),l==="dark"&&(a(e.sys.color["on-error"],e.raw.sys.color.darkMode["on-error"]),a(e.sys.color["error-container"],e.raw.sys.color.darkMode["error-container"]),a(e.sys.color["on-tertiary-container"],e.raw.sys.color.darkMode["on-tertiary-container"]),a(e.sys.color["on-tertiary"],e.raw.sys.color.darkMode["on-tertiary"]),a(e.sys.color["tertiary-container"],e.raw.sys.color.darkMode["tertiary-container"]),a(e.sys.color.tertiary,e.raw.sys.color.darkMode.tertiary),a(e.sys.color.shadow,e.raw.sys.color.darkMode.shadow),a(e.sys.color.error,e.raw.sys.color.darkMode.error),a(e.sys.color.outline,e.raw.sys.color.darkMode.outline),a(e.sys.color["outline-variant"],e.raw.sys.color.darkMode["outline-variant"]),a(e.sys.color["on-background"],e.raw.sys.color.darkMode["on-background"]),a(e.sys.color.background,e.raw.sys.color.darkMode.background),a(e.sys.color["inverse-on-surface"],e.raw.sys.color.darkMode["inverse-on-surface"]),a(e.sys.color["inverse-surface"],e.raw.sys.color.darkMode["inverse-surface"]),a(e.sys.color["on-surface-variant"],e.raw.sys.color.darkMode["on-surface-variant"]),a(e.sys.color["on-surface"],e.raw.sys.color.darkMode["on-surface"]),a(e.sys.color["surface-variant"],e.raw.sys.color.darkMode["surface-variant"]),a(e.sys.color.surface,e.raw.sys.color.darkMode.surface),a(e.sys.color["surface-container"],e.raw.sys.color.darkMode["surface-container"]),a(e.sys.color["surface-container-highest"],e.raw.sys.color.darkMode["surface-container-highest"]),a(e.sys.color["on-secondary-container"],e.raw.sys.color.darkMode["on-secondary-container"]),a(e.sys.color["on-secondary"],e.raw.sys.color.darkMode["on-secondary"]),a(e.sys.color["secondary-container"],e.raw.sys.color.darkMode["secondary-container"]),a(e.sys.color.secondary,e.raw.sys.color.darkMode.secondary),a(e.sys.color["inverse-primary"],e.raw.sys.color.darkMode["inverse-primary"]),a(e.sys.color["on-primary-container"],e.raw.sys.color.darkMode["on-primary-container"]),a(e.sys.color["on-primary"],e.raw.sys.color.darkMode["on-primary"]),a(e.sys.color["primary-container"],e.raw.sys.color.darkMode["primary-container"]),a(e.sys.color.primary,e.raw.sys.color.darkMode.primary))}const e=u;window.uk=e;const qa=Ae;function Ra(t,r,l){return ie(r(),l)}function Fa(t,r,l,a){return t.addEventListener(r,l,a),qa(t.removeEventListener.bind(t,r,l,a))}function Da(t,r=He()){let l=0,a,i;return()=>(l++,Ae(()=>{l--,queueMicrotask(()=>{!l&&i&&(i(),i=a=void 0)})}),i||Te(o=>a=t(i=o),r),a)}function Ba(t){const r=He(),l=Da(t,r);return()=>l()}function De(t,r=!1){const l=window.matchMedia(t),[a,i]=Ra(r,()=>l.matches);return Fa(l,"change",()=>i(l.matches)),a}function Ua(t){return De("(prefers-color-scheme: dark)",t)}Ua.bind(void 0,!1);const Va=La.div`
    background-color: rgb(${e.sys.color.background});
    color: rgb(${e.sys.color["on-background"]});
    transition: background-color ${e.sys.motion["duration-250"]} ${e.sys.motion.easing.standard.normal};
    min-height: 100vh;
    width: 100%;

    /* debug purposes */
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    font-family: Roboto, system-ui;
`,Ka=({children:t})=>{const r=De("(prefers-color-scheme: light)");let l;return Ye(()=>{ja(Fe,l,r()?"light":"dark")}),n(Va,{ref(a){var i=l;typeof i=="function"?i(a):l=a},children:t})};var O=(t=>(t[t.vertical=0]="vertical",t[t.horizontal=1]="horizontal",t))(O||{});function Be(t){var r,l,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(l=Be(t[r]))&&(a&&(a+=" "),a+=l)}else for(l in t)t[l]&&(a&&(a+=" "),a+=l);return a}function Q(){for(var t,r,l=0,a="",i=arguments.length;l<i;l++)(t=arguments[l])&&(r=Be(t))&&(a&&(a+=" "),a+=r);return a}var Ga=M("<div>");function Xa(t,r){let l=[];switch(l.push(w`
        background-color: rgb(${e.sys.color["outline-variant"]});
        --thickness: ${s(1)};
    `),t){case O.horizontal:switch(l.push(w`
                height: var(--thickness);
            `),r){case"full":l.push(w`
                        width: 100%;
                    `);break;case"inset":l.push(w`
                        width: calc(100% - ${s(16)});
                        margin-left: ${s(16)};
                    `);break;case"middle-inset":l.push(w`
                        width: calc(100% - ${s(32)});
                        margin-left: ${s(16)};
                        margin-right: ${s(16)};
                    `);break}break;case O.vertical:switch(l.push(w`
                width: var(--thickness);
            `),r){case"middle-inset":l.push(w`
                        height: calc(100% - ${s(32)});
                        margin-top: ${s(16)};
                        margin-bottom: ${s(16)};
                    `);break;case"full":l.push(w`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return l}const Z=t=>(t.width==="inset"&&t.direction===O.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var r=Ga();return k(()=>$(r,Q(Xa(t.direction,t.width||"full")))),r})());var Wa=M("<div>");function Ya(){let t=[];return t.push(w`
        padding-left: ${s(16)};
        padding-right: ${s(16)};
    `),t}const Qa=t=>(()=>{var r=Wa();return y(r,()=>t.children),k(()=>$(r,Q(t.class,Ya()))),r})();function Ja(){let t=[];return t.push(w`
        background: rgb(${e.sys.color["surface-container-highest"]});
        color: rgb(${e.sys.color["on-surface"]});
        box-shadow: 0 0 ${s(1)} rgb(${e.sys.color.shadow});
        border-radius: ${e.sys.shape.corner.medium["default-size"]};
    `),t}const Ue=t=>n(Qa,{get class(){return Q(Ja())},get children(){return t.children}});var ye=M("<div>");const ue=({children:t,count:r})=>(()=>{var l=ye();return y(l,t,null),y(l,r===1?(()=>{var a=ye();return k(()=>$(a,w`
                        position: absolute;
                        left: calc(100% - ${s(3)});
                        top: -${s(3)};
                        background-color: rgb(${e.sys.color.error});
                        height: ${s(6)};
                        width: ${s(6)};
                        border-radius: ${e.sys.shape.corner.full};
                    `)),a})():r>1?(()=>{var a=ye();return y(a,()=>Math.min(r,999)===999?"999+":r),k(()=>$(a,w`
                        position: absolute;
                        left: calc(100% - ${s(12)});
                        top: -${s(8)};
                        background-color: rgb(${e.sys.color.error});
                        height: ${s(16)};
                        border-radius: ${e.sys.shape.corner.full};

                        color: rgb(${e.sys.color["on-error"]});
                        font-family: ${e.sys.typescale["label-small"].font};
                        font-size: ${e.sys.typescale["label-small"].size};
                        font-kerning: ${e.sys.typescale["label-small"].tracking};
                        font-weight: ${e.sys.typescale["label-small"].weight};
                        line-height: ${e.sys.typescale["label-small"]["line-height"]};
                        padding-left: ${s(4)};
                        padding-right: ${s(4)};
                    `)),a})():null,null),k(()=>$(l,w`
                position: relative;
                width: max-content;
                height: max-content;
            `)),l})();var Za=M("<div>");const et=t=>(()=>{var r=Za();return y(r,()=>t.children),r})();var at=M("<span>");function tt(){return w`
        font-family: "Material Symbols Rounded";
        font-weight: normal;
        font-style: normal;
        font-size: var(--icon-size, 24px);
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        user-select: none;
        pointer-events: none;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
    `}const X=t=>(()=>{var r=at();return y(r,()=>t.children),k(()=>$(r,Q(tt(),t.class))),r})();var rt=M("<div><div><div></div><p>"),lt=M("<img>"),st=M("<div><span></span><img>"),it=M("<span>");const ot=w`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,U=w`
    color: ${e.sys.color["on-surface"]};
    font-family: ${e.sys.typescale["body-large"].font};
    line-height: ${e.sys.typescale["body-large"]["line-height"]};
    font-size: ${e.sys.typescale["body-large"].size};
    font-kerning: ${e.sys.typescale["body-large"].tracking};
    font-weight: ${e.sys.typescale["body-large"].weight};
`,me=w`
    margin: 0;
    color: ${e.sys.color["on-surface-variant"]};
    font-family: ${e.sys.typescale["body-medium"].font};
    line-height: ${e.sys.typescale["body-medium"]["line-height"]};
    font-size: ${e.sys.typescale["body-medium"].size};
    font-kerning: ${e.sys.typescale["body-medium"].tracking};
    font-weight: ${e.sys.typescale["body-medium"].weight};
`,nt=w`
    width: ${s(56)};
    height: ${s(56)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`,V=w`
    color: rgb(${e.sys.color["on-surface-variant"]});
    font-size: ${s(24)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`,ct=w`
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
    background-color: rgb(${e.sys.color["primary-container"]});
    border-radius: ${e.sys.shape.corner.full};
    position: relative;
    height: ${s(40)};
    width: ${s(40)};
    z-index: 0;

    & > img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(${e.sys.color["on-primary-container"]});
        z-index: 0;

        font-family: ${e.sys.typescale["title-medium"].font};
        font-weight: ${e.sys.typescale["title-medium"].weight};
        font-size: ${e.sys.typescale["title-medium"].size};
        line-height: ${e.sys.typescale["title-medium"]["line-height"]};
        font-kerning: ${e.sys.typescale["title-medium"].tracking};
    }
`,R=w`
    color: rgb(${e.sys.color["on-surface-variant"]});
    margin-left: auto;
    font-size: ${s(24)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`,Ve=w`
    color: rgb(${e.sys.color["on-surface-variant"]});
    margin-left: auto;

    font-family: ${e.sys.typescale["label-small"].font};
    font-weight: ${e.sys.typescale["label-small"].weight};
    font-size: ${e.sys.typescale["label-small"].size};
    line-height: ${e.sys.typescale["label-small"]["line-height"]};
    font-kerning: ${e.sys.typescale["label-small"].tracking};

    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`,dt=w`
    display: flex;
    flex-direction: row;
    gap: ${s(16)};
    align-items: center;
    padding-left: ${s(16)};
    padding-right: ${s(16)};
    background-color: rgb(${e.sys.color.surface});
    position: relative;

    outline-color: transparent;
    outline-style: solid;
    outline-width: ${s(3)};
    outline-offset: ${s(3)};
    transition: outline-color ${e.sys.motion["duration-200"]}
        ${e.sys.motion.easing.standard.decelerate};

    &::after {
        transition: background-color ${e.sys.motion["duration-100"]}
            ${e.sys.motion.easing.standard.decelerate};
        content: "";
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &:hover {
        &::after {
            transition: background-color ${e.sys.motion["duration-100"]}
                ${e.sys.motion.easing.standard.accelerate};

            background: rgb(
                ${e.sys.color["on-surface"]},
                ${e.sys.state.hover["state-layer-opacity"]}
            );
        }

        .${U} {
            color: rgb(${e.sys.color["on-surface"]});
        }

        .${V} {
            color: rgb(${e.sys.color["on-surface-variant"]});
        }

        .${R} {
            color: rgb(${e.sys.color["on-surface-variant"]});
        }
    }

    &:active {
        &::after {
            background: rgb(
                ${e.sys.color["on-surface"]},
                ${e.sys.state.pressed["state-layer-opacity"]}
            );
        }
    }

    &[data-selected="true"] {
        background-color: rgb(${e.sys.color["secondary-container"]});

        &:hover {
            .${U} {
                color: rgb(${e.sys.color["on-secondary-container"]});
            }

            .${V} {
                color: rgb(${e.sys.color["on-surface"]});
            }

            .${R} {
                color: rgb(${e.sys.color["on-surface"]});
            }
        }
    }

    &:focus-visible {
        outline-color: rgb(${e.sys.color.secondary});
    }

    &[data-lines="1"] {
        padding-top: ${s(8)};
        padding-bottom: ${s(8)};
        height: ${s(56)};
    }

    &[data-lines="2"] {
        padding-top: ${s(8)};
        padding-bottom: ${s(8)};
        height: ${s(72)};
    }

    &[data-lines="3"] {
        padding-top: ${s(12)};
        padding-bottom: ${s(12)};
        height: ${s(88)};
    }

    &[data-divider="true"] {
        &::before {
            content: "";
            position: absolute;
            top: calc(100% + ${s(8)});
            left: 0;
            background-color: rgb(${e.sys.color.outline});
            height: ${s(1)};
            width: 100%;
        }

        margin-bottom: ${s(16)};
    }

    &[data-can-select="true"] {
        .${R} {
            color: rgb(${e.sys.color["on-surface"]});
        }
    }

    &[data-selected="true"] {
        .${U} {
            color: rgb(${e.sys.color["on-secondary-container"]});
        }

        .${V} {
            color: rgb(${e.sys.color["on-surface"]});
        }

        .${R} {
            color: rgb(${e.sys.color.primary});
        }

        .${Ve} {
            color: rgb(${e.sys.color["on-surface"]});
        }

        .${me} {
            color: rgb(${e.sys.color["on-surface"]});
        }
    }

    &[data-disabled="true"] {
        cursor: not-allowed;

        .${U} {
            color: rgb(${e.sys.color["on-surface"]}, 0.38);
        }

        .${me} {
            color: rgb(${e.sys.color["on-surface"]}, 0.38);
        }

        .${V} {
            color: rgb(${e.sys.color["on-surface"]}, 0.38);
        }

        .${R} {
            color: rgb(${e.sys.color["on-surface"]}, 0.38);
        }

        &::after {
            background-color: rgb(
                ${e.sys.color["on-surface"]},
                ${e.sys.state.focus["state-layer-opacity"]}
            );
        }
    }
`,H=t=>(()=>{var r=rt(),l=r.firstChild,a=l.firstChild,i=a.nextSibling;return je(r,"click",t.onClick,!0),$(r,dt),y(r,(()=>{var o=L(()=>t.leading?.type==="icon");return()=>o()&&n(X,{class:V,get children(){return t.leading.value}})})(),l),y(r,(()=>{var o=L(()=>t.leading?.type==="image");return()=>o()&&(()=>{var d=lt();return $(d,nt),k(c=>{var f=t.leading.value,h=t.leading.alt||"";return f!==c.e&&x(d,"src",c.e=f),h!==c.t&&x(d,"alt",c.t=h),c},{e:void 0,t:void 0}),d})()})(),l),y(r,(()=>{var o=L(()=>t.leading?.type==="avatar");return()=>o()&&(()=>{var d=st(),c=d.firstChild,f=c.nextSibling;return $(d,ct),y(c,()=>(t.leading.alt||"uk").slice(0,2)),k(h=>{var m=t.leading.value,v=t.leading.alt||"";return m!==h.e&&x(f,"src",h.e=m),v!==h.t&&x(f,"alt",h.t=v),h},{e:void 0,t:void 0}),d})()})(),l),$(l,ot),$(a,U),y(a,()=>t.labelText),$(i,me),y(i,()=>t.supportingText),y(r,(()=>{var o=L(()=>t.trailing?.type==="icon");return()=>o()&&n(X,{class:R,get children(){return t.trailing.value}})})(),null),y(r,(()=>{var o=L(()=>t.trailing?.type==="text");return()=>o()&&(()=>{var d=it();return $(d,Ve),y(d,()=>t.trailing.value),d})()})(),null),k(o=>{var d=t.disabled,c=t.lines||2,f=t.selected,h=t.canSelect,m=t.divider,v=t.disabled?void 0:0;return d!==o.e&&x(r,"data-disabled",o.e=d),c!==o.t&&x(r,"data-lines",o.t=c),f!==o.a&&x(r,"data-selected",o.a=f),h!==o.o&&x(r,"data-can-select",o.o=h),m!==o.i&&x(r,"data-divider",o.i=m),v!==o.n&&x(r,"tabindex",o.n=v),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),r})();oe(["click"]);var yt=M("<div>");const T=t=>(()=>{var r=yt();return y(r,()=>t.children),k(l=>{var a=t.size,i=t.connected,o=w`
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                & > button:first-child:active {
                    margin-left: calc(calc(calc(var(--padding-left) * 1.15) - calc(var(--padding-left))) * -1);
                }

                & > button:active {
                    --padding-left-override: calc(var(--padding-left) * 1.15);
                    --padding-right-override: calc(var(--padding-left) * 1.15);
                }

                & > button:active + button,
                & > button:has(+ button:active) {
                    --padding-left-override: calc(var(--padding-left) - calc(calc(var(--padding-left) * 1.075) - var(--padding-left)));
                    --padding-right-override: calc(var(--padding-right) - calc(calc(var(--padding-right) * 1.075) - var(--padding-right)));
                }

                & > button:disabled:active {
                    --padding-left-override: unset;
                    --padding-right-override: unset;

                    & + button {
                        --padding-left-override: unset;
                        --padding-right-override: unset;
                    }
                }

                & > button:has(+ button:disabled:active) {
                    --padding-left-override: unset;
                    --padding-right-override: unset;
                }

                &[data-connected="true"] {
                    &[data-size="xs"] {
                        gap: ${s(2)};
                        height: ${s(32)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="s"] {
                        gap: ${s(2)};
                        height: ${s(40)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="m"] {
                        gap: ${s(2)};
                        height: ${s(56)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${e.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="l"] {
                        gap: ${s(2)};
                        height: ${s(96)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${e.sys.shape.corner.large["default-size"]} !important;
                                border-bottom-right-radius: ${e.sys.shape.corner.large["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${e.sys.shape.corner.large["default-size"]} !important;
                                border-bottom-left-radius: ${e.sys.shape.corner.large["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="xl"] {
                        gap: ${s(2)};
                        height: ${s(136)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${s(20)} !important;
                                border-bottom-right-radius: ${s(20)} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${s(20)} !important;
                                border-bottom-left-radius: ${s(20)} !important;
                            }
                        }
                    }
                }

                &:not([data-connected="true"]) {
                    &[data-size="xs"] {
                        gap: ${s(18)};
                        height: ${s(32)};
                    }

                    &[data-size="s"] {
                        gap: ${s(12)};
                        height: ${s(40)};
                    }

                    &[data-size="m"] {
                        gap: ${s(8)};
                        height: ${s(56)};
                    }

                    &[data-size="l"] {
                        gap: ${s(8)};
                        height: ${s(96)};
                    }

                    &[data-size="xl"] {
                        gap: ${s(8)};
                        height: ${s(136)};
                    }
                }
            `;return a!==l.e&&x(r,"data-size",l.e=a),i!==l.t&&x(r,"data-connected",l.t=i),o!==l.a&&$(r,l.a=o),l},{e:void 0,t:void 0,a:void 0}),r})();var ut=M("<button>");const Ce=w`
    font-size: var(--icon-size);
`,p=t=>{const[r,l]=ie(!1);return t.color==="standard"&&t.type==="toggle"&&alert("You cannot have a standard color button be toggleable"),(()=>{var a=ut();return a.$$click=i=>{t.type==="toggle"&&l(!r()),t.onClick(i)},y(a,(()=>{var i=L(()=>!!t.leadingIcon);return()=>i()&&n(X,{class:Ce,get children(){return t.leadingIcon}})})(),null),y(a,()=>t.children||"No Label Provided",null),y(a,(()=>{var i=L(()=>!!t.trailingIcon);return()=>i()&&n(X,{class:Ce,get children(){return t.trailingIcon}})})(),null),k(i=>{var o=t.disabled||!1,d=r(),c=t.type==="toggle"||!1,f=t.size||"s",h=r()?(t.shape||"round")==="round"?"square":"round":t.shape||"round",m=t.color||"filled",v=Q(t.class,w`
                    padding-left: var(--padding-left-override, var(--padding-left, 0px));
                    padding-right: var(--padding-right-override, var(--padding-right, 0px));

                    transition:
                        all ${e.sys.motion["duration-50"]} var(--transition-all, linear),
                        outline-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.decelerate},
                        outline-width 0ms linear,
                        background-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal},
                        color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal},
                        padding-left ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                        margin-left ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                        padding-right ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                        margin-right ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                        border-radius var(--border-radius-duration, ${e.sys.motion["duration-50"]}) ${e.sys.motion.easing.linear};

                    &:focus,
                    &:hover {
                        --border-radius-duration: ${e.sys.motion["duration-200"]};
                    }

                    &:active {
                        --border-radius-duration: ${e.sys.motion["duration-50"]};
                    }

                    position: relative;
                    border: none;
                    overflow: hidden;
                    font-family: ${e.ref.typeface.plain};
                    user-select: none;
                    display: flex;
                    align-items: center;

                    outline-style: solid;
                    outline-offset: ${s(2)};
                    outline-width: 0;
                    outline-color: transparent;

                    &::after {
                        transition: background-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal};
                        content: "";
                        position: absolute;
                        background-color: transparent;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    &[disabled] {
                        cursor: not-allowed;
                    }

                    &[data-size="xs"] {
                        --padding-left: ${s(12)};
                        --padding-right: ${s(12)};

                        height: ${s(32)};
                        border-width: ${s(1)};
                        gap: ${s(8)};
                        font-weight: ${e.ref.typeface["weight-medium"]};
                        font-size: ${s(14)};
                        line-height: ${s(20)};
                        letter-spacing: ${s(.1)};

                        --icon-size: ${s(20)};

                        &[data-shape="square"] {
                            border-radius: ${e.sys.shape.corner.medium};
                            --transition-all: ${e.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.full};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(32)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.small};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }
                    }

                    &[data-size="s"] {
                        --padding-left: ${s(16)};
                        --padding-right: ${s(16)};

                        height: ${s(40)};
                        border-width: ${s(1)};
                        gap: ${s(8)};
                        font-weight: ${e.ref.typeface["weight-medium"]};
                        font-size: ${s(14)};
                        line-height: ${s(20)};
                        letter-spacing: ${s(.1)};

                        --icon-size: ${s(20)};

                        &[data-shape="square"] {
                            border-radius: ${e.sys.shape.corner.medium};
                            --transition-all: ${e.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${s(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(40)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.medium};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }
                    }

                    &[data-size="m"] {
                        --padding-left: ${s(24)};
                        --padding-right: ${s(24)};

                        height: ${s(56)};
                        border-width: ${s(1)};
                        gap: ${s(8)};
                        font-weight: ${e.ref.typeface["weight-medium"]};
                        font-size: ${s(16)};
                        line-height: ${s(24)};
                        letter-spacing: ${s(.15)};

                        --icon-size: ${s(24)};

                        &[data-shape="square"] {
                            border-radius: ${e.sys.shape.corner.large.size};
                            --transition-all: ${e.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${s(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(56)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.medium};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }
                    }

                    &[data-size="l"] {
                        --padding-left: ${s(48)};
                        --padding-right: ${s(48)};

                        height: ${s(96)};
                        border-width: ${s(2)};
                        gap: ${s(12)};
                        font-weight: ${e.ref.typeface["weight-regular"]};
                        font-size: ${s(24)};
                        line-height: ${s(32)};
                        letter-spacing: 0;

                        --icon-size: ${s(32)};

                        &[data-shape="square"] {
                            border-radius: ${e.sys.shape.corner.large.size};
                            --transition-all: ${e.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${s(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(96)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.large.size};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }
                    }

                    &[data-size="xl"] {
                        --padding-left: ${s(64)};
                        --padding-right: ${s(64)};

                        height: ${s(132)};
                        border-width: ${s(3)};
                        gap: ${s(16)};
                        font-weight: ${e.ref.typeface["weight-regular"]};
                        font-size: ${s(32)};
                        line-height: ${s(40)};
                        letter-spacing: 0;

                        --icon-size: ${s(40)};

                        &[data-shape="square"] {
                            border-radius: ${e.sys.shape.corner["extra-large"].size};
                            --transition-all: ${e.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${s(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(132)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.large.size};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${e.sys.color.outline});
                                    outline-width: ${s(4)};
                                }
                            }
                        }
                    }

                    &[data-color="filled"] {
                        background-color: rgb(${e.sys.color.primary});
                        color: rgb(${e.sys.color["on-primary"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                            color: rgb(${e.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            background: rgb(${e.sys.color["surface-container"]});
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &[data-selected="true"] {
                                background: rgb(${e.sys.color.primary});
                                color: rgb(${e.sys.color["on-primary"]});
                            }
                        }
                    }

                    &[data-color="outlined"] {
                        background-color: transparent;
                        color: rgb(${e.sys.color["on-surface-variant"]});
                        border-style: solid;
                        border-color: rgb(${e.sys.color["outline-variant"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                            color: rgb(${e.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &[data-selected="true"] {
                                background: rgb(${e.sys.color["inverse-surface"]});
                                color: rgb(${e.sys.color["inverse-on-surface"]});
                            }
                        }
                    }

                    &[data-color="elevated"] {
                        border: none;
                        box-shadow: 0 ${s(1)} ${s(2)} ${e.sys.color.shadow};

                        &:not([disabled]) {
                            &:active,
                            &:focus-visible {
                                box-shadow: 0 ${s(2)} ${s(6)} ${e.sys.color.shadow};
                            }
                        }
                    }

                    &[data-color="standard"] {
                        background-color: transparent;
                        color: rgb(${e.sys.color.primary});

                        &:hover {
                            &::after {
                                background-color: rgb(${e.sys.color.primary}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(${e.sys.color.primary}, ${e.sys.state.pressed["state-layer-opacity"]});
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                            color: rgb(${e.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }
                    }

                    &[data-color="tonal"] {
                        background-color: rgb(${e.sys.color["secondary-container"]});
                        color: rgb(${e.sys.color["on-secondary-container"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${e.sys.color["on-secondary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                            color: rgb(${e.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            background: rgb(${e.sys.color["secondary-container"]});
                            color: rgb(${e.sys.color["on-secondary-container"]});

                            &[data-selected="true"] {
                                background: rgb(${e.sys.color.secondary});
                                color: rgb(${e.sys.color["on-secondary"]});
                            }
                        }
                    }
                `);return o!==i.e&&(a.disabled=i.e=o),d!==i.t&&x(a,"data-selected",i.t=d),c!==i.a&&x(a,"data-toggleable",i.a=c),f!==i.o&&x(a,"data-size",i.o=f),h!==i.i&&x(a,"data-shape",i.i=h),m!==i.n&&x(a,"data-color",i.n=m),v!==i.s&&$(a,i.s=v),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),a})()};oe(["click"]);var ft=M("<button>");const g=t=>{const[r,l]=ie(!1);return(()=>{var a=ft();return a.$$click=i=>{t.type==="toggle"&&l(!r()),t.onClick(i)},y(a,n(X,{get children(){return t.icon}})),k(i=>{var o=t.width||"default",d=t.shape||"round",c=t.size||"s",f=t.type||"normal",h=r(),m=t.disabled||!1,v=w`
                background-color: rgb(${e.sys.color.primary});
                color: rgb(${e.sys.color["on-primary"]});
                height: ${s(40)};
                border: none;
                --icon-size: ${s(24)};
                overflow: hidden;
                position: relative;
                outline-style: solid;
                outline-offset: ${s(2)};
                outline-width: 0;
                outline-color: transparent;

                padding-left: var(--padding-left-override, var(--padding-left, 0px));
                padding-right: var(--padding-right-override, var(--padding-right, 0px));

                transition:
                    all ${e.sys.motion["duration-50"]} var(--transition-all, linear),
                    outline-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.decelerate},
                    outline-width 0ms linear,
                    background-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal},
                    color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal},
                    padding-left ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                    margin-left ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                    padding-right ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                    margin-right ${e.sys.motion["duration-50"]} ${e.sys.motion.easing.linear},
                    border-radius var(--border-radius-duration, ${e.sys.motion["duration-50"]}) ${e.sys.motion.easing.linear};

                &::before {
                    content: "";
                    position: absolute;
                    transition: background-color ${e.sys.motion["duration-100"]} ${e.sys.motion.easing.standard.normal};
                    background-color: transparent;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                &:hover:not(:disabled) {
                    color: rgb(${e.sys.color["on-primary"]});

                    &::before {
                        background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                    }
                }

                &:focus,
                &:hover {
                    --border-radius-duration: ${e.sys.motion["duration-200"]};
                }

                &:active {
                    --border-radius-duration: ${e.sys.motion["duration-50"]};
                }

                &[data-type="toggle"] {
                    background-color: rgb(${e.sys.color["surface-container"]});
                    color: rgb(${e.sys.color["on-surface-variant"]});

                    &:hover:not(:disabled) {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }
                    }

                    &:focus-visible:not(:disabled) {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }
                    }

                    &:active:not(:disabled) {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                        }
                    }
                }

                &[data-selected="true"] {
                    background-color: rgb(${e.sys.color.primary});
                    color: rgb(${e.sys.color["on-primary"]});

                    &:hover:not(:disabled) {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }
                    }

                    &:focus-visible:not(:disabled) {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }
                    }

                    &:active:not(:disabled) {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                        }
                    }
                }

                &:disabled {
                    background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                    color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    cursor: not-allowed;
                }

                &[data-size="xs"] {
                    height: ${s(32)};
                    --icon-size: ${s(20)};
                    --outline-width: ${s(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${s(4)};
                        --padding-right: ${s(4)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${s(6)};
                        --padding-right: ${s(6)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${s(10)};
                        --padding-right: ${s(10)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${s(24)};

                        &[data-selected="true"] {
                            border-radius: ${e.sys.shape.corner.medium};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${e.sys.shape.corner.medium};

                        &[data-selected="true"] {
                            border-radius: ${s(24)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${e.sys.shape.corner.small};
                    }
                }

                &[data-size="s"] {
                    height: ${s(40)};
                    --icon-size: ${s(24)};
                    --outline-width: ${s(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${s(4)};
                        --padding-right: ${s(4)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${s(8)};
                        --padding-right: ${s(8)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${s(14)};
                        --padding-right: ${s(14)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${s(40)};

                        &[data-selected="true"] {
                            border-radius: ${e.sys.shape.corner.medium};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${e.sys.shape.corner.medium};

                        &[data-selected="true"] {
                            border-radius: ${s(40)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${e.sys.shape.corner.small};
                    }
                }

                &[data-size="m"] {
                    height: ${s(56)};
                    --icon-size: ${s(24)};
                    --outline-width: ${s(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${s(12)};
                        --padding-right: ${s(12)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${s(16)};
                        --padding-right: ${s(16)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${s(24)};
                        --padding-right: ${s(24)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${s(56)};

                        &[data-selected="true"] {
                            border-radius: ${e.sys.shape.corner.large.size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${e.sys.shape.corner.large.size};

                        &[data-selected="true"] {
                            border-radius: ${s(56)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${e.sys.shape.corner.medium};
                    }
                }

                &[data-size="l"] {
                    height: ${s(96)};
                    --icon-size: ${s(32)};
                    --outline-width: ${s(2)};

                    &[data-width="narrow"] {
                        --padding-left: ${s(16)};
                        --padding-right: ${s(16)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${s(32)};
                        --padding-right: ${s(32)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${s(48)};
                        --padding-right: ${s(48)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${s(96)};

                        &[data-selected="true"] {
                            border-radius: ${e.sys.shape.corner["extra-large"].size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${e.sys.shape.corner["extra-large"].size};

                        &[data-selected="true"] {
                            border-radius: ${s(96)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${e.sys.shape.corner.large.size};
                    }
                }
            `;return o!==i.e&&x(a,"data-width",i.e=o),d!==i.t&&x(a,"data-shape",i.t=d),c!==i.a&&x(a,"data-size",i.a=c),f!==i.o&&x(a,"data-type",i.o=f),h!==i.i&&x(a,"data-selected",i.i=h),m!==i.n&&(a.disabled=i.n=m),v!==i.s&&$(a,i.s=v),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),a})()};oe(["click"]);var pt=M("<h1>Button Variant '<!>'"),gt=M("<h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),E=M("<div>"),ht=M("<h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),mt=M("<h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),vt=M("<h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)"),fe=M("<h3>Random Placeholder"),wt=M('<span>UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by <a href=https://github.com/ewsgit>Ewsgit');const B=({size:t})=>n(Ue,{get children(){return[(()=>{var r=pt(),l=r.firstChild,a=l.nextSibling;return a.nextSibling,y(r,t,a),r})(),gt(),(()=>{var r=E();return y(r,n(p,{color:"filled",size:t,type:"toggle",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"filled",size:t,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"filled",size:t,disabled:!0,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"filled",size:t,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"filled",size:t,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"filled",size:t,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>$(r,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),r})(),ht(),(()=>{var r=E();return y(r,n(p,{color:"tonal",size:t,type:"toggle",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"tonal",size:t,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"tonal",size:t,disabled:!0,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"tonal",size:t,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"tonal",size:t,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"tonal",size:t,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>$(r,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),r})(),mt(),(()=>{var r=E();return y(r,n(p,{color:"outlined",size:t,type:"toggle",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"outlined",size:t,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"outlined",size:t,disabled:!0,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"outlined",size:t,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"outlined",size:t,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"outlined",size:t,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>$(r,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),r})(),vt(),(()=>{var r=E();return y(r,n(p,{color:"standard",size:t,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"standard",size:t,disabled:!0,onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"standard",size:t,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"standard",size:t,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),y(r,n(p,{color:"standard",size:t,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),k(()=>$(r,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),r})()]}});function bt(){return n(Ka,{get children(){return[n(B,{size:"xs"}),n(Z,{get direction(){return O.horizontal}}),n(B,{size:"s"}),n(Z,{get direction(){return O.horizontal}}),n(B,{size:"m"}),n(Z,{get direction(){return O.horizontal}}),n(B,{size:"l"}),n(Z,{get direction(){return O.horizontal}}),n(B,{size:"xl"}),n(Ue,{get children(){return[n(ue,{count:12,get children(){var t=fe();return k(()=>$(t,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),t}}),n(ue,{count:1e3,get children(){var t=fe();return k(()=>$(t,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),t}}),n(ue,{count:1,get children(){var t=fe();return k(()=>$(t,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),t}})]}}),n(et,{get children(){return[n(H,{labelText:"Heading",supportingText:"Supporting text",onClick:()=>{}}),n(H,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{}}),n(H,{labelText:"Heading",supportingText:"Supporting text",trailing:{type:"text",value:"100+"},onClick:()=>{},canSelect:!0}),n(H,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{},trailing:{type:"icon",value:"arrow_left"},selected:!0,canSelect:!0}),n(H,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{},trailing:{type:"icon",value:"arrow_left"}}),n(H,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{}}),n(H,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0,canSelect:!0}),n(H,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"large-image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0,canSelect:!0}),n(H,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"video",value:"https://google.com/favicon.ico"},onClick:()=>{}})]}}),n(T,{size:"xs",get children(){return[n(p,{color:"filled",size:"xs",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{size:"s",get children(){return[n(p,{color:"filled",size:"s",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{size:"m",get children(){return[n(p,{color:"filled",size:"m",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{size:"l",get children(){return[n(p,{color:"filled",size:"l",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{size:"xl",get children(){return[n(p,{color:"filled",size:"xl",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{connected:!0,size:"xs",get children(){return[n(p,{color:"filled",size:"xs",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xs",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{connected:!0,size:"s",get children(){return[n(p,{color:"filled",size:"s",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"s",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{connected:!0,size:"m",get children(){return[n(p,{color:"filled",size:"m",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"m",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{connected:!0,size:"l",get children(){return[n(p,{color:"filled",size:"l",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"l",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),n(T,{connected:!0,size:"xl",get children(){return[n(p,{color:"filled",size:"xl",type:"toggle",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",disabled:!0,onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),n(p,{color:"filled",size:"xl",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),(()=>{var t=E();return y(t,n(g,{alt:"Hello world",width:"narrow",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xs",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xs",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xs",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),k(()=>$(t,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),t})(),(()=>{var t=E();return y(t,n(g,{alt:"Hello world",width:"narrow",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"s",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"s",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"s",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),k(()=>$(t,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),t})(),(()=>{var t=E();return y(t,n(g,{alt:"Hello world",width:"narrow",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"m",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"m",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"m",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),k(()=>$(t,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),t})(),(()=>{var t=E();return y(t,n(g,{alt:"Hello world",width:"narrow",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"l",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"l",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"l",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),k(()=>$(t,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),t})(),(()=>{var t=E();return y(t,n(g,{alt:"Hello world",width:"narrow",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xl",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"narrow",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xl",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"default",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xl",icon:"person",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),y(t,n(g,{alt:"Hello world",width:"wide",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),k(()=>$(t,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),t})(),wt()]}})}ha(()=>n(bt,{}),document.getElementById("root"));
