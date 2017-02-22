'use strict';

$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#confirmBtn").click(confirm);
    $("#backBtn").click(back);
}

function confirm(e) {
    e.preventDefault();

    $.post("/movenow-driver",
        {
            "name": $("#name").val(),
            "start": $("#location").val(),
            "end": $("#destination").val(),
            "distance": (Math.round(Math.random() * 20)) / 10,
            "pic": "http://lorempixel.com/400/400/people"
        }, confirmed);
}

function confirmed(data) {
    window.location.href = "confirmation";
    //$('.alert').show();
    //alert.alert();
}

function back(e){
    window.location.href = "equipment";
}