!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOMinit=void 0;t.DOMinit=function(){return{container:document.querySelector(".container"),header:document.querySelector(".header"),tilesContainer:document.querySelector(".tiles-container"),tiles:document.querySelectorAll(".tiles"),gameOverWrapper:document.querySelector(".game-over-wrapper"),gameTime:document.querySelector(".game-time"),gameOverBtn:document.querySelector(".game-over__btn")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shuffleTiles=void 0;var n=function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r(2).tilesAll);t.shuffleTiles=n,function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberOfColors=t.tilesAll=void 0;var n=r(6),o=[];t.tilesAll=o;var i=[],l=8;t.numberOfColors=l,function(){for(var e=0;e<l;e++)i.push((0,n.makeRandomColor)(e))}(),t.tilesAll=o=i.concat(i)},function(e,t,r){"use strict";r(4);var n=r(0),o=r(1),i=r(7),l=(0,n.DOMinit)();setTimeout(function(e){l.tilesContainer.style.display="grid",l.header.style.display="none"},2e3),l.tiles.forEach(function(e,t){e.style.backgroundColor="rgba(".concat(o.shuffleTiles[t][0],",").concat(o.shuffleTiles[t][1],",").concat(o.shuffleTiles[t][2],")")}),setTimeout(function(){return l.tiles.forEach(function(e){e.style.backgroundColor="#505050",e.addEventListener("click",i.clickTile)})},4e3)},function(e,t,r){},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeRandomColor=t.RGBValues=void 0;var n=[0,23,87,101,158,195,212,250];t.RGBValues=n;t.makeRandomColor=function(e){return[n[e],n[Math.floor(Math.random()*n.length)],n[Math.floor(Math.random()*n.length)]]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clickTile=void 0;var n=r(0),o=r(1),i=r(2);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=(0,n.DOMinit)(),a=l(u.tiles),c=(new Date).getTime(),f="",s=[],d=i.numberOfColors,m=0;t.clickTile=function e(){if((f=this)!==s[0]){var t=l(u.tiles).indexOf(this);this.style.backgroundColor="rgba(".concat(o.shuffleTiles[t][0],",").concat(o.shuffleTiles[t][1],",").concat(o.shuffleTiles[t][2],")"),0!==s.length?(a.forEach(function(t){return t.removeEventListener("click",e)}),s[1]=f,setTimeout(function(t){if(s[0].attributes[1].value===s[1].attributes[1].value){if(s.forEach(function(e){e.style.backgroundColor="white",e.style.transform="scale(0.8)"}),m++,a=a.filter(function(e){return"background-color: white; transform: scale(0.8);"!==e.attributes[1].value}),m===d){var r=((new Date).getTime()-c)/1e3;setTimeout(function(e){u.tilesContainer.remove(),u.gameOverWrapper.style.display="block",u.gameTime.textContent="".concat(r," s."),u.gameOverBtn.addEventListener("click",function(e){return location.reload()})},500)}}else s.forEach(function(e){return e.style.backgroundColor="#505050"});f="",s=[],a.forEach(function(t){return t.addEventListener("click",e)})},500)):s[0]=f}}}]);