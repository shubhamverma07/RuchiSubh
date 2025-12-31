const images = [
    "ruchi1.jpg",
    "ruchi2.jpg",
    "ruchi3.jpg",
    "ruchi4.jpg",
    "ruchi5.png",
    "ruchi6.jpg",
    "ruchi7.jpg",
    "ruchi8.jpg",
    "ruchi9.jpg",
    "ruchi10.jpg",
    "ruchi11.jpg",
    "ruchi12.jpg",
    "ruchi13.jpg",
    "ruchi14.jpg",
    "ruchi15.jpg"

];

let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
    slider.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
        slider.style.opacity = 1;
    }, 1000);

}, 3500);

