/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
'use strict';

palette1Radius.addEventListener('click', () =>{
  cardArticle.classList.remove('palette1');
  cardArticle.classList.remove('palette2');
  cardArticle.classList.remove('palette3');
  cardArticle.classList.add('palette1');
});
palette2Radius.addEventListener('click', () =>{
  cardArticle.classList.remove ('palette1');
  cardArticle.classList.remove ('palette2');
  cardArticle.classList.remove ('palette3');
  cardArticle.classList.add ('palette2');
    
});
palette3Radius.addEventListener('click', () =>{
  cardArticle.classList.remove('palette1');
  cardArticle.classList.remove('palette2');
  cardArticle.classList.remove('palette3');
  cardArticle.classList.add('palette3');
});