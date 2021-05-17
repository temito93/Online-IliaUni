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
      slides[i].className = slides[i].className.replace(" active-slider", "");  
  }
  slides[slideIndex-1].style.display = "block";  
}