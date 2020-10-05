let bannerImage = document.getElementById("banner-img");
let header = document.getElementById("header");
let logoContainer = document.getElementById("logo-container");

document.addEventListener("scroll", () => {
    if (bannerImage.getBoundingClientRect().top <= -100) {
        header.classList.add("header--scrolled");
        logoContainer.classList.add("logo-container--scrolled");
    }
    else {
        header.classList.remove("header--scrolled");
        logoContainer.classList.remove("logo-container--scrolled");
    }
})