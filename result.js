const params = new URLSearchParams(window.location.search);
console.log("URLSearchParams" + window.location);
const situationFromURL = params.get("your_situation");
console.log(situationFromURL);


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




fetch("http://umarkx.com/AP/wp-json/wp/v2/your_situation?_embed")
    .then(initial => initial.json())
    .then(callback);


function callback(data) {
    data.forEach(displayData => {
        const template = document.querySelector("#resultTemplate").content;
        const clone = template.cloneNode(true);
        if (displayData._embedded["wp:term"][1][0].name == situationFromURL) {
            clone.querySelector("#card-title").innerHTML = displayData.title.rendered;
            clone.querySelector(".desc").innerHTML = displayData.excerpt.rendered;
            clone.querySelector("img").setAttribute("src", displayData._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url);




            document.querySelector(".cardzzz").appendChild(clone);


        }

    })
}
