//fetch data
fetch("http://umarkx.com/AP/wp-json/wp/v2/your_situation?_embed&fbclid=IwAR2O_hLb5TT7ZypoAV6F7wQQnmZlAHYO9PWB_b1p4vF9zU1uHDdw3hZ-jW0")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        dataReceived(data);
    })

function dataReceived(situations) {
    situations.forEach(situation => {showSituation(situation)});
}

//executed once for each life situation
function showSituation(oneSituation) {
     //find the template
    const template = document.querySelector("#situation-template").content;
    const clone = template.cloneNode(true);

    //fill template
    clone.querySelector("#card-title").innerHTML = oneSituation.title.rendered;
    clone.querySelector("#short-description").innerHTML = oneSituation.excerpt.rendered;

//    let endpoint = oneSituation._embedded["wp:featuremedia"][0];
//
//    fetch(endpoint)
//    .then(e => e.json())
//    .then(response => {
//        clone.querySelector("img").setAttribute("src", response.media_details.sizes.medium.source_url);
//    })
    console.log(oneSituation)

    const img = clone.querySelector("img");
    img.setAttribute("src", oneSituation._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);


    //append
    const parentElem = document.querySelector("section#life-situations");
    parentElem.appendChild(clone);
}
