const slider = document.querySelector('.carousel-slider');
const carousel = document.querySelector('.carousel');
const arrows = document.querySelector('.carousel-arrow-container');

const prev = document.querySelector('.left');
const next = document.querySelector('.right');

var direction = -1;

const indicatorParents = document.querySelector('.carousel-controls ul');

let spanIndex = 0;

let carouselAssets = [document.getElementById("carousel-video-1"),
document.getElementById("carousel-video-2"),
document.getElementById("carousel-video-3"),
document.getElementById("carousel-video-4"),
0];
console.log(carouselAssets[0]);

function setIndex(hasChildren) {
    //slider.style.transform = 'translate(' + (spanIndex) * -20 + '%)';
    slider.children[spanIndex].style.opacity = 1;
    slider.children[spanIndex].style.zIndex = 1;
    document.querySelector('.carousel-controls .selected').classList.remove('selected');
    if (hasChildren) {
        indicatorParents.children[spanIndex].classList.add('selected');
    }
    playVideo();
}

function reset() {
    for (var i = 0; i < slider.children.length; i++) {
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
    pauseVideo();
}

function pauseVideo() {
    if (typeof carouselAssets[spanIndex].pause === "function") {
        carouselAssets[spanIndex].pause();
    }
}
function playVideo() {
    if (typeof carouselAssets[spanIndex].play === "function") {
        carouselAssets[spanIndex].currentTime = 0;
        carouselAssets[spanIndex].play();
    }
}

let intervalId;
function startAuto() {
    intervalId = setInterval(function() {
        reset();
        spanIndex = (spanIndex < 4) ? spanIndex + 1 : 0;
        setIndex(true);
    }, 14000)
}

startAuto();

carousel.addEventListener('mouseover', function() {
    arrows.style.color = "rgba(255, 255, 255, 0.5)";
    clearInterval(intervalId);
});

carousel.addEventListener('mouseout', function() {
    arrows.style.color = "rgba(0, 0, 0, 0)";
    startAuto();
});

prev.addEventListener('click', function() {
    reset();
    spanIndex = (spanIndex > 0) ? spanIndex - 1 : 4;
    setIndex(true);
});

next.addEventListener('click', function() {
    reset();
    spanIndex = (spanIndex < 4) ? spanIndex + 1 : 0;
    setIndex(true);
});

document.querySelectorAll('.carousel-controls li').forEach(function(indicator, ind) {
        indicator.addEventListener('click', function() {
            if (spanIndex != ind) {
                reset();
                spanIndex = ind;
                setIndex();
                indicator.classList.add('selected');
            }
        });
});