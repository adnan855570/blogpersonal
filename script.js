'use strict';

// Add event listener on multiple elments 

const addEventOnElements = function (elements , eventType , callback) {
    len = elements.length;
    for (let i = 0;  i < len; i++) {
        elements[i].addEventListener(eventType , callback);
        
    }
}


// Mobile navbar toggler 

const navbar = document.querySelector("[data-navbar");
const navtogglers = document.querySelectorAll("[data-nav-toggler");

const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers , "click" , toggleNav);

// Header Animations 

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , () => {
    if(window.screenY > 100) {
        header.calllist.add("active");
    }else {
        header.calllist.remove("active");
    }
})