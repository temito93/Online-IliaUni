//Login button
const loginBtn = document.querySelector('.login');
//Close button
const closeBtn = document.querySelector('.close');
//Authentication form button
const authenticationBtn = document.querySelector('.authentication-btn');
//Authentication form-submit 
const authenticationSubmit = document.querySelector('#authentication-form');
const authEmail = document.querySelector('.authentication-email');
const authPassword = document.querySelector('.authentication-password');
//Registration form button
const registrationBtn = document.querySelector('.auth-rg-btn');
//Password recovery form button
const passwordRecoveryFormBtn = document.querySelector('.auth-password-btn');
const passwordRecoveryFormBtn2 = document.querySelector('.password-btn');
//For show/hide popup
const popUp = document.querySelector('.popup');
//Authentication form
const authentication = document.querySelector('.authentication');
//Registration form
const registrationPopup = document.querySelector('.registration-popup');
//Password recovery form
const passwordRecoveryForm = document.querySelector('.password-recovery');
//To change top title of form
let topTitle = document.querySelector('.top-title');
// logout user 
const loggOutBtn = document.querySelector(".logout") ;

//Popup open
const popupShow = function(){
   popUp.classList.remove('hidePopup');
   popUp.classList.add('showPopup');
}
//Popup close
const popupHide = function(event) {
   event.preventDefault();
   popUp.classList.remove('showPopup');
   popUp.classList.add('hidePopup');
}

//Authentication form
const authenticationForm = function(event) {
   event.preventDefault();
   topTitle.textContent = 'ავტორიზაცია';
   registrationPopup.classList.add('d-none');
   authentication.classList.remove('d-none');
}

// demo loggOut function 
const loggOut = () => {
   console.log("user logged out");
   setTimeout(() => location.reload(),1000)
}
//login user
const loggin = (event) => {
   event.preventDefault();
   if(authEmail.value !== "" && authPassword.value !== "" ){
      //  show personal.html page on login button click 
       loginBtn.removeEventListener('click', popupShow);
       loginBtn.addEventListener('click',() => location.replace("personal.html"));
      //  show loggout button under the loginBtn ,add events
       loginBtn.addEventListener('mouseover',() =>  loggOutBtn.style.display = "block");
       loggOutBtn.addEventListener('mouseout',() =>  loggOutBtn.style.display = "none");
       loggOutBtn.addEventListener('click',loggOut);
      // in details_main.js
      changeContent()
   }
}


//Registration form
const registrationForm = function(event) {
   event.preventDefault();
   topTitle.textContent = 'რეგისტრაცია';
   authentication.classList.add('d-none');
   registrationPopup.classList.remove('d-none');
}

//Password Recovery form
const passwordRecovery = function(event) {
   event.preventDefault();
   topTitle.textContent = 'პაროლის აღდგენა';
   authentication.classList.add('d-none');
   registrationPopup.classList.add('d-none');
   passwordRecoveryForm.classList.remove('d-none');
}
loginBtn.addEventListener('click', popupShow);
closeBtn.addEventListener('click', popupHide);
registrationBtn.addEventListener('click', registrationForm);
authenticationBtn.addEventListener('click', authenticationForm);
authenticationSubmit.addEventListener('submit', loggin);
passwordRecoveryFormBtn.addEventListener('click', passwordRecovery);
passwordRecoveryFormBtn2.addEventListener('click', passwordRecovery);
