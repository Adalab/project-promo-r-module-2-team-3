/* eslint-disable no-extra-semi */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
'use strict';

let userData = {
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
    const regExPhone = /[6-9]{1}[0-9]{8}/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
    if (regExPhone.test(value) || ''){
      userData.phone = value;
      smallText[1].innerHTML = '';
    } else { //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
      smallText[1].innerHTML = 'El teléfono que has introducido no es correcto.';
    }
  }
  if (elementName === 'email'){
    const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; //Se añade una comprobación para que vea si el valor del email cumple con la expresión regular dada
    if (regExEmail.test(value) || ''){
      userData.email = value;
      smallText[0].innerHTML = '';
    } else { //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
      smallText[0].innerHTML = 'El email que has introducido no es correcto';
    }
  }
  if (elementName === 'linkedin'){
    userData.linkedin = value;
  }
  if (elementName === 'github'){
    userData.github = value;
  }
  
  updatePreview();
  saveData();
});
