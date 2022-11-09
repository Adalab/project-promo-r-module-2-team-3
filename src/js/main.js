/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
"use strict";

//Funciones
const unfold = (arrow, content) => {
  if ((!fillForm.classList.contains('hidden') || !mainShare.classList.contains('hidden')) && content.classList.contains('js-design')) {
    arrow.classList.toggle("arrowRotate");
    content.classList.toggle("hidden");
  } else if ((!mainDesign.classList.contains('hidden') || !mainShare.classList.contains('hidden')) && content.classList.contains('js-fill')) {
    arrow.classList.toggle("arrowRotate");
    content.classList.toggle("hidden");
  } else if ((!fillForm.classList.contains('hidden') || !mainDesign.classList.contains('hidden')) && content.classList.contains('js-share')) {
    arrow.classList.toggle("arrowRotate");
    content.classList.toggle("hidden");
  }
};

mainShare.classList.add("hidden");
fillForm.classList.add("hidden");
arrowFill.classList.add("arrowRotate");
arrowShare.classList.add("arrowRotate");

//addEventListener


designClick.addEventListener("click", () => {
  unfold(arrowDesign, mainDesign);
  cardCreated.style = 'display: none';
  linkshare.style = 'display: none;';
  if (!mainDesign.classList.contains("hidden")) {
    mainShare.classList.add("hidden");
    fillForm.classList.add("hidden");
    arrowFill.classList.add("arrowRotate");
    arrowShare.classList.add("arrowRotate");
  }
});

fillClick.addEventListener("click", () => {
  unfold(arrowFill, fillForm);
  cardCreated.style = 'display: none';
  linkshare.style = 'display: none;';
  if (!fillForm.classList.contains("hidden")) {
    mainShare.classList.add("hidden");
    mainDesign.classList.add("hidden");
    arrowDesign.classList.add("arrowRotate");
    arrowShare.classList.add("arrowRotate");
  }
});

shareClick.addEventListener("click", () => {
  unfold(arrowShare, mainShare);
  btnCreated.classList.remove('linkgrey');
  textError.innerHTML = ''; 
  if (!mainShare.classList.contains("hidden")) {
    fillForm.classList.add("hidden");
    mainDesign.classList.add("hidden");
    arrowFill.classList.add("arrowRotate");
    arrowDesign.classList.add("arrowRotate");
  }
});
