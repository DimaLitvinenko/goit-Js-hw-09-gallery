parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),resetBtn:document.querySelector("button[data-reset]"),body:document.querySelector("body")},{startBtn:e,stopBtn:o,body:r,resetBtn:a}=t;let n=null;const d=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,l=()=>r.style.backgroundColor=d(),s=({target:t})=>{if(void 0!==t.dataset.reset)return console.log(t),r.style.backgroundColor=""},c=({target:t,currentTarget:e})=>{void 0!==t.dataset.start&&(console.log(t),console.log(e),!1===t.disabled&&(t.disabled=!0,n=setInterval(l,1e3)),r.addEventListener("click",s))},u=({target:t,currentTarget:o})=>{void 0!==t.dataset.stop&&(console.log(t),console.log(o),!1===t.disabled&&(e.disabled=!1,clearInterval(n)))};r.addEventListener("click",c),r.addEventListener("click",u);
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-Js-hw-09-homework/01-color-switcher.34df79e4.js.map