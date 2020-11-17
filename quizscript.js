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
    if (currentPage == 4) {
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
