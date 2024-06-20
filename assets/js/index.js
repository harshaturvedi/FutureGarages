const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");

window.addEventListener("load", function () {
    preloader.style.display = "none";
    content.style.display = "block";
});

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const navLogo = document.getElementById("nav-logo");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navMenu.classList.add("isScrolled");
        navLogo.classList.add("isScrolled");

    } else {
        navMenu.classList.remove("isScrolled");
        navLogo.classList.remove("isScrolled");
    }
}

$("#S1").click(function () {
    $('html,body').animate({
        scrollTop: $("#1").offset().top
    },
        'slow');
});

$("#S2").click(function () {
    $('html,body').animate({
        scrollTop: $("#2").offset().top
    },
        'slow');
});

$("#slideS2").click(function () {
    $('html,body').animate({
        scrollTop: $("#2").offset().top
    },
        'slow');
});

$("#S3").click(function () {
    $('html,body').animate({
        scrollTop: $("#3").offset().top
    },
        'slow');
});

$("#S4").click(function () {
    $('html,body').animate({
        scrollTop: $("#4").offset().top
    },
        'slow');
});

$("#slideS4").click(function () {
    $('html,body').animate({
        scrollTop: $("#4").offset().top
    },
        'slow');
});

$("#S5").click(function () {
    $('html,body').animate({
        scrollTop: $("#5").offset().top
    },
        'slow');
});

$("#S6").click(function () {
    $('html,body').animate({
        scrollTop: $("#6").offset().top
    },
        'slow');
});

$("#S7").click(function () {
    $('html,body').animate({
        scrollTop: $("#7").offset().top
    },
        'slow');
});

$("#dot1").click(function () {
    $("#dot1pic").addClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});

$("#dot2").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").addClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});
$("#dot3").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").addClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});
$("#dot4").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").addClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});
$("#dot5").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").addClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});
$("#dot6").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").addClass("dot-pic-show");
    $("#dot7pic").removeClass("dot-pic-show");
});
$("#dot7").click(function () {
    $("#dot1pic").removeClass("dot-pic-show");
    $("#dot2pic").removeClass("dot-pic-show");
    $("#dot3pic").removeClass("dot-pic-show");
    $("#dot4pic").removeClass("dot-pic-show");
    $("#dot5pic").removeClass("dot-pic-show");
    $("#dot6pic").removeClass("dot-pic-show");
    $("#dot7pic").addClass("dot-pic-show");
});


const fadeRight = document.querySelectorAll(".fade-right");

const options = {
    threshold: 0.5
};

const FadeRightcallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-right-appear");
        }
    });
};

const fadeRightObserver = new IntersectionObserver(FadeRightcallback, options);

fadeRight.forEach(x => {
    fadeRightObserver.observe(x);
});


const fadeUp = document.querySelectorAll(".fade-up");

const FadeUpcallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-appear");
        }
    });
};

const fadeUpObserver = new IntersectionObserver(FadeUpcallback, options);

fadeUp.forEach(x => {
    fadeUpObserver.observe(x);
});

const cardUp = document.querySelectorAll(".card-fade-up");
const cardUpcallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("card-fade-up-appear");
        }
    });
};
const cardUpObserver = new IntersectionObserver(cardUpcallback, options);

cardUp.forEach(x => {
    cardUpObserver.observe(x);
});

const cardDown = document.querySelectorAll(".card-fade-down");
const cardDowncallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("card-fade-down-appear");
        }
    });
};
const cardDownObserver = new IntersectionObserver(cardDowncallback, options);

cardDown.forEach(x => {
    cardDownObserver.observe(x);
});


$(document).ready(function () {
    $('.bxslider').bxSlider();
});