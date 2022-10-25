/* eslint-disable quotes */
"use strict";
//Variables Globales + QuerySelector
const arrowDesign = document.querySelector(".js-arrow-design");
const arrowFill = document.querySelector(".js-arrow-fill");
const arrowShare = document.querySelector(".js-arrow-share");
const mainDesign = document.querySelector(".js-design");
const fillForm = document.querySelector(".js-fill");
const mainShare = document.querySelector(".js-share");
const resetBtn = document.querySelector(".js_reset-btn");
const inputName = document.querySelector(".js_input_name");
const inputJob = document.querySelector(".js_input_job");
const inputImg = document.querySelector(".js_input_img");
const inputEmail = document.querySelector(".js_input_email");
const inputPhone = document.querySelector(".js_input_phone");
const inputSocial = document.querySelector(".js_input_social");
const inputGit = document.querySelector(".js_input_git");

//Funciones
const unfold = (arrow, content) => {
  arrow.classList.toggle("arrowRotate");
  content.classList.toggle("hidden");
};

mainShare.classList.add("hidden");
fillForm.classList.add("hidden");

//addEventListener
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  inputName.value = "";
  inputJob.value = "";
  inputImg.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputSocial.value = "";
  inputGit.value = "";
});

arrowDesign.addEventListener("click", () => {
  unfold(arrowDesign, mainDesign);
  if (
    !mainDesign.classList.contains("hidden") &&
    arrowDesign.classList.contains("arrowRotate")
  ) {
    mainShare.classList.add("hidden");
    fillForm.classList.add("hidden");
  }
});

arrowFill.addEventListener("click", () => {
  unfold(arrowFill, fillForm);
  if (!fillForm.classList.contains("hidden")) {
    mainShare.classList.add("hidden");
    mainDesign.classList.add("hidden");
  }
});

arrowShare.addEventListener("click", () => {
  unfold(arrowShare, mainShare);
  if (!mainShare.classList.contains("hidden")) {
    fillForm.classList.add("hidden");
    mainDesign.classList.add("hidden");
  }
});
