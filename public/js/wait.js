$(document).ready(function() {
	initializePage();
})


function initializePage() {
	timer = setTimeout(back, 5000);
}

function back(){
	//window.history.back()
	window.location.href = "movenow-driver";

}