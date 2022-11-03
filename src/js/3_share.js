/* eslint-disable no-undef */
'use strict';


/*Seccion comparte
const cardCreated = document.querySelector('.js-cardCreated');
const btnCreated = document.querySelector('.js-linkCreated');*/


function colorBtn(){
  btnCreated.classList.add('linkgrey');
}
function showCardCreated(){
  cardCreated.classList.remove('hidden');
}

function handleClick(event){
  
  event.preventDefault();
  showCardCreated();
  colorBtn();
}

btnCreated.addEventListener('click', handleClick);