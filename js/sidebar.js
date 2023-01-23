// Chapters

let elementTargets = [
    document.getElementById("what-is-star-citizen"),
    document.getElementById("first-steps"),
    document.getElementById("entering-star-citizen"),
    document.getElementById("origin-of-an-adventure"),
    document.getElementById("glossary")
];

// Desktop/Tablet Side Bar
const chapterParents = document.querySelector('.sidebar nav ul');
let chapterID = 1;

// Mobile Bar
let caption = document.querySelector('.mobile-sidebar-caption').querySelector("a");

window.addEventListener("scroll", function() {
    for (let i = 0; i < elementTargets.length; i++) {
        if (window.scrollY > (elementTargets[i].offsetTop - 100)) {
            // Set Desktop/Tablet Side Bar
                chapterID = i+1;
                document.querySelector('.sidebar nav .selected').classList.remove('selected');
                chapterParents.children[chapterID].classList.add('selected');

            // Set Mobile Bar
            caption.textContent = elementTargets[i].querySelector("h1").textContent;
            caption.setAttribute("href", "#"+elementTargets[i].id);
            console.log("end");
        }
    }
  });