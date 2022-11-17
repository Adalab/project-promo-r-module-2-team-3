/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';
function handleClickReset(event){
  event.preventDefault();
  //resetear la variable data
  userData = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };

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
  localStorage.clear();
  updatePreview();
}

function deselectAll(){
  const all = document.getElementsByName("colorpalette");
  all.forEach(item => item.checked = false);
}

resetBtn.addEventListener("click", handleClickReset);