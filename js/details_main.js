//variables
const additionalInfo = document.querySelector(".additional-info");
const lowerBtn = document.querySelector("#lower-btn");
const courseInfo = document.querySelector(".course-info");
const yuPlayer = document.querySelector("#player-wrapper");
const testBox = document.querySelector(".test-wrapper");
const questionForm = document.querySelector("#question-form");
const submitAnswer = document.querySelector("#submit-answer");
const quizResult = document.querySelector("#quizResult");
const coursesAuthentication  = document.querySelector(".courses-authentication");
const padLocks = document.querySelector(".padlocks");
// on lowerBtn click slide popup 
const loginCourse = () => {
    coursesAuthentication.classList.remove("d-none");
    coursesAuthentication.children[1].innerText = "ძველი სამყაროს დიზაინი (შესავალი)";
    popupShow();
    lowerBtn.removeEventListener("click",loginCourse);
}
lowerBtn.addEventListener("click",loginCourse);
// ---- video slider---
let slideIndex = 1;
let currentLecture = slideIndex-1;
let quizPassedNum = 0 ;
let videoLecture = document.querySelector(".video-lecture-num");
let plusIcon = document.querySelector(".prev");
let minusIcon = document.querySelector(".next");
const coursesLength = document.getElementById("courses-lenght")
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("slider-num"); 
let slides = document.getElementsByClassName("slides");    
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
minus.addEventListener("click", () => plusSlides(-1))
plus.addEventListener("click",() => plusSlides(1))
function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 7}    
  if (n < 1) {slideIndex = 1}
  num.innerText = slideIndex;
  videoLecture.innerText = slideIndex+".";
  coursesLength.innerText = slides.length;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      //   slides appear by the className
      slides[i].className = slides[i].className.replace("active-slider", "");  
  }
  slides[slideIndex-1].style.display = "block";  
}
// additional information about lecture 

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

// lectures-lists number index
const lecturesList = document.getElementsByClassName("lectures-lists");
const lectureNum = document.querySelectorAll(".lecture-num");

for(let i = 0 ; i < lecturesList.length ; i++){
    lectureNum[i].innerText = i+1+".";
}


if(true){
    changeContent();
}
function changeContent(){
    changeSliderBtn()
    addlInfo()
}

//enable slider button
function changeSliderBtn(){
    // enable button 
    plus.disabled = false;
    minus.disabled = false;
    //change icon color
    plusIcon.classList.add("text-white");
    plusIcon.classList.remove("text-muted");
    minusIcon.classList.add("text-white");
    minusIcon.classList.remove("text-muted");
}

//appear addiotional info 
function addlInfo(){
    // appear text 
    additionalInfo.classList.add("d-flex");
    additionalInfo.classList.remove("d-none");
    //hide courseInfo section
    courseInfo.classList.add("d-none");
    courseInfo.classList.remove("d-flex");
    // change lower button 
    lowerBtn.classList.add("d-flex","flex-column","align-items-center");
    lowerBtn.children[0].innerText = "მეტი ინფორმაცია";
    lowerBtn.children[1].classList.remove("fa-arrow-right","ps-3");
    lowerBtn.children[1].classList.add("fa-arrow-down","pt-3");
    lecturesList[quizPassedNum].style.opacity = "0.2";
    lecturesList[quizPassedNum].querySelector(".padlocks").style.backgroundColor = "#FF4C65";
    console.log(padLocks);
}
document.getElementById("start-quiz").addEventListener("click",startTest);
function startTest(){
    // show test div and hide player 
    testBox.classList.add("d-flex")
    testBox.classList.remove("d-none")
    slides[slideIndex-1].style.display ="none";
    // check correct answer 
    checkAnswer();
}
function checkAnswer(){
    let correctAnswer = "answer3";
    submitAnswer.addEventListener("click",(e)=>{
        e.preventDefault();
        let selected = document.querySelector('input[type="radio"]:checked');
        // change radios and  button after submit 
        if(selected.value === correctAnswer){
            resulText("კურსის გაგრძელება","თქვენ სწორად გაეცით პასუხი!");
            submitAnswer.addEventListener("click",()=>{
                plusSlides(1)
                testBox.classList.add("d-none");
                testBox.classList.remove("d-flex");
            });
            quizPassedNum++
        }else{
            selected.parentNode.style.color = "#FF4C65";
            selected.parentNode.style.textDecoration = "line-through";
            resulText("კურსის თავიდან მოსმენა","შეგიძლიათ კიდევ სცადოთ!","არასწორი პასუხი")
            submitAnswer.addEventListener("click",()=>{
                plusSlides(0)
                testBox.classList.add("d-none");
                testBox.classList.remove("d-flex");
            })
        }
        // disable radio inputs after submit 
        for(var i = 0; i < questionForm.length-1; i++){
            if(questionForm[i] !== selected){
                questionForm[i].disabled = true;
            }
        }
    })
};
function resulText(btnText,text1,text2=""){
    // change texts inside button and paragraph 
    quizResult.children[0].innerText = text2;
    quizResult.children[1].innerText = text1; 
    submitAnswer.children[0].innerText = btnText;
    // show arrow icon in button 
    submitAnswer.children[1].classList.add("d-block");
    submitAnswer.children[1].classList.remove("d-none");
}
//  unlock lists/change color 
function unlockLecture(){
    
}
