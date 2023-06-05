/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let inputValue = "";
let textEl1 = document.getElementById("txt-el1");
let textEl2 = document.getElementById("txt-el2");
let textEl3 = document.getElementById("txt-el3");


inputBtn.addEventListener("click", function() {
    inputValue = inputEl.value
    const meterFeet = inputValue * 3.281
    const feetMeter = inputValue / 3.281
    
    const literGallon = inputValue * 0.264
    const gallonLiter = inputValue / 0.264
    
    const kilogramPound = inputValue * 2.204
    const PoundKilogram = inputValue / 2.204
    
    textEl1.innerHTML = `${inputValue} meters = ${meterFeet.toFixed(3)} feet | ${inputValue} feet = ${feetMeter.toFixed(3)} meters`   
    
    textEl2.innerHTML = `${inputValue} liters = ${literGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonLiter.toFixed(3)} liters`   
    
    textEl3.innerHTML = `${inputValue} kilograms = ${kilogramPound.toFixed(3)} pounds | ${inputValue} pounds = ${PoundKilogram.toFixed(3)} kilograms`      
})
