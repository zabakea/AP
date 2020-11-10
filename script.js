const bgmenu = document.querySelector("#bg-menu-icon");
const nav = document.querySelector("#nav");
const close = document.querySelector("#close-icon");

bgmenu.addEventListener("click", openBgMenu);

function openBgMenu() {
    console.log("openBgMenu");

    nav.classList.remove("hide");
    bgmenu.classList.add("hide");
    close.classList.remove("hide");
    close.addEventListener("click", hideNavMobile);
}

function hideNavMobile() {
    console.log("hideNavMobile");

    close.classList.add("hide");
    bgmenu.classList.remove("hide");
    nav.classList.add("hide");

    bgmenu.addEventListener("click", openBgMenu);
}
