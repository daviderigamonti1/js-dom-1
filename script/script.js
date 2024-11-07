"use strict";
console.clear();

const image = document.querySelector("img");
const onOff = document.getElementById("onOffButton");

onOff.addEventListener("click", onOrOff)

let isOn = false;

function onOrOff() {
    if(isOn === false) {
        image.src = "img/white_lamp.png"
        isOn = true;
    } else {
        isOn = false;
        image.src = "img/yellow_lamp.png"
    }
}