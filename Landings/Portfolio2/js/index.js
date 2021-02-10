"use strict";

function changeText() {
    $("#openPortfolio").toggleClass("active");
    $("#openMe").toggleClass("active");
}

//#region Canvas1
//canvas draw
let canvas1 = document.querySelector("#canvas1");
let ctx1 = canvas1.getContext("2d");

ctx1.moveTo(15, 10); //draw cricle
ctx1.fillStyle = "#ffa501";
ctx1.arc(9, 10, 9, 0, 2 * Math.PI);
ctx1.fill();

//draw line
ctx1.fillStyle = "black";
ctx1.fillRect(8.5, 19, 1.5, 407);

//draw line1
ctx1.fillRect(8.5, 95, 44, 1.5);

//draw line2
ctx1.fillRect(8.5, 285, 44, 1.5);
//#endregion

//#region Canvas2
//canvas draw
let canvas2 = document.querySelector("#canvas2");
let ctx2 = canvas2.getContext("2d");

ctx2.moveTo(15, 10); //draw cricle
ctx2.fillStyle = "#ffa501";
ctx2.arc(9, 10, 9, 0, 2 * Math.PI);
ctx2.fill();

//draw line
ctx2.fillStyle = "black";
ctx2.fillRect(8.5, 19, 1.5, 407);

//draw line1
ctx2.fillRect(8.5, 95, 44, 1.5);

//draw line2
ctx2.fillRect(8.5, 285, 44, 1.5);
//#endregion

let isOpen = true;
//open sidebar
function sidebarHandler() {
    $(".content").toggleClass("active");
    $(".sidebar").toggleClass("active");
    $(".wrapper").toggleClass("active");

    if(isOpen) {
        $("#openPortfolio").attr('href', '');
        $("#openMe").attr('href', '');
    } else {
        $("#openPortfolio").attr("href", "#portfolio");
        $("#openMe").attr("href", "#about");
    }
    isOpen = !isOpen;
}