"use strict";

// Seccion formulario rellena
// const inputName = document.querySelector(".js_input_name");
// const inputJob = document.querySelector(".js_input_job");
// const inputImg = document.querySelector(".js_input_img");
// const inputEmail = document.querySelector(".js_input_email");
// const inputPhone = document.querySelector(".js_input_phone");
// const inputSocial = document.querySelector(".js_input_social");
// const inputGit = document.querySelector(".js_input_git");

// Seccion de la tarjeta
// const inputGit = document.querySelector(".js_card_name");
// const inputGit = document.querySelector(".js_card_job");
// const inputGit = document.querySelector(".js_card_img");
// const inputGit = document.querySelector(".js_card_phone");
// const inputGit = document.querySelector(".js_card_email");
// const inputGit = document.querySelector(".js_card_social");
// const inputGit = document.querySelector(".js_card_git");



fillForm.addEventListener("keyup", (event) => {
    event.preventDefault();
    const userData = {
        name: inputName.value,
        job: inputJob.value,
        img: inputImg.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        social: inputSocial.value,
        git: inputGit.value,
    };
    return userData;
    console.log(userData.name)
});

