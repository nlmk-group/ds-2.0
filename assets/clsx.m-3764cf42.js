import{r as l}from"./index-f1f749bf.js";var n={},_={get exports(){return n},set exports(t){n=t}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=l,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,o){var r,s={},i=null,a=null;o!==void 0&&(i=""+o),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)y.call(e,r)&&!v.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m,type:t,key:i,ref:a,props:s,_owner:j.current}}f.Fragment=x;f.jsx=p;f.jsxs=p;(function(t){t.exports=f})(_);const d=n.Fragment,E=n.jsx,O=n.jsxs;function u(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=u(t[e]))&&(r&&(r+=" "),r+=o);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function R(){for(var t,e,o=0,r="";o<arguments.length;)(t=arguments[o++])&&(e=u(t))&&(r&&(r+=" "),r+=e);return r}export{d as F,O as a,R as c,E as j};
