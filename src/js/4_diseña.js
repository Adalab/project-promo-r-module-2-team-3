/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
'use strict';

const functionSelectColor = (event) => {
  cardArticle.classList.remove('palette1');
  cardArticle.classList.remove('palette2');
  cardArticle.classList.remove('palette3');
  cardArticle.classList.add(event.currentTarget.id); 
  userData.palette = event.currentTarget.value;
};
palette1Radius.addEventListener('click', functionSelectColor);

palette2Radius.addEventListener('click', functionSelectColor);

palette3Radius.addEventListener('click', functionSelectColor);