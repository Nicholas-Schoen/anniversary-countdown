const anniversaryDayMessage = document.getElementById("anniversary-day");
const tagLine = document.getElementById("tag-line");
const monthsNumber = document.getElementById("months-number")
const daysNumber = document.getElementById("days-number");
const hoursNumber = document.getElementById("hours-number");
const minutesNumber = document.getElementById("minutes-number")
const secondsNumber = document.getElementById("seconds-number")

const date = new Date();
const year = date.getFullYear();
const anniversaryDate = new Date(`December 15, ${year} 00:00:00`);
const now = date.getTime();

let distance = anniversayDate - now;

function countdownTimer() {
  
};

while(distance > 0){
    countdownTimer();
};
console.log(anniversaryDate);

