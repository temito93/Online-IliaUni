$(document).ready(function(){
   //=======popup animation=======

   $("#login").on("click",function(){
      $("#popup").animate({"right":"0" , "opacity":"1"})
   })
   $("#close").on("click",function(){
      $("#popup").animate({"right":"-50%", "opacity":"0"})
   })                   
   // ======password recovery========
   const popupTitle = $("#top-title");
   const recoveryBtn = $("#password-btn");
   const authRecoveryBtn =$("#auth-password-btn");
   const registration =$("#registration");
   const authentication =  $("#authentication");
   
   function recovery(button,content){
      button.on("click",function(e){
         e.preventDefault();
         popupTitle.text("პაროლის აღდგენა")
         content.addClass("d-none");
         $("#password-recovery").addClass("d-flex").removeClass("d-none");
         $("#password-form").addClass("d-flex").removeClass("d-none");
      })
      $("#password-form").on("submit",function(e){
         e.preventDefault();
         $("#password-form").addClass("d-none").removeClass("d-flex");
         $("#recovery-done").removeClass("d-none").addClass("d-flex");;
      setTimeout(function(){
         $("#password-recovery").removeClass("d-flex").addClass("d-none");
         $("#recovery-done").removeClass("d-flex").addClass("d-none");
         $("#authentication").removeClass("d-none").addClass("d-flex");
         popupTitle.text("ავტორიზაცია");
      } ,3000)
      })
   }
   recovery(recoveryBtn,registration);
   recovery(authRecoveryBtn,authentication);

   // =======registration=======
   $("#rg-btn").on("click",function(e){
      e.preventDefault();
      popupTitle.text("რეგისტრაცია")
      authentication.removeClass("d-flex").addClass("d-none");
      registration.removeClass("d-none").addClass("d-flex");
   })
   $("#authentication-btn").on("click",function(e){
      e.preventDefault();
      popupTitle.text("პაროლის აღდგენა")
      authentication.removeClass("d-none").addClass("d-flex");
      registration.removeClass("d-flex").addClass("d-none");
   })

   // =======error messages======

   const errors =$("#errors");
   const arr=[];
   const inputs ={
         name:$("#name"),
         surname:$("#surname"),
         email:$("#email"),
         password:$("#password"),
         confirmPassword:$("#confirmPassword"),
      }
   $("#registration-form").on("submit",function(e){
      e.preventDefault();
      checkInputs();
   })
   function checkInputs(){
      // ----check if the inputs are empty--   
      for(let key in inputs){
         if(!inputs[key].val()){
            setErrorFor(inputs[key])
         }else{
            inputs[key].removeClass("border-danger");
         }
      }

      // ----check if the password are equal ----
      if($("#confirmPassword").val() !== ""){
         if($("#password").val() !== $("#confirmPassword").val()){
            setErrorFor($("#confirmPassword"),"\nპაროლები არ ემთხვევა");
            setErrorFor(inputs.password)
         }
         arr.splice(arr.indexOf("\nპაროლები არ ემთხვევა"))
      }
      errors.text(arr) 
      // ----if no errors , appear authentication div ---
      arr.length == 0 ? successRegistration():null
   }
   // ----this function pushes errors in arr---
   function setErrorFor(inputName,errorMsg){
      inputName.addClass("border-danger");
         if(!arr.includes(errorMsg)){
            arr.push(errorMsg)
         }
   }
   
   function successRegistration(){
      $("#registration").removeClass("d-flex").addClass("d-none");
      $("#authentication").addClass("d-flex").removeClass("d-none");
      $("#success-registration").addClass("d-flex").removeClass("d-none");
      popupTitle.text("ავტორიზაცია")
   }

   
})
