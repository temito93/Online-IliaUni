$(document).ready(function(){
   $("#login").on("click",function(){
      $("#popup").animate({"right":"0" , "opacity":"1"})
   })
   $("#close").on("click",function(){
      $("#popup").animate({"right":"-50%", "opacity":"0"})
   })
   $("#popup").find("button").on("click",function(e){
      e.preventDefault();
   })
})



