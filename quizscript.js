window.addEventListener("load", quiz);

let currentPage = 0;

function quiz() {


    document.querySelector(".q0").classList.add("hide");
    document.querySelector(".q1").classList.add("hide");
    document.querySelector(".q2").classList.add("hide");
    document.querySelector(".q3").classList.add("hide");
    document.querySelector(".q4").classList.add("hide");
    console.log("jebeno radi");
    document.querySelector(".submit").classList.add("hide");

    document.querySelector(".q" + currentPage).classList.remove("hide");

    document.querySelector(".next").addEventListener("click", nextQ);
    document.querySelector(".back").addEventListener("click", prevQ);
}

function nextQ() {
    console.log("kliknut next");
    currentPage++;
    if (currentPage == 5) {
        document.querySelector(".next").classList.add("hide");
        document.querySelector(".back").classList.add("hide");
        document.querySelector(".submit").classList.remove("hide");
    } else {

        quiz();
    }
}

function prevQ() {
    console.log("kliknut manje");
    currentPage--;
    quiz();
}

let result;

document.querySelector(".q4 form").addEventListener("change", (e) => {
    console.log(e.target.id);
    result = e.target.id;
})

document.querySelector(".submit").addEventListener("click", () => {

    if (result == "married") {
        console.log(result);
        window.location = "result.html?your_situation=married"
    }
    if (result == "unmarried") {
        console.log(result);
        window.location = "result.html?your_situation=unmarried"
    }
    if (result == "divorced") {
        console.log(result);
        window.location = "result.html?your_situation=divorced"
    }
    if (result == "almostdivorced") {
        console.log(result);
        window.location = "result.html?your_situation=almostdivorced"
    }
    if (result == "almostmarried") {
        console.log(result);
        window.location = "result.html?your_situation=almostmarried"
    }

})
