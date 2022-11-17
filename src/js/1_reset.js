/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';

// Función que resetea los valores para ponerlos vacíos
function handleClickReset(event) {
  event.preventDefault();

  //Bucle para recorrer los inputs del formulario y ponerlos vacíos
  for (const input of inputReset) {
    input.value = "";
  }

  //Recorre la previsualización y pone los valores vacíos o con el texto predeterminado, al igual que la imagen y las paletas
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

  //Tras deseleccionar todas las paletas, seleccionamos la que debe estar por defecto, la 1
  palette1Radius.checked = true;

  //A continuación ocultamos la zona de tarjeta creada y el botón de compartir en Twitter y ponemos los links vacíos
  cardCreated.style = 'display: none';
  twitter.classList.add('hidden');
  linkshare.href = '';
  linkshare.innerHTML = '';
  textError.innerHTML = '';

  //Por último, limpiamos el localStorage y actualizamos la previsualización de la tarjeta
  localStorage.clear();
}

//Función para deseleccionar todas las paletas
function deselectAll(){
  const all = document.getElementsByName("colorpalette");
  all.forEach(item => item.checked = false);
}

// Evento click del botón reset
resetBtn.addEventListener("click", handleClickReset);