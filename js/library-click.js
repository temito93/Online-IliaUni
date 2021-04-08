'use strict'

document.getElementById("lib-click").addEventListener("click", libFunc);

function libFunc(addContent) {
    //prevents page for refresh
    addContent.preventDefault();

    //get library div element
    let libListener = document.getElementById("library-content");

    //get library-left-elem div element
    let libLeftElem = document.getElementById("library-left-elem");

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("col");

    //get offset height of parent element for library content
    let libGetHeight = document.getElementById("library-left-elem").offsetHeight;


    //get offset height of library element for library content
    let libGetWidth = document.getElementById("lib-click").offsetWidth;


    //get section-two height for library content height
    let secTwoHeight = document.getElementById("section-two").offsetHeight;

    if (libListener.style.display == "block") {
        libListener.style.display = "none";
        libLeftElem.classList.add("ps-5");
        for(var i=1; i<filterElem.length; i++)  {
            filterElem[i].style.color = "#fff";
        }
        for (var a=0; a<colChilds.length; a+=4) {
            colChilds[a].style.display = "block";
        }

    } else {
        libListener.style.display = "block";
        libLeftElem.classList.remove("ps-5");
        for(var i=1; i<filterElem.length; i++)  {
            filterElem[i].style.color = "#333333";
        }

        for (var a=0; a<colChilds.length; a+=4) {
            colChilds[a].style.display = "none";
        }

        //Library content gets top parameter of the parent element current height
        libListener.style.top = libGetHeight - 4 + "px";

        //Library content gets width parameter of the library element current width
        libListener.style.maxWidth = libGetWidth + 2 + "px";

        //library content height to footer element
        libListener.style.height = secTwoHeight + 4 + "px";

    }
}
