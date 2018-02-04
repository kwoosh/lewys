!function(e){var t={};function r(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e){e.exports={OnAbort:"The operation was aborted.",OnTimeout:"Time is out, but the operation wasn't aborted because your browser does not support AbortController API. Check out Browser compatibility https://developer.mozilla.org/en-US/docs/Web/API/AbortController"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=r(0))&&o.__esModule?o:{default:o};var u={intercept:(e,t)=>"function"==typeof t?t(e):e,handleStatus:e=>e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText)),hasBody:e=>"POST"===(e=e.toUpperCase())||"PUT"===e||"PATCH"===e,makeUrl({base:e,relative:t,params:r}){let o="";return o=/(https?:\/\/)/gi.test(t)?t:e+t,r&&(o+=`?${r}`),o},startTimeout:({promise:e,timeout:t,controller:r})=>new Promise((o,u)=>{setTimeout(()=>{const e=new Error;e.name="AbortError",e.message=s.default.OnAbort,r?r.abort():e.message=s.default.OnTimeout,u(e)},Number(t)),e.then(o,u)})};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=r(1))&&o.__esModule?o:{default:o};var u=class{constructor(e){this.controller=void 0,this.defaults=e||{},this.defaults.timeout||(this.defaults.timeout=3e4)}request({url:e,method:t,body:r,params:o,headers:u}){const a={method:t||"GET",headers:new Headers(u||this.defaults.headers),body:s.default.hasBody(t)?r:void 0},n=s.default.makeUrl({relative:e,base:this.defaults.baseURL,params:s.default.intercept(o,this.defaults.serializer||JSON.stringify)});"AbortController"in window&&(this.controller=new AbortController,a.signal=this.controller.signal);const i=s.default.intercept(new Request(n,a),this.defaults.beforeRequest);return s.default.startTimeout({promise:fetch(i),timeout:this.defaults.timeout,controller:this.controller}).then(s.default.handleStatus).then(e=>s.default.intercept(e,this.defaults.beforeResponse))}};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var o,s=(o=r(2))&&o.__esModule?o:{default:o};t.init=(e=>new s.default(e))}]);