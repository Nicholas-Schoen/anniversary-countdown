const anniversaryDayMessage = document.getElementById("anniversary-day");
const mainPage = document.getElementById("count-down")
const tagLine = document.getElementById("tag-line");
const daysNumber = document.getElementById("days-number");
const hoursNumber = document.getElementById("hours-number");
const minutesNumber = document.getElementById("minutes-number")
const secondsNumber = document.getElementById("seconds-number")

const date = new Date();
const year = date.getFullYear();
const anniversaryDate = new Date(`December 15, ${year} 00:00:00`);

function countdownTimer() {
  const now = new Date().getTime();
  const distance = anniversaryDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysNumber.innerText = days;
  hoursNumber.innerText = hours;
  minutesNumber.innerText = minutes;
  secondsNumber.innerText = seconds;

  if (distance <= 0){
    clearInterval(timer);
    anniversaryDayMessage.classList.toggle("hidden");
    mainPage.classList.toggle("hidden")

  }
};

var timer = setInterval(countdownTimer, 1000);


