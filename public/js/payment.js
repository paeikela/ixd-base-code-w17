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

    window.prompt("Please enter your name","defaultText");
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");

}

function updateName(){
	var person = prompt("Please enter your name", "");

	if(person!=null){
		document.getElementById("name").innerHTML = person;
	}
}

function updateCard(){
	var card = prompt("Please enter your card#", "");

	if(card!=null){
		document.getElementById("card").innerHTML = card;
	}
}