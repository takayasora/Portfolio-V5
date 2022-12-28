'use strict'
function clock_calendar(){
const date = new Date();
const year = date.getFullYear();
const month = [
    "1/",
    "2/",
    "3/",
    "4/",
    "5/",
    "6/",
    "7/",
    "8/",
    "9/",
    "10/",
    "11/",
    "12/",
];
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

document.querySelector('.year').innerHTML
= year;

document.querySelector('.month').innerHTML
= month[date.getMonth()];

document.querySelector('.day').innerHTML
= day;

document.querySelector('.hour').innerHTML
= hour;
if (minutes>=10){
document.querySelector('.minutes').innerHTML
= minutes;
}
else{
document.querySelector('.minutes').innerHTML
= "0"+minutes;
}
document.querySelector('.seconds').innerHTML
= seconds;
}

setInterval(function(){
    clock_calendar();
})