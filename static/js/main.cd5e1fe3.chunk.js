(this["webpackJsonppwa-tradebooks"]=this["webpackJsonppwa-tradebooks"]||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i.n(n),o=i(4),a=i.n(o),c=(i(9),i(1)),s=i(0),l={marginLeft:"5px",marginRight:"5px",overflowX:"auto",overflowY:"hidden",display:"flex",padding:"3px"},d={marginLeft:"7px",marginRight:"7px",overflowX:"auto",overflowY:"hidden",display:"flex",padding:"3px"},u={marginLeft:"10px",marginRight:"10px",overflowX:"auto",overflowY:"hidden",display:"flex",padding:"4px"},x={marginLeft:"15px",marginRight:"15px",overflowX:"auto",overflowY:"hidden",display:"flex",padding:"5px"};var h=function(e){var t=Object(c.useMediaQuery)({query:"(max-width: 360px)"}),i=Object(c.useMediaQuery)({query:"(min-width: 360px)"}),n=Object(c.useMediaQuery)({query:"(max-width: 600px)"}),r=Object(c.useMediaQuery)({query:"(min-width: 600px)"}),o=Object(c.useMediaQuery)({query:"(max-width: 1024px)"}),a=i&&n,h=r&&o;return t?Object(s.jsx)("div",{style:l,children:e.children}):a?Object(s.jsx)("div",{style:d,children:e.children}):h?Object(s.jsx)("div",{style:u,children:e.children}):Object(s.jsx)("div",{style:x,className:"scrolling-wrapper",children:e.children})},j={fontFamily:"Arial,sans-serif",fontSize:"21px",fontWeight:"700",color:"black",marginLeft:"5px"},p={fontFamily:"Arial,sans-serif",fontSize:"24px",fontWeight:"700",color:"black",marginLeft:"7px"},f={fontFamily:"Arial,sans-serif",fontSize:"25px",fontWeight:"700",color:"black",marginLeft:"10px"},b={fontFamily:"Arial,sans-serif",fontSize:"27.5px",fontWeight:"700",color:"black",marginLeft:"15px"};var g=function(e){var t=Object(c.useMediaQuery)({query:"(max-width: 360px)"}),i=Object(c.useMediaQuery)({query:"(min-width: 360px)"}),n=Object(c.useMediaQuery)({query:"(max-width: 600px)"}),r=Object(c.useMediaQuery)({query:"(min-width: 600px)"}),o=Object(c.useMediaQuery)({query:"(max-width: 1024px)"}),a=i&&n,l=r&&o;return t?Object(s.jsx)("div",{style:j,children:e.name}):a?Object(s.jsx)("div",{style:p,children:e.name}):l?Object(s.jsx)("div",{style:f,children:e.name}):Object(s.jsx)("div",{style:b,children:e.name})},v={height:"180px",backgroundColor:"green",width:"150px",flex:"0 0 auto"},y={height:"220px",backgroundColor:"blue",width:"170px",flex:"0 0 auto"},w={height:"230px",backgroundColor:"red",width:"190px",flex:"0 0 auto"},O={height:"275px",backgroundColor:"blue",width:"220px",flex:"0 0 auto"};var m=function(e){var t=Object(c.useMediaQuery)({query:"(max-width: 360px)"}),i=Object(c.useMediaQuery)({query:"(min-width: 360px)"}),n=Object(c.useMediaQuery)({query:"(max-width: 600px)"}),r=Object(c.useMediaQuery)({query:"(min-width: 600px)"}),o=Object(c.useMediaQuery)({query:"(max-width: 1024px)"}),a=i&&n,l=r&&o;return t?Object(s.jsx)("div",{style:v,children:e.children}):a?Object(s.jsx)("div",{style:y,children:e.children}):l?Object(s.jsx)("div",{style:w,children:e.children}):Object(s.jsx)("div",{style:O,className:"card"})};var k=function(e){var t=e.horizontal?e.horizontal:0,i={height:e.vertical?e.vertical:0,width:t,flex:"0 0 auto"};return Object(s.jsx)("div",{style:i})};var M=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{name:"Popular Books"}),Object(s.jsx)(k,{vertical:"10px"}),Object(s.jsxs)(h,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{horizontal:"15px"})]})]})},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,12)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;i(e),n(e),r(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),z()},9:function(e,t,i){}},[[11,1,2]]]);