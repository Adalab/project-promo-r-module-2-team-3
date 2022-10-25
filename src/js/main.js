'use strict';

const arrowDesign = document.querySelector('.js-arrow-design');
const arrowFill = document.querySelector('.js-arrow-fill');
const arrowShare = document.querySelector('.js-arrow-share');
const mainDesign = document.querySelector('.js-design');
const fillForm = document.querySelector(".js-fill");
const mainShare = document.querySelector(".js-share");

const unfold = (arrow,content) => {
    arrow.classList.toggle('arrowRotate');
    content.classList.toggle('hidden');
}

mainShare.classList.add('hidden');
fillForm.classList.add('hidden')

arrowDesign.addEventListener('click',()=>{
    unfold(arrowDesign,mainDesign);
    if (!mainDesign.classList.contains('hidden') && arrowDesign.classList.contains('arrowRotate')) {
        mainShare.classList.add('hidden');
        fillForm.classList.add('hidden');
    }
});

arrowFill.addEventListener('click',()=>{
    unfold(arrowFill,fillForm);
    if (!fillForm.classList.contains('hidden')) {
        mainShare.classList.add('hidden');
        mainDesign.classList.add('hidden');
    }
});

arrowShare.addEventListener('click',()=>{
    unfold(arrowShare,mainShare);
    if (!mainShare.classList.contains('hidden')) {
        fillForm.classList.add('hidden');
        mainDesign.classList.add('hidden');
    }
});