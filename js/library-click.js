'use strict'

let libClick = document.getElementById("lib-click");
libClick.addEventListener("click", libFunc);

function libFunc(addContent) {
    
    //prevents page for refresh
    

    //get library div element
    let libListener = document.getElementById("content-background");

    //get library-left-elem div element
    let libLeftElem = document.getElementById("library-left-elem");

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("box-visibility");


    //get offset width of library element for library content
    let libGetWidth = document.getElementById("lib-click").offsetWidth;





    let gridSystem = document.getElementById("grid-system-id");



    if (libListener.style.display == "block") {
        libListener.style.display = "none";

        libClick.style.borderLeft = "1px solid #707070";
        for (let i = 1; i < filterElem.length; i++) {


            filterElem[i].style.color = "#fff";
        }
        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "block";
        }

        gridSystem.style.marginLeft = libListener.offsetWidth - 15 + "px";
        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-4");
            colChilds[b].classList.add("col-3");
        }
        

    } else {
        libListener.style.display = "block";
        libClick.style.borderLeft = "none";
        for (let i = 1; i < filterElem.length; i++) {
            filterElem[i].style.color = "#333333";
        }

        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "none";
        }



        //Library content gets width parameter of the library element current width
        libListener.style.maxWidth = libGetWidth + 35 + "px";


        gridSystem.style.marginLeft = libListener.offsetWidth + 15 + "px";

        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-3");
            colChilds[b].classList.add("col-4");
        }

    }
}




//TAG CLICK


let lectClick = document.getElementById("lec-click");
lectClick.addEventListener("click", lectFunc);

function lectFunc(addContent) {
    
    //prevents page for refresh
    

    //get library div element
    let libListener = document.getElementById("content-background");

    //get library-left-elem div element
    let libLeftElem = document.getElementById("library-left-elem");

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("box-visibility");


    //get offset width of library element for library content
    let tagGetWidth = document.getElementById("lec-click").offsetWidth;

    

    let libContEl = document.getElementById("lib-content");
    

    let lecEl = document.getElementById("lect-content");



    let gridSystem = document.getElementById("grid-system-id");



    if (libListener.style.display == "block") {
        libListener.style.display = "none";
        
        //add border left on lec-click id
        lectClick.style.borderLeft = "1px solid #707070";

        //adds d-flex class on lib-content
        libContEl.classList.add("d-flex");
        
        //display none on lect-content
        lecEl.style.display = "none";

        for (let i = 0; i < filterElem.length - 2; i++) {


            filterElem[i].style.color = "#fff";
        }
        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "block";
        }

        gridSystem.style.marginLeft = libListener.offsetWidth - 15 + "px";
        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-4");
            colChilds[b].classList.add("col-3");
        }
        

    } else  {
        libListener.style.display = "block";

        //removes border left on lec-click id
        lectClick.style.borderLeft = "none";

        //removes d-flex class from lib-content
        libContEl.classList.remove("d-flex");
        
        //display none on lib-content
        libContEl.style.display = "none";

        //display block on lect-content
        lecEl.style.display = "block";

        for (let i = 0; i < filterElem.length - 2; i++) {
            filterElem[i].style.color = "#333333";
        }

        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "none";
        }

        //Library content gets width parameter of the library element current width
        libListener.style.maxWidth = tagGetWidth + 36 + "px";


        gridSystem.style.marginLeft = libListener.offsetWidth + 15 + "px";

        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-3");
            colChilds[b].classList.add("col-4");
        }

    }
}
