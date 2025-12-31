const images = [
    "image/ruchi1.jpg",
    "image/ruchi2.jpg",
    "image/ruchi3.jpg",
    "image/ruchi4.jpg",
    "image/ruchi5.png",
    "image/ruchi6.jpg",
    "image/ruchi7.jpg",
    "image/ruchi8.jpg",
    "image/ruchi9.jpg",
    "image/ruchi10.jpg",
    "image/ruchi11.jpg",
    "image/ruchi12.jpg",
    "image/ruchi13.jpg",
    "image/ruchi14.jpg",
    "image/ruchi15.jpg"

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
