!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function a(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){n=setInterval(a,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ea6017dc.js.map
