// Animation volet déroulant droite

const burger = document.querySelector('.menu-btn')

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
        gsap.to(".links", {x: "100%"});
        gsap.set("body", {overflow: "auto"})
        gsap.set("body", {overflowX: "hidden"})
    }else{
        gsap.to(".links", {x: "0%"});
        gsap.fromTo(".links a", {opacity: 0, y: 0}, {opacity: 1, y: 20, delay: 0.25, stagger: 0.25});
        gsap.set("body", {overflow: "hidden"})
    }
    burger.classList.toggle("active");
});

// Animation burger

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Scroll Top

function scrollToTop(){
    window.scrollTo(0, 0);
}