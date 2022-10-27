/* eslint-disable no-extra-semi */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
'use strict';

// Seccion formulario rellena
// const inputName = document.querySelector(".js_input_name");
// const inputJob = document.querySelector(".js_input_job");
// const inputImg = document.querySelector(".js_input_img");
// const inputEmail = document.querySelector(".js_input_email");
// const inputPhone = document.querySelector(".js_input_phone");
// const inputSocial = document.querySelector(".js_input_social");
// const inputGit = document.querySelector(".js_input_git");

// Seccion de la tarjeta
// const inputCardName = document.querySelector(".js_card_name");
// const inputCardJob = document.querySelector(".js_card_job");
// const inputCardImg = document.querySelector(".js_card_img");
// const inputCardPhone = document.querySelector(".js_card_phone");
// const inputCardEmail = document.querySelector(".js_card_email");
// const inputCardSocial = document.querySelector(".js_card_social");
// const inputCardGit = document.querySelector(".js_card_git");

let name = '';
let job = '';
let img = '';
let email = '';
let phone = '';
let linkedin = '';
let github = '';

function updatePreview() {
  if (name === '') {
    inputCardName.innerHTML = `Nombre Apellido`;
  } else {
    inputCardName.innerHTML = name;
  }
  
  if (job === '') {
    inputCardJob.innerHTML = `Front-End developer`;
  } else {
    inputCardJob.innerHTML = job;
  }
  
  if(img === '') {
    inputCardImg.src = '' ;
  } else {
    inputCardImg.src = img;
  }
 
  if(phone === '') {
    inputCardPhone.href = '' ;
  } else {
    inputCardPhone.href = `tel:${phone}`;
  } 
  
  if(email === '') {
    inputCardEmail.href = '' ;
  } else {
    inputCardEmail.href = `mailto${email}`;
  }

  if(social === '') {
    inputCardLinkedin.href = '' ;
  } else {
    inputCardLinkedin.href = linkedin;
  }
  
  if(git === '') {
    inputCardGithub.href = '' ;
  } else {
    inputCardGithub.href = github;
  }
};



fillForm.addEventListener('input', (event) => {
  event.preventDefault();
  const elementName = event.target.name;
  const value = event.target.value;

  if (elementName === 'name'){
    name = value;
  }
  if (elementName === 'job'){
    job = value;
  }
  if (elementName === 'img'){
    img = value;
  }
  if (elementName === 'phone'){
    phone = value;
  }
  if (elementName === 'email'){
    email = value;
  }
  if (elementName === 'linkedin'){
    linkedin = value;
  }
  if (elementName === 'github'){
    github = value;
  }

  updatePreview();
});

