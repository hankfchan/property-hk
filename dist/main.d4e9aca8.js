parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FVPG":[function(require,module,exports) {
function t(t){return n(t)||i(t)||o(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function n(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}"use strict"(function(){var e=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),o?t(document.querySelectorAll(e)):document.querySelector(e)},o=function(t,o,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=e(o,n);a&&(n?a.forEach(function(e){return e.addEventListener(t,i)}):a.addEventListener(t,i))},i=function(t,e){t.addEventListener("scroll",e)},n=e("#navbar .scrollto",!0),a=function(){var t=window.scrollY+200;n.forEach(function(o){if(o.hash){var i=e(o.hash);i&&(t>=i.offsetTop&&t<=i.offsetTop+i.offsetHeight?o.classList.add("active"):o.classList.remove("active"))}})};window.addEventListener("load",a),i(document,a);var r=function(t){var o=e("#header"),i=o.offsetHeight;o.classList.contains("header-scrolled")||(i-=16);var n=e(t).offsetTop;window.scrollTo({top:n-i,behavior:"smooth"})},s=e("#header");if(s){var l=s.offsetTop,c=s.nextElementSibling,d=function(){l-window.scrollY<=0?(s.classList.add("fixed-top"),c.classList.add("scrolled-offset")):(s.classList.remove("fixed-top"),c.classList.remove("scrolled-offset"))};window.addEventListener("load",d),i(document,d)}var f=e(".back-to-top");if(f){var u=function(){window.scrollY>100?f.classList.add("active"):f.classList.remove("active")};window.addEventListener("load",u),i(document,u)}o("click",".mobile-nav-toggle",function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),o("click",".navbar .dropdown > a",function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),o("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();var o=e("#navbar");if(o.classList.contains("navbar-mobile")){o.classList.remove("navbar-mobile");var i=e(".mobile-nav-toggle");i.classList.toggle("bi-list"),i.classList.toggle("bi-x")}r(this.hash)}},!0),window.addEventListener("load",function(){window.location.hash&&e(window.location.hash)&&r(window.location.hash)});GLightbox({selector:".glightbox"});var v=e(".skills-content");v&&new Waypoint({element:v,offset:"80%",handler:function(t){e(".progress .progress-bar",!0).forEach(function(t){t.style.width=t.getAttribute("aria-valuenow")+"%"})}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",function(){var t=e(".portfolio-container");if(t){var i=new Isotope(t,{itemSelector:".portfolio-item"}),n=e("#portfolio-flters li",!0);o("click","#portfolio-flters li",function(t){t.preventDefault(),n.forEach(function(t){t.classList.remove("filter-active")}),this.classList.add("filter-active"),i.arrange({filter:this.getAttribute("data-filter")}),i.on("arrangeComplete",function(){AOS.refresh()})},!0)}});GLightbox({selector:".portfolio-lightbox"});new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",function(){AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})})();
},{}]},{},["FVPG"], null)
//# sourceMappingURL=main.d4e9aca8.js.map