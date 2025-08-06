const imageBox = document.querySelector('.image-box');
const mainImage = document.getElementById('mainImage');

setTimeout(() => {
    mainImage.src = "image/starter-orange-logo.jpg";
}, 1000);

setTimeout(() => {
    mainImage.src = "image/booking-page-demo.jpg";
}, 3000);