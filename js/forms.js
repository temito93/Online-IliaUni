$(document).ready(function(){
    $("#login").on("click",function(){
       $("#popup").animate({"right":"0"})
    })
    $("#close").on("click",function(){
        $("#popup").animate({"right":"-50%"})
     })
})



