
const monthsEl  = document.getElementById("months");
const daysEl    = document.getElementById("days");
const hoursEl   = document.getElementById("hours");
const minsEl    = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2023";


function countDown(){
    const newYearData = new Date(newYear);
    const currentData = new Date();
    const totalSecond = (newYearData - currentData)/1000;
    const month   = Math.floor((totalSecond/3600/24)/30);
    const days    = Math.floor(totalSecond/3600/24)%30;
    const hours   = Math.floor(totalSecond/3600)%24;
    const mins    = Math.floor(totalSecond/60)%60;
    const seconds = Math.floor(totalSecond)%60;

    monthsEl.innerHTML  = month;
    daysEl.innerHTML    = days;
    hoursEl.innerHTML   = formatTime(hours);
    minsEl.innerHTML    = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    // console.log( month, days , hours, mins, seconds)

}  

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
setInterval(countDown, 1000)
// countDown()