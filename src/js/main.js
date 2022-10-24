'use strict';

const arrowDesign = document.querySelector('.js-arrow-design');
const arrowFill = document.querySelector('.js-arrow-fill');
const arrowShare = document.querySelector('.js-arrow-share');
const mainDesign = document.querySelector('.js-design');
const fillForm = document.querySelector(".js-fill");
const mainShare = document.querySelector(".js-share");

function unfold (arrow,content){
    arrow.classList.toggle('arrowRotate');
    content.classList.toggle('hidden');
}

arrowDesign.addEventListener('click',()=>{
    unfold(arrowDesign,mainDesign);
    /*mainDesign.classList.toggle('hidden');
    arrowDesign.classList.toggle('arrowRotate');
    if (mainDesign.classList.contains('hidden')) {
        mainDesign.classList.remove('hidden');
        arrowDesign.classList.remove('arrowRotate');
    } else {
        mainDesign.classList.add('hidden');
        arrowDesign.classList.add('arrowRotate');
    }*/
});

arrowFill.addEventListener('click',()=>{
    unfold(arrowFill,fillForm);
    /*fillForm.classList.toggle('hidden');
    arrowFill.classList.toggle('arrowRotate');
    if (fillForm.classList.contains('hidden')) {
        fillForm.classList.remove('hidden');
    } else {
        fillForm.classList.add('hidden');
    }*/
});

arrowShare.addEventListener('click',()=>{
    unfold(arrowShare,mainShare);
    /*mainShare.classList.toggle('hidden');
    arrowShare.classList.toggle('arrowRotate');
    if (mainDesign.classList.contains('hidden')) {
        mainDesign.classList.remove('hidden');
    } else {
        mainDesign.classList.add('hidden');
    }*/
});