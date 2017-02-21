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
	var name = prompt("Please enter your new name", "");

	if(name!=null && name.length < 20){
		document.getElementById("name").innerHTML = name;
		document.getElementById('errname').innerHTML="";
	}
	else{
		document.getElementById('errname').innerHTML="Name must consist of less than 20 letters";
	}
}

function updateCard(){
	var card = prompt("Please enter your new card#", "");

	if(isNaN(card)){
		document.getElementById('errcard').innerHTML="Card must consist of only numbers";
	}
	else if (card.length != 16){
		document.getElementById('errcard').innerHTML="Card must consist of exactly 16 numbers";
	}
	else if (card!=null){
		document.getElementById("card").innerHTML = card;
				document.getElementById('errcard').innerHTML="";

	}
}