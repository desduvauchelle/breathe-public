var serviceWorkerOption = {"assets":["/f4769f9bdb7466be65088239c12046d1.eot","/89889688147bd7575d6327160d64e760.svg","/e18bbf611f2a2e43afc071aa2f4e1512.ttf","/fa2772327f55d8198301fdb8bcfc8158.woff","/448c34a56d699c29117adc64c43affeb.woff2","/c7a753bbb80a4d01ce437b665ac874e6.jpg","/674f50d287a8c48dc19ba404d20fe713.eot","/912ec66d7572ff821749319396470bde.svg","/b06871f281fee6b241d60582ae9369b9.ttf","/12adc359c003dc35b092ad4fedf6ddb3.wav","/99568433eef283782d9cc89c729a0287.wav","/cb99a2a0deb61b6a6416a9fdf489dda5.wav","/af7ae505a9eed503f8b8e6982036873e.woff2","/fee66e712a8a08eef5805a46892932ad.woff","/app-aaca273fd5c35aafe7f8.js","/vendor-aaca273fd5c35aafe7f8.js","/app-aaca273fd5c35aafe7f8.css"]};
        
        !function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){try{(function(){"use strict";var e=serviceWorkerOption.assets;self.addEventListener("install",function(t){t.waitUntil(caches.open("boarder-v1").then(function(t){return console.info("SERVICE WORKER > Cache is opened"),t.addAll(e)}))}),self.addEventListener("activate",function(e){console.info("SERVICE WORKER > activate event in progress."),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return!e.startsWith("boarder-v1")}).map(function(e){return caches.delete(e)}))}).then(function(){console.log("WORKER: activate completed.")}))})}).call(this)}finally{}}]);