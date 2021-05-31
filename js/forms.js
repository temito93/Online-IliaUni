// $(document).ready(function(){
//    $("#login").on("click",function(){
//       $("#popup").animate({"right":"0" , "opacity":"1"})
//    })
//    $("#close").on("click",function(){
//       $("#popup").animate({"right":"-50%", "opacity":"0"})
//    })
//    $("#popup").find("button").on("click",function(e){
//       e.preventDefault();
//    })
// })


const loginEl = document.querySelector('.login');
const popupId = document.querySelector('#popup');

loginEl.addEventListener('click', popupFunc);

function popupFunc(event) {
   event.preventDefault();
   if(popupId.classList.contains('close')){
      popupId.classList.remove('close');
      popupId.classList.add('open');
   } 
   
   //Close popup
   const closeBtn = document.querySelector('.closeBtn');
   closeBtn.addEventListener('click', function(){
      popupId.classList.remove('open');
      popupId.classList.add('close');
   })
   //---
}
