!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",r=0/0,a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":i(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=u.test(e);return o||l.test(e)?c(e.slice(2),o?2:8):f.test(e)?r:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function S(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function T(){var e,n,i,o=y();if(S(o))return h(o);u=setTimeout(T,(e=o-l,n=o-c,i=t-e,d?p(i,a-n):i))}function h(e){return(u=void 0,v&&i)?m(e):(i=r=void 0,f)}function O(){var e,n=y(),o=S(n);if(i=arguments,r=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(T,t),s?m(e):f;if(d)return u=setTimeout(T,t),m(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=r=u=void 0},O.flush=function(){return void 0===u?f:h(y())},O}(e,t,{leading:i,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),T="feedback-form-state";S.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){var t=JSON.stringify({email:e.currentTarget.elements.email.value,message:S.elements.message.value});localStorage.setItem(T,t)}),500);var h=function(){var e=localStorage.getItem(T);if(e){var t=JSON.parse(e),n=t.email,i=t.message;S.elements.message.value=i,S.elements.email.value=n}return e};h(),S.addEventListener("submit",function(e){e.preventDefault(),console.log(h()),S.reset(),localStorage.removeItem(T)})}();
//# sourceMappingURL=03-feedback.863ad8f2.js.map