const bgmenu = document.querySelector("#bg-menu-icon");
const nav = document.querySelector("#nav");
const close = document.querySelector("#close-icon");
const logo = document.querySelector("#logo-icon");
const login = document.querySelector("#login-icon");

bgmenu.addEventListener("click", openBgMenu);

function openBgMenu() {
    console.log("openBgMenu");

    nav.classList.remove("hide");
    bgmenu.classList.add("hide");
    close.classList.remove("hide");
    logo.classList.add("hide");
    login.classList.add("hide");
    close.addEventListener("click", hideNavMobile);
}

function hideNavMobile() {
    console.log("hideNavMobile");

    close.classList.add("hide");
    bgmenu.classList.remove("hide");
    nav.classList.add("hide");
    logo.classList.remove("hide");
    login.classList.remove("hide");

    bgmenu.addEventListener("click", openBgMenu);
}
