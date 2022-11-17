/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */

`use strict`;

let cardUrl;

// Función que recoge los datos de userData y los convierte en un objeto que guarda en el Local Storage
function saveData() {
  localStorage.setItem('dataFromForm', JSON.stringify(userData));
}

// Función que pinta los datos del LocalStorage en los inputs del formulario
function printFromLocal() {
  userData = JSON.parse(localStorage.getItem('dataFromForm'));
  if (userData.palette === '2') {
    palette1Radius.checked = false;
    palette2Radius.checked = true;
    palette3Radius.checked = false;
    cardArticle.classList.add('palette2');
    cardArticle.classList.remove('palette1');
    cardArticle.classList.remove('palette3');
  } else if (userData.palette === '3') {
    palette1Radius.checked = false;
    palette2Radius.checked = false;
    palette3Radius.checked = true;
    cardArticle.classList.add('palette3');
    cardArticle.classList.remove('palette1');
    cardArticle.classList.remove('palette2');
  } else {
    palette1Radius.checked = true;
    palette2Radius.checked = false;
    palette3Radius.checked = false;
    cardArticle.classList.add('palette1');
    cardArticle.classList.remove('palette2');
    cardArticle.classList.remove('palette3');
  }

  inputName.value = userData.name;
  inputJob.value = userData.job;
  if (userData.photo) {
    profileImage.style.backgroundImage = `url(${userData.photo})`;
    profilePreview.style.backgroundImage = `url(${userData.photo})`;
  }
  inputPhone.value = userData.phone;
  inputEmail.value = userData.email;
  inputLinkedin.value = userData.linkedin;
  inputGithub.value = userData.github;

  // Función que pinta lo que tenga data en la tarjeta preview
  updatePreview();
}

//Si el localStorage está relleno, ejecuta printFromLocal() y si no hacemos el fetch
if (JSON.parse(localStorage.getItem('dataFromForm'))) {
  printFromLocal();
}

//Fetch que recoge los datos del objeto userData, lo envía a la API y genera la tarjeta y el enlace
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

