"use strict";const arrowDesign=document.querySelector(".js-arrow-design"),arrowFill=document.querySelector(".js-arrow-fill"),arrowShare=document.querySelector(".js-arrow-share"),mainDesign=document.querySelector(".js-design"),fillForm=document.querySelector(".js-fill"),mainShare=document.querySelector(".js-share"),fillClick=document.querySelector(".js-fillClick"),designClick=document.querySelector(".js-designClick"),shareClick=document.querySelector(".js-shareClick"),resetBtn=document.querySelector(".js_reset-btn"),inputReset=document.querySelectorAll(".js_inputReset"),cardArticle=document.querySelector(".js_card_article"),palette1Radius=document.querySelector(".js-palette1"),palette2Radius=document.querySelector(".js-palette2"),palette3Radius=document.querySelector(".js-palette3"),inputCardName=document.querySelector(".js_card_name"),inputCardJob=document.querySelector(".js_card_job"),inputCardImg=document.querySelector(".js_card_img"),inputCardPhone=document.querySelector(".js_card_phone"),inputCardEmail=document.querySelector(".js_card_email"),inputCardLinkedin=document.querySelector(".js_card_linkedin"),inputCardGithub=document.querySelector(".js_card_github"),cardCreated=document.querySelector(".js-cardCreated"),btnCreated=document.querySelector(".js-linkCreated"),linkshare=document.querySelector(".js-shareUrl"),textError=document.querySelector(".js-textError"),twitter=document.querySelector(".js-twitter");function deselectAll(){document.getElementsByName("colorpalette").forEach(e=>e.checked=!1)}resetBtn.addEventListener("click",e=>{e.preventDefault();for(const e of inputReset)e.value="";inputCardName.innerHTML="Nombre Apellido",inputCardJob.innerHTML="Front-end developer",inputCardPhone.href="",inputCardImg.src="",inputCardEmail.href="",inputCardGithub.href="",profileImage.style.backgroundImage="",profilePreview.style.backgroundImage="",cardCreated.classList.add("hidden"),btnCreated.classList.remove("linkgrey"),cardArticle.classList.add("palette1"),cardArticle.classList.remove("palette2"),cardArticle.classList.remove("palette3"),deselectAll(),palette1Radius.checked=!0,twitter.classList.add("hidden"),linkshare.href="",linkshare.innerHTML="",textError.innerHTML=""});const userData={palette:"1",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};function updatePreview(){""===userData.name?inputCardName.innerHTML="Nombre Apellido":inputCardName.innerHTML=userData.name,""===userData.job?inputCardJob.innerHTML="Front-End developer":inputCardJob.innerHTML=userData.job,""===userData.photo?inputCardImg.src="":inputCardImg.src=userData.photo,""===userData.phone?inputCardPhone.href="":inputCardPhone.href="tel:"+userData.phone,""===userData.email?inputCardEmail.href="":inputCardEmail.href="mailto:"+userData.email,""===userData.linkedin?inputCardLinkedin.href="":inputCardLinkedin.href="https://www.linkedin.com/in/"+userData.linkedin,""===userData.github?inputCardGithub.href="":inputCardGithub.href="https://www.github.com/"+userData.github}function colorBtn(){btnCreated.classList.add("linkgrey")}function showCardCreated(){cardCreated.classList.remove("hidden")}function handleClick(e){e.preventDefault(),showCardCreated(),colorBtn(),localCard()}fillForm.addEventListener("input",e=>{e.preventDefault();const t=e.target.name,r=e.target.value;"name"===t&&(userData.name=r),"job"===t&&(userData.job=r),"photo"===t&&(userData.photo=r),"phone"===t&&(userData.phone=r),"email"===t&&(userData.email=r),"linkedin"===t&&(userData.linkedin=r),"github"===t&&(userData.github=r),updatePreview()}),btnCreated.addEventListener("click",handleClick);const functionSelectColor=e=>{cardArticle.classList.remove("palette1"),cardArticle.classList.remove("palette2"),cardArticle.classList.remove("palette3"),cardArticle.classList.add(e.currentTarget.id),userData.palette=e.currentTarget.value};palette1Radius.addEventListener("click",functionSelectColor),palette2Radius.addEventListener("click",functionSelectColor),palette3Radius.addEventListener("click",functionSelectColor);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,userData.photo=fr.result}let cardUrl;function localCard(){fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(userData),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.success?(cardUrl=e.cardURL,textError.innerHTML="La tarjeta ha sido creada:",cardCreated.classList.remove("hidden"),twitter.classList.remove("hidden"),cardCreated.style="display: flex",linkshare.style="display: block;",linkshare.innerHTML=cardUrl,linkshare.href=cardUrl,twitter.href="https://twitter.com/intent/tweet?text=Nueva%20tarjeta%20creada%20"+cardUrl):(cardCreated.style="border-top: solid 1px $border-color;",linkshare.style="display: block;",textError.innerHTML="Faltan datos por rellenar, no seas vago.")})}fileField.addEventListener("change",getImage);const unfold=(e,t)=>{(fillForm.classList.contains("hidden")&&mainShare.classList.contains("hidden")||!t.classList.contains("js-design"))&&(mainDesign.classList.contains("hidden")&&mainShare.classList.contains("hidden")||!t.classList.contains("js-fill"))&&(fillForm.classList.contains("hidden")&&mainDesign.classList.contains("hidden")||!t.classList.contains("js-share"))||(e.classList.toggle("arrowRotate"),t.classList.toggle("hidden"))};mainShare.classList.add("hidden"),fillForm.classList.add("hidden"),arrowFill.classList.add("arrowRotate"),arrowShare.classList.add("arrowRotate"),designClick.addEventListener("click",()=>{unfold(arrowDesign,mainDesign),mainDesign.classList.contains("hidden")||(mainShare.classList.add("hidden"),fillForm.classList.add("hidden"),arrowFill.classList.add("arrowRotate"),arrowShare.classList.add("arrowRotate"))}),fillClick.addEventListener("click",()=>{unfold(arrowFill,fillForm),fillForm.classList.contains("hidden")||(mainShare.classList.add("hidden"),mainDesign.classList.add("hidden"),arrowDesign.classList.add("arrowRotate"),arrowShare.classList.add("arrowRotate"))}),shareClick.addEventListener("click",()=>{unfold(arrowShare,mainShare),mainShare.classList.contains("hidden")||(fillForm.classList.add("hidden"),mainDesign.classList.add("hidden"),arrowFill.classList.add("arrowRotate"),arrowDesign.classList.add("arrowRotate"))});