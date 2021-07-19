// show test div and hide video player
function startTest(){
    // if course will end show final quiz 
    if(quizPassedNum === srcArray.length-1){
        finalTest()
    }else{
        testBox.classList.add("d-flex")
        testBox.classList.remove("d-none")
        slides.style.display = "none";
    } 

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
