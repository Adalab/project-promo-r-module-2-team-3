'use strict';

const arrowDesign = document.querySelector('.js-arrow-design');
const arrowFill = document.querySelector('.js-arrow-fill');
const arrowShare = document.querySelector('.js-arrow-share');
const mainDesign = document.querySelector('.js-design');
const fillForm = document.querySelector(".js-fill");


arrowDesign.addEventListener('click',(event)=>{
    event.preventDefault();
    if (mainDesign.classList.contains('hidden')) {
        mainDesign.classList.remove('hidden');
        mainDesign.classList.add('arrowRotate');
    } else {
        mainDesign.classList.add('hidden');
        mainDesign.classList.remove('arrowRotate');
    }
});

arrowFill.addEventListener('click',(event)=>{
    event.preventDefault();
    if (fillForm.classList.contains('hidden')) {
        fillForm.classList.remove('hidden');
    } else {
        fillForm.classList.add('hidden');
    }
});

arrowShare.addEventListener('click',(event)=>{
    event.preventDefault();
    if (mainDesign.classList.contains('hidden')) {
        mainDesign.classList.remove('hidden');
    } else {
        mainDesign.classList.add('hidden');
    }
});