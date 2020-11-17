const params = new URLSearchParams(window.location.search);
console.log("URLSearchParams" + window.location);
const situationFromURL = params.get("your_situation");
console.log(situationFromURL);




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
