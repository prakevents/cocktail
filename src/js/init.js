
// Toggle the visibility of the menu hamburger, X mark, and mobile menu
const menuHamburger = document.getElementById("menu-hamburger");
const xMark = document.getElementById("x-mark");
menuHamburger.addEventListener("click", toggleMenuIcons);
xMark.addEventListener("click", toggleMenuIcons);

// Initially hide the X mark icon and mobile menu
xMark.classList.add("hide");
const mobileMenu = document.querySelector(".nav-links");

function toggleMenuIcons() {
    const mobileMenu = document.querySelector(".nav-links");
    menuHamburger.classList.toggle("hide");
    xMark.classList.toggle("hide");
    mobileMenu.classList.toggle("mobile-menu");
}

window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active')
        }

    }
}


function scrollToDiv(index) {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (index >= 0 && index < parallaxElements.length) {
        const element = parallaxElements[index];
        const offsetTop = element.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    toggleMenuIcons();

}






/* */


const parallaxEff = document.getElementById('para-eff');

window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset;
    parallaxEff.style.backgroundPositionY = offset * 0.7 + "px";

})


// carausel1
const moveLeftBtn = document.getElementById('moveLeft');
const moveRightBtn = document.getElementById('moveRight');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function moveRight() {
    carouselItems[currentItem].classList.remove('active3');
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.add('active3');
}

function moveLeft() {
    carouselItems[currentItem].classList.remove('active3');
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentItem].classList.add('active3');
}
carouselItems[currentItem].classList.add('active3');

moveLeftBtn.addEventListener('click', moveLeft);
moveRightBtn.addEventListener('click', moveRight);










const moveLeftBtn2 = document.getElementById('moveLeft2');
const moveRightBtn2 = document.getElementById('moveRight2');
const carouselItems2 = document.querySelectorAll('.carousel-item2');
let currentItem2 = 0;

function moveRight2() {
    carouselItems2[currentItem2].classList.remove('active2');
    currentItem2 = (currentItem2 + 1) % carouselItems2.length;
    carouselItems2[currentItem2].classList.add('active2');
}

function moveLeft2() {
    carouselItems2[currentItem2].classList.remove('active2');
    currentItem2 = (currentItem2 - 1 + carouselItems2.length) % carouselItems2.length;
    carouselItems2[currentItem2].classList.add('active2');
}

carouselItems2[currentItem2].classList.add('active2');

moveLeftBtn2.addEventListener('click', moveLeft2);
moveRightBtn2.addEventListener('click', moveRight2);


