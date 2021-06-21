// variables
const currentCourses = document.querySelector(".current-courses")
const finishedCourses = document.querySelector(".finished-courses")

// ===popover function===
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
// ===progress bar ===
function progressBar(section,index,percentage){ //sections are current/finished courses
    const progressTitle = section.querySelectorAll(".progress-value");
    const degreeNum = 360/100 ;
    // rotate right side if percentage < 50 
    if(percentage < 50){
        section.querySelectorAll(".progressRight")[index].style.transform = `rotate(${percentage}deg)`;
    }else{ // rotate left side if percentage > 50 
        section.querySelectorAll(".progressRight")[index].style.transform = `rotate(180deg)`;
        section.querySelectorAll(".progressLeft")[index].style.transform = `rotate(${(percentage-50)*degreeNum}deg)`;
    }
    progressTitle[index].innerText = `${percentage}%`;
} 
// current course 1    
progressBar(currentCourses,0,49);
// current course 2    
progressBar(currentCourses,1,35);
// finished course 1    
progressBar(finishedCourses,0,60);
// finished course 2    
progressBar(finishedCourses,1,55);
