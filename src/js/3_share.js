/* eslint-disable no-undef */
'use strict';


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
  localCard();
}

btnCreated.addEventListener('click', handleClick);