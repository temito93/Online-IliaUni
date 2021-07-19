// burger-icon 
const burger = document.querySelector(".burger");
//Login button
const loginBtn = document.querySelector('.login');
//Close button
const closeBtn = document.querySelector('.close');
//Authentication form button
const authenticationBtn = document.querySelector('.authentication-btn');
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


//Authentication form
const getAuthForm = document.querySelector('#authentication-form');

//Registration form
const getRegForm = document.querySelector('.registration-form');

//Password recovery form
const getRecoveryForm = document.querySelector('.password-form');

// mobile nav-bar menu 
const openMenu = () => {
   //change content
   document.querySelector(".navbar").classList.toggle("change");
   //change burger-icon
   burger.querySelectorAll("div").forEach(div => div.classList.toggle("change"))
}
//Popup open
const popupShow = function(){
   popUp.classList.remove('hidePopup');
   popUp.classList.add('showPopup');
   if(popUp.classList.contains('showPopup')) {
      getAuthForm.setAttribute('id', 'authentication-form');
      getRegForm.setAttribute('id', 'registration-form');
      getRecoveryForm.setAttribute('id', 'password-form');
   } 
}
//Popup close
const popupHide = function(event) {
   event.preventDefault();
   popUp.classList.remove('showPopup');
   popUp.classList.add('hidePopup');
   if(popUp.classList.contains('hidePopup')) {
      getAuthForm.removeAttribute('id', 'authentication-form');
      getRegForm.removeAttribute('id', 'registration-form');
      getRecoveryForm.removeAttribute('id', 'password-form');
   }
}

//Authentication form
const authenticationForm = function(event) {
   event.preventDefault();
   topTitle.textContent = 'ავტორიზაცია';
   registrationPopup.classList.add('d-none');
   authentication.classList.remove('d-none');
}

function loggOutButton(){
   loggOutBtn.style.display = "block"; 
}
// demo loggOut function 
const loggOut = () => {
   console.log("user logged out");
   loginBtn.removeEventListener('mouseover',loggOutButton);
   loginBtn.removeEventListener('click',loggOutButton);
   sessionStorage.loggedIn = false;
   location.reload();
}
//login user
const loggin = (event) => {
   event.preventDefault();
   if(authEmail.value !== "" && authPassword.value !== "" ){
      // changeContent()
      sessionStorage.loggedIn = true;
      location.reload()
   }
}
if(sessionStorage.loggedIn === "true"){
   //  show personal.html page on login button click 
   loginBtn.removeEventListener('click', popupShow);
   loginBtn.addEventListener('click',() => location.replace("personal.html"));
   //  show loggout button under the loginBtn ,add events
   loginBtn.addEventListener('mouseover',loggOutButton);
   loginBtn.addEventListener('click',loggOutButton);
   loggOutBtn.addEventListener('mouseout',() =>  loggOutBtn.style.display = "none");
   loggOutBtn.addEventListener('click',loggOut);
   console.log("yes");
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

burger.addEventListener('click', openMenu);
loginBtn.addEventListener('click', popupShow);
closeBtn.addEventListener('click', popupHide);
registrationBtn.addEventListener('click', registrationForm);
authenticationBtn.addEventListener('click', authenticationForm);
getAuthForm.addEventListener('submit', loggin);
passwordRecoveryFormBtn.addEventListener('click', passwordRecovery);
passwordRecoveryFormBtn2.addEventListener('click', passwordRecovery);
