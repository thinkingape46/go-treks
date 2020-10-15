let bannerImage = document.getElementById("banner-img");
let header = document.getElementById("header");
let logoContainer = document.getElementById("logo-container");

let birdLeftWing = document.querySelectorAll(".bird-lw");
let birdRightWing = document.querySelectorAll(".bird-rw");

let accountButton = document.getElementById("account-head");
let accountSubMenu = document.querySelectorAll(".account_sub-menu");
let navBarAccountMenuArrow = document.getElementById("account_sub-menu_button");

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

let faqQuestion = document.querySelectorAll(".faq");
let faqArrow = document.querySelectorAll(".faq_question_img");

accountButton.addEventListener("click", (e) => {
    e.preventDefault();
    accountSubMenu.forEach(el => {el.classList.toggle("account_sub-menu--show")});
    navBarAccountMenuArrow.classList.toggle("account-head_arrow--menu-is-open");
})


document.addEventListener("scroll", () => headerFunc());
// Can improve the performance of the scroll event, if something like 'throttle' is used //

function headerFunc() {    
        
    if (bannerImage.getBoundingClientRect().top <= -100 && !header.classList.contains("header--scrolled")){
        header.classList.add("header--scrolled");
        logoContainer.classList.add("logo-container--scrolled");
        navBar[0].classList.add("nav-bar--scrolled");
        accountSubMenu.forEach(el => {el.classList.add("account_sub-menu--scrolled")});
        birdLeftWing.forEach(e => {e.classList.add("bird-lw--scrolled")});
        birdRightWing.forEach(e => {e.classList.add("bird-rw--scrolled")});
    }
    else if (bannerImage.getBoundingClientRect().top >= -100 && header.classList.contains("header--scrolled")) {
        header.classList.remove("header--scrolled");
        logoContainer.classList.remove("logo-container--scrolled");
        navBar[0].classList.remove("nav-bar--scrolled");
        accountSubMenu.forEach(el => {el.classList.remove("account_sub-menu--scrolled")});
        birdLeftWing.forEach(e => {e.classList.remove("bird-lw--scrolled")});
        birdRightWing.forEach(e => {e.classList.remove("bird-rw--scrolled")});
    }
}

// Taking care of the humburger menu icon for smaller screens.
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
    e.addEventListener('click', (el) => {
        el.currentTarget.children[1].classList.toggle("faq_answer--reveal-answer");
        console.log(el.currentTarget.children[0].children[1].classList.toggle("faq_question_img--reveal-answer"));
    })
})


// Controlling video container dimensions //
const videoContainer = document.getElementById("video");
let videoWidth = videoContainer.clientWidth;
videoContainer.style.height = `${videoWidth/1.77}px`;

window.addEventListener('resize', () => {
    const videoContainer = document.getElementById("video");
    let videoWidth = videoContainer.clientWidth;
    videoContainer.style.height = `${videoWidth/1.77}px`;
})
