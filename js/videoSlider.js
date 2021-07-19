const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("slider-num");
const yuPlayer = document.querySelector("#player-wrapper");
const iframeVideo = document.getElementById('existing-iframe-example');
let slideIndex = 0;
let quizPassedNum = 0;
let videoLecture = document.querySelector(".video-lecture-num");
let plusIcon = document.querySelector(".prev");
let minusIcon = document.querySelector(".next");
let slides = document.getElementById("slider"); 



// video slider url 
let srcArray = [
    "https://www.youtube.com/embed/HOBlvpAl7CY?enablejsapi=1",
    "https://www.youtube-nocookie.com/embed/zlMQDWxwaIk",
    "https://www.youtube.com/embed/HOBlvpAl7CY?enablejsapi=1",
    "https://www.youtube-nocookie.com/embed/zlMQDWxwaIk",
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
if(sessionStorage.loggedIn === "true"){
    // when video ends automatically open quiz 
    function onPlayerStateChange(event) {
        if(event.data === 0) { 
            setTimeout(() => startTest(),1000) 
        }
    }
}

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
  lectureTitleNum.innerText = lectureTitleArr[slideIndex];
}
