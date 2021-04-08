'use strict'

let libClick = document.getElementById("lib-click");
libClick.addEventListener("click", libFunc);

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

    if (libListener.style.display == "block") {
        libListener.style.display = "none";
        libClick.style.borderLeft =  "1px solid #707070";
        for(var i=1; i<filterElem.length; i++)  {
            filterElem[i].style.color = "#fff";
        }
        for (var a=0; a<colChilds.length; a+=4) {
            colChilds[a].style.display = "block";
        }

    } else {
        libListener.style.display = "block";
        libClick.style.borderLeft =  "none";
        for(var i=1; i<filterElem.length; i++)  {
            filterElem[i].style.color = "#333333";
        }

        for (var a=0; a<colChilds.length; a+=4) {
            colChilds[a].style.display = "none";
        }
    }
}
