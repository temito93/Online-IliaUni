
const ulTag = document.querySelector("#pagination_ul");
let totalPages = 16;

function element (totalPages, page) {
	
	// initial setup

	if (page == 1) {
		for (var i = 1; i <= 3; i++) {

			if (page == i) {
				let child = createChildElement(i, "numb active");
				ulTag.appendChild(child);
			} else {
				let child = createChildElement(i);
				ulTag.appendChild(child);
			}

		}	
	} else {

		// any other cases

		let previousPage = page - 1;
		let nextPage = page + 1; // 


		for (var i = previousPage; i <= nextPage; i++) {

			if (page == i) {
				let child = createChildElement(i, "numb active");
				ulTag.appendChild(child);
			} else {
				let child = createChildElement(i);
				ulTag.appendChild(child);
			}
			
		}
	}

	// here  is dots...

	ulTag.appendChild(createChildElement("..."));

	for (var n = totalPages - 2; n <= totalPages; n++) {
		if (page == n) {
			let child = createChildElement(n, "numb");
			ulTag.appendChild(child);
		} else {
			let child = createChildElement(n);
			ulTag.appendChild(child);
		}
	}
    
}

function createChildElement(pageTitle, className = "numb") {
	let li = document.createElement('li');
    li.textContent = pageTitle;
    li.className = className;
    return li;
}

element(totalPages, 1);

