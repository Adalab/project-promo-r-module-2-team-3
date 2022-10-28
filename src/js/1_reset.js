/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  inputName.value = "";
  inputJob.value = "";
  inputImg.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputLinkedin.value = "";
  inputGithub.value = "";
  /*inputCardName.innerHTML =;
  inputCardJob.innerHTML = ´Front-end developer´;
  inputCardImg. = "";
  inputCardPhone.value = "";
  inputCardEmail.value = "";
  inputCardGithub.value = "";*/
  inputCardName.reset();
  inputCardJob.reset();
});