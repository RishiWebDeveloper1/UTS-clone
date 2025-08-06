// Fullscreen functionality
function enterFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
    }
}

// Enter fullscreen when page loads
window.addEventListener('load', () => {
    // Small delay to ensure page is fully loaded
    setTimeout(() => {
        enterFullscreen();
    }, 100);
});

// Also try to enter fullscreen on first user interaction
document.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        enterFullscreen();
    }
}, { once: true });

const imageBox = document.querySelector('.image-box');
const mainImage = document.getElementById('mainImage');

setTimeout(() => {
    mainImage.src = "image/starter-orange-logo.jpg";
}, 1000);

setTimeout(() => {
    mainImage.src = "image/booking-page-demo.jpg";
}, 3000);