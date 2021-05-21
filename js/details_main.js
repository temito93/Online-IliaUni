$(document).ready(function(){
// ---- video slider---
let slideIndex = 1;
let coursesLength = document.getElementById("courses-lenght")
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let num = document.getElementById("slider-num"); 
let slides = document.getElementsByClassName("slides");    
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
minus.addEventListener("click", () => plusSlides(-1))
plus.addEventListener("click",() => plusSlides(1))
function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  num.innerText = slideIndex;
  coursesLength.innerText = slides.length;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      //   slides appear by the className
      slides[i].className = slides[i].className.replace("active-slider", "");  
  }
  slides[slideIndex-1].style.display = "block";  
}

    // read-more function
    const readMorebtn = $("#read-more");
    const text = $(".info-text");
    const dots = $("#dots");
    const btnText = $("#btn-text");
    readMorebtn.on("click",function(){
        // change the classNames and styles if the text doesn't appear
        if(dots.hasClass("d-block")){
            dots.removeClass("d-block").addClass("d-none");
            text.css("height","auto");
            $(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }
        else{
            text.css("height","142px");
            dots.removeClass("d-none").addClass("d-block");
            btnText.text("სრულიად");
            $(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    })

})
