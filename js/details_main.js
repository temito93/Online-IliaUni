//variables
const additionalInfo = document.querySelector(".additional-info");
const lowerBtn = document.querySelector("#lower-btn");
const courseInfo = document.querySelector(".course-info");
const testBox = document.querySelector(".test-wrapper");
const questionForm = document.querySelector("#question-form");
const submitAnswer = document.querySelector("#submit-answer");
const quizResult = document.querySelector("#quizResult");
const coursesAuthentication  = document.querySelector(".courses-authentication");
const padLocks = document.querySelector(".padlocks");
const coursesLength = document.getElementById("courses-lenght")
const lecturesList = document.getElementsByClassName("lectures-lists");
const lectureNum = document.querySelectorAll(".lecture-num");
const lectureTitleNum = document.querySelector("#lecture-title-num"); 
const numbertext  = document.querySelector(".numbertext ");
const transcript = document.querySelector("#transcript");
const aboutCourse = document.querySelector("#aboutCourse"); 
const transcriptSection = document.querySelector(".transcriptSection");  
const aboutCourseWrapper = document.querySelector(".aboutCourseWrapper");

transcript.addEventListener('click',() => showTranscript(transcript))
aboutCourse.addEventListener('click',() => showTranscript(aboutCourse))
function showTranscript(e){  
    if(e.id === "transcript"){
        e.classList.add('activeTab');
        aboutCourse.classList.remove('activeTab');
        transcriptSection.style.display = 'flex' ;
        aboutCourseWrapper.style.display = 'none' ;
    }else{
        aboutCourse.classList.add('activeTab')
        transcript.classList.remove('activeTab');
        transcriptSection.style.display = 'none' ;
        aboutCourseWrapper.style.display = 'block' ;
    }
}

const lectureTitleArr =["პირველი","მეორე","მესამე","მეოთხე"]

// on lowerBtn click slide popup 
const loginCourse = () => {
    coursesAuthentication.classList.remove("d-none");
    coursesAuthentication.children[1].innerText = "ძველი სამყაროს დიზაინი (შესავალი)";
    popupShow();
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
    lowerBtn.removeEventListener("click",loginCourse);
    // show first lecture video, slideIndex = 1
    showSlides(slideIndex);
}
sessionStorage.loggedIn === "true" ? changeContent():null;

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
    numbertext.style.display = "block"
}


