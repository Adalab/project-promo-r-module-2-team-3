/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */

//const linkshare = document.querySelector('.js-shareUrl');

`use strict`;

let cardUrl;

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

