"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9754],{79754:function(e,r,n){n.r(r);var t=n(76522);function i(e,r,n,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void n(s)}u.done?r(c):Promise.resolve(c).then(t,i)}r.default=function(e){var r,n=e.preferred,o=e.label,a=e.svg,u=window.ethereum||window.web3&&window.web3.currentProvider;return{name:o||(null===(r=Object.keys(u).find((function(e){return e.startsWith("is")&&!e.includes("MetaMask")})))||void 0===r?void 0:r.split("is")[1])||"Detected Wallet",svg:a||'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="black"/>\n</svg>',wallet:function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var n,t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.getProviderName,t=r.createModernProviderInterface,i=r.createLegacyProviderInterface,e.abrupt("return",{provider:u,interface:u&&void 0===n(u)?"function"===typeof u.enable?t(u):i(u):null});case 2:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function u(e){i(a,t,o,u,c,"next",e)}function c(e){i(a,t,o,u,c,"throw",e)}u(void 0)}))});return function(e){return r.apply(this,arguments)}}(),type:"injected",installMessage:t.e,desktop:!0,mobile:!0,preferred:n}}}}]);