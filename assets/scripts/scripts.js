let bannerImage = document.getElementById("banner-img");
let header = document.getElementById("header");
let logoContainer = document.getElementById("logo-container");
let transportContainer = document.getElementsByClassName("feature_transport");
let wheel = document.getElementsByClassName("feature_icon_wheel");
let foodfeature = document.getElementsByClassName("feature_food");
let fork = document.getElementsByClassName("feature_icon_fork");
let spoon = document.getElementsByClassName("feature_icon_spoon");

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

foodfeature[0].addEventListener('mouseover', () => {
    fork[0].classList.add("feature_icon_fork--spin");
    spoon[0].classList.add("feature_icon_spoon--spin");
})
foodfeature[0].addEventListener('mouseout', () => {
    fork[0].classList.remove("feature_icon_fork--spin");
    spoon[0].classList.remove("feature_icon_spoon--spin");
})
transportContainer[0].addEventListener('mouseover', () => {
    wheel[0].classList.add("feature_icon_wheel--spin");
})
transportContainer[0].addEventListener('mouseout', () => {
    wheel[0].classList.remove("feature_icon_wheel--spin");
})