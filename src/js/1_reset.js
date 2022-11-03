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
  inputCardName.innerHTML = `Nombre Apellido`;
  inputCardJob.innerHTML = `Front-end developer`;
  inputCardPhone.href = "";
  inputCardImg.src = "";
  inputCardEmail.href = "";
  inputCardGithub.href = "";
  profileImage.style.backgroundImage = ``;
  profilePreview.style.backgroundImage = ``;
  cardCreated.classList.add('hidden');
  btnCreated.classList.remove('linkgrey');
});