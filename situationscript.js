const bgmenu = document.querySelector("#bg-menu-icon");
const nav = document.querySelector("#nav");
const close = document.querySelector("#close-icon");
const logo = document.querySelector("#logo-icon");
const login = document.querySelector("#login-icon");
const pension = document.querySelector("#pension");
const nav2 = document.querySelector(".sec-nav")

bgmenu.addEventListener("click", openBgMenu);

function openBgMenu() {
    console.log("openBgMenu");

    nav.classList.remove("hide");
    bgmenu.classList.add("hide");
    close.classList.remove("hide");
    logo.classList.add("hide");
    login.classList.add("hide");
    close.addEventListener("click", closeBgMenu);
    pension.addEventListener("click", showSecNav);
}

function closeBgMenu() {
    console.log("close Bg Menu");

    close.classList.add("hide");
    bgmenu.classList.remove("hide");
    nav.classList.add("hide");
    logo.classList.remove("hide");
    login.classList.remove("hide");
    nav2.classList.add("hide");

    bgmenu.addEventListener("click", openBgMenu);
}

function showSecNav() {
    console.log("show nav2");

    nav2.classList.remove("hide");
    pension.removeEventListener("click", showSecNav);
    pension.addEventListener("click", hideSecNav);
}

function hideSecNav() {
    console.log("hide nav2");

    nav2.classList.add("hide");
    pension.removeEventListener("click", hideSecNav);
    pension.addEventListener("click", showSecNav);
}


window.addEventListener('DOMContentLoaded', getData);

const link = "http://umarkx.com/AP/wp-json/wp/v2/your_situation?_embed&fbclid=IwAR2O_hLb5TT7ZypoAV6F7wQQnmZlAHYO9PWB_b1p4vF9zU1uHDdw3hZ-jW0";

function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams" + window.location);
    const oneSitu_id = urlParams.get("oneSituation_id");
    console.log(oneSitu_id);

    //fetch data
    fetch(link)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            dataReceived(data);
        })
}

function dataReceived(situations) {
    situations.forEach(situation => {
        showSituation(situation)
    });

}

//executed once for each life situation
function showSituation(oneSituation) {
    //find the template
    const template = document.querySelector("#situation-template").content;
    const clone = template.cloneNode(true);

    const a = clone.querySelector('a');
    a.href += oneSituation.id;

    //fill template
    clone.querySelector("#card-title").innerHTML = oneSituation.title.rendered;
    clone.querySelector("#short-description").innerHTML = oneSituation.excerpt.rendered;

    console.log(oneSituation)

    const img = clone.querySelector("img");
    img.setAttribute("src", oneSituation._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);


    //append
    const parentElem = document.querySelector("section#life-situations");
    parentElem.appendChild(clone);
}
