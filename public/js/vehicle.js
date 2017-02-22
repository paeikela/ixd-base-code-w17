'use strict';

$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#nextBtn").click(addVehicle);
    //if("window.history.forward()" === )
}

function addVehicle(e) {
    e.preventDefault();

    $.post("/vehicle",
        {
            "vehicle": $("#vehicle").val(),
        },
        /*if("name" =null || "start"=null || "end"||null){
            document.getElementById('error').innerHTML="All fields must contain valid inputs";
        }else{ */
            addedVehicle);
    //}
}

function addedVehicle(data) {
    window.location.href = "equipment";
    //$('.alert').show();
    //alert.alert();
}