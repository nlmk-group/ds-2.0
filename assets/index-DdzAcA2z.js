import{r as o,R as te}from"./index-Bnop-kX6.js";import"./index-D0sJu8id.js";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const M="popstate";function ne(e){e===void 0&&(e={});function t(a,r){let{pathname:l,search:i,hash:c}=a.location;return I("",{pathname:l,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:E(r)}return re(t,n,null,e)}function w(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ae(){return Math.random().toString(36).substr(2,8)}function k(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,n,a){return n===void 0&&(n=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||a||ae()})}function E(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function re(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:l=!1}=a,i=r.history,c=R.Pop,u=null,s=h();s==null&&(s=0,i.replaceState(U({},i.state,{idx:s}),""));function h(){return(i.state||{idx:null}).idx}function p(){c=R.Pop;let f=h(),v=f==null?null:f-s;s=f,u&&u({action:c,location:d.location,delta:v})}function g(f,v){c=R.Push;let m=I(d.location,f,v);s=h()+1;let y=k(m,s),x=d.createHref(m);try{i.pushState(y,"",x)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(x)}l&&u&&u({action:c,location:d.location,delta:1})}function S(f,v){c=R.Replace;let m=I(d.location,f,v);s=h();let y=k(m,s),x=d.createHref(m);i.replaceState(y,"",x),l&&u&&u({action:c,location:d.location,delta:0})}function C(f){let v=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof f=="string"?f:E(f);return m=m.replace(/ $/,"%20"),w(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let d={get action(){return c},get location(){return e(r,i)},listen(f){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(M,p),u=f,()=>{r.removeEventListener(M,p),u=null}},createHref(f){return t(r,f)},createURL:C,encodeLocation(f){let v=C(f);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:S,go(f){return i.go(f)}};return d}var A;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(A||(A={}));function z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function ie(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:le(n,t):t,search:se(a),hash:ue(r)}}function le(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function _(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oe(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D(e,t){let n=oe(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function q(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=O(e):(r=U({},e),w(!r.pathname||!r.pathname.includes("?"),_("?","pathname","search",r)),w(!r.pathname||!r.pathname.includes("#"),_("#","pathname","hash",r)),w(!r.search||!r.search.includes("#"),_("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,c;if(i==null)c=n;else{let p=t.length-1;if(!a&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;r.pathname=g.join("/")}c=p>=0?t[p]:"/"}let u=ie(r,c),s=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||h)&&(u.pathname+="/"),u}const G=e=>e.join("/").replace(/\/\/+/g,"/"),se=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ue=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,X=["post","put","patch","delete"];new Set(X);const ce=["get",...X];new Set(ce);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}const Y=o.createContext(null),b=o.createContext(null),B=o.createContext(null),N=o.createContext({outlet:null,matches:[],isDataRoute:!1});function fe(e,t){let{relative:n}=t===void 0?{}:t;T()||w(!1);let{basename:a,navigator:r}=o.useContext(b),{hash:l,pathname:i,search:c}=Z(e,{relative:n}),u=i;return a!=="/"&&(u=i==="/"?a:G([a,i])),r.createHref({pathname:u,search:c,hash:l})}function T(){return o.useContext(B)!=null}function W(){return T()||w(!1),o.useContext(B).location}function Q(e){o.useContext(b).static||o.useLayoutEffect(e)}function he(){let{isDataRoute:e}=o.useContext(N);return e?me():pe()}function pe(){T()||w(!1);let e=o.useContext(Y),{basename:t,future:n,navigator:a}=o.useContext(b),{matches:r}=o.useContext(N),{pathname:l}=W(),i=JSON.stringify(D(r,n.v7_relativeSplatPath)),c=o.useRef(!1);return Q(()=>{c.current=!0}),o.useCallback(function(s,h){if(h===void 0&&(h={}),!c.current)return;if(typeof s=="number"){a.go(s);return}let p=q(s,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:G([t,p.pathname])),(h.replace?a.replace:a.push)(p,h.state,h)},[t,a,i,l,e])}function Z(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=o.useContext(b),{matches:r}=o.useContext(N),{pathname:l}=W(),i=JSON.stringify(D(r,a.v7_relativeSplatPath));return o.useMemo(()=>q(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}var H=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(H||{}),ee=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ee||{});function de(e){let t=o.useContext(Y);return t||w(!1),t}function ve(e){let t=o.useContext(N);return t||w(!1),t}function ge(e){let t=ve(),n=t.matches[t.matches.length-1];return n.route.id||w(!1),n.route.id}function me(){let{router:e}=de(H.UseNavigateStable),t=ge(ee.UseNavigateStable),n=o.useRef(!1);return Q(()=>{n.current=!0}),o.useCallback(function(r,l){l===void 0&&(l={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,L({fromRouteId:t},l)))},[e,t])}const F={};function ye(e,t){F[t]||(F[t]=!0,console.warn(t))}const J=(e,t,n)=>ye(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function we(e,t){e!=null&&e.v7_startTransition||J("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&J("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function xe(e){let{basename:t="/",children:n=null,location:a,navigationType:r=R.Pop,navigator:l,static:i=!1,future:c}=e;T()&&w(!1);let u=t.replace(/^\/*/,"/"),s=o.useMemo(()=>({basename:u,navigator:l,static:i,future:L({v7_relativeSplatPath:!1},c)}),[u,c,l,i]);typeof a=="string"&&(a=O(a));let{pathname:h="/",search:p="",hash:g="",state:S=null,key:C="default"}=a,d=o.useMemo(()=>{let f=z(h,u);return f==null?null:{location:{pathname:f,search:p,hash:g,state:S,key:C},navigationType:r}},[u,h,p,g,S,C,r]);return d==null?null:o.createElement(b.Provider,{value:s},o.createElement(B.Provider,{children:n,value:d}))}new Promise(()=>{});/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function Ce(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,l;for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Re(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Se(e,t){return e.button===0&&(!t||t==="_self")&&!Re(e)}const Pe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],be="6";try{window.__reactRouterVersion=be}catch{}const Ue="startTransition",K=te[Ue];function _e(e){let{basename:t,children:n,future:a,window:r}=e,l=o.useRef();l.current==null&&(l.current=ne({window:r,v5Compat:!0}));let i=l.current,[c,u]=o.useState({action:i.action,location:i.location}),{v7_startTransition:s}=a||{},h=o.useCallback(p=>{s&&K?K(()=>u(p)):u(p)},[u,s]);return o.useLayoutEffect(()=>i.listen(h),[i,h]),o.useEffect(()=>we(a),[a]),o.createElement(xe,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i,future:a})}const Ee=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=o.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:l,replace:i,state:c,target:u,to:s,preventScrollReset:h,viewTransition:p}=t,g=Ce(t,Pe),{basename:S}=o.useContext(b),C,d=!1;if(typeof s=="string"&&Le.test(s)&&(C=s,Ee))try{let y=new URL(window.location.href),x=s.startsWith("//")?new URL(y.protocol+s):new URL(s),P=z(x.pathname,S);x.origin===y.origin&&P!=null?s=P+x.search+x.hash:d=!0}catch{}let f=fe(s,{relative:r}),v=Oe(s,{replace:i,state:c,target:u,preventScrollReset:h,relative:r,viewTransition:p});function m(y){a&&a(y),y.defaultPrevented||v(y)}return o.createElement("a",j({},g,{href:C||f,onClick:d||l?a:m,ref:n,target:u}))});var V;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(V||(V={}));var $;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($||($={}));function Oe(e,t){let{target:n,replace:a,state:r,preventScrollReset:l,relative:i,viewTransition:c}=t===void 0?{}:t,u=he(),s=W(),h=Z(e,{relative:i});return o.useCallback(p=>{if(Se(p,n)){p.preventDefault();let g=a!==void 0?a:E(s)===E(h);u(e,{replace:g,state:r,preventScrollReset:l,relative:i,viewTransition:c})}},[s,u,h,a,r,n,e,l,i,c])}export{_e as B,Ie as L};
