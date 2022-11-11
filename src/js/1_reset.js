/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  for (const input of inputReset) {
    input.value = "";
  }

  inputCardName.innerHTML = `Nombre Apellido`;
  inputCardJob.innerHTML = `Front-end developer`;
  inputCardPhone.href = "";
  inputCardImg.src = "";
  inputCardEmail.href = "";
  inputCardGithub.href = "";
  profileImage.style.backgroundImage = ``;
  profilePreview.style.backgroundImage = ``;
  btnCreated.classList.remove('linkgrey');
  cardArticle.classList.add('palette1');
  cardArticle.classList.remove('palette2');
  cardArticle.classList.remove('palette3');
  deselectAll();
  palette1Radius.checked = true;
  cardCreated.style = 'display: none';
  twitter.classList.add('hidden');
  linkshare.href = '';
  linkshare.innerHTML = '';
  textError.innerHTML = '';
});

function deselectAll(){
  const all = document.getElementsByName("colorpalette");
  all.forEach(item => item.checked = false);
}
