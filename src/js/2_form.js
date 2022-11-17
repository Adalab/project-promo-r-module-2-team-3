/* eslint-disable no-extra-semi */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
'use strict';
const userData = {
  palette: '1',
  name : '',
  job : '',
  photo : '',
  email : '',
  phone : '',
  linkedin : '',
  github : '',
};

function updatePreview() {
  if (userData.name === '') {
    inputCardName.innerHTML = `Nombre Apellido`;
  } else {
    inputCardName.innerHTML = userData.name;
  }
  
  if (userData.job === '') {
    inputCardJob.innerHTML = `Front-End developer`;
  } else {
    inputCardJob.innerHTML = userData.job;
  }
  
  if(userData.photo === '') {
    inputCardImg.src = '' ;
  } else {
    inputCardImg.src = userData.photo;
  }
 
  if(userData.phone === '') {
    inputCardPhone.href = '' ;
  } else {
    inputCardPhone.href = `tel:${userData.phone}`;
  } 
  
  if(userData.email === '') {
    inputCardEmail.href = '' ;
  } else {
    inputCardEmail.href = `mailto:${userData.email}`;
  }

  if(userData.linkedin === '') {
    inputCardLinkedin.href = '' ;
  } else {
    inputCardLinkedin.href = `https://www.linkedin.com/in/${userData.linkedin}`;
  }
  
  if(userData.github === '') {
    inputCardGithub.href = '' ;
  } else {
    inputCardGithub.href = `https://www.github.com/${userData.github}`;
  }
 
};



fillForm.addEventListener('input', (event) => {
  event.preventDefault();
  const elementName = event.target.name;
  const value = event.target.value;
  
  if (elementName === 'name'){
    userData.name = value;
  }
  if (elementName === 'job'){
    userData.job = value;
  }
  if (elementName === 'photo'){
    userData.photo = value;
  }
  if (elementName === 'phone'){
    userData.phone = value;
  }
  if (elementName === 'email'){
    userData.email = value;
  }
  if (elementName === 'linkedin'){
    userData.linkedin = value;
  }
  if (elementName === 'github'){
    userData.github = value;
  }
  updatePreview();
});

