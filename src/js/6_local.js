/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */

//const linkshare = document.querySelector('.js-shareUrl');

`use strict`;

let cardUrl;

function saveData(userData) {
  localStorage.setItem('dataFromForm', JSON.stringify(userData));
}

if (JSON.parse(localStorage.getItem('dataFromForm'))) {
  printFromLocal();
}

function printFromLocal() {
  data = JSON.parse(localStorage.getItem('dataFromForm'));
  if (data.palette === '2') {
    palette1Radius.checked = false;
    palette2Radius.checked = true;
    palette3Radius.checked = false;
    cardArticle.classList.add('palette-2');
    cardArticle.classList.remove('palette-1');
    cardArticle.classList.remove('palette-3');
  } else if (data.palette === '3') {
    palette1Radius.checked = false;
    palette2Radius.checked = false;
    palette3Radius.checked = true;
    cardArticle.classList.add('palette-3');
    cardArticle.classList.remove('palette-1');
    cardArticle.classList.remove('palette-2');
  } else {
    palette1Radius.checked = true;
    palette2Radius.checked = false;
    palette3Radius.checked = false;
    cardArticle.classList.add('palette-1');
    cardArticle.classList.remove('palette-2');
    cardArticle.classList.remove('palette-3');
  }

  inputName.value = data.name;
  inputJob.value = data.job;
  if (data.photo) {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  inputPhone.value = data.phone;
  inputEmail.value = data.email;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;

  updatePreview();
}


/*function saveData(userData){
  localStorage.setItem ("losValoresDelDemonio", JSON.stringify(userData));
}

///Cuando cargue la pg
userData = JSON.parse(localStorage.getItem('losValoresDelDemonio'));
updatePreview();
inputName.value = userData.name;
inputJob.value = userData.job;
inputImage.value = userData.photo;
inputEmail.value = userData.email;
inputPhone.value = userData.phone;
inputLinkedin.value = userData.linkedin;
inputGithub.value = userData.github;*/

function localCard(){
 
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
  method: 'POST', // Para enviar datos
  body: JSON.stringify(userData),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then(responseJson =>{
    if (responseJson.success) {
        cardUrl = responseJson.cardURL;
        textError.innerHTML = 'La tarjeta ha sido creada:';
        cardCreated.classList.remove('hidden');
        twitter.classList.remove('hidden');
        cardCreated.style = 'display: flex';
        linkshare.style = 'display: block;';
        linkshare.innerHTML = cardUrl; 
        linkshare.href = cardUrl;
        twitter.href = `https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20${cardUrl}`;
    }else{
        cardCreated.style = 'border-top: solid 1px $border-color;';
        linkshare.style = 'display: block;';
        textError.innerHTML = 'Faltan datos por rellenar, no seas vago.';  
    }
  });
}

