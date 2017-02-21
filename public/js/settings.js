$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#update").click(function(e) {
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();

}

function updateName(){
	var person = prompt("Please enter your new name", "");

	if(person!=null){
		document.getElementById("name").innerHTML = person;
	}
}

function updateAddress(){
	var address = prompt("Please enter your new address", "");

	if(address!=null){
		document.getElementById("address").innerHTML = address;
	}
}