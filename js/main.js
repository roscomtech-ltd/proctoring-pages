document.querySelector(".header__burger")&&(document.querySelector(".header__burger").onclick=()=>{document.querySelector(".header__burger").classList.toggle("active"),document.querySelector(".header__menu").classList.toggle("active")}),document.querySelectorAll("[tab]").forEach(t=>{t.addEventListener("click",e=>{document.querySelectorAll(`[tab="${t.getAttribute("tab")}"]`).forEach(e=>{e.classList.remove("active")}),document.querySelectorAll(`[tab-content="${t.getAttribute("tab")}"]`).forEach(e=>{e.classList.remove("active")}),t.classList.add("active"),document.querySelector(`[tab-content="${t.getAttribute("tab")}"]#`+t.id).classList.add("active")})});