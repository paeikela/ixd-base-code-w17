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

	if(person!=null && person.length < 20){
		document.getElementById("name").innerHTML = person;
	}
}

function updateCard(){
	var card = prompt("Please enter your new scard#", "");

	if (card.length != 16){
		document.getElementById('errfn').innerHTML="Card must consist of exactly 16 numbers";
	}
	else if(card!=null){
		document.getElementById("card").innerHTML = card;
	}
}