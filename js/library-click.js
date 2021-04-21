'use strict'

let libClick = document.getElementById("lib-click");
libClick.addEventListener("click", libFunc);

//hides content-background
let getContentBackground = document.getElementById("content-background");
getContentBackground.style.display = "none";

function libFunc() {

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("box-visibility");


    //get offset width of library element for library content
    let libGetWidth = document.getElementById("lib-click").offsetWidth;

    let gridSystem = document.getElementById("grid-system-id");



    //lib-content (form)
    let libContEl = document.getElementById("lib-content");

    //hides lect-content id
    let getLectTab = document.getElementById("lect-content");
    getLectTab.style.display = "none";

    if  (getContentBackground.style.display == "none") {

        //shows content background
        getContentBackground.style.display = "block";
       
        //removes border of library from the left side
        libClick.style.borderLeft = "none";

        //adds display flex in form (lib-content)
        libContEl.style.display = "flex";

        for (let i = 1; i < filterElem.length; i++) {
            filterElem[i].style.color = "#333333";
        }

        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "none";
        }

        //Library content gets width parameter of the library element current width
        getContentBackground.style.maxWidth = libGetWidth + 35 + "px";

        gridSystem.style.marginLeft = getContentBackground.offsetWidth + 15 + "px";

        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-3");
            colChilds[b].classList.add("col-4");
        }

    } else if (getContentBackground.style.display == "block" && libClick && libContEl.style.display == "flex") {
        getContentBackground.style.display = "none";
        libContEl.classList.remove("d-flex");
        libClick.style.borderLeft = "1px solid #707070";
        for (let i = 1; i < filterElem.length; i++) {


            filterElem[i].style.color = "#fff";
        }
        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "block";
        }

        gridSystem.style.marginLeft = getContentBackground.offsetWidth - 15 + "px";
        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-4");
            colChilds[b].classList.add("col-3");
        }
        

    } else if (lectClick && getContentBackground.style.display == "block") {
        getLectTab.style.display = "none";
        libContEl.style.display = "flex";
        lectClick.style.borderLeft = "1px solid #707070";
        libClick.style.borderLeft = "none";
        libClick.style.color = "#fff";
        lectClick.style.color = "#333333";
    }
    
    

    
}




//lec-click


let lectClick = document.getElementById("lec-click");
lectClick.addEventListener("click", lectFunc);

function lectFunc() {

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("box-visibility");


    //get offset width of library element for library content
    let tagGetWidth = document.getElementById("lec-click").offsetWidth;

    

    let libContEl = document.getElementById("lib-content");
    

    let lecEl = document.getElementById("lect-content");

    
        
    //display none on lib-content
    libContEl.style.display = "none";

    let gridSystem = document.getElementById("grid-system-id");
    
    
    if (getContentBackground.style.display == "none"){
        getContentBackground.style.display = "block";

        //removes border left on lec-click id
        lectClick.style.borderLeft = "none";
        lecEl.style.display = "block";
        libContEl.style.display = "none";
        for (let i = 0; i < filterElem.length - 2; i++) {
            filterElem[i].style.color = "#333333";
        }

        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "none";
        }

        //Library content gets width parameter of the library element current width
        getContentBackground.style.maxWidth = tagGetWidth + 36 + "px";


        gridSystem.style.marginLeft = getContentBackground.offsetWidth + 15 + "px";

        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-3");
            colChilds[b].classList.add("col-4");
        }

    }
    else if (getContentBackground.style.display == "block" && lecEl.style.display == "block" && lectClick){
        getContentBackground.style.display = "none";
        
        //add border left on lec-click id
        lectClick.style.borderLeft = "1px solid #707070";

        
        for (let i = 0; i < filterElem.length - 2; i++) {
            filterElem[i].style.color = "#fff";
        }
        
        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "block";
        }

        gridSystem.style.marginLeft = getContentBackground.offsetWidth - 15 + "px";
        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-4");
            colChilds[b].classList.add("col-3");
        }
        

    } else if (libClick && getContentBackground.style.display == "block") {
        libContEl.style.display = "none";
        lecEl.style.display = "block";
        lectClick.style.borderLeft = "none";
        libClick.style.borderLeft = "1px solid #707070";
        libClick.style.color = "#333333";
        lectClick.style.color = "#fff";
    }
    
}

//Clear library checkbox

let getLibCheckButton = document.getElementById("library-check-button");
getLibCheckButton.addEventListener("click", unCheckFunc);

let checkBoxes = document.getElementsByTagName('input');
function unCheckFunc() {
    
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type == 'checkbox') {
            checkBoxes[i].checked = '';
        }
    }


    
       
    

    
    

}

