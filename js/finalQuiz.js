const sliderWrapper = document.querySelector(".slider-wrapper");
const finalQuizContainer = document.querySelector(".final-quiz-container");
const finalQuizForm =  document.querySelector("#final-quiz"); 
const finalQuizSubmitBtn =  document.querySelector("#finalQuizSubmit");
const Questions =  document.getElementById('questions-wrapper'); 
const quizResultTitle =  document.getElementById('quizResultTitle'); 
const resultsTxt =  document.querySelector(".results");
const certificateSection =  document.querySelector("#certificate-div");   
// demo correct answer is always 3
let correctAnswers = [3 , 3 , 3 , 3 ]
let submittedAnswers = {}
let corrAnswersAmount = 0
// ====Final quiz and certificate page===
function finalTest(){
    sliderWrapper.style.display = "none";
    finalQuizContainer.classList.add("d-flex")
    finalQuizContainer.classList.remove("d-none");
    finalQuizSubmitBtn.addEventListener('click',checkFinalResults)
}
function checkFinalResults(e){
    e.preventDefault()
    // get submitted answers 
    for(let i = 0 ; i <= Questions.children.length ; i++){
        document.getElementsByName(`group${i}`)
            .forEach(answer => {
                if( answer.checked === true ) {
                    submittedAnswers[i] = Number(answer.value)
                }else{
                    return null
                }
            })
    }
    finalQuizSubmitBtn.removeEventListener('click',checkFinalResults)
    changeContent()
}
function changeContent(){
    correctAnswers.map((Correctanswer,index) => {
        let selected = undefined;
        let doneImg = document.createElement('img');
        doneImg.src = "../img/correct.svg"
        if(submittedAnswers[index+1] == Correctanswer){
            selected = document.getElementsByName(`group${index+1}`)[submittedAnswers[index+1]-1];
            selected.parentNode.style.color = "#B4F89F";
            selected.parentNode.appendChild(doneImg)
            corrAnswersAmount++
        }else{
            selected = document.getElementsByName(`group${index+1}`)[submittedAnswers[index+1]-1];
            selected.parentNode.style.color = "#FF4C65";
            selected.parentNode.style.textDecoration = "line-through";
            document.getElementsByName(`group${index+1}`)[Correctanswer-1].parentNode.appendChild(doneImg);
        }
    })
    let testResult = (corrAnswersAmount/Questions.children.length) * 100;
    quizResultTitle.innerHTML = `თქვენ დააგროვეთ ${testResult} ქულა`;
    resultsTxt.style.display = "block";
    // finally change content by the results
    if(testResult > 50){
        coursePassed()
    }else{
        courseFailed()
    }
}
function coursePassed(){
    certificateSection.style.display = "block"
    quizResultTitle.style.color = "#B4F89F";
    finalQuizSubmitBtn.style.display = "none"
}
function courseFailed(){
    quizResultTitle.style.color = "#FF4C65";
    finalQuizSubmitBtn.children[0].innerHTML = "კურსის თავიდან გავლა";
    finalQuizSubmitBtn.children[1].style.display = "block"
    // demo function => start from first lecture 
    finalQuizSubmitBtn.addEventListener('click',() => {
        location.reload();
        quizPassedNum = 0 ;
        slideIndex = 0 ;
        showSlides(slideIndex);
    })
}
