'use strict'

let libClick = document.querySelector(".lib-click");

let getContentBackground = document.querySelector(".content-background");

if(getContentBackground){
    getContentBackground.style.display = "none";
}


if(libClick) {
    libClick.addEventListener("click", libFunc);

    //hides content-background
   
    

    function libFunc() {

        //get filter-items
        let filterElem = document.querySelectorAll('.filter-items');


        //get col classes
        let colChilds = document.getElementsByClassName("box-visibility");


        //get offset width of library element for library content
        let libGetWidth = document.querySelector(".lib-click").offsetWidth;

        let gridSystem = document.querySelector(".grid-system-id");

        



        //lib-content (form)
        let libContEl = document.querySelector(".lib-content");

        //hides lect-content id
        let getLectTab = document.querySelector(".lect-content");
        getLectTab.style.display = "none";

        //display none on tag content
        let tagCont = document.querySelector(".tag-content");
        tagCont.style.display = "none";

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

            

            for (let b = 0; b < colChilds.length; b++) {
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
            
            
            
            for (let b = 0; b < colChilds.length; b++) {
                colChilds[b].classList.remove("col-4");
                colChilds[b].classList.add("col-3");
            }
            

        } else if (lectClick  && getContentBackground.style.display == "block") {
            

            
                getLectTab.style.display = "none";
                libContEl.style.display = "flex";
                lectClick.style.borderLeft = "1px solid #707070";
                libClick.style.borderLeft = "none";
                libClick.style.color = "#fff";
                lectClick.style.color = "#333333";
                tagClick.style.color = "#333333";
            
            
            
        } 

        
    }

}




//lec-click


let lectClick = document.querySelector(".lec-click");

if(lectClick) {
    lectClick.addEventListener("click", lectFunc);

    function lectFunc() {

        //get filter-items
        let filterElem = document.querySelectorAll('.filter-items');


        //get col classes
        let colChilds = document.getElementsByClassName("box-visibility");


        //get offset width of library element for library content
        let tagGetWidth = document.querySelector(".lec-click").offsetWidth;


        let libContEl = document.querySelector(".lib-content");
        

        let lecEl = document.querySelector(".lect-content");

        
        
            
        //display none on lib-content
        libContEl.style.display = "none";

        //display none on tag content
        let tagCont = document.querySelector(".tag-content");
        tagCont.style.display = "none";

        let gridSystem = document.querySelector(".grid-system-id");
        
        
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

            for (let b = 0; b < colChilds.length; b++) {
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
            
        
            
            for (let b = 0; b < colChilds.length; b++) {
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
                tagClick.style.color = "#333333";
                lectClick.style.borderLeft = "none"; 
        } 
        
    }
}



//tag content

let tagClick = document.querySelector(".menu-tag-item");

if(tagClick){
    tagClick.addEventListener("click", tagFunc);

    function tagFunc() {

        //get filter-items
        let filterElem = document.querySelectorAll('.filter-items');


        //get col classes
        let colChilds = document.getElementsByClassName("box-visibility");


        //get offset width of library element for tag content
        let tagGetWidth = document.querySelector(".lib-click").offsetWidth;

        let tagEl = document.querySelector(".tag-content");
            
        //display none on lib-content
        let libContEl = document.querySelector(".lib-content");
        libContEl.style.display = "none";

        //hides lect-content id
        let getLectTab = document.querySelector(".lect-content");
        getLectTab.style.display = "none";


        let gridSystem = document.querySelector(".grid-system-id");
        
        
        if (getContentBackground.style.display == "none"){
            getContentBackground.style.display = "block";

            //removes border left on lec-click id
            
            //removes border of library from the left side
            libClick.style.borderLeft = "none";
            
            tagEl.style.display = "block";

            libContEl.style.display = "none";
            getLectTab.style.display = "none";

            for (let i = 0; i < filterElem.length; i++) {
                if (i % 2 == 0) {
                    filterElem[i].style.color = "#333333";
                }
                
            }

            for (let a = 0; a < colChilds.length; a += 4) {
                colChilds[a].style.display = "none";
            }

            //Library content gets width parameter of the library element current width
            getContentBackground.style.maxWidth = tagGetWidth + 36 + "px";


            gridSystem.style.marginLeft = getContentBackground.offsetWidth + 15 + "px";

            for (let b = 0; b < colChilds.length; b++) {
                colChilds[b].classList.remove("col-3");
                colChilds[b].classList.add("col-4");
            }

        }
        else if (getContentBackground.style.display == "block" && tagEl.style.display == "block" && tagClick){
            getContentBackground.style.display = "none";
            
            //add border left on lec-click id
            libClick.style.borderLeft = "1px solid #707070";

            
            for (let i = 0; i < filterElem.length; i++) {
                if (i % 2 == 0) {
                    filterElem[i].style.color = "#fff";
                }

            }
            
            for (let a = 0; a < colChilds.length; a += 4) {
                colChilds[a].style.display = "block";
            }

            gridSystem.style.marginLeft = getContentBackground.offsetWidth - 15 + "px";
            
        
            
            for (let b = 0; b < colChilds.length; b++) {
                colChilds[b].classList.remove("col-4");
                colChilds[b].classList.add("col-3");
            }
            

        } else if (libClick  || lectClick && getContentBackground.style.display == "block") {
        
            lectClick.style.borderLeft = "#fff";
            libContEl.style.display = "none";
            getLectTab.style.display = "none";
            tagEl.style.display = "block";
            libClick.style.borderLeft = "none";
            libClick.style.color = "#333333";
            lectClick.style.color = "#333333";
            tagClick.style.color = "#fff"
            
            if (lectClick && getContentBackground.style.display == "block") {
                lectClick.style.borderLeft = "1px solid #707070";
            }

            
            
        }


        
        
    }
}














//Clear library checkbox

let getLibCheckButton = document.querySelector(".library-check-button");

if(getLibCheckButton){
    getLibCheckButton.addEventListener("click", unCheckFunc);

    let checkBoxes = document.getElementsByTagName('input');
    function unCheckFunc() {
        
        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].type == 'checkbox') {
                checkBoxes[i].checked = '';
            }
        }
    
    }  
}


