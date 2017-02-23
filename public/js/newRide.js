/**
 * Created by Liam on 2/16/2017.
 */
'use strict';

$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#submitBtn").click(addRide);
    //if("window.history.forward()" === )
}

function addRide(e) {
    e.preventDefault();
    if(#name.length=null){
        console.log("name");
    } 
    else if("location".length=null){
        console.log("location");
    }
    else if(destination.length=null){
        console.log("destination");
    }else{
    $.post("/movenow-driver",
        {
            "name": $("#name").val(),
            "start": $("#location").val(),
            "end": $("#destination").val(),
            "distance": (Math.round(Math.random() * 20)) / 10,
            "pic": "http://lorempixel.com/400/400/people"
        },
        /*if("name" =null || "start"=null || "end"||null){
            document.getElementById('error').innerHTML="All fields must contain valid inputs";
        }else{ */
            addedRide);
    }

}

function addedRide(data) {
    window.location.href = "movenow-rider-submitted";
    //$('.alert').show();
    //alert.alert();
}

