/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
"use strict";

//Funciones
const unfold = (arrow, content) => {
  arrow.classList.toggle("arrowRotate");
  content.classList.toggle("hidden");
};

mainShare.classList.add("hidden");
fillForm.classList.add("hidden");

//addEventListener


arrowDesign.addEventListener("click", () => {
  unfold(arrowDesign, mainDesign);
  if (!mainDesign.classList.contains("hidden")) {
    mainShare.classList.add("hidden");
    fillForm.classList.add("hidden");
    arrowFill.classList.add("arrowRotate");
    arrowShare.classList.add("arrowRotate");
  }
  
});

arrowFill.addEventListener("click", () => {
  unfold(arrowFill, fillForm);
  if (!fillForm.classList.contains("hidden")) {
    mainShare.classList.add("hidden");
    mainDesign.classList.add("hidden");
    arrowDesign.classList.add("arrowRotate");
    arrowShare.classList.add("arrowRotate");
  }
});

arrowShare.addEventListener("click", () => {
  unfold(arrowShare, mainShare);
  if (!mainShare.classList.contains("hidden")) {
    fillForm.classList.add("hidden");
    mainDesign.classList.add("hidden");
    arrowFill.classList.add("arrowRotate");
    arrowDesign.classList.add("arrowRotate");
  }
});
