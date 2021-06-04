
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
const readMorebtn = document.getElementById("read-more");
const text = document.getElementById("infoText")
const dots = document.getElementById("dots");
const btnText = document.getElementById("btn-text")
readMorebtn.addEventListener("click",function(){
    // change the classNames and styles if the text doesn't appear
    if(dots.classList.contains("d-block")){
        dots.classList.remove("d-block");
        dots.classList.add("d-none");
        text.style.height = "auto";
        btnText.innerText = "ნაკლების ნახვა";
        document.querySelector(".fa-angle-down").classList.add("fa-angle-up");
        document.querySelector(".fa-angle-down").classList.remove("fa-angle-down")
    }
    else{
        text.style.height = 142+"px";
        dots.classList.remove("d-none");
        dots.classList.add("d-block");
        btnText.innerText = "სრულიად";
        document.querySelector(".fa-angle-up").classList.add("fa-angle-down");
        document.querySelector(".fa-angle-up").classList.remove("fa-angle-up")
    }
})

// lectures-lists numbers 
const lecturesList = document.getElementsByClassName("lectures-lists");
const lectureNum = document.querySelectorAll(".lecture-num");

for(let i = 0 ; i < lecturesList.length ; i++){
    lectureNum[i].innerText = i+1+".";
    console.log(lecturesList.length);
}

