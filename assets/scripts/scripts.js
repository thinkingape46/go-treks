let bannerImage = document.getElementById("banner-img");
let header = document.getElementById("header");
let logoContainer = document.getElementById("logo-container");

let hamburgerIcon = document.getElementById("hamburger-icon");
let topHamburgerBar = document.getElementById("top-bar");
let middleHamburgerBar = document.getElementById("middle-bar");
let bottomHamburgerBar = document.getElementById("bottom-bar");
let navBar = document.querySelectorAll(".nav-bar");

let transportContainer = document.getElementsByClassName("feature_transport");
let wheel = document.getElementsByClassName("feature_icon_wheel");
let foodfeature = document.getElementsByClassName("feature_food");
let fork = document.getElementsByClassName("feature_icon_fork");
let spoon = document.getElementsByClassName("feature_icon_spoon");
let stayhouse = document.getElementsByClassName("feature_stay");
let human = document.getElementsByClassName("feature_stay_human");
let guideFeature = document.getElementsByClassName("feature_guide");
let guideLeftHand = document.getElementsByClassName("feature_icon_guide-hand-l");
let guideRightHand = document.getElementsByClassName("feature_icon_guide-hand-r");
let trekBookButton = document.getElementsByClassName("trek_book");
let buttonEffect = document.getElementsByClassName("button-effect");

let faqQuestion = document.querySelectorAll(".faq")

document.addEventListener("scroll", () => {
    if (bannerImage.getBoundingClientRect().top <= -100) {
        header.classList.add("header--scrolled");
        logoContainer.classList.add("logo-container--scrolled");
        navBar[0].classList.add("nav-bar--scrolled")
    }
    else {
        header.classList.remove("header--scrolled");
        logoContainer.classList.remove("logo-container--scrolled");
        navBar[0].classList.remove("nav-bar--scrolled")
    }
})

hamburgerIcon.addEventListener('click', () => {
    topHamburgerBar.classList.toggle("top-bar--active");
    middleHamburgerBar.classList.toggle("middle-bar--active");
    bottomHamburgerBar.classList.toggle("bottom-bar--active");
    navBar.forEach(el => {el.classList.toggle("nav-bar--show");});
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

stayhouse[0].addEventListener('mouseover', () => {
    human[0].classList.add("feature_stay_human--enter-house");
})
stayhouse[0].addEventListener('mouseout', () => {
    human[0].classList.remove("feature_stay_human--enter-house");
})

guideFeature[0].addEventListener('mouseover', () => {
    guideLeftHand[0].classList.add("feature_icon_guide-hand-l--wave");
    guideRightHand[0].classList.add("feature_icon_guide-hand-r--wave");
})
guideFeature[0].addEventListener('mouseout', () => {
    guideLeftHand[0].classList.remove("feature_icon_guide-hand-l--wave");
    guideRightHand[0].classList.remove("feature_icon_guide-hand-r--wave");    
})

trekBookButton[0].addEventListener('mouseover', () => {
    buttonEffect[0].classList.add("button-effect--active");
})
trekBookButton[0].addEventListener('mouseout', () => {
    buttonEffect[0].classList.remove("button-effect--active");
})
trekBookButton[1].addEventListener('mouseover', () => {
    buttonEffect[1].classList.add("button-effect--active");
})
trekBookButton[1].addEventListener('mouseout', () => {
    buttonEffect[1].classList.remove("button-effect--active");
})

faqQuestion.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(e.target.nextElementSibling.classList.toggle("faq_answer--reveal-answer"));
    })
})