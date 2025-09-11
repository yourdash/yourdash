(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();const Ge=!1,Xe=(r,a)=>r===a,ee=Symbol("solid-proxy"),He=typeof Proxy=="function",re={equals:Xe};let Me=Ee;const O=1,le=2,Se={owned:null,cleanups:null,context:null,owner:null};var x=null;let ne=null,We=null,H=null,S=null,_=null,oe=0;function Ie(r,a){const o=H,l=x,c=r.length===0,d=a===void 0?l:a,y=c?Se:{owned:null,cleanups:null,context:d?d.context:null,owner:d},u=c?r:()=>r(()=>P(()=>K(y)));x=y,H=null;try{return Y(u,!0)}finally{H=o,x=l}}function se(r,a){a=a?Object.assign({},re,a):re;const o={value:r,observers:null,observerSlots:null,comparator:a.equals||void 0},l=c=>(typeof c=="function"&&(c=c(o.value)),_e(o,c));return[Ae.bind(o),l]}function v(r,a,o){const l=me(r,a,!1,O);W(l)}function Ye(r,a,o){Me=lr;const l=me(r,a,!1,O);l.user=!0,_?_.push(l):W(l)}function F(r,a,o){o=o?Object.assign({},re,o):re;const l=me(r,a,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=o.equals||void 0,W(l),Ae.bind(l)}function P(r){if(H===null)return r();const a=H;H=null;try{return r()}finally{H=a}}function qe(r){return x===null||(x.cleanups===null?x.cleanups=[r]:x.cleanups.push(r)),r}function Te(){return x}const[kl,$l]=se(!1);function Qe(r,a){const o=Symbol("context");return{id:o,Provider:tr(o),defaultValue:r}}function Je(r){let a;return x&&x.context&&(a=x.context[r.id])!==void 0?a:r.defaultValue}function Ze(r){const a=F(r),o=F(()=>pe(a()));return o.toArray=()=>{const l=o();return Array.isArray(l)?l:l!=null?[l]:[]},o}function Ae(){if(this.sources&&this.state)if(this.state===O)W(this);else{const r=S;S=null,Y(()=>te(this),!1),S=r}if(H){const r=this.observers?this.observers.length:0;H.sources?(H.sources.push(this),H.sourceSlots.push(r)):(H.sources=[this],H.sourceSlots=[r]),this.observers?(this.observers.push(H),this.observerSlots.push(H.sources.length-1)):(this.observers=[H],this.observerSlots=[H.sources.length-1])}return this.value}function _e(r,a,o){let l=r.value;return(!r.comparator||!r.comparator(l,a))&&(r.value=a,r.observers&&r.observers.length&&Y(()=>{for(let c=0;c<r.observers.length;c+=1){const d=r.observers[c],y=ne&&ne.running;y&&ne.disposed.has(d),(y?!d.tState:!d.state)&&(d.pure?S.push(d):_.push(d),d.observers&&Pe(d)),y||(d.state=O)}if(S.length>1e6)throw S=[],new Error},!1)),a}function W(r){if(!r.fn)return;K(r);const a=oe;er(r,r.value,a)}function er(r,a,o){let l;const c=x,d=H;H=x=r;try{l=r.fn(a)}catch(y){return r.pure&&(r.state=O,r.owned&&r.owned.forEach(K),r.owned=null),r.updatedAt=o+1,Oe(y)}finally{H=d,x=c}(!r.updatedAt||r.updatedAt<=o)&&(r.updatedAt!=null&&"observers"in r?_e(r,l):r.value=l,r.updatedAt=o)}function me(r,a,o,l=O,c){const d={fn:r,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:a,owner:x,context:x?x.context:null,pure:o};return x===null||x!==Se&&(x.owned?x.owned.push(d):x.owned=[d]),d}function ae(r){if(r.state===0)return;if(r.state===le)return te(r);if(r.suspense&&P(r.suspense.inFallback))return r.suspense.effects.push(r);const a=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<oe);)r.state&&a.push(r);for(let o=a.length-1;o>=0;o--)if(r=a[o],r.state===O)W(r);else if(r.state===le){const l=S;S=null,Y(()=>te(r,a[0]),!1),S=l}}function Y(r,a){if(S)return r();let o=!1;a||(S=[]),_?o=!0:_=[],oe++;try{const l=r();return rr(o),l}catch(l){o||(_=null),S=null,Oe(l)}}function rr(r){if(S&&(Ee(S),S=null),r)return;const a=_;_=null,a.length&&Y(()=>Me(a),!1)}function Ee(r){for(let a=0;a<r.length;a++)ae(r[a])}function lr(r){let a,o=0;for(a=0;a<r.length;a++){const l=r[a];l.user?r[o++]=l:ae(l)}for(a=0;a<o;a++)ae(r[a])}function te(r,a){r.state=0;for(let o=0;o<r.sources.length;o+=1){const l=r.sources[o];if(l.sources){const c=l.state;c===O?l!==a&&(!l.updatedAt||l.updatedAt<oe)&&ae(l):c===le&&te(l,a)}}}function Pe(r){for(let a=0;a<r.observers.length;a+=1){const o=r.observers[a];o.state||(o.state=le,o.pure?S.push(o):_.push(o),o.observers&&Pe(o))}}function K(r){let a;if(r.sources)for(;r.sources.length;){const o=r.sources.pop(),l=r.sourceSlots.pop(),c=o.observers;if(c&&c.length){const d=c.pop(),y=o.observerSlots.pop();l<c.length&&(d.sourceSlots[y]=l,c[l]=d,o.observerSlots[l]=y)}}if(r.tOwned){for(a=r.tOwned.length-1;a>=0;a--)K(r.tOwned[a]);delete r.tOwned}if(r.owned){for(a=r.owned.length-1;a>=0;a--)K(r.owned[a]);r.owned=null}if(r.cleanups){for(a=r.cleanups.length-1;a>=0;a--)r.cleanups[a]();r.cleanups=null}r.state=0}function ar(r){return r instanceof Error?r:new Error(typeof r=="string"?r:"Unknown error",{cause:r})}function Oe(r,a=x){throw ar(r)}function pe(r){if(typeof r=="function"&&!r.length)return pe(r());if(Array.isArray(r)){const a=[];for(let o=0;o<r.length;o++){const l=pe(r[o]);Array.isArray(l)?a.push.apply(a,l):a.push(l)}return a}return r}function tr(r,a){return function(l){let c;return v(()=>c=P(()=>(x.context={...x.context,[r]:l.value},Ze(()=>l.children))),void 0),c}}function t(r,a){return P(()=>r(a||{}))}function J(){return!0}const ge={get(r,a,o){return a===ee?o:r.get(a)},has(r,a){return a===ee?!0:r.has(a)},set:J,deleteProperty:J,getOwnPropertyDescriptor(r,a){return{configurable:!0,enumerable:!0,get(){return r.get(a)},set:J,deleteProperty:J}},ownKeys(r){return r.keys()}};function ce(r){return(r=typeof r=="function"?r():r)?r:{}}function or(){for(let r=0,a=this.length;r<a;++r){const o=this[r]();if(o!==void 0)return o}}function de(...r){let a=!1;for(let y=0;y<r.length;y++){const u=r[y];a=a||!!u&&ee in u,r[y]=typeof u=="function"?(a=!0,F(u)):u}if(He&&a)return new Proxy({get(y){for(let u=r.length-1;u>=0;u--){const p=ce(r[u])[y];if(p!==void 0)return p}},has(y){for(let u=r.length-1;u>=0;u--)if(y in ce(r[u]))return!0;return!1},keys(){const y=[];for(let u=0;u<r.length;u++)y.push(...Object.keys(ce(r[u])));return[...new Set(y)]}},ge);const o={},l=Object.create(null);for(let y=r.length-1;y>=0;y--){const u=r[y];if(!u)continue;const p=Object.getOwnPropertyNames(u);for(let h=p.length-1;h>=0;h--){const m=p[h];if(m==="__proto__"||m==="constructor")continue;const k=Object.getOwnPropertyDescriptor(u,m);if(!l[m])l[m]=k.get?{enumerable:!0,configurable:!0,get:or.bind(o[m]=[k.get.bind(u)])}:k.value!==void 0?k:void 0;else{const $=o[m];$&&(k.get?$.push(k.get.bind(u)):k.value!==void 0&&$.push(()=>k.value))}}}const c={},d=Object.keys(l);for(let y=d.length-1;y>=0;y--){const u=d[y],p=l[u];p&&p.get?Object.defineProperty(c,u,p):c[u]=p?p.value:void 0}return c}function Ne(r,...a){if(He&&ee in r){const c=new Set(a.length>1?a.flat():a[0]),d=a.map(y=>new Proxy({get(u){return y.includes(u)?r[u]:void 0},has(u){return y.includes(u)&&u in r},keys(){return y.filter(u=>u in r)}},ge));return d.push(new Proxy({get(y){return c.has(y)?void 0:r[y]},has(y){return c.has(y)?!1:y in r},keys(){return Object.keys(r).filter(y=>!c.has(y))}},ge)),d}const o={},l=a.map(()=>({}));for(const c of Object.getOwnPropertyNames(r)){const d=Object.getOwnPropertyDescriptor(r,c),y=!d.get&&!d.set&&d.enumerable&&d.writable&&d.configurable;let u=!1,p=0;for(const h of a)h.includes(c)&&(u=!0,y?l[p][c]=d.value:Object.defineProperty(l[p],c,d)),++p;u||(y?o[c]=d.value:Object.defineProperty(o,c,d))}return[...l,o]}const sr=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],ir=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...sr]),nr=new Set(["innerHTML","textContent","innerText","children"]),cr=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dr=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function ur(r,a){const o=dr[r];return typeof o=="object"?o[a]?o.$:void 0:o}const yr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),fr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),pr={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},N=r=>F(()=>r());function gr(r,a,o){let l=o.length,c=a.length,d=l,y=0,u=0,p=a[c-1].nextSibling,h=null;for(;y<c||u<d;){if(a[y]===o[u]){y++,u++;continue}for(;a[c-1]===o[d-1];)c--,d--;if(c===y){const m=d<l?u?o[u-1].nextSibling:o[d-u]:p;for(;u<d;)r.insertBefore(o[u++],m)}else if(d===u)for(;y<c;)(!h||!h.has(a[y]))&&a[y].remove(),y++;else if(a[y]===o[d-1]&&o[u]===a[c-1]){const m=a[--c].nextSibling;r.insertBefore(o[u++],a[y++].nextSibling),r.insertBefore(o[--d],m),a[c]=o[d]}else{if(!h){h=new Map;let k=u;for(;k<d;)h.set(o[k],k++)}const m=h.get(a[y]);if(m!=null)if(u<m&&m<d){let k=y,$=1,I;for(;++k<c&&k<d&&!((I=h.get(a[k]))==null||I!==m+$);)$++;if($>m-u){const D=a[y];for(;u<m;)r.insertBefore(o[u++],D)}else r.replaceChild(o[u++],a[y++])}else y++;else a[y++].remove()}}}const ve="_$DX_DELEGATE";function hr(r,a,o,l={}){let c;return Ie(d=>{c=d,a===document?r():i(a,r(),a.firstChild?null:void 0,o)},l.owner),()=>{c(),a.textContent=""}}function M(r,a,o,l){let c;const d=()=>{const u=document.createElement("template");return u.innerHTML=r,u.content.firstChild},y=()=>(c||(c=d())).cloneNode(!0);return y.cloneNode=y,y}function ie(r,a=window.document){const o=a[ve]||(a[ve]=new Set);for(let l=0,c=r.length;l<c;l++){const d=r[l];o.has(d)||(o.add(d),a.addEventListener(d,xr))}}function z(r,a,o){o==null?r.removeAttribute(a):r.setAttribute(a,o)}function wr(r,a,o,l){l==null?r.removeAttributeNS(a,o):r.setAttributeNS(a,o,l)}function mr(r,a,o){o?r.setAttribute(a,""):r.removeAttribute(a)}function b(r,a){a==null?r.removeAttribute("class"):r.className=a}function Le(r,a,o,l){if(l)Array.isArray(o)?(r[`$$${a}`]=o[0],r[`$$${a}Data`]=o[1]):r[`$$${a}`]=o;else if(Array.isArray(o)){const c=o[0];r.addEventListener(a,o[0]=d=>c.call(r,o[1],d))}else r.addEventListener(a,o,typeof o!="function"&&o)}function vr(r,a,o={}){const l=Object.keys(a||{}),c=Object.keys(o);let d,y;for(d=0,y=c.length;d<y;d++){const u=c[d];!u||u==="undefined"||a[u]||(be(r,u,!1),delete o[u])}for(d=0,y=l.length;d<y;d++){const u=l[d],p=!!a[u];!u||u==="undefined"||o[u]===p||!p||(be(r,u,!0),o[u]=p)}return o}function br(r,a,o){if(!a)return o?z(r,"style"):a;const l=r.style;if(typeof a=="string")return l.cssText=a;typeof o=="string"&&(l.cssText=o=void 0),o||(o={}),a||(a={});let c,d;for(d in o)a[d]==null&&l.removeProperty(d),delete o[d];for(d in a)c=a[d],c!==o[d]&&(l.setProperty(d,c),o[d]=c);return o}function je(r,a={},o,l){const c={};return v(()=>c.children=G(r,a.children,c.children)),v(()=>typeof a.ref=="function"&&kr(a.ref,r)),v(()=>$r(r,a,o,!0,c,!0)),c}function kr(r,a,o){return P(()=>r(a,o))}function i(r,a,o,l){if(o!==void 0&&!l&&(l=[]),typeof a!="function")return G(r,a,l,o);v(c=>G(r,a(),c,o),l)}function $r(r,a,o,l,c={},d=!1){a||(a={});for(const y in c)if(!(y in a)){if(y==="children")continue;c[y]=ke(r,y,null,c[y],o,d,a)}for(const y in a){if(y==="children")continue;const u=a[y];c[y]=ke(r,y,u,c[y],o,d,a)}}function zr(r){return r.toLowerCase().replace(/-([a-z])/g,(a,o)=>o.toUpperCase())}function be(r,a,o){const l=a.trim().split(/\s+/);for(let c=0,d=l.length;c<d;c++)r.classList.toggle(l[c],o)}function ke(r,a,o,l,c,d,y){let u,p,h,m,k;if(a==="style")return br(r,o,l);if(a==="classList")return vr(r,o,l);if(o===l)return l;if(a==="ref")d||o(r);else if(a.slice(0,3)==="on:"){const $=a.slice(3);l&&r.removeEventListener($,l,typeof l!="function"&&l),o&&r.addEventListener($,o,typeof o!="function"&&o)}else if(a.slice(0,10)==="oncapture:"){const $=a.slice(10);l&&r.removeEventListener($,l,!0),o&&r.addEventListener($,o,!0)}else if(a.slice(0,2)==="on"){const $=a.slice(2).toLowerCase(),I=yr.has($);if(!I&&l){const D=Array.isArray(l)?l[0]:l;r.removeEventListener($,D)}(I||o)&&(Le(r,$,o,I),I&&ie([$]))}else if(a.slice(0,5)==="attr:")z(r,a.slice(5),o);else if(a.slice(0,5)==="bool:")mr(r,a.slice(5),o);else if((k=a.slice(0,5)==="prop:")||(h=nr.has(a))||!c&&((m=ur(a,r.tagName))||(p=ir.has(a)))||(u=r.nodeName.includes("-")||"is"in y))k&&(a=a.slice(5),p=!0),a==="class"||a==="className"?b(r,o):u&&!p&&!h?r[zr(a)]=o:r[m||a]=o;else{const $=c&&a.indexOf(":")>-1&&pr[a.split(":")[0]];$?wr(r,$,a,o):z(r,cr[a]||a,o)}return o}function xr(r){let a=r.target;const o=`$$${r.type}`,l=r.target,c=r.currentTarget,d=p=>Object.defineProperty(r,"target",{configurable:!0,value:p}),y=()=>{const p=a[o];if(p&&!a.disabled){const h=a[`${o}Data`];if(h!==void 0?p.call(a,h,r):p.call(a,r),r.cancelBubble)return}return a.host&&typeof a.host!="string"&&!a.host._$host&&a.contains(r.target)&&d(a.host),!0},u=()=>{for(;y()&&(a=a._$host||a.parentNode||a.host););};if(Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return a||document}}),r.composedPath){const p=r.composedPath();d(p[0]);for(let h=0;h<p.length-2&&(a=p[h],!!y());h++){if(a._$host){a=a._$host,u();break}if(a.parentNode===c)break}}else u();d(l)}function G(r,a,o,l,c){for(;typeof o=="function";)o=o();if(a===o)return o;const d=typeof a,y=l!==void 0;if(r=y&&o[0]&&o[0].parentNode||r,d==="string"||d==="number"){if(d==="number"&&(a=a.toString(),a===o))return o;if(y){let u=o[0];u&&u.nodeType===3?u.data!==a&&(u.data=a):u=document.createTextNode(a),o=j(r,o,l,u)}else o!==""&&typeof o=="string"?o=r.firstChild.data=a:o=r.textContent=a}else if(a==null||d==="boolean")o=j(r,o,l);else{if(d==="function")return v(()=>{let u=a();for(;typeof u=="function";)u=u();o=G(r,u,o,l)}),()=>o;if(Array.isArray(a)){const u=[],p=o&&Array.isArray(o);if(he(u,a,o,c))return v(()=>o=G(r,u,o,l,!0)),()=>o;if(u.length===0){if(o=j(r,o,l),y)return o}else p?o.length===0?$e(r,u,l):gr(r,o,u):(o&&j(r),$e(r,u));o=u}else if(a.nodeType){if(Array.isArray(o)){if(y)return o=j(r,o,l,a);j(r,o,null,a)}else o==null||o===""||!r.firstChild?r.appendChild(a):r.replaceChild(a,r.firstChild);o=a}}return o}function he(r,a,o,l){let c=!1;for(let d=0,y=a.length;d<y;d++){let u=a[d],p=o&&o[r.length],h;if(!(u==null||u===!0||u===!1))if((h=typeof u)=="object"&&u.nodeType)r.push(u);else if(Array.isArray(u))c=he(r,u,p)||c;else if(h==="function")if(l){for(;typeof u=="function";)u=u();c=he(r,Array.isArray(u)?u:[u],Array.isArray(p)?p:[p])||c}else r.push(u),c=!0;else{const m=String(u);p&&p.nodeType===3&&p.data===m?r.push(p):r.push(document.createTextNode(m))}}return c}function $e(r,a,o=null){for(let l=0,c=a.length;l<c;l++)r.insertBefore(a[l],o)}function j(r,a,o,l){if(o===void 0)return r.textContent="";const c=l||document.createTextNode("");if(a.length){let d=!1;for(let y=a.length-1;y>=0;y--){const u=a[y];if(c!==u){const p=u.parentNode===r;!d&&!y?p?r.replaceChild(c,u):r.insertBefore(c,o):p&&u.remove()}else d=!0}}else r.insertBefore(c,o);return[c]}const Cr="http://www.w3.org/2000/svg";function Hr(r,a=!1,o=void 0){return a?document.createElementNS(Cr,r):document.createElement(r,{is:o})}function Mr(r,a){const o=F(r);return F(()=>{const l=o();switch(typeof l){case"function":return P(()=>l(a));case"string":const c=fr.has(l),d=Hr(l,c,P(()=>a.is));return je(d,a,c),d}})}function Sr(r){const[,a]=Ne(r,["component"]);return Mr(()=>r.component,a)}let Ir={data:""},qr=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Ir,Tr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ar=/\/\*[^]*?\*\/|  +/g,ze=/\n+/g,L=(r,a)=>{let o="",l="",c="";for(let d in r){let y=r[d];d[0]=="@"?d[1]=="i"?o=d+" "+y+";":l+=d[1]=="f"?L(y,d):d+"{"+L(y,d[1]=="k"?"":a)+"}":typeof y=="object"?l+=L(y,a?a.replace(/([^,])+/g,u=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,u):u?u+" "+p:p)):d):y!=null&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=L.p?L.p(d,y):d+":"+y+";")}return o+(a&&c?a+"{"+c+"}":c)+l},T={},Re=r=>{if(typeof r=="object"){let a="";for(let o in r)a+=o+Re(r[o]);return a}return r},_r=(r,a,o,l,c)=>{let d=Re(r),y=T[d]||(T[d]=(p=>{let h=0,m=11;for(;h<p.length;)m=101*m+p.charCodeAt(h++)>>>0;return"go"+m})(d));if(!T[y]){let p=d!==r?r:(h=>{let m,k,$=[{}];for(;m=Tr.exec(h.replace(Ar,""));)m[4]?$.shift():m[3]?(k=m[3].replace(ze," ").trim(),$.unshift($[0][k]=$[0][k]||{})):$[0][m[1]]=m[2].replace(ze," ").trim();return $[0]})(r);T[y]=L(c?{["@keyframes "+y]:p}:p,o?"":"."+y)}let u=o&&T.g?T.g:null;return o&&(T.g=T[y]),((p,h,m,k)=>{k?h.data=h.data.replace(k,p):h.data.indexOf(p)===-1&&(h.data=m?p+h.data:h.data+p)})(T[y],a,l,u),y},Er=(r,a,o)=>r.reduce((l,c,d)=>{let y=a[d];if(y&&y.call){let u=y(o),p=u&&u.props&&u.props.className||/^go/.test(u)&&u;y=p?"."+p:u&&typeof u=="object"?u.props?"":L(u,""):u===!1?"":u}return l+c+(y??"")},"");function w(r){let a=this||{},o=r.call?r(a.p):r;return _r(o.unshift?o.raw?Er(o,[].slice.call(arguments,1),a.p):o.reduce((l,c)=>Object.assign(l,c&&c.call?c(a.p):c),{}):o,qr(a.target),a.g,a.o,a.k)}w.bind({g:1});w.bind({k:1});const Pr=Qe();function Or(r){let a=this||{};return(...o)=>{const l=c=>{const d=Je(Pr),y=de(c,{theme:d}),u=de(y,{get class(){const I=y.class,D="class"in y&&/^go[0-9]+/.test(I);let Ke=w.apply({target:a.target,o:D,p:y,g:a.g},o);return[I,Ke].filter(Boolean).join(" ")}}),[p,h]=Ne(u,["as","theme"]),m=h,k=p.as||r;let $;return typeof k=="function"?$=k(m):a.g==1?($=document.createElement(k),je($,m)):$=Sr(de({component:k},m)),$};return l.class=c=>P(()=>w.apply({target:a.target,p:c,g:a.g},o)),l}}const Nr=new Proxy(Or,{get(r,a){return r(a)}});function s(r){return`${r/16}rem`}const Fe={ref:{palette:{error0:()=>"#000000ff",error10:()=>"#410e0bff",error20:()=>"#601410ff",error30:()=>"#8c1d18ff",error40:()=>"#b3261eff",error50:()=>"#dc362eff",error60:()=>"#e46962ff",error70:()=>"#ec928eff",error80:()=>"#f2b8b5ff",error90:()=>"#f9dedcff",error95:()=>"#fceeeeff",error99:()=>"#fffbf9ff",error100:()=>"#ffffffff",tertiary0:()=>"#000000ff",tertiary10:()=>"#31111dff",tertiary20:()=>"#492532ff",tertiary30:()=>"#633b48ff",tertiary40:()=>"#7d5260ff",tertiary50:()=>"#986977ff",tertiary60:()=>"#b58392ff",tertiary70:()=>"#d29dacff",tertiary80:()=>"#efb8c8ff",tertiary90:()=>"#ffd8e4ff",tertiary95:()=>"#ffecf1ff",tertiary99:()=>"#fffbfaff",tertiary100:()=>"#ffffffff",secondary0:()=>"#000000ff",secondary10:()=>"#1d192bff",secondary20:()=>"#332d41ff",secondary30:()=>"#4a4458ff",secondary40:()=>"#625b71ff",secondary50:()=>"#7a7289ff",secondary60:()=>"#958da5ff",secondary70:()=>"#b0a7c0ff",secondary80:()=>"#ccc2dcff",secondary90:()=>"#e8def8ff",secondary95:()=>"#f6edffff",secondary99:()=>"#fffbfeff",secondary100:()=>"#ffffffff",primary0:()=>"#000000ff",primary10:()=>"#21005dff",primary20:()=>"#381e72ff",primary30:()=>"#4f378bff",primary40:()=>"#6750a4ff",primary50:()=>"#7f67beff",primary60:()=>"#9a82dbff",primary70:()=>"#b69df8ff",primary80:()=>"#d0bcffff",primary90:()=>"#eaddffff",primary95:()=>"#f6edffff",primary99:()=>"#fffbfeff",primary100:()=>"#ffffffff","neutral-variant0":()=>"#000000ff","neutral-variant10":()=>"#1d1a22ff","neutral-variant20":()=>"#322f37ff","neutral-variant30":()=>"#49454fff","neutral-variant40":()=>"#605d66ff","neutral-variant50":()=>"#79747eff","neutral-variant60":()=>"#938f99ff","neutral-variant70":()=>"#aea9b4ff","neutral-variant80":()=>"#cac4d0ff","neutral-variant90":()=>"#e7e0ecff","neutral-variant95":()=>"#f5eefaff","neutral-variant99":()=>"#fffbfeff","neutral-variant100":()=>"#ffffffff",neutral0:()=>"#000000ff",neutral10:()=>"#1c1b1fff",neutral12:()=>"#211F26ff",neutral20:()=>"#313033ff",neutral22:()=>"#36343Bff",neutral30:()=>"#484649ff",neutral40:()=>"#605d62ff",neutral50:()=>"#787579ff",neutral60:()=>"#939094ff",neutral70:()=>"#aeaaaeff",neutral80:()=>"#c9c5caff",neutral90:()=>"#e6e1e5ff",neutral94:()=>"#F3EDF7ff",neutral95:()=>"#f4eff4ff",neutral99:()=>"#fffbfeff",neutral100:()=>"#ffffffff",black:()=>"#000000ff",white:()=>"#ffffffff"},typeface:{plain:()=>"Roboto",brand:()=>"Roboto","weight-bold":()=>"700","weight-medium":()=>"500","weight-regular":()=>"400"}},sys:{color:{lightMode:{"surface-tint":()=>e.raw.sys.color.lightMode.primary(),"surface-tint-color":()=>e.raw.sys.color.lightMode.primary(),"on-error-container":()=>e.raw.ref.palette.error10(),"on-error":()=>e.raw.ref.palette.error100(),"error-container":()=>e.raw.ref.palette.error90(),"on-tertiary-container":()=>e.raw.ref.palette.tertiary10(),"on-tertiary":()=>e.raw.ref.palette.tertiary100(),"tertiary-container":()=>e.raw.ref.palette.tertiary90(),tertiary:()=>e.raw.ref.palette.tertiary40(),shadow:()=>e.raw.ref.palette.neutral0(),error:()=>e.raw.ref.palette.error40(),outline:()=>e.raw.ref.palette["neutral-variant50"](),"outline-variant":()=>e.raw.ref.palette["neutral-variant80"](),"on-background":()=>e.raw.ref.palette.neutral10(),background:()=>e.raw.ref.palette.neutral99(),"inverse-on-surface":()=>e.raw.ref.palette.neutral95(),"inverse-surface":()=>e.raw.ref.palette.neutral20(),"on-surface-variant":()=>e.raw.ref.palette["neutral-variant30"](),"on-surface":()=>e.raw.ref.palette.neutral10(),"surface-variant":()=>e.raw.ref.palette["neutral-variant90"](),surface:()=>e.raw.ref.palette.neutral99(),"surface-container":()=>e.raw.ref.palette.neutral94(),"surface-container-highest":()=>e.raw.ref.palette.neutral90(),"on-secondary-container":()=>e.raw.ref.palette.secondary10(),"on-secondary":()=>e.raw.ref.palette.secondary100(),"secondary-container":()=>e.raw.ref.palette.secondary90(),secondary:()=>e.raw.ref.palette.secondary40(),"inverse-primary":()=>e.raw.ref.palette.primary80(),"on-primary-container":()=>e.raw.ref.palette.primary10(),"on-primary":()=>e.raw.ref.palette.primary100(),"primary-container":()=>e.raw.ref.palette.primary90(),primary:()=>e.raw.ref.palette.primary40()},darkMode:{"surface-tint":()=>e.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>e.raw.sys.color.darkMode.primary(),"on-error-container":()=>e.raw.ref.palette.error80(),"on-error":()=>e.raw.ref.palette.error20(),"error-container":()=>e.raw.ref.palette.error30(),"on-tertiary-container":()=>e.raw.ref.palette.tertiary90(),"on-tertiary":()=>e.raw.ref.palette.tertiary20(),"tertiary-container":()=>e.raw.ref.palette.tertiary30(),tertiary:()=>e.raw.ref.palette.tertiary80(),shadow:()=>e.raw.ref.palette.neutral0(),error:()=>e.raw.ref.palette.error80(),outline:()=>e.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>e.raw.ref.palette["neutral-variant30"](),"on-background":()=>e.raw.ref.palette.neutral90(),background:()=>e.raw.ref.palette.neutral10(),"inverse-on-surface":()=>e.raw.ref.palette.neutral20(),"inverse-surface":()=>e.raw.ref.palette.neutral90(),"on-surface-variant":()=>e.raw.ref.palette["neutral-variant80"](),"on-surface":()=>e.raw.ref.palette.neutral90(),"surface-variant":()=>e.raw.ref.palette["neutral-variant30"](),surface:()=>e.raw.ref.palette.neutral10(),"surface-container":()=>e.raw.ref.palette.neutral12(),"surface-container-highest":()=>e.raw.ref.palette.neutral22(),"on-secondary-container":()=>e.raw.ref.palette.secondary90(),"on-secondary":()=>e.raw.ref.palette.secondary20(),"secondary-container":()=>e.raw.ref.palette.secondary30(),secondary:()=>e.raw.ref.palette.secondary80(),"inverse-primary":()=>e.raw.ref.palette.primary40(),"on-primary-container":()=>e.raw.ref.palette.primary90(),"on-primary":()=>e.raw.ref.palette.primary20(),"primary-container":()=>e.raw.ref.palette.primary30(),primary:()=>e.raw.ref.palette.primary80()}}}};let f={raw:{ref:Fe.ref,sys:{typescale:{"label-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(11),size:()=>s(11),weight:()=>f.raw.ref.typeface["weight-medium"](),font:()=>f.raw.ref.typeface.plain()},"label-medium":{"axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","text-transform":()=>"1","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(12),size:()=>s(12),weight:()=>f.raw.ref.typeface["weight-medium"](),font:()=>f.raw.ref.typeface.plain()},"label-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.10000000149011612),tracking:()=>s(.10000000149011612),"size-value":()=>s(14),size:()=>s(14),weight:()=>f.raw.ref.typeface["weight-medium"](),font:()=>f.raw.ref.typeface.plain()},"body-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(16),"line-height":()=>s(16),"tracking-value":()=>s(.4000000059604645),tracking:()=>s(.4000000059604645),"size-value":()=>s(12),size:()=>s(12),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.plain()},"body-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.25),tracking:()=>s(.25),"size-value":()=>s(14),size:()=>s(14),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.plain()},"body-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(24),"line-height":()=>s(24),"tracking-value":()=>s(.5),tracking:()=>s(.5),"size-value":()=>s(16),size:()=>s(16),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.plain()},"title-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(20),"line-height":()=>s(20),"tracking-value":()=>s(.10000000149011612),tracking:()=>s(.10000000149011612),"size-value":()=>s(14),size:()=>s(14),weight:()=>f.raw.ref.typeface["weight-medium"](),font:()=>f.raw.ref.typeface.plain()},"title-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(24),"line-height":()=>s(24),"tracking-value":()=>s(.15000000596046448),tracking:()=>s(.15000000596046448),"size-value":()=>s(16),size:()=>s(16),weight:()=>f.raw.ref.typeface["weight-medium"](),font:()=>f.raw.ref.typeface.plain()},"title-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(28),"line-height":()=>s(28),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(22),size:()=>s(22),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()},"headline-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(32),"line-height":()=>s(32),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(24),size:()=>s(24),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()},"headline-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(36),"line-height":()=>s(36),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(28),size:()=>s(28),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()},"headline-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(40),"line-height":()=>s(40),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(32),size:()=>s(32),font:()=>f.raw.ref.typeface.brand(),weight:()=>f.raw.ref.typeface["weight-regular"]()},"display-small":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(44),"line-height":()=>s(44),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(36),size:()=>s(36),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()},"display-medium":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(52),"line-height":()=>s(52),"tracking-value":()=>s(0),tracking:()=>s(0),"size-value":()=>s(45),size:()=>s(45),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()},"display-large":{"text-transform":()=>"unset","axis-value":()=>"unset","font-style":()=>"unset","text-decoration":()=>"unset","line-height-value":()=>s(64),"line-height":()=>s(64),"tracking-value":()=>s(-.25),tracking:()=>s(-.25),"size-value":()=>s(57),size:()=>s(57),weight:()=>f.raw.ref.typeface["weight-regular"](),font:()=>f.raw.ref.typeface.brand()}},elevation:{surface:{"tint-color":()=>f.raw.sys.color.darkMode.primary()},"level5-value":()=>1,level5:()=>1,"level4-value":()=>8,level4:()=>8,"level3-value":()=>6,level3:()=>6,"level2-value":()=>3,level2:()=>3,"level1-value":()=>1,level1:()=>1,"level0-value":()=>0,level0:()=>0},state:{dragged:{"state-layer-opacity":()=>.1599999964237213},pressed:{"state-layer-opacity":()=>.11999999731779099},focus:{"state-layer-opacity":()=>.11999999731779099},hover:{"state-layer-opacity":()=>.07999999821186066},"focus-indicator":{"outer-offset":()=>s(2),thickness:()=>s(3)}},shape:{corner:{"extra-large":{top:{size:()=>s(0),"top-left":()=>s(28),"top-right":()=>s(28)},size:()=>s(28)},large:{top:{size:()=>s(0),"top-left":()=>s(16),"top-right":()=>s(16)},end:{size:()=>s(0),"top-right":()=>s(16),"bottom-right":()=>s(16)},size:()=>s(16)},medium:()=>s(12),small:()=>s(8),"extra-small":{top:{size:()=>s(0),"top-left":()=>s(4),"top-right":()=>s(4)},size:()=>s(4)},none:()=>s(0),full:()=>s(60)}},motion:{easing:{emphasized:{normal:()=>"cubic-bezier(.3,0,0,1)",accelerate:()=>"cubic-bezier(.3,0,.8,.15)",decelerate:()=>"cubic-bezier(.05,.7,.1,1)"},standard:{normal:()=>"cubic-bezier(0.2, 0, 0, 1)",accelerate:()=>"cubic-bezier(.3,0,1,1)",decelerate:()=>"cubic-bezier(0,0,0,1)"},linear:()=>"linear"},"duration-1000":()=>"1000ms","duration-900":()=>"900ms","duration-800":()=>"800ms","duration-700":()=>"700ms","duration-600":()=>"600ms","duration-550":()=>"550ms","duration-500":()=>"500ms","duration-450":()=>"450ms","duration-400":()=>"400ms","duration-350":()=>"350ms","duration-300":()=>"300ms","duration-250":()=>"250ms","duration-200":()=>"200ms","duration-150":()=>"150ms","duration-100":()=>"100ms","duration-50":()=>"50ms","path-standard-path":()=>"1"},color:{darkMode:{"surface-tint":()=>f.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>f.raw.sys.color.darkMode.primary(),"on-error-container":()=>f.raw.ref.palette.error80(),"on-error":()=>f.raw.ref.palette.error20(),"error-container":()=>f.raw.ref.palette.error30(),"on-tertiary-container":()=>f.raw.ref.palette.tertiary90(),"on-tertiary":()=>f.raw.ref.palette.tertiary20(),"tertiary-container":()=>f.raw.ref.palette.tertiary30(),tertiary:()=>f.raw.ref.palette.tertiary80(),shadow:()=>f.raw.ref.palette.neutral0(),error:()=>f.raw.ref.palette.error80(),outline:()=>f.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>f.raw.ref.palette["neutral-variant30"](),"on-background":()=>f.raw.ref.palette.neutral90(),background:()=>f.raw.ref.palette.neutral10(),"inverse-on-surface":()=>f.raw.ref.palette.neutral20(),"inverse-surface":()=>f.raw.ref.palette.neutral90(),"on-surface-variant":()=>f.raw.ref.palette["neutral-variant80"](),"on-surface":()=>f.raw.ref.palette.neutral90(),"surface-variant":()=>f.raw.ref.palette["neutral-variant30"](),surface:()=>f.raw.ref.palette.neutral10(),"surface-container":()=>f.raw.ref.palette.neutral12(),"surface-container-highest":()=>f.raw.ref.palette.neutral22(),"on-secondary-container":()=>f.raw.ref.palette.secondary90(),"on-secondary":()=>f.raw.ref.palette.secondary20(),"secondary-container":()=>f.raw.ref.palette.secondary30(),secondary:()=>f.raw.ref.palette.secondary80(),"inverse-primary":()=>f.raw.ref.palette.primary40(),"on-primary-container":()=>f.raw.ref.palette.primary90(),"on-primary":()=>f.raw.ref.palette.primary20(),"primary-container":()=>f.raw.ref.palette.primary30(),primary:()=>f.raw.ref.palette.primary80()},lightMode:{"surface-tint":()=>f.raw.sys.color.darkMode.primary(),"surface-tint-color":()=>f.raw.sys.color.darkMode.primary(),"on-error-container":()=>f.raw.ref.palette.error80(),"on-error":()=>f.raw.ref.palette.error20(),"error-container":()=>f.raw.ref.palette.error30(),"on-tertiary-container":()=>f.raw.ref.palette.tertiary90(),"on-tertiary":()=>f.raw.ref.palette.tertiary20(),"tertiary-container":()=>f.raw.ref.palette.tertiary30(),tertiary:()=>f.raw.ref.palette.tertiary80(),shadow:()=>f.raw.ref.palette.neutral0(),error:()=>f.raw.ref.palette.error80(),outline:()=>f.raw.ref.palette["neutral-variant60"](),"outline-variant":()=>f.raw.ref.palette["neutral-variant30"](),"on-background":()=>f.raw.ref.palette.neutral90(),background:()=>f.raw.ref.palette.neutral10(),"inverse-on-surface":()=>f.raw.ref.palette.neutral20(),"inverse-surface":()=>f.raw.ref.palette.neutral90(),"on-surface-variant":()=>f.raw.ref.palette["neutral-variant80"](),"on-surface":()=>f.raw.ref.palette.neutral90(),"surface-variant":()=>f.raw.ref.palette["neutral-variant30"](),surface:()=>f.raw.ref.palette.neutral10(),"surface-container":()=>f.raw.ref.palette.neutral12(),"surface-container-highest":()=>f.raw.ref.palette.neutral22(),"on-secondary-container":()=>f.raw.ref.palette.secondary90(),"on-secondary":()=>f.raw.ref.palette.secondary20(),"secondary-container":()=>f.raw.ref.palette.secondary30(),secondary:()=>f.raw.ref.palette.secondary80(),"inverse-primary":()=>f.raw.ref.palette.primary40(),"on-primary-container":()=>f.raw.ref.palette.primary90(),"on-primary":()=>f.raw.ref.palette.primary20(),"primary-container":()=>f.raw.ref.palette.primary30(),primary:()=>f.raw.ref.palette.primary80()}}}},ref:{palette:{error0:"var(--uk-ref-palette-error00)",error10:"var(--uk-ref-palette-error10)",error20:"var(--uk-ref-palette-error20)",error30:"var(--uk-ref-palette-error30)",error40:"var(--uk-ref-palette-error40)",error50:"var(--uk-ref-palette-error50)",error60:"var(--uk-ref-palette-error60)",error70:"var(--uk-ref-palette-error70)",error80:"var(--uk-ref-palette-error80)",error90:"var(--uk-ref-palette-error90)",error95:"var(--uk-ref-palette-error95)",error99:"var(--uk-ref-palette-error99)",error100:"var(--uk-ref-palette-error100)",tertiary0:"var(--uk-ref-palette-tertiary0)",tertiary10:"var(--uk-ref-palette-tertiary10)",tertiary20:"var(--uk-ref-palette-tertiary20)",tertiary30:"var(--uk-ref-palette-tertiary30)",tertiary40:"var(--uk-ref-palette-tertiary40)",tertiary50:"var(--uk-ref-palette-tertiary50)",tertiary60:"var(--uk-ref-palette-tertiary60)",tertiary70:"var(--uk-ref-palette-tertiary70)",tertiary80:"var(--uk-ref-palette-tertiary80)",tertiary90:"var(--uk-ref-palette-tertiary90)",tertiary95:"var(--uk-ref-palette-tertiary95)",tertiary99:"var(--uk-ref-palette-tertiary99)",tertiary100:"var(--uk-ref-palette-tertiary100)",secondary0:"var(--uk-ref-palette-secondary0)",secondary10:"var(--uk-ref-palette-secondary10)",secondary20:"var(--uk-ref-palette-secondary20)",secondary30:"var(--uk-ref-palette-secondary30)",secondary40:"var(--uk-ref-palette-secondary40)",secondary50:"var(--uk-ref-palette-secondary50)",secondary60:"var(--uk-ref-palette-secondary60)",secondary70:"var(--uk-ref-palette-secondary70)",secondary80:"var(--uk-ref-palette-secondary80)",secondary90:"var(--uk-ref-palette-secondary90)",secondary95:"var(--uk-ref-palette-secondary95)",secondary99:"var(--uk-ref-palette-secondary99)",secondary100:"var(--uk-ref-palette-secondary100)",primary0:"var(--uk-ref-palette-primary0)",primary10:"var(--uk-ref-palette-primary10)",primary20:"var(--uk-ref-palette-primary20)",primary30:"var(--uk-ref-palette-primary30)",primary40:"var(--uk-ref-palette-primary40)",primary50:"var(--uk-ref-palette-primary50)",primary60:"var(--uk-ref-palette-primary60)",primary70:"var(--uk-ref-palette-primary70)",primary80:"var(--uk-ref-palette-primary80)",primary90:"var(--uk-ref-palette-primary90)",primary95:"var(--uk-ref-palette-primary95)",primary99:"var(--uk-ref-palette-primary99)",primary100:"var(--uk-ref-palette-primary100)","neutral-variant0":"var(--uk-ref-palette-neutral-variant0)","neutral-variant10":"var(--uk-ref-palette-neutral-variant10)","neutral-variant20":"var(--uk-ref-palette-neutral-variant20)","neutral-variant30":"var(--uk-ref-palette-neutral-variant30)","neutral-variant40":"var(--uk-ref-palette-neutral-variant40)","neutral-variant50":"var(--uk-ref-palette-neutral-variant50)","neutral-variant60":"var(--uk-ref-palette-neutral-variant60)","neutral-variant70":"var(--uk-ref-palette-neutral-variant70)","neutral-variant80":"var(--uk-ref-palette-neutral-variant80)","neutral-variant90":"var(--uk-ref-palette-neutral-variant90)","neutral-variant95":"var(--uk-ref-palette-neutral-variant95)","neutral-variant99":"var(--uk-ref-palette-neutral-variant99)","neutral-variant100":"var(--uk-ref-palette-neutral-variant100)",neutral0:"var(--uk-ref-palette-neutral0)",neutral10:"var(--uk-ref-palette-neutral10)",neutral12:"var(--uk-ref-palette-neutral12)",neutral20:"var(--uk-ref-palette-neutral20)",neutral22:"var(--uk-ref-palette-neutral22)",neutral30:"var(--uk-ref-palette-neutral30)",neutral40:"var(--uk-ref-palette-neutral40)",neutral50:"var(--uk-ref-palette-neutral50)",neutral60:"var(--uk-ref-palette-neutral60)",neutral70:"var(--uk-ref-palette-neutral70)",neutral80:"var(--uk-ref-palette-neutral80)",neutral90:"var(--uk-ref-palette-neutral90)",neutral94:"var(--uk-ref-palette-neutral94)",neutral95:"var(--uk-ref-palette-neutral95)",neutral99:"var(--uk-ref-palette-neutral99)",neutral100:"var(--uk-ref-palette-neutral100)",black:"var(--uk-ref-palette-black)",white:"var(--uk-ref-palette-white)"},typeface:{plain:"var(--uk-ref-typeface-plain)",brand:"var(--uk-ref-typeface-brand)","weight-bold":"var(--uk-ref-typeface-weight-bold)","weight-medium":"var(--uk-ref-typeface-weight-medium)","weight-regular":"var(--uk-ref-typeface-weight-regular)"}},sys:{typescale:{"label-small":{"text-transform":"var(--uk-sys-typescale-label-small-text-transform)","axis-value":"var(--uk-sys-typescale-label-small-axis-value)","font-style":"var(--uk-sys-typescale-label-small-font-style)","text-decoration":"var(--uk-sys-typescale-label-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-small-line-height-value)","line-height":"var(--uk-sys-typescale-label-small-line-height)","tracking-value":"var(--uk-sys-typescale-label-small-tracking-value)",tracking:"var(--uk-sys-typescale-label-small-tracking)","size-value":"var(--uk-sys-typescale-label-small-size-value)",size:"var(--uk-sys-typescale-label-small-size)",weight:"var(--uk-sys-typescale-label-small-weight)",font:"var(--uk-sys-typescale-label-small-font)"},"label-medium":{"text-transform":"var(--uk-sys-typescale-label-medium-text-transform)","axis-value":"var(--uk-sys-typescale-label-medium-axis-value)","font-style":"var(--uk-sys-typescale-label-medium-font-style)","text-decoration":"var(--uk-sys-typescale-label-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-medium-line-height-value)","line-height":"var(--uk-sys-typescale-label-medium-line-height)","tracking-value":"var(--uk-sys-typescale-label-medium-tracking-value)",tracking:"var(--uk-sys-typescale-label-medium-tracking)","size-value":"var(--uk-sys-typescale-label-medium-size-value)",size:"var(--uk-sys-typescale-label-medium-size)",weight:"var(--uk-sys-typescale-label-medium-weight)",font:"var(--uk-sys-typescale-label-medium-font)"},"label-large":{"text-transform":"var(--uk-sys-typescale-label-large-text-transform)","axis-value":"var(--uk-sys-typescale-label-large-axis-value)","font-style":"var(--uk-sys-typescale-label-large-font-style)","text-decoration":"var(--uk-sys-typescale-label-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-label-large-line-height-value)","line-height":"var(--uk-sys-typescale-label-large-line-height)","tracking-value":"var(--uk-sys-typescale-label-large-tracking-value)",tracking:"var(--uk-sys-typescale-label-large-tracking)","size-value":"var(--uk-sys-typescale-label-large-size-value)",size:"var(--uk-sys-typescale-label-large-size)",weight:"var(--uk-sys-typescale-label-large-weight)",font:"var(--uk-sys-typescale-label-large-font)"},"body-small":{"text-transform":"var(--uk-sys-typescale-body-small-text-transform)","axis-value":"var(--uk-sys-typescale-body-small-axis-value)","font-style":"var(--uk-sys-typescale-body-small-font-style)","text-decoration":"var(--uk-sys-typescale-body-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-small-line-height-value)","line-height":"var(--uk-sys-typescale-body-small-line-height)","tracking-value":"var(--uk-sys-typescale-body-small-tracking-value)",tracking:"var(--uk-sys-typescale-body-small-tracking)","size-value":"var(--uk-sys-typescale-body-small-size-value)",size:"var(--uk-sys-typescale-body-small-size)",weight:"var(--uk-sys-typescale-body-small-weight)",font:"var(--uk-sys-typescale-body-small-font)"},"body-medium":{"text-transform":"var(--uk-sys-typescale-body-medium-text-transform)","axis-value":"var(--uk-sys-typescale-body-medium-axis-value)","font-style":"var(--uk-sys-typescale-body-medium-font-style)","text-decoration":"var(--uk-sys-typescale-body-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-medium-line-height-value)","line-height":"var(--uk-sys-typescale-body-medium-line-height)","tracking-value":"var(--uk-sys-typescale-body-medium-tracking-value)",tracking:"var(--uk-sys-typescale-body-medium-tracking)","size-value":"var(--uk-sys-typescale-body-medium-size-value)",size:"var(--uk-sys-typescale-body-medium-size)",weight:"var(--uk-sys-typescale-body-medium-weight)",font:"var(--uk-sys-typescale-body-medium-font)"},"body-large":{"text-transform":"var(--uk-sys-typescale-body-large-text-transform)","axis-value":"var(--uk-sys-typescale-body-large-axis-value)","font-style":"var(--uk-sys-typescale-body-large-font-style)","text-decoration":"var(--uk-sys-typescale-body-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-body-large-line-height-value)","line-height":"var(--uk-sys-typescale-body-large-line-height)","tracking-value":"var(--uk-sys-typescale-body-large-tracking-value)",tracking:"var(--uk-sys-typescale-body-large-tracking)","size-value":"var(--uk-sys-typescale-body-large-size-value)",size:"var(--uk-sys-typescale-body-large-size)",weight:"var(--uk-sys-typescale-body-large-weight)",font:"var(--uk-sys-typescale-body-large-font)"},"title-small":{"text-transform":"var(--uk-sys-typescale-title-small-text-transform)","axis-value":"var(--uk-sys-typescale-title-small-axis-value)","font-style":"var(--uk-sys-typescale-title-small-font-style)","text-decoration":"var(--uk-sys-typescale-title-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-small-line-height-value)","line-height":"var(--uk-sys-typescale-title-small-line-height)","tracking-value":"var(--uk-sys-typescale-title-small-tracking-value)",tracking:"var(--uk-sys-typescale-title-small-tracking)","size-value":"var(--uk-sys-typescale-title-small-size-value)",size:"var(--uk-sys-typescale-title-small-size)",weight:"var(--uk-sys-typescale-title-small-weight)",font:"var(--uk-sys-typescale-title-small-font)"},"title-medium":{"text-transform":"var(--uk-sys-typescale-title-medium-text-transform)","axis-value":"var(--uk-sys-typescale-title-medium-axis-value)","font-style":"var(--uk-sys-typescale-title-medium-font-style)","text-decoration":"var(--uk-sys-typescale-title-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-medium-line-height-value)","line-height":"var(--uk-sys-typescale-title-medium-line-height)","tracking-value":"var(--uk-sys-typescale-title-medium-tracking-value)",tracking:"var(--uk-sys-typescale-title-medium-tracking)","size-value":"var(--uk-sys-typescale-title-medium-size-value)",size:"var(--uk-sys-typescale-title-medium-size)",weight:"var(--uk-sys-typescale-title-medium-weight)",font:"var(--uk-sys-typescale-title-medium-font)"},"title-large":{"text-transform":"var(--uk-sys-typescale-title-large-text-transform)","axis-value":"var(--uk-sys-typescale-title-large-axis-value)","font-style":"var(--uk-sys-typescale-title-large-font-style)","text-decoration":"var(--uk-sys-typescale-title-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-title-large-line-height-value)","line-height":"var(--uk-sys-typescale-title-large-line-height)","tracking-value":"var(--uk-sys-typescale-title-large-tracking-value)",tracking:"var(--uk-sys-typescale-title-large-tracking)","size-value":"var(--uk-sys-typescale-title-large-size-value)",size:"var(--uk-sys-typescale-title-large-size)",weight:"var(--uk-sys-typescale-title-large-weight)",font:"var(--uk-sys-typescale-title-large-font)"},"headline-small":{"text-transform":"var(--uk-sys-typescale-headline-small-text-transform)","axis-value":"var(--uk-sys-typescale-headline-small-axis-value)","font-style":"var(--uk-sys-typescale-headline-small-font-style)","text-decoration":"var(--uk-sys-typescale-headline-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-small-line-height-value)","line-height":"var(--uk-sys-typescale-headline-small-line-height)","tracking-value":"var(--uk-sys-typescale-headline-small-tracking-value)",tracking:"var(--uk-sys-typescale-headline-small-tracking)","size-value":"var(--uk-sys-typescale-headline-small-size-value)",size:"var(--uk-sys-typescale-headline-small-size)",weight:"var(--uk-sys-typescale-headline-small-weight)",font:"var(--uk-sys-typescale-headline-small-font)"},"headline-medium":{"text-transform":"var(--uk-sys-typescale-headline-medium-text-transform)","axis-value":"var(--uk-sys-typescale-headline-medium-axis-value)","font-style":"var(--uk-sys-typescale-headline-medium-font-style)","text-decoration":"var(--uk-sys-typescale-headline-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-medium-line-height-value)","line-height":"var(--uk-sys-typescale-headline-medium-line-height)","tracking-value":"var(--uk-sys-typescale-headline-medium-tracking-value)",tracking:"var(--uk-sys-typescale-headline-medium-tracking)","size-value":"var(--uk-sys-typescale-headline-medium-size-value)",size:"var(--uk-sys-typescale-headline-medium-size)",weight:"var(--uk-sys-typescale-headline-medium-weight)",font:"var(--uk-sys-typescale-headline-medium-font)"},"headline-large":{"text-transform":"var(--uk-sys-typescale-headline-large-text-transform)","axis-value":"var(--uk-sys-typescale-headline-large-axis-value)","font-style":"var(--uk-sys-typescale-headline-large-font-style)","text-decoration":"var(--uk-sys-typescale-headline-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-headline-large-line-height-value)","line-height":"var(--uk-sys-typescale-headline-large-line-height)","tracking-value":"var(--uk-sys-typescale-headline-large-tracking-value)",tracking:"var(--uk-sys-typescale-headline-large-tracking)","size-value":"var(--uk-sys-typescale-headline-large-size-value)",size:"var(--uk-sys-typescale-headline-large-size)",weight:"var(--uk-sys-typescale-headline-large-weight)",font:"var(--uk-sys-typescale-headline-large-font)"},"display-small":{"text-transform":"var(--uk-sys-typescale-display-small-text-transform)","axis-value":"var(--uk-sys-typescale-display-small-axis-value)","font-style":"var(--uk-sys-typescale-display-small-font-style)","text-decoration":"var(--uk-sys-typescale-display-small-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-small-line-height-value)","line-height":"var(--uk-sys-typescale-display-small-line-height)","tracking-value":"var(--uk-sys-typescale-display-small-tracking-value)",tracking:"var(--uk-sys-typescale-display-small-tracking)","size-value":"var(--uk-sys-typescale-display-small-size-value)",size:"var(--uk-sys-typescale-display-small-size)",weight:"var(--uk-sys-typescale-display-small-weight)",font:"var(--uk-sys-typescale-display-small-font)"},"display-medium":{"text-transform":"var(--uk-sys-typescale-display-medium-text-transform)","axis-value":"var(--uk-sys-typescale-display-medium-axis-value)","font-style":"var(--uk-sys-typescale-display-medium-font-style)","text-decoration":"var(--uk-sys-typescale-display-medium-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-medium-line-height-value)","line-height":"var(--uk-sys-typescale-display-medium-line-height)","tracking-value":"var(--uk-sys-typescale-display-medium-tracking-value)",tracking:"var(--uk-sys-typescale-display-medium-tracking)","size-value":"var(--uk-sys-typescale-display-medium-size-value)",size:"var(--uk-sys-typescale-display-medium-size)",weight:"var(--uk-sys-typescale-display-medium-weight)",font:"var(--uk-sys-typescale-display-medium-font)"},"display-large":{"text-transform":"var(--uk-sys-typescale-display-large-text-transform)","axis-value":"var(--uk-sys-typescale-display-large-axis-value)","font-style":"var(--uk-sys-typescale-display-large-font-style)","text-decoration":"var(--uk-sys-typescale-display-large-text-decoration)","line-height-value":"var(--uk-sys-typescale-display-large-line-height-value)","line-height":"var(--uk-sys-typescale-display-large-line-height)","tracking-value":"var(--uk-sys-typescale-display-large-tracking-value)",tracking:"var(--uk-sys-typescale-display-large-tracking)","size-value":"var(--uk-sys-typescale-display-large-size-value)",size:"var(--uk-sys-typescale-display-large-size)",weight:"var(--uk-sys-typescale-display-large-weight)",font:"var(--uk-sys-typescale-display-large-font)"}},elevation:{surface:{"tint-color":"var(--uk-sys-elevation-surface-tint-color)"},"level5-value":"var(--uk-sys-elevation-level5-value)",level5:"var(--uk-sys-elevation-level5)","level4-value":"var(--uk-sys-elevation-level4-value)",level4:"var(--uk-sys-elevation-level4)","level3-value":"var(--uk-sys-elevation-level3-value)",level3:"var(--uk-sys-elevation-level3)","level2-value":"var(--uk-sys-elevation-level2-value)",level2:"var(--uk-sys-elevation-level2)","level1-value":"var(--uk-sys-elevation-level1-value)",level1:"var(--uk-sys-elevation-level1)","level0-value":"var(--uk-sys-elevation-level0-value)",level0:"var(--uk-sys-elevation-level0)"},state:{dragged:{"state-layer-opacity":"var(--uk-sys-state-dragged-state-layer-opacity)"},pressed:{"state-layer-opacity":"var(--uk-sys-state-pressed-state-layer-opacity)"},focus:{"state-layer-opacity":"var(--uk-sys-state-focus-state-layer-opacity)"},hover:{"state-layer-opacity":"var(--uk-sys-state-hover-state-layer-opacity)"},"focus-indicator":{"outer-offset":"var(--uk-sys-state-focus-indicator-outer-offset)",thickness:"var(--uk-sys-state-focus-indicator-thickness)"}},shape:{corner:{"extra-large":{top:{size:"var(--uk-sys-shape-corner-extra-large-default-size)","top-left":"var(--uk-sys-shape-corner-extra-large-top-left)","top-right":"var(--uk-sys-shape-corner-extra-large-top-right)"},size:"var(--uk-sys-shape-corner-extra-large-default-size)"},large:{top:{size:"var(--uk-sys-shape-corner-large-top-default-size)","top-left":"var(--uk-sys-shape-corner-large-top-top-left)","top-right":"var(--uk-sys-shape-corner-large-top-top-right)"},end:{size:"var(--uk-sys-shape-corner-large-end-default-size)","top-right":"var(--uk-sys-shape-corner-large-end-top-right)","bottom-right":"var(--uk-sys-shape-corner-large-end-bottom-right)"},size:"var(--uk-sys-shape-corner-large-end-default-size)"},medium:"var(--uk-sys-shape-corner-medium-default-size)",small:"var(--uk-sys-shape-corner-small-default-size)","extra-small":{top:{size:"var(--uk-sys-shape-corner-extra-small-top-default-size)","top-left":"var(--uk-sys-shape-corner-extra-small-top-top-left)","top-right":"var(--uk-sys-shape-corner-extra-small-top-top-right)"},size:"var(--uk-sys-shape-corner-extra-small-top-family)"},none:"var(--uk-sys-shape-corner-none-default-size)",full:"var(--uk-sys-shape-corner-full)"}},motion:{easing:{emphasized:{normal:"var(--uk-sys-motion-easing-emphasized-normal)",accelerate:"var(--uk-sys-motion-easing-emphasized-accelerate)",decelerate:"var(--uk-sys-motion-easing-emphasized-decelerate)"},standard:{normal:"var(--uk-sys-motion-easing-standard-normal)",accelerate:"var(--uk-sys-motion-easing-standard-accelerate)",decelerate:"var(--uk-sys-motion-easing-standard-decelerate)"},linear:"var(--uk-sys-motion-easing-linear)"},"duration-1000":"var(--uk-sys-motion-duration-1000)","duration-900":"var(--uk-sys-motion-duration-900)","duration-800":"var(--uk-sys-motion-duration-800)","duration-700":"var(--uk-sys-motion-duration-700)","duration-600":"var(--uk-sys-motion-duration-600)","duration-550":"var(--uk-sys-motion-duration-550)","duration-500":"var(--uk-sys-motion-duration-500)","duration-450":"var(--uk-sys-motion-duration-450)","duration-400":"var(--uk-sys-motion-duration-400)","duration-350":"var(--uk-sys-motion-duration-350)","duration-300":"var(--uk-sys-motion-duration-300)","duration-250":"var(--uk-sys-motion-duration-250)","duration-200":"var(--uk-sys-motion-duration-200)","duration-150":"var(--uk-sys-motion-duration-150)","duration-100":"var(--uk-sys-motion-duration-100)","duration-50":"var(--uk-sys-motion-duration-50)","path-standard-path":"var(--uk-sys-motion-path-standard-path)"},color:{"surface-tint":"var(--uk-sys-color-surface-tint)","surface-tint-color":"var(--uk-sys-color-surface-tint-color)","on-error-container":"var(--uk-sys-color-on-error-container)","on-error":"var(--uk-sys-color-on-error)","error-container":"var(--uk-sys-color-error-container)","on-tertiary-container":"var(--uk-sys-color-on-tertiary-container)","on-tertiary":"var(--uk-sys-color-on-tertiary)","tertiary-container":"var(--uk-sys-color-tertiary-container)",tertiary:"var(--uk-sys-color-tertiary)",shadow:"var(--uk-sys-color-shadow)",error:"var(--uk-sys-color-error)",outline:"var(--uk-sys-color-outline)","outline-variant":"var(--uk-sys-color-outline-variant)","on-background":"var(--uk-sys-color-on-background)",background:"var(--uk-sys-color-background)","inverse-on-surface":"var(--uk-sys-color-inverse-on-surface)","inverse-surface":"var(--uk-sys-color-inverse-surface)","on-surface-variant":"var(--uk-sys-color-on-surface-variant)","on-surface":"var(--uk-sys-color-on-surface)","surface-variant":"var(--uk-sys-color-surface-variant)",surface:"var(--uk-sys-color-surface)","surface-container":"var(--uk-sys-color-surface-container)","surface-container-highest":"var(--uk-sys-color-surface-container-highest)","on-secondary-container":"var(--uk-sys-color-on-secondary-container)","on-secondary":"var(--uk-sys-color-on-secondary)","secondary-container":"var(--uk-sys-color-secondary-container)",secondary:"var(--uk-sys-color-secondary)","inverse-primary":"var(--uk-sys-color-inverse-primary)","on-primary-container":"var(--uk-sys-color-on-primary-container)","on-primary":"var(--uk-sys-color-on-primary)","primary-container":"var(--uk-sys-color-primary-container)",primary:"var(--uk-sys-color-primary)"}}};function xe(r){let a=parseInt(r.slice(1,3),16),o=parseInt(r.slice(3,5),16),l=parseInt(r.slice(5,7),16);return`${a}, ${o}, ${l}`}function Lr(r,a,o){for(const c of Object.keys(r.sys.color.lightMode)){let d=r.sys.color.lightMode[c]();e.raw.sys.color.lightMode[c]=()=>xe(d)}for(const c of Object.keys(r.sys.color.darkMode)){let d=r.sys.color.darkMode[c]();e.raw.sys.color.darkMode[c]=()=>xe(d)}f.raw.ref.palette={...f.raw.ref.palette,...r.ref.palette},f.raw.ref.typeface={...f.raw.ref.typeface,...r.ref.typeface};function l(c,d){a.style.setProperty(c.slice(4,-1),d())}l(e.ref.palette.error0,e.raw.ref.palette.error0),l(e.ref.palette.error10,e.raw.ref.palette.error10),l(e.ref.palette.error20,e.raw.ref.palette.error20),l(e.ref.palette.error30,e.raw.ref.palette.error30),l(e.ref.palette.error40,e.raw.ref.palette.error40),l(e.ref.palette.error50,e.raw.ref.palette.error50),l(e.ref.palette.error60,e.raw.ref.palette.error60),l(e.ref.palette.error70,e.raw.ref.palette.error70),l(e.ref.palette.error80,e.raw.ref.palette.error80),l(e.ref.palette.error90,e.raw.ref.palette.error90),l(e.ref.palette.error95,e.raw.ref.palette.error95),l(e.ref.palette.error99,e.raw.ref.palette.error99),l(e.ref.palette.error100,e.raw.ref.palette.error100),l(e.ref.palette.tertiary0,e.raw.ref.palette.tertiary0),l(e.ref.palette.tertiary10,e.raw.ref.palette.tertiary10),l(e.ref.palette.tertiary20,e.raw.ref.palette.tertiary20),l(e.ref.palette.tertiary30,e.raw.ref.palette.tertiary30),l(e.ref.palette.tertiary40,e.raw.ref.palette.tertiary40),l(e.ref.palette.tertiary50,e.raw.ref.palette.tertiary50),l(e.ref.palette.tertiary60,e.raw.ref.palette.tertiary60),l(e.ref.palette.tertiary70,e.raw.ref.palette.tertiary70),l(e.ref.palette.tertiary80,e.raw.ref.palette.tertiary80),l(e.ref.palette.tertiary90,e.raw.ref.palette.tertiary90),l(e.ref.palette.tertiary95,e.raw.ref.palette.tertiary95),l(e.ref.palette.tertiary99,e.raw.ref.palette.tertiary99),l(e.ref.palette.tertiary100,e.raw.ref.palette.tertiary100),l(e.ref.palette.secondary0,e.raw.ref.palette.secondary0),l(e.ref.palette.secondary10,e.raw.ref.palette.secondary10),l(e.ref.palette.secondary20,e.raw.ref.palette.secondary20),l(e.ref.palette.secondary30,e.raw.ref.palette.secondary30),l(e.ref.palette.secondary40,e.raw.ref.palette.secondary40),l(e.ref.palette.secondary50,e.raw.ref.palette.secondary50),l(e.ref.palette.secondary60,e.raw.ref.palette.secondary60),l(e.ref.palette.secondary70,e.raw.ref.palette.secondary70),l(e.ref.palette.secondary80,e.raw.ref.palette.secondary80),l(e.ref.palette.secondary90,e.raw.ref.palette.secondary90),l(e.ref.palette.secondary95,e.raw.ref.palette.secondary95),l(e.ref.palette.secondary99,e.raw.ref.palette.secondary99),l(e.ref.palette.secondary100,e.raw.ref.palette.secondary100),l(e.ref.palette.primary0,e.raw.ref.palette.primary0),l(e.ref.palette.primary10,e.raw.ref.palette.primary10),l(e.ref.palette.primary20,e.raw.ref.palette.primary20),l(e.ref.palette.primary30,e.raw.ref.palette.primary30),l(e.ref.palette.primary40,e.raw.ref.palette.primary40),l(e.ref.palette.primary50,e.raw.ref.palette.primary50),l(e.ref.palette.primary60,e.raw.ref.palette.primary60),l(e.ref.palette.primary70,e.raw.ref.palette.primary70),l(e.ref.palette.primary80,e.raw.ref.palette.primary80),l(e.ref.palette.primary90,e.raw.ref.palette.primary90),l(e.ref.palette.primary95,e.raw.ref.palette.primary95),l(e.ref.palette.primary99,e.raw.ref.palette.primary99),l(e.ref.palette.primary100,e.raw.ref.palette.primary100),l(e.ref.palette["neutral-variant0"],e.raw.ref.palette["neutral-variant0"]),l(e.ref.palette["neutral-variant10"],e.raw.ref.palette["neutral-variant10"]),l(e.ref.palette["neutral-variant20"],e.raw.ref.palette["neutral-variant20"]),l(e.ref.palette["neutral-variant30"],e.raw.ref.palette["neutral-variant30"]),l(e.ref.palette["neutral-variant40"],e.raw.ref.palette["neutral-variant40"]),l(e.ref.palette["neutral-variant50"],e.raw.ref.palette["neutral-variant50"]),l(e.ref.palette["neutral-variant60"],e.raw.ref.palette["neutral-variant60"]),l(e.ref.palette["neutral-variant70"],e.raw.ref.palette["neutral-variant70"]),l(e.ref.palette["neutral-variant80"],e.raw.ref.palette["neutral-variant80"]),l(e.ref.palette["neutral-variant90"],e.raw.ref.palette["neutral-variant90"]),l(e.ref.palette["neutral-variant95"],e.raw.ref.palette["neutral-variant95"]),l(e.ref.palette["neutral-variant99"],e.raw.ref.palette["neutral-variant99"]),l(e.ref.palette["neutral-variant100"],e.raw.ref.palette["neutral-variant100"]),l(e.ref.palette.neutral0,e.raw.ref.palette.neutral0),l(e.ref.palette.neutral10,e.raw.ref.palette.neutral10),l(e.ref.palette.neutral12,e.raw.ref.palette.neutral12),l(e.ref.palette.neutral20,e.raw.ref.palette.neutral20),l(e.ref.palette.neutral22,e.raw.ref.palette.neutral22),l(e.ref.palette.neutral30,e.raw.ref.palette.neutral30),l(e.ref.palette.neutral40,e.raw.ref.palette.neutral40),l(e.ref.palette.neutral50,e.raw.ref.palette.neutral50),l(e.ref.palette.neutral60,e.raw.ref.palette.neutral60),l(e.ref.palette.neutral70,e.raw.ref.palette.neutral70),l(e.ref.palette.neutral80,e.raw.ref.palette.neutral80),l(e.ref.palette.neutral90,e.raw.ref.palette.neutral90),l(e.ref.palette.neutral94,e.raw.ref.palette.neutral94),l(e.ref.palette.neutral95,e.raw.ref.palette.neutral95),l(e.ref.palette.neutral99,e.raw.ref.palette.neutral99),l(e.ref.palette.neutral100,e.raw.ref.palette.neutral100),l(e.ref.palette.black,e.raw.ref.palette.black),l(e.ref.palette.white,e.raw.ref.palette.white),l(e.ref.typeface.plain,e.raw.ref.typeface.plain),l(e.ref.typeface.brand,e.raw.ref.typeface.brand),l(e.ref.typeface["weight-bold"],e.raw.ref.typeface["weight-bold"]),l(e.ref.typeface["weight-medium"],e.raw.ref.typeface["weight-medium"]),l(e.ref.typeface["weight-regular"],e.raw.ref.typeface["weight-regular"]),l(e.sys.typescale["label-small"]["text-transform"],e.raw.sys.typescale["label-small"]["text-transform"]),l(e.sys.typescale["label-small"]["axis-value"],e.raw.sys.typescale["label-small"]["axis-value"]),l(e.sys.typescale["label-small"]["font-style"],e.raw.sys.typescale["label-small"]["font-style"]),l(e.sys.typescale["label-small"]["text-decoration"],e.raw.sys.typescale["label-small"]["text-decoration"]),l(e.sys.typescale["label-small"]["line-height-value"],e.raw.sys.typescale["label-small"]["line-height-value"]),l(e.sys.typescale["label-small"]["line-height"],e.raw.sys.typescale["label-small"]["line-height"]),l(e.sys.typescale["label-small"]["tracking-value"],e.raw.sys.typescale["label-small"]["tracking-value"]),l(e.sys.typescale["label-small"].tracking,e.raw.sys.typescale["label-small"].tracking),l(e.sys.typescale["label-small"]["size-value"],e.raw.sys.typescale["label-small"]["size-value"]),l(e.sys.typescale["label-small"].size,e.raw.sys.typescale["label-small"].size),l(e.sys.typescale["label-small"].weight,e.raw.sys.typescale["label-small"].weight),l(e.sys.typescale["label-small"].font,e.raw.sys.typescale["label-small"].font),l(e.sys.typescale["label-medium"]["text-transform"],e.raw.sys.typescale["label-medium"]["text-transform"]),l(e.sys.typescale["label-medium"]["axis-value"],e.raw.sys.typescale["label-medium"]["axis-value"]),l(e.sys.typescale["label-medium"]["font-style"],e.raw.sys.typescale["label-medium"]["font-style"]),l(e.sys.typescale["label-medium"]["text-decoration"],e.raw.sys.typescale["label-medium"]["text-decoration"]),l(e.sys.typescale["label-medium"]["line-height-value"],e.raw.sys.typescale["label-medium"]["line-height-value"]),l(e.sys.typescale["label-medium"]["line-height"],e.raw.sys.typescale["label-medium"]["line-height"]),l(e.sys.typescale["label-medium"]["tracking-value"],e.raw.sys.typescale["label-medium"]["tracking-value"]),l(e.sys.typescale["label-medium"].tracking,e.raw.sys.typescale["label-medium"].tracking),l(e.sys.typescale["label-medium"]["size-value"],e.raw.sys.typescale["label-medium"]["size-value"]),l(e.sys.typescale["label-medium"].size,e.raw.sys.typescale["label-medium"].size),l(e.sys.typescale["label-medium"].weight,e.raw.sys.typescale["label-medium"].weight),l(e.sys.typescale["label-medium"].font,e.raw.sys.typescale["label-medium"].font),l(e.sys.typescale["label-large"]["text-transform"],e.raw.sys.typescale["label-large"]["text-transform"]),l(e.sys.typescale["label-large"]["axis-value"],e.raw.sys.typescale["label-large"]["axis-value"]),l(e.sys.typescale["label-large"]["font-style"],e.raw.sys.typescale["label-large"]["font-style"]),l(e.sys.typescale["label-large"]["text-decoration"],e.raw.sys.typescale["label-large"]["text-decoration"]),l(e.sys.typescale["label-large"]["line-height-value"],e.raw.sys.typescale["label-large"]["line-height-value"]),l(e.sys.typescale["label-large"]["line-height"],e.raw.sys.typescale["label-large"]["line-height"]),l(e.sys.typescale["label-large"]["tracking-value"],e.raw.sys.typescale["label-large"]["tracking-value"]),l(e.sys.typescale["label-large"].tracking,e.raw.sys.typescale["label-large"].tracking),l(e.sys.typescale["label-large"]["size-value"],e.raw.sys.typescale["label-large"]["size-value"]),l(e.sys.typescale["label-large"].size,e.raw.sys.typescale["label-large"].size),l(e.sys.typescale["label-large"].weight,e.raw.sys.typescale["label-large"].weight),l(e.sys.typescale["label-large"].font,e.raw.sys.typescale["label-large"].font),l(e.sys.typescale["body-small"]["text-transform"],e.raw.sys.typescale["body-small"]["text-transform"]),l(e.sys.typescale["body-small"]["axis-value"],e.raw.sys.typescale["body-small"]["axis-value"]),l(e.sys.typescale["body-small"]["font-style"],e.raw.sys.typescale["body-small"]["font-style"]),l(e.sys.typescale["body-small"]["text-decoration"],e.raw.sys.typescale["body-small"]["text-decoration"]),l(e.sys.typescale["body-small"]["line-height-value"],e.raw.sys.typescale["body-small"]["line-height-value"]),l(e.sys.typescale["body-small"]["line-height"],e.raw.sys.typescale["body-small"]["line-height"]),l(e.sys.typescale["body-small"]["tracking-value"],e.raw.sys.typescale["body-small"]["tracking-value"]),l(e.sys.typescale["body-small"].tracking,e.raw.sys.typescale["body-small"].tracking),l(e.sys.typescale["body-small"]["size-value"],e.raw.sys.typescale["body-small"]["size-value"]),l(e.sys.typescale["body-small"].size,e.raw.sys.typescale["body-small"].size),l(e.sys.typescale["body-small"].weight,e.raw.sys.typescale["body-small"].weight),l(e.sys.typescale["body-small"].font,e.raw.sys.typescale["body-small"].font),l(e.sys.typescale["body-medium"]["text-transform"],e.raw.sys.typescale["body-medium"]["text-transform"]),l(e.sys.typescale["body-medium"]["axis-value"],e.raw.sys.typescale["body-medium"]["axis-value"]),l(e.sys.typescale["body-medium"]["font-style"],e.raw.sys.typescale["body-medium"]["font-style"]),l(e.sys.typescale["body-medium"]["text-decoration"],e.raw.sys.typescale["body-medium"]["text-decoration"]),l(e.sys.typescale["body-medium"]["line-height-value"],e.raw.sys.typescale["body-medium"]["line-height-value"]),l(e.sys.typescale["body-medium"]["line-height"],e.raw.sys.typescale["body-medium"]["line-height"]),l(e.sys.typescale["body-medium"]["tracking-value"],e.raw.sys.typescale["body-medium"]["tracking-value"]),l(e.sys.typescale["body-medium"].tracking,e.raw.sys.typescale["body-medium"].tracking),l(e.sys.typescale["body-medium"]["size-value"],e.raw.sys.typescale["body-medium"]["size-value"]),l(e.sys.typescale["body-medium"].size,e.raw.sys.typescale["body-medium"].size),l(e.sys.typescale["body-medium"].weight,e.raw.sys.typescale["body-medium"].weight),l(e.sys.typescale["body-medium"].font,e.raw.sys.typescale["body-medium"].font),l(e.sys.typescale["body-large"]["text-transform"],e.raw.sys.typescale["body-large"]["text-transform"]),l(e.sys.typescale["body-large"]["axis-value"],e.raw.sys.typescale["body-large"]["axis-value"]),l(e.sys.typescale["body-large"]["font-style"],e.raw.sys.typescale["body-large"]["font-style"]),l(e.sys.typescale["body-large"]["text-decoration"],e.raw.sys.typescale["body-large"]["text-decoration"]),l(e.sys.typescale["body-large"]["line-height-value"],e.raw.sys.typescale["body-large"]["line-height-value"]),l(e.sys.typescale["body-large"]["line-height"],e.raw.sys.typescale["body-large"]["line-height"]),l(e.sys.typescale["body-large"]["tracking-value"],e.raw.sys.typescale["body-large"]["tracking-value"]),l(e.sys.typescale["body-large"].tracking,e.raw.sys.typescale["body-large"].tracking),l(e.sys.typescale["body-large"]["size-value"],e.raw.sys.typescale["body-large"]["size-value"]),l(e.sys.typescale["body-large"].size,e.raw.sys.typescale["body-large"].size),l(e.sys.typescale["body-large"].weight,e.raw.sys.typescale["body-large"].weight),l(e.sys.typescale["body-large"].font,e.raw.sys.typescale["body-large"].font),l(e.sys.typescale["title-small"]["text-transform"],e.raw.sys.typescale["title-small"]["text-transform"]),l(e.sys.typescale["title-small"]["axis-value"],e.raw.sys.typescale["title-small"]["axis-value"]),l(e.sys.typescale["title-small"]["font-style"],e.raw.sys.typescale["title-small"]["font-style"]),l(e.sys.typescale["title-small"]["text-decoration"],e.raw.sys.typescale["title-small"]["text-decoration"]),l(e.sys.typescale["title-small"]["line-height-value"],e.raw.sys.typescale["title-small"]["line-height-value"]),l(e.sys.typescale["title-small"]["line-height"],e.raw.sys.typescale["title-small"]["line-height"]),l(e.sys.typescale["title-small"]["tracking-value"],e.raw.sys.typescale["title-small"]["tracking-value"]),l(e.sys.typescale["title-small"].tracking,e.raw.sys.typescale["title-small"].tracking),l(e.sys.typescale["title-small"]["size-value"],e.raw.sys.typescale["title-small"]["size-value"]),l(e.sys.typescale["title-small"].size,e.raw.sys.typescale["title-small"].size),l(e.sys.typescale["title-small"].weight,e.raw.sys.typescale["title-small"].weight),l(e.sys.typescale["title-small"].font,e.raw.sys.typescale["title-small"].font),l(e.sys.typescale["title-medium"]["text-transform"],e.raw.sys.typescale["title-medium"]["text-transform"]),l(e.sys.typescale["title-medium"]["axis-value"],e.raw.sys.typescale["title-medium"]["axis-value"]),l(e.sys.typescale["title-medium"]["font-style"],e.raw.sys.typescale["title-medium"]["font-style"]),l(e.sys.typescale["title-medium"]["text-decoration"],e.raw.sys.typescale["title-medium"]["text-decoration"]),l(e.sys.typescale["title-medium"]["line-height-value"],e.raw.sys.typescale["title-medium"]["line-height-value"]),l(e.sys.typescale["title-medium"]["line-height"],e.raw.sys.typescale["title-medium"]["line-height"]),l(e.sys.typescale["title-medium"]["tracking-value"],e.raw.sys.typescale["title-medium"]["tracking-value"]),l(e.sys.typescale["title-medium"].tracking,e.raw.sys.typescale["title-medium"].tracking),l(e.sys.typescale["title-medium"]["size-value"],e.raw.sys.typescale["title-medium"]["size-value"]),l(e.sys.typescale["title-medium"].size,e.raw.sys.typescale["title-medium"].size),l(e.sys.typescale["title-medium"].weight,e.raw.sys.typescale["title-medium"].weight),l(e.sys.typescale["title-medium"].font,e.raw.sys.typescale["title-medium"].font),l(e.sys.typescale["title-large"]["text-transform"],e.raw.sys.typescale["title-large"]["text-transform"]),l(e.sys.typescale["title-large"]["axis-value"],e.raw.sys.typescale["title-large"]["axis-value"]),l(e.sys.typescale["title-large"]["font-style"],e.raw.sys.typescale["title-large"]["font-style"]),l(e.sys.typescale["title-large"]["text-decoration"],e.raw.sys.typescale["title-large"]["text-decoration"]),l(e.sys.typescale["title-large"]["line-height-value"],e.raw.sys.typescale["title-large"]["line-height-value"]),l(e.sys.typescale["title-large"]["line-height"],e.raw.sys.typescale["title-large"]["line-height"]),l(e.sys.typescale["title-large"]["tracking-value"],e.raw.sys.typescale["title-large"]["tracking-value"]),l(e.sys.typescale["title-large"].tracking,e.raw.sys.typescale["title-large"].tracking),l(e.sys.typescale["title-large"]["size-value"],e.raw.sys.typescale["title-large"]["size-value"]),l(e.sys.typescale["title-large"].size,e.raw.sys.typescale["title-large"].size),l(e.sys.typescale["title-large"].weight,e.raw.sys.typescale["title-large"].weight),l(e.sys.typescale["title-large"].font,e.raw.sys.typescale["title-large"].font),l(e.sys.typescale["headline-small"]["text-transform"],e.raw.sys.typescale["headline-small"]["text-transform"]),l(e.sys.typescale["headline-small"]["axis-value"],e.raw.sys.typescale["headline-small"]["axis-value"]),l(e.sys.typescale["headline-small"]["font-style"],e.raw.sys.typescale["headline-small"]["font-style"]),l(e.sys.typescale["headline-small"]["text-decoration"],e.raw.sys.typescale["headline-small"]["text-decoration"]),l(e.sys.typescale["headline-small"]["line-height-value"],e.raw.sys.typescale["headline-small"]["line-height-value"]),l(e.sys.typescale["headline-small"]["line-height"],e.raw.sys.typescale["headline-small"]["line-height"]),l(e.sys.typescale["headline-small"]["tracking-value"],e.raw.sys.typescale["headline-small"]["tracking-value"]),l(e.sys.typescale["headline-small"].tracking,e.raw.sys.typescale["headline-small"].tracking),l(e.sys.typescale["headline-small"]["size-value"],e.raw.sys.typescale["headline-small"]["size-value"]),l(e.sys.typescale["headline-small"].size,e.raw.sys.typescale["headline-small"].size),l(e.sys.typescale["headline-small"].weight,e.raw.sys.typescale["headline-small"].weight),l(e.sys.typescale["headline-small"].font,e.raw.sys.typescale["headline-small"].font),l(e.sys.typescale["headline-medium"]["text-transform"],e.raw.sys.typescale["headline-medium"]["text-transform"]),l(e.sys.typescale["headline-medium"]["axis-value"],e.raw.sys.typescale["headline-medium"]["axis-value"]),l(e.sys.typescale["headline-medium"]["font-style"],e.raw.sys.typescale["headline-medium"]["font-style"]),l(e.sys.typescale["headline-medium"]["text-decoration"],e.raw.sys.typescale["headline-medium"]["text-decoration"]),l(e.sys.typescale["headline-medium"]["line-height-value"],e.raw.sys.typescale["headline-medium"]["line-height-value"]),l(e.sys.typescale["headline-medium"]["line-height"],e.raw.sys.typescale["headline-medium"]["line-height"]),l(e.sys.typescale["headline-medium"]["tracking-value"],e.raw.sys.typescale["headline-medium"]["tracking-value"]),l(e.sys.typescale["headline-medium"].tracking,e.raw.sys.typescale["headline-medium"].tracking),l(e.sys.typescale["headline-medium"]["size-value"],e.raw.sys.typescale["headline-medium"]["size-value"]),l(e.sys.typescale["headline-medium"].size,e.raw.sys.typescale["headline-medium"].size),l(e.sys.typescale["headline-medium"].weight,e.raw.sys.typescale["headline-medium"].weight),l(e.sys.typescale["headline-medium"].font,e.raw.sys.typescale["headline-medium"].font),l(e.sys.typescale["headline-large"]["text-transform"],e.raw.sys.typescale["headline-large"]["text-transform"]),l(e.sys.typescale["headline-large"]["axis-value"],e.raw.sys.typescale["headline-large"]["axis-value"]),l(e.sys.typescale["headline-large"]["font-style"],e.raw.sys.typescale["headline-large"]["font-style"]),l(e.sys.typescale["headline-large"]["text-decoration"],e.raw.sys.typescale["headline-large"]["text-decoration"]),l(e.sys.typescale["headline-large"]["line-height-value"],e.raw.sys.typescale["headline-large"]["line-height-value"]),l(e.sys.typescale["headline-large"]["line-height"],e.raw.sys.typescale["headline-large"]["line-height"]),l(e.sys.typescale["headline-large"]["tracking-value"],e.raw.sys.typescale["headline-large"]["tracking-value"]),l(e.sys.typescale["headline-large"].tracking,e.raw.sys.typescale["headline-large"].tracking),l(e.sys.typescale["headline-large"]["size-value"],e.raw.sys.typescale["headline-large"]["size-value"]),l(e.sys.typescale["headline-large"].size,e.raw.sys.typescale["headline-large"].size),l(e.sys.typescale["headline-large"].weight,e.raw.sys.typescale["headline-large"].weight),l(e.sys.typescale["headline-large"].font,e.raw.sys.typescale["headline-large"].font),l(e.sys.typescale["display-small"]["text-transform"],e.raw.sys.typescale["display-small"]["text-transform"]),l(e.sys.typescale["display-small"]["axis-value"],e.raw.sys.typescale["display-small"]["axis-value"]),l(e.sys.typescale["display-small"]["font-style"],e.raw.sys.typescale["display-small"]["font-style"]),l(e.sys.typescale["display-small"]["text-decoration"],e.raw.sys.typescale["display-small"]["text-decoration"]),l(e.sys.typescale["display-small"]["line-height-value"],e.raw.sys.typescale["display-small"]["line-height-value"]),l(e.sys.typescale["display-small"]["line-height"],e.raw.sys.typescale["display-small"]["line-height"]),l(e.sys.typescale["display-small"]["tracking-value"],e.raw.sys.typescale["display-small"]["tracking-value"]),l(e.sys.typescale["display-small"].tracking,e.raw.sys.typescale["display-small"].tracking),l(e.sys.typescale["display-small"]["size-value"],e.raw.sys.typescale["display-small"]["size-value"]),l(e.sys.typescale["display-small"].size,e.raw.sys.typescale["display-small"].size),l(e.sys.typescale["display-small"].weight,e.raw.sys.typescale["display-small"].weight),l(e.sys.typescale["display-small"].font,e.raw.sys.typescale["display-small"].font),l(e.sys.typescale["display-medium"]["text-transform"],e.raw.sys.typescale["display-medium"]["text-transform"]),l(e.sys.typescale["display-medium"]["axis-value"],e.raw.sys.typescale["display-medium"]["axis-value"]),l(e.sys.typescale["display-medium"]["font-style"],e.raw.sys.typescale["display-medium"]["font-style"]),l(e.sys.typescale["display-medium"]["text-decoration"],e.raw.sys.typescale["display-medium"]["text-decoration"]),l(e.sys.typescale["display-medium"]["line-height-value"],e.raw.sys.typescale["display-medium"]["line-height-value"]),l(e.sys.typescale["display-medium"]["line-height"],e.raw.sys.typescale["display-medium"]["line-height"]),l(e.sys.typescale["display-medium"]["tracking-value"],e.raw.sys.typescale["display-medium"]["tracking-value"]),l(e.sys.typescale["display-medium"].tracking,e.raw.sys.typescale["display-medium"].tracking),l(e.sys.typescale["display-medium"]["size-value"],e.raw.sys.typescale["display-medium"]["size-value"]),l(e.sys.typescale["display-medium"].size,e.raw.sys.typescale["display-medium"].size),l(e.sys.typescale["display-medium"].weight,e.raw.sys.typescale["display-medium"].weight),l(e.sys.typescale["display-medium"].font,e.raw.sys.typescale["display-medium"].font),l(e.sys.typescale["display-large"]["text-transform"],e.raw.sys.typescale["display-large"]["text-transform"]),l(e.sys.typescale["display-large"]["axis-value"],e.raw.sys.typescale["display-large"]["axis-value"]),l(e.sys.typescale["display-large"]["font-style"],e.raw.sys.typescale["display-large"]["font-style"]),l(e.sys.typescale["display-large"]["text-decoration"],e.raw.sys.typescale["display-large"]["text-decoration"]),l(e.sys.typescale["display-large"]["line-height-value"],e.raw.sys.typescale["display-large"]["line-height-value"]),l(e.sys.typescale["display-large"]["line-height"],e.raw.sys.typescale["display-large"]["line-height"]),l(e.sys.typescale["display-large"]["tracking-value"],e.raw.sys.typescale["display-large"]["tracking-value"]),l(e.sys.typescale["display-large"].tracking,e.raw.sys.typescale["display-large"].tracking),l(e.sys.typescale["display-large"]["size-value"],e.raw.sys.typescale["display-large"]["size-value"]),l(e.sys.typescale["display-large"].size,e.raw.sys.typescale["display-large"].size),l(e.sys.typescale["display-large"].weight,e.raw.sys.typescale["display-large"].weight),l(e.sys.typescale["display-large"].font,e.raw.sys.typescale["display-large"].font),l(e.sys.elevation.surface["tint-color"],e.raw.sys.elevation.surface["tint-color"]),l(e.sys.state.dragged["state-layer-opacity"],()=>e.raw.sys.state.dragged["state-layer-opacity"]().toString()),l(e.sys.state.pressed["state-layer-opacity"],()=>e.raw.sys.state.pressed["state-layer-opacity"]().toString()),l(e.sys.state.focus["state-layer-opacity"],()=>e.raw.sys.state.focus["state-layer-opacity"]().toString()),l(e.sys.state.hover["state-layer-opacity"],()=>e.raw.sys.state.hover["state-layer-opacity"]().toString()),l(e.sys.state["focus-indicator"]["outer-offset"],e.raw.sys.state["focus-indicator"]["outer-offset"]),l(e.sys.state["focus-indicator"].thickness,e.raw.sys.state["focus-indicator"].thickness),l(e.sys.shape.corner["extra-large"].top.size,e.raw.sys.shape.corner["extra-large"].top.size),l(e.sys.shape.corner["extra-large"].top["top-left"],e.raw.sys.shape.corner["extra-large"].top["top-left"]),l(e.sys.shape.corner["extra-large"].top["top-right"],e.raw.sys.shape.corner["extra-large"].top["top-right"]),l(e.sys.shape.corner["extra-large"].size,e.raw.sys.shape.corner["extra-large"].size),l(e.sys.shape.corner.large.top.size,e.raw.sys.shape.corner.large.top.size),l(e.sys.shape.corner.large.top["top-left"],e.raw.sys.shape.corner.large.top["top-left"]),l(e.sys.shape.corner.large.top["top-right"],e.raw.sys.shape.corner.large.top["top-right"]),l(e.sys.shape.corner.large.end.size,e.raw.sys.shape.corner.large.end.size),l(e.sys.shape.corner.large.end["top-right"],e.raw.sys.shape.corner.large.end["top-right"]),l(e.sys.shape.corner.large.end["bottom-right"],e.raw.sys.shape.corner.large.end["bottom-right"]),l(e.sys.shape.corner.large.size,e.raw.sys.shape.corner.large.size),l(e.sys.shape.corner.medium,e.raw.sys.shape.corner.medium),l(e.sys.shape.corner.small,e.raw.sys.shape.corner.small),l(e.sys.shape.corner["extra-small"].top.size,e.raw.sys.shape.corner["extra-small"].top.size),l(e.sys.shape.corner["extra-small"].top["top-left"],e.raw.sys.shape.corner["extra-small"].top["top-left"]),l(e.sys.shape.corner["extra-small"].top["top-right"],e.raw.sys.shape.corner["extra-small"].top["top-right"]),l(e.sys.shape.corner["extra-small"].size,e.raw.sys.shape.corner["extra-small"].size),l(e.sys.shape.corner.none,e.raw.sys.shape.corner.none),l(e.sys.shape.corner.full,e.raw.sys.shape.corner.full),l(e.sys.motion.easing.emphasized.normal,e.raw.sys.motion.easing.emphasized.normal),l(e.sys.motion.easing.emphasized.accelerate,e.raw.sys.motion.easing.emphasized.accelerate),l(e.sys.motion.easing.emphasized.decelerate,e.raw.sys.motion.easing.emphasized.decelerate),l(e.sys.motion.easing.standard.normal,e.raw.sys.motion.easing.standard.normal),l(e.sys.motion.easing.standard.accelerate,e.raw.sys.motion.easing.standard.accelerate),l(e.sys.motion.easing.standard.decelerate,e.raw.sys.motion.easing.standard.decelerate),l(e.sys.motion.easing.linear,e.raw.sys.motion.easing.linear),l(e.sys.motion["duration-1000"],e.raw.sys.motion["duration-1000"]),l(e.sys.motion["duration-900"],e.raw.sys.motion["duration-900"]),l(e.sys.motion["duration-800"],e.raw.sys.motion["duration-800"]),l(e.sys.motion["duration-700"],e.raw.sys.motion["duration-700"]),l(e.sys.motion["duration-600"],e.raw.sys.motion["duration-600"]),l(e.sys.motion["duration-550"],e.raw.sys.motion["duration-550"]),l(e.sys.motion["duration-500"],e.raw.sys.motion["duration-500"]),l(e.sys.motion["duration-450"],e.raw.sys.motion["duration-450"]),l(e.sys.motion["duration-400"],e.raw.sys.motion["duration-400"]),l(e.sys.motion["duration-350"],e.raw.sys.motion["duration-350"]),l(e.sys.motion["duration-300"],e.raw.sys.motion["duration-300"]),l(e.sys.motion["duration-250"],e.raw.sys.motion["duration-250"]),l(e.sys.motion["duration-200"],e.raw.sys.motion["duration-200"]),l(e.sys.motion["duration-150"],e.raw.sys.motion["duration-150"]),l(e.sys.motion["duration-100"],e.raw.sys.motion["duration-100"]),l(e.sys.motion["duration-50"],e.raw.sys.motion["duration-50"]),l(e.sys.motion["path-standard-path"],e.raw.sys.motion["path-standard-path"]),o==="light"&&(l(e.sys.color["surface-tint"],e.raw.sys.color.lightMode["surface-tint"]),l(e.sys.color["surface-tint-color"],e.raw.sys.color.lightMode["surface-tint-color"]),l(e.sys.color["on-error-container"],e.raw.sys.color.lightMode["on-error-container"]),l(e.sys.color["on-error"],e.raw.sys.color.lightMode["on-error"]),l(e.sys.color["error-container"],e.raw.sys.color.lightMode["error-container"]),l(e.sys.color["on-tertiary-container"],e.raw.sys.color.lightMode["on-tertiary-container"]),l(e.sys.color["on-tertiary"],e.raw.sys.color.lightMode["on-tertiary"]),l(e.sys.color["tertiary-container"],e.raw.sys.color.lightMode["tertiary-container"]),l(e.sys.color.tertiary,e.raw.sys.color.lightMode.tertiary),l(e.sys.color.shadow,e.raw.sys.color.lightMode.shadow),l(e.sys.color.error,e.raw.sys.color.lightMode.error),l(e.sys.color.outline,e.raw.sys.color.lightMode.outline),l(e.sys.color["outline-variant"],e.raw.sys.color.lightMode["outline-variant"]),l(e.sys.color["on-background"],e.raw.sys.color.lightMode["on-background"]),l(e.sys.color.background,e.raw.sys.color.lightMode.background),l(e.sys.color["inverse-on-surface"],e.raw.sys.color.lightMode["inverse-on-surface"]),l(e.sys.color["inverse-surface"],e.raw.sys.color.lightMode["inverse-surface"]),l(e.sys.color["on-surface-variant"],e.raw.sys.color.lightMode["on-surface-variant"]),l(e.sys.color["on-surface"],e.raw.sys.color.lightMode["on-surface"]),l(e.sys.color["surface-variant"],e.raw.sys.color.lightMode["surface-variant"]),l(e.sys.color.surface,e.raw.sys.color.lightMode.surface),l(e.sys.color["surface-container"],e.raw.sys.color.lightMode["surface-container"]),l(e.sys.color["surface-container-highest"],e.raw.sys.color.lightMode["surface-container-highest"]),l(e.sys.color["on-secondary-container"],e.raw.sys.color.lightMode["on-secondary-container"]),l(e.sys.color["on-secondary"],e.raw.sys.color.lightMode["on-secondary"]),l(e.sys.color["secondary-container"],e.raw.sys.color.lightMode["secondary-container"]),l(e.sys.color.secondary,e.raw.sys.color.lightMode.secondary),l(e.sys.color["inverse-primary"],e.raw.sys.color.lightMode["inverse-primary"]),l(e.sys.color["on-primary-container"],e.raw.sys.color.lightMode["on-primary-container"]),l(e.sys.color["on-primary"],e.raw.sys.color.lightMode["on-primary"]),l(e.sys.color["primary-container"],e.raw.sys.color.lightMode["primary-container"]),l(e.sys.color.primary,e.raw.sys.color.lightMode.primary)),o==="dark"&&(l(e.sys.color["on-error"],e.raw.sys.color.darkMode["on-error"]),l(e.sys.color["error-container"],e.raw.sys.color.darkMode["error-container"]),l(e.sys.color["on-tertiary-container"],e.raw.sys.color.darkMode["on-tertiary-container"]),l(e.sys.color["on-tertiary"],e.raw.sys.color.darkMode["on-tertiary"]),l(e.sys.color["tertiary-container"],e.raw.sys.color.darkMode["tertiary-container"]),l(e.sys.color.tertiary,e.raw.sys.color.darkMode.tertiary),l(e.sys.color.shadow,e.raw.sys.color.darkMode.shadow),l(e.sys.color.error,e.raw.sys.color.darkMode.error),l(e.sys.color.outline,e.raw.sys.color.darkMode.outline),l(e.sys.color["outline-variant"],e.raw.sys.color.darkMode["outline-variant"]),l(e.sys.color["on-background"],e.raw.sys.color.darkMode["on-background"]),l(e.sys.color.background,e.raw.sys.color.darkMode.background),l(e.sys.color["inverse-on-surface"],e.raw.sys.color.darkMode["inverse-on-surface"]),l(e.sys.color["inverse-surface"],e.raw.sys.color.darkMode["inverse-surface"]),l(e.sys.color["on-surface-variant"],e.raw.sys.color.darkMode["on-surface-variant"]),l(e.sys.color["on-surface"],e.raw.sys.color.darkMode["on-surface"]),l(e.sys.color["surface-variant"],e.raw.sys.color.darkMode["surface-variant"]),l(e.sys.color.surface,e.raw.sys.color.darkMode.surface),l(e.sys.color["surface-container"],e.raw.sys.color.darkMode["surface-container"]),l(e.sys.color["surface-container-highest"],e.raw.sys.color.darkMode["surface-container-highest"]),l(e.sys.color["on-secondary-container"],e.raw.sys.color.darkMode["on-secondary-container"]),l(e.sys.color["on-secondary"],e.raw.sys.color.darkMode["on-secondary"]),l(e.sys.color["secondary-container"],e.raw.sys.color.darkMode["secondary-container"]),l(e.sys.color.secondary,e.raw.sys.color.darkMode.secondary),l(e.sys.color["inverse-primary"],e.raw.sys.color.darkMode["inverse-primary"]),l(e.sys.color["on-primary-container"],e.raw.sys.color.darkMode["on-primary-container"]),l(e.sys.color["on-primary"],e.raw.sys.color.darkMode["on-primary"]),l(e.sys.color["primary-container"],e.raw.sys.color.darkMode["primary-container"]),l(e.sys.color.primary,e.raw.sys.color.darkMode.primary))}const e=f;window.uk=e;const jr=qe;function Rr(r,a,o){return se(a(),o)}function Fr(r,a,o,l){return r.addEventListener(a,o,l),jr(r.removeEventListener.bind(r,a,o,l))}function Dr(r,a=Te()){let o=0,l,c;return()=>(o++,qe(()=>{o--,queueMicrotask(()=>{!o&&c&&(c(),c=l=void 0)})}),c||Ie(d=>l=r(c=d),a),l)}function Br(r){const a=Te(),o=Dr(r,a);return()=>o()}function De(r,a=!1){const o=window.matchMedia(r),[l,c]=Rr(a,()=>o.matches);return Fr(o,"change",()=>c(o.matches)),l}function Ur(r){return De("(prefers-color-scheme: dark)",r)}Ur.bind(void 0,!1);const Vr=Nr.div`
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
`,Kr=({children:r})=>{const a=De("(prefers-color-scheme: light)");let o;return Ye(()=>{Lr(Fe,o,a()?"light":"dark")}),t(Vr,{ref(l){var c=o;typeof c=="function"?c(l):o=l},children:r})};var E=(r=>(r[r.vertical=0]="vertical",r[r.horizontal=1]="horizontal",r))(E||{});function Be(r){var a,o,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(a=0;a<c;a++)r[a]&&(o=Be(r[a]))&&(l&&(l+=" "),l+=o)}else for(o in r)r[o]&&(l&&(l+=" "),l+=o);return l}function Q(){for(var r,a,o=0,l="",c=arguments.length;o<c;o++)(r=arguments[o])&&(a=Be(r))&&(l&&(l+=" "),l+=a);return l}var Gr=M("<div>");function Xr(r,a){let o=[];switch(o.push(w`
        background-color: rgb(${e.sys.color["outline-variant"]});
        --thickness: ${s(1)};
    `),r){case E.horizontal:switch(o.push(w`
                height: var(--thickness);
            `),a){case"full":o.push(w`
                        width: 100%;
                    `);break;case"inset":o.push(w`
                        width: calc(100% - ${s(16)});
                        margin-left: ${s(16)};
                    `);break;case"middle-inset":o.push(w`
                        width: calc(100% - ${s(32)});
                        margin-left: ${s(16)};
                        margin-right: ${s(16)};
                    `);break}break;case E.vertical:switch(o.push(w`
                width: var(--thickness);
            `),a){case"middle-inset":o.push(w`
                        height: calc(100% - ${s(32)});
                        margin-top: ${s(16)};
                        margin-bottom: ${s(16)};
                    `);break;case"full":o.push(w`
                        width: var(--thickness);
                        height: 100%;
                    `);break}break}return o}const Z=r=>(r.width==="inset"&&r.direction===E.vertical&&console.warn("A divider cannot be both vertical and inset"),(()=>{var a=Gr();return v(()=>b(a,Q(Xr(r.direction,r.width||"full")))),a})());var Wr=M("<div>");function Yr(){let r=[];return r.push(w`
        padding-left: ${s(16)};
        padding-right: ${s(16)};
    `),r}const Qr=r=>(()=>{var a=Wr();return i(a,()=>r.children),v(()=>b(a,Q(r.class,Yr()))),a})();function Jr(){let r=[];return r.push(w`
        background: rgb(${e.sys.color["surface-container-highest"]});
        color: rgb(${e.sys.color["on-surface"]});
        box-shadow: 0 0 ${s(1)} rgb(${e.sys.color.shadow});
        border-radius: ${e.sys.shape.corner.medium["default-size"]};
    `),r}const Ue=r=>t(Qr,{get class(){return Q(Jr())},get children(){return r.children}});var ue=M("<div>");const ye=({children:r,count:a})=>(()=>{var o=ue();return i(o,r,null),i(o,a===1?(()=>{var l=ue();return v(()=>b(l,w`
                        position: absolute;
                        left: calc(100% - ${s(3)});
                        top: -${s(3)};
                        background-color: rgb(${e.sys.color.error});
                        height: ${s(6)};
                        width: ${s(6)};
                        border-radius: ${e.sys.shape.corner.full};
                    `)),l})():a>1?(()=>{var l=ue();return i(l,()=>Math.min(a,999)===999?"999+":a),v(()=>b(l,w`
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
                    `)),l})():null,null),v(()=>b(o,w`
                position: relative;
                width: max-content;
                height: max-content;
            `)),o})();var Zr=M("<div>");const el=r=>(()=>{var a=Zr();return i(a,()=>r.children),a})();var rl=M("<span>");function ll(){return w`
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
    `}const X=r=>(()=>{var a=rl();return i(a,()=>r.children),v(()=>b(a,Q(ll(),r.class))),a})();var al=M("<div><div><div></div><p>"),tl=M("<img>"),ol=M("<div><span></span><img>"),sl=M("<span>");const il=w`
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
`,we=w`
    margin: 0;
    color: ${e.sys.color["on-surface-variant"]};
    font-family: ${e.sys.typescale["body-medium"].font};
    line-height: ${e.sys.typescale["body-medium"]["line-height"]};
    font-size: ${e.sys.typescale["body-medium"].size};
    font-kerning: ${e.sys.typescale["body-medium"].tracking};
    font-weight: ${e.sys.typescale["body-medium"].weight};
`,nl=w`
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
`,cl=w`
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
`,dl=w`
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

        .${we} {
            color: rgb(${e.sys.color["on-surface"]});
        }
    }

    &[data-disabled="true"] {
        cursor: not-allowed;

        .${U} {
            color: rgb(${e.sys.color["on-surface"]}, 0.38);
        }

        .${we} {
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
`,A=r=>(()=>{var a=al(),o=a.firstChild,l=o.firstChild,c=l.nextSibling;return Le(a,"click",r.onClick,!0),b(a,dl),i(a,(()=>{var d=N(()=>r.leading?.type==="icon");return()=>d()&&t(X,{class:V,get children(){return r.leading.value}})})(),o),i(a,(()=>{var d=N(()=>r.leading?.type==="image");return()=>d()&&(()=>{var y=tl();return b(y,nl),v(u=>{var p=r.leading.value,h=r.leading.alt||"";return p!==u.e&&z(y,"src",u.e=p),h!==u.t&&z(y,"alt",u.t=h),u},{e:void 0,t:void 0}),y})()})(),o),i(a,(()=>{var d=N(()=>r.leading?.type==="avatar");return()=>d()&&(()=>{var y=ol(),u=y.firstChild,p=u.nextSibling;return b(y,cl),i(u,()=>(r.leading.alt||"uk").slice(0,2)),v(h=>{var m=r.leading.value,k=r.leading.alt||"";return m!==h.e&&z(p,"src",h.e=m),k!==h.t&&z(p,"alt",h.t=k),h},{e:void 0,t:void 0}),y})()})(),o),b(o,il),b(l,U),i(l,()=>r.labelText),b(c,we),i(c,()=>r.supportingText),i(a,(()=>{var d=N(()=>r.trailing?.type==="icon");return()=>d()&&t(X,{class:R,get children(){return r.trailing.value}})})(),null),i(a,(()=>{var d=N(()=>r.trailing?.type==="text");return()=>d()&&(()=>{var y=sl();return b(y,Ve),i(y,()=>r.trailing.value),y})()})(),null),v(d=>{var y=r.disabled,u=r.lines||2,p=r.selected,h=r.canSelect,m=r.divider,k=r.disabled?void 0:0;return y!==d.e&&z(a,"data-disabled",d.e=y),u!==d.t&&z(a,"data-lines",d.t=u),p!==d.a&&z(a,"data-selected",d.a=p),h!==d.o&&z(a,"data-can-select",d.o=h),m!==d.i&&z(a,"data-divider",d.i=m),k!==d.n&&z(a,"tabindex",d.n=k),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),a})();ie(["click"]);var ul=M("<div>");const q=r=>(()=>{var a=ul();return i(a,()=>r.children),v(o=>{var l=r.size,c=r.connected,d=w`
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
            `;return l!==o.e&&z(a,"data-size",o.e=l),c!==o.t&&z(a,"data-connected",o.t=c),d!==o.a&&b(a,o.a=d),o},{e:void 0,t:void 0,a:void 0}),a})();var yl=M("<button>");const Ce=w`
    font-size: var(--icon-size);
`,g=r=>{const[a,o]=se(!1);return r.color==="standard"&&r.type==="toggle"&&alert("You cannot have a standard color button be toggleable"),(()=>{var l=yl();return l.$$click=c=>{r.type==="toggle"&&o(!a()),r.onClick(c)},i(l,(()=>{var c=N(()=>!!r.leadingIcon);return()=>c()&&t(X,{class:Ce,get children(){return r.leadingIcon}})})(),null),i(l,()=>r.children||"No Label Provided",null),i(l,(()=>{var c=N(()=>!!r.trailingIcon);return()=>c()&&t(X,{class:Ce,get children(){return r.trailingIcon}})})(),null),v(c=>{var d=r.disabled||!1,y=a(),u=r.type==="toggle"||!1,p=r.size||"s",h=a()?(r.shape||"round")==="round"?"square":"round":r.shape||"round",m=r.color||"filled",k=Q(r.class,w`
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

                    &:focus-visible {
                        outline-width: ${e.sys.state["focus-indicator"].thickness};
                        outline-offset: ${e.sys.state["focus-indicator"]["outer-offset"]};
                        outline-color: rgb(${e.sys.color.secondary});
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
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(32)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.small};
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
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(40)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.medium};
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
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(56)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.medium};
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
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(96)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.large.size};
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
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${s(132)};
                            --transition-all: ${e.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${e.sys.shape.corner.large.size};
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
                `);return d!==c.e&&(l.disabled=c.e=d),y!==c.t&&z(l,"data-selected",c.t=y),u!==c.a&&z(l,"data-toggleable",c.a=u),p!==c.o&&z(l,"data-size",c.o=p),h!==c.i&&z(l,"data-shape",c.i=h),m!==c.n&&z(l,"data-color",c.n=m),k!==c.s&&b(l,c.s=k),c},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),l})()};ie(["click"]);var fl=M("<button>");const n=r=>{const[a,o]=se(!1);return(()=>{var l=fl();return l.$$click=c=>{r.type==="toggle"&&o(!a()),r.onClick(c)},i(l,t(X,{get children(){return r.icon}})),v(c=>{var d=r.width||"default",y=r.shape||"round",u=r.size||"s",p=r.type||"normal",h=r.color||"filled",m=a(),k=r.disabled||!1,$=w`
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

                &:focus-visible {
                    outline-width: ${e.sys.state["focus-indicator"].thickness};
                    outline-offset: ${e.sys.state["focus-indicator"]["outer-offset"]};
                    outline-color: rgb(${e.sys.color.secondary});
                }

                &:focus,
                &:hover {
                    --border-radius-duration: ${e.sys.motion["duration-200"]};
                }

                &:active {
                    --border-radius-duration: ${e.sys.motion["duration-50"]};
                }

                &:disabled {
                    background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                    color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    cursor: not-allowed;
                }

                &[data-size="xs"] {
                    height: ${s(32)};
                    border-width: ${s(1)};
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
                    border-width: ${s(1)};
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
                    border-width: ${s(1)};
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
                    border-width: ${s(2)};
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

                &[data-size="xl"] {
                    height: ${s(136)};
                    border-width: ${s(3)};
                    --icon-size: ${s(40)};
                    --outline-width: ${s(3)};

                    &[data-width="narrow"] {
                        --padding-left: ${s(32)};
                        --padding-right: ${s(32)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${s(48)};
                        --padding-right: ${s(48)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${s(72)};
                        --padding-right: ${s(72)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${s(136)};

                        &[data-selected="true"] {
                            border-radius: ${e.sys.shape.corner["extra-large"].size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${e.sys.shape.corner["extra-large"].size};

                        &[data-selected="true"] {
                            border-radius: ${s(136)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${e.sys.shape.corner.large.size};
                    }
                }

                &[data-color="filled"] {
                    background-color: rgb(${e.sys.color.primary});
                    color: rgb(${e.sys.color["on-primary"]});

                    &[data-type="toggle"] {
                        background-color: rgb(${e.sys.color["surface-container"]});
                        color: rgb(${e.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${e.sys.color.primary});
                        color: rgb(${e.sys.color["on-primary"]});
                    }

                    &:focus-visible {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${e.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-primary"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-surface-variant"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-surface-variant"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                        color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="tonal"] {
                    background-color: rgb(${e.sys.color["secondary-container"]});
                    color: rgb(${e.sys.color["on-secondary-container"]});

                    &[data-type="toggle"] {
                        background-color: rgb(${e.sys.color["secondary-container"]});
                        color: rgb(${e.sys.color["on-secondary-container"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${e.sys.color.secondary});
                        color: rgb(${e.sys.color["on-secondary"]});
                    }

                    &:focus-visible {
                        color: rgb(${e.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-secondary-container"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-secondary-container"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.focus["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-secondary"]}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${e.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-secondary-container"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-secondary-container"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.hover["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-secondary"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${e.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(
                                ${e.sys.color["on-secondary-container"]},
                                ${e.sys.state.pressed["state-layer-opacity"]}
                            );
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-secondary"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                        color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="outlined"] {
                    background-color: transparent;
                    color: rgb(${e.sys.color["on-surface-variant"]});
                    border-style: solid;
                    border-color: rgb(${e.sys.color["outline-variant"]});

                    &[data-type="toggle"] {
                        color: rgb(${e.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${e.sys.color["inverse-surface"]});
                        color: rgb(${e.sys.color["inverse-on-surface"]});
                    }

                    &:focus-visible {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-secondary-container"]},
                                    ${e.sys.state.focus["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(${e.sys.color["inverse-on-surface"]}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(${e.sys.color["inverse-on-surface"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-surface-variant"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["inverse-on-surface"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${e.sys.color["on-surface"]}, 0.1);
                        color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="standard"] {
                    background-color: transparent;
                    color: rgb(${e.sys.color["on-surface-variant"]});

                    &[data-type="toggle"] {
                        color: rgb(${e.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        color: rgb(${e.sys.color.primary});
                    }

                    &:focus-visible {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color.primary});

                            &::before {
                                background-color: rgb(${e.sys.color.primary}, ${e.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color.primary});

                            &::before {
                                background-color: rgb(${e.sys.color.primary}, ${e.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${e.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${e.sys.color["on-surface-variant"]}, ${e.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${e.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${e.sys.color["on-surface-variant"]},
                                    ${e.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${e.sys.color.primary});

                            &::before {
                                background-color: rgb(${e.sys.color.primary}, ${e.sys.state.pressed["state-layer-opacity"]});
                            }
                        }
                    }

                    &:disabled {
                        color: rgb(${e.sys.color["on-surface"]}, 0.38);
                    }
                }
            `;return d!==c.e&&z(l,"data-width",c.e=d),y!==c.t&&z(l,"data-shape",c.t=y),u!==c.a&&z(l,"data-size",c.a=u),p!==c.o&&z(l,"data-type",c.o=p),h!==c.i&&z(l,"data-color",c.i=h),m!==c.n&&z(l,"data-selected",c.n=m),k!==c.s&&(l.disabled=c.s=k),$!==c.h&&b(l,c.h=$),c},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),l})()};ie(["click"]);var pl=M("<h1>Button Variant '<!>'"),gl=M("<h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),C=M("<div>"),hl=M("<h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),wl=M("<h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)"),ml=M("<h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)"),fe=M("<h3>Random Placeholder"),vl=M('<span>UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by <a href=https://github.com/ewsgit>Ewsgit');const B=({size:r})=>t(Ue,{get children(){return[(()=>{var a=pl(),o=a.firstChild,l=o.nextSibling;return l.nextSibling,i(a,r,l),a})(),gl(),(()=>{var a=C();return i(a,t(g,{color:"filled",size:r,type:"toggle",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"filled",size:r,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"filled",size:r,disabled:!0,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"filled",size:r,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"filled",size:r,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"filled",size:r,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),v(()=>b(a,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),a})(),hl(),(()=>{var a=C();return i(a,t(g,{color:"tonal",size:r,type:"toggle",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"tonal",size:r,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"tonal",size:r,disabled:!0,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"tonal",size:r,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"tonal",size:r,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"tonal",size:r,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),v(()=>b(a,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),a})(),wl(),(()=>{var a=C();return i(a,t(g,{color:"outlined",size:r,type:"toggle",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"outlined",size:r,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"outlined",size:r,disabled:!0,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"outlined",size:r,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"outlined",size:r,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"outlined",size:r,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),v(()=>b(a,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),a})(),ml(),(()=>{var a=C();return i(a,t(g,{color:"standard",size:r,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"standard",size:r,disabled:!0,onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"standard",size:r,leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"standard",size:r,trailingIcon:"face",onClick:()=>{},children:"Confirm"}),null),i(a,t(g,{color:"standard",size:r,leadingIcon:"borg",trailingIcon:"rotate_auto",onClick:()=>{},children:"Confirm"}),null),v(()=>b(a,w`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `)),a})()]}});function bl(){return t(Kr,{get children(){return[t(B,{size:"xs"}),t(Z,{get direction(){return E.horizontal}}),t(B,{size:"s"}),t(Z,{get direction(){return E.horizontal}}),t(B,{size:"m"}),t(Z,{get direction(){return E.horizontal}}),t(B,{size:"l"}),t(Z,{get direction(){return E.horizontal}}),t(B,{size:"xl"}),t(Ue,{get children(){return[t(ye,{count:12,get children(){var r=fe();return v(()=>b(r,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),r}}),t(ye,{count:1e3,get children(){var r=fe();return v(()=>b(r,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),r}}),t(ye,{count:1,get children(){var r=fe();return v(()=>b(r,w`
                            background: rgb(${e.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `)),r}})]}}),t(el,{get children(){return[t(A,{labelText:"Heading",supportingText:"Supporting text",onClick:()=>{}}),t(A,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{}}),t(A,{labelText:"Heading",supportingText:"Supporting text",trailing:{type:"text",value:"100+"},onClick:()=>{},canSelect:!0}),t(A,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"icon",value:"arrow_right"},onClick:()=>{},trailing:{type:"icon",value:"arrow_left"},selected:!0,canSelect:!0}),t(A,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{},trailing:{type:"icon",value:"arrow_left"}}),t(A,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"avatar",value:"https://google.com/favicon.ico"},onClick:()=>{}}),t(A,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0,canSelect:!0}),t(A,{divider:!0,labelText:"Heading",supportingText:"Supporting text",leading:{type:"large-image",value:"https://google.com/favicon.ico"},onClick:()=>{},selected:!0,canSelect:!0}),t(A,{labelText:"Heading",supportingText:"Supporting text",leading:{type:"video",value:"https://google.com/favicon.ico"},onClick:()=>{}})]}}),t(q,{size:"xs",get children(){return[t(g,{color:"filled",size:"xs",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{size:"s",get children(){return[t(g,{color:"filled",size:"s",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{size:"m",get children(){return[t(g,{color:"filled",size:"m",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{size:"l",get children(){return[t(g,{color:"filled",size:"l",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{size:"xl",get children(){return[t(g,{color:"filled",size:"xl",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{connected:!0,size:"xs",get children(){return[t(g,{color:"filled",size:"xs",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xs",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{connected:!0,size:"s",get children(){return[t(g,{color:"filled",size:"s",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"s",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{connected:!0,size:"m",get children(){return[t(g,{color:"filled",size:"m",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"m",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{connected:!0,size:"l",get children(){return[t(g,{color:"filled",size:"l",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"l",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),t(q,{connected:!0,size:"xl",get children(){return[t(g,{color:"filled",size:"xl",type:"toggle",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",disabled:!0,onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",leadingIcon:"verified",onClick:()=>{},children:"Confirm"}),t(g,{color:"filled",size:"xl",trailingIcon:"face",onClick:()=>{},children:"Confirm"})]}}),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"narrow",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"default",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"filled",width:"wide",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"narrow",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"default",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"tonal",width:"wide",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"narrow",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"default",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"outlined",width:"wide",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xs",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xs",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xs",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xs",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"s",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"s",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"s",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"s",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"m",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"m",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"m",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"m",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"l",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"l",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"l",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"l",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),(()=>{var r=C();return i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"narrow",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"default",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xl",icon:"person",type:"toggle",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xl",icon:"person",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xl",icon:"person",shape:"square",onClick:()=>0}),null),i(r,t(n,{alt:"Hello world",color:"standard",width:"wide",size:"xl",icon:"person",disabled:!0,onClick:()=>0}),null),v(()=>b(r,w`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `)),r})(),vl()]}})}hr(()=>t(bl,{}),document.getElementById("root"));
