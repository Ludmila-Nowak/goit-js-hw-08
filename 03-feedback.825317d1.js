var e,t,o,l,n,f;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,t||o||Function("return this")(),Object.prototype.toString,l=document.querySelector(".feedback-form"),n="feedback-form-state",f=function(){var e=localStorage.getItem(n);if(e){var t=JSON.parse(e),o=t.email,f=t.message;l.elements.message.value=f,l.elements.email.value=o}return e},f(),l.addEventListener("submit",function(e){e.preventDefault(),console.log(f()),l.reset(),localStorage.removeItem(n)});
//# sourceMappingURL=03-feedback.825317d1.js.map
