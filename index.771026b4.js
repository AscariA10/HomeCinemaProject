const e=document.querySelector('[data-action="open-modal"]'),t=document.querySelector('[data-action="close-modal"]'),n=document.querySelector(".js-backdrop");function o(){window.removeEventListener("keydown",c),document.body.classList.remove("show-modal")}function c(e){"Escape"===e.code&&o()}e.addEventListener("click",(function(){window.addEventListener("keydown",c),document.body.classList.add("show-modal")})),t.addEventListener("click",o),n.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}));document.querySelector(".btn_watched");const d=document.querySelector(".change_watch");d.addEventListener("click",(function(e){"add to Watched"==d.textContent?d.textContent="remove from Watched":d.textContent="add to Watched"}));const a=document.querySelector(".btn_queue"),u=document.querySelector(".change_queue");a.addEventListener("click",(function(){"add to queue"==u.textContent?u.textContent="remove from queue":u.textContent="add to queue"}));
//# sourceMappingURL=index.771026b4.js.map
