let bannerImage = document.getElementById("banner-img");
let header = document.getElementById("header");

document.addEventListener("scroll", () => {
    if (bannerImage.getBoundingClientRect().top <= -100) {
        header.classList.add("header_dark");
    }
    else {
        header.classList.remove("header_dark");
    }
})