(self.webpackChunkkuaiq_blog=self.webpackChunkkuaiq_blog||[]).push([[783],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,i){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),i=n(7316),c=["scope","children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(7294),f=n(4983).mdx,d=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,c),u=d(t),p=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:f},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(p,l({},a))}},5431:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),o=n(3277),a=n(6725),i=n(4647),c=n(7991),u=n(3493),l=n.n(u);function s(){var e=(0,r.useState)(0),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=l()((function(){var e=document.body.scrollHeight-document.documentElement.clientHeight,t=document.documentElement.scrollTop,r=Math.floor(t/e*100);n(Math.min(100,Math.max(0,r)))}),200);return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.createElement("div",{className:"progresser",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},t)}var f=n(3279),d=n.n(f),p=n(1413),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 00-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0082.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"}}]},name:"youtube",theme:"outlined"},v=n(7190),g=function(e,t){return r.createElement(v.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:t,icon:m}))};g.displayName="YoutubeOutlined";var h=r.forwardRef(g);function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e){var t=e.headers,n=(0,r.useRef)(),o=(0,r.useRef)(),a=(0,r.useState)(0),i=a[0],c=a[1];return(0,r.useEffect)((function(){var e=d()((function(){for(var e,r=0,o=y(t);!(e=o()).done;){if(e.value.target.getBoundingClientRect().top>0)break;r++}r=Math.min(t.length-1,r),c(r);var a=document.getElementById("header-number-"+r);a&&n.current.scrollTo({behavior:"smooth",top:a.offsetTop-200})}),150);return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[t]),(0,r.useEffect)((function(){var e=function(e){var t=e.target;t===o.current||n.current.contains(t)||n.current.classList.remove("table-of-content-visible")};return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("div",{ref:o,className:"table-of-content-switch",onClick:function(){n.current.classList.toggle("table-of-content-visible")}},"jj"),r.createElement("div",{className:"table-of-content",ref:n},t.map((function(e,t){return r.createElement("p",{className:"header-level-"+e.level+" "+(i===t?"topHeader":""),id:"header-number-"+t,key:t,onClick:function(t){!function(e,t){n.current.scrollTo({behavior:"smooth",top:e.target.offsetTop-200}),t.target.scrollIntoView()}(t,e)}},"media"===e.name&&r.createElement(h,null)," ",e.label)}))))}var w=n(1335);function E(e,t){console.log(t);return{h1:"h2",h2:"h3",h3:"h3"}[e]}function j(e){var t=e.data,n=t.mdx,u=(0,r.useState)([]),l=u[0],f=u[1];return(0,r.useEffect)((function(){document.title=n.frontmatter.title;var e=document.querySelectorAll(".article-body a");null==e||e.forEach((function(e){return e.target="_blank"}));var t=document.querySelectorAll(".article-body h1, .article-body iframe, .article-body h2, .article-body h3"),r=Array.from(t).map((function(e,t,n){e.setAttribute("name",t);var r=e.localName,o=e.textContent;if("IFRAME"===e.tagName){var a,i=n[t-1];return{level:null!==(a=E(i.localName,i.tagName))&&void 0!==a?a:"h2",name:"media",label:e.title,target:e}}return{level:r,name:"header-"+t,label:o,target:e}}));f(r);var o=function(e){var t=e.target;t.matches("h1, h2, h3")&&t.scrollIntoView({behavior:"smooth"})};return document.addEventListener("click",o),function(){document.removeEventListener("click",o)}}),[t]),(0,r.useEffect)((function(){document.querySelectorAll("iframe").forEach((function(e){var t,n=document.createElement("div");e.parentNode.insertBefore(n,e),n.appendChild(e),n.classList.add("iframe-wrapper"),n.style.backgroundImage="url("+((t=["https://tva1.sinaimg.cn/large/e6c9d24egy1h218jhhnzqg20dc07ikjm.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21adr50r1g209w05k7wi.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21adqj3x1g20dc07ib2b.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21adpsp5yg20hs09q1ky.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21adp13cag20hs0a0x6u.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21amqaifwg20dc07i4qr.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21ampu8l1g20dc068u0x.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21ampagtwg20dc07i7wh.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21azonp62g20hs09yx6p.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21azu0dldg20dc07inph.gif","https://tva1.sinaimg.cn/large/e6c9d24egy1h21azr2o2ig20du07q4qp.gif"])[Math.floor(100*Math.random())%t.length]+")"),n.style.backgroundSize="cover";var r=document.createElement("div");r.classList.add("loader"),r.textContent="YouTube loading",n.appendChild(r),e.onload=function(){n.removeChild(r),n.style.background="none"}}))}),[]),r.createElement(o.Z,null,r.createElement(s,null),r.createElement("div",{className:"article-body"},r.createElement("h1",{className:"article-title"},n.frontmatter.title),r.createElement("p",{className:"article-meta"},r.createElement("span",null,r.createElement(i.Z,null)," ",n.frontmatter.date," | ",r.createElement(c.Z,null)," ",100*Math.round(40*n.wordCount.sentences/100),"words ",Math.round(n.wordCount.sentences/7),"min")),r.createElement(a.MDXRenderer,null,n.body)),r.createElement(w.Z,{currArticle:n}),l.length&&r.createElement(x,{headers:l}))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},7561:function(e,t,n){var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),o=n(7771),a=n(4841),i=Math.max,c=Math.min;e.exports=function(e,t,n){var u,l,s,f,d,p,m=0,v=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=u,r=l;return u=l=void 0,m=t,f=e.apply(r,n)}function b(e){return m=e,d=setTimeout(w,t),v?y(e):f}function x(e){var n=e-p;return void 0===p||n>=t||n<0||g&&e-m>=s}function w(){var e=o();if(x(e))return E(e);d=setTimeout(w,function(e){var n=t-(e-p);return g?c(n,s-(e-m)):n}(e))}function E(e){return d=void 0,h&&u?y(e):(u=l=void 0,f)}function j(){var e=o(),n=x(e);if(u=arguments,l=this,p=e,n){if(void 0===d)return b(p);if(g)return clearTimeout(d),d=setTimeout(w,t),y(p)}return void 0===d&&(d=setTimeout(w,t)),f}return t=a(t)||0,r(n)&&(v=!!n.leading,s=(g="maxWait"in n)?i(a(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==d&&clearTimeout(d),m=0,u=p=l=d=void 0},j.flush=function(){return void 0===d?f:E(o())},j}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),o=n(3218);e.exports=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),r(e,t,{leading:a,maxWait:t,trailing:i})}},4841:function(e,t,n){var r=n(7561),o=n(3218),a=n(3448),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-pages-articles-mdx-slug-js-264509d5fd973d8007bb.js.map