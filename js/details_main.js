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
const coursesLength = document.getElementById("courses-lenght")
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("slider-num");
const lecturesList = document.getElementsByClassName("lectures-lists");
const lectureNum = document.querySelectorAll(".lecture-num");
const iframeVideo = document.getElementById('existing-iframe-example');
const lectureTitleNum = document.querySelector("#lecture-title-num");

let slideIndex = 0;
let quizPassedNum = 0;
let videoLecture = document.querySelector(".video-lecture-num");
let plusIcon = document.querySelector(".prev");
let minusIcon = document.querySelector(".next");
let slides = document.getElementById("slider"); 


const lectureTitleArr =["პირველი","მეორე","მესამე","მეოთხე"]
// video slider url 
let srcArray = [
    "https://www.youtube.com/embed/HOBlvpAl7CY?enablejsapi=1",
    "https://www.youtube.com/embed/HOBlvpAl7CY?enablejsapi=1",
    "https://www.youtube.com/embed/HOBlvpAl7CY?enablejsapi=1",
    "https://www.youtube.com/embed/UkV0FSqyRxY?enablejsapi=1",
]  
// ---- video slider---
// YouTube Player API  codes 
let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });
}
// automatically play video after load 
function onPlayerReady(event) {
    event.target.playVideo();
}
// when video ends automatically open quiz 
function onPlayerStateChange(event) {
    if(event.data === 0) { 
        setTimeout(() => startTest(),2000) 
    }
}
// show first lecture video, slideIndex = 1
showSlides(slideIndex);
// check how many quizes are passed 
function plusSlides() {
    // if enough quizes are passed switch slides
    if(quizPassedNum > slideIndex){
        slideIndex < srcArray.length ? slideIndex += 1:null;
        showSlides(slideIndex);
    }
}
// switch previous slide 
function minusSlides() {
    if(slideIndex > 0){
        slideIndex -= 1;
        showSlides(slideIndex);
    }   
}
minus.addEventListener("click", () => minusSlides())
plus.addEventListener("click",() => plusSlides())
// slideshow function 
function showSlides(slideIndex) {
    //   also unlock lecture lists in html
  lecturesList[quizPassedNum].querySelector(".padlocks").style.backgroundColor = "#FF4C65";
  lecturesList[quizPassedNum].querySelector(".padlocks").children[0].src = "img/unlock.svg";
  lecturesList[quizPassedNum].style.opacity = "0.4";
  num.innerText = slideIndex+1;
  videoLecture.innerText = `${slideIndex+1}.`;
  coursesLength.innerText = srcArray.length;
  lectureTitleNum.innerText = lectureTitleArr[slideIndex]
}

// on lowerBtn click slide popup 
const loginCourse = () => {
    coursesAuthentication.classList.remove("d-none");
    coursesAuthentication.children[1].innerText = "ძველი სამყაროს დიზაინი (შესავალი)";
    popupShow();
    lowerBtn.removeEventListener("click",loginCourse);
}
lowerBtn.addEventListener("click",loginCourse);

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
for(let i = 0 ; i < lecturesList.length ; i++){
    lectureNum[i].innerText = i+1+".";
}

// change page content after user logins 
function changeContent(){
    changeSliderBtn();
    addlInfo();
    changeLists();
}

function changeLists(){
    for(let i = 0 ; i < lecturesList.length ; i++){
        lecturesList[i].classList.remove("pe-4");
        lecturesList[i].children[1].style.width = "180px";
        lecturesList[i].children[1].children[1].classList.add("d-flex");
        lecturesList[i].children[1].children[1].classList.remove("d-none");
    }

}

//after login enable slider button
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
    // show text 
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
}
function startTest(){
    // show test div and hide video player 
    testBox.classList.add("d-flex")
    testBox.classList.remove("d-none")
    slides.style.display = "none";
}
const correct = () => {
    quizPassedNum++
    plusSlides(1)
    testBox.classList.add("d-none");
    testBox.classList.remove("d-flex");
    clearQuizResults();
}    
const inCorrect = () =>{
    showSlides(slideIndex);
    testBox.classList.add("d-none");
    testBox.classList.remove("d-flex");
    clearQuizResults();
    let x = questionForm.getElementsByTagName("LABEL");
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "white";
      x[i].style.textDecoration ="none"
    }
}
const checkAnswer = (e) => {
    e.preventDefault();
    let correctAnswer = "answer3";
    let selected = document.querySelector('input[type="radio"]:checked');

    // if answer is correct do following
    if(selected.value === correctAnswer){
        resulText("კურსის გაგრძელება","თქვენ სწორად გაეცით პასუხი!");
        submitAnswer.removeEventListener("click",checkAnswer); //change function of submit button 
        submitAnswer.addEventListener("click",correct);
        lecturesList[quizPassedNum].style.opacity = "1";
    }else{
        selected.parentNode.style.color = "#FF4C65";
        selected.parentNode.style.textDecoration = "line-through";
        resulText("კურსის თავიდან მოსმენა","შეგიძლიათ კიდევ სცადოთ!","არასწორი პასუხი");
        submitAnswer.removeEventListener("click",checkAnswer);
        submitAnswer.addEventListener("click",inCorrect);
    }

    // disable radio inputs after submit 
    for(var i = 0; i < questionForm.length-1; i++){
        if(questionForm[i] !== selected){
            questionForm[i].disabled = true;
        }
    }
}
submitAnswer.addEventListener("click",checkAnswer); 

function resulText(btnText,text1,text2=""){
    // change texts inside button and paragraph 
    quizResult.children[0].innerText = text2;
    quizResult.children[1].innerText = text1; 
    submitAnswer.children[0].innerText = btnText;
    // show arrow icon in button 
    submitAnswer.children[1].classList.add("d-block");
    submitAnswer.children[1].classList.remove("d-none");
}
function clearQuizResults(){
    slides.style.display = "block";
    quizResult.children[0].innerText = "";
    quizResult.children[1].innerText = ""; 
    submitAnswer.children[0].innerText = "დადასტურება";
    submitAnswer.children[1].classList.add("d-none");
    submitAnswer.children[1].classList.remove("d-block");
    for(var i = 0; i < questionForm.length-1; i++){
            questionForm[i].disabled = false;
    }
    submitAnswer.removeEventListener("click",correct);
    submitAnswer.removeEventListener("click",inCorrect);
    submitAnswer.addEventListener("click",checkAnswer);
}


