const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const setDate = "00:00:00 1 January 2023";

function countdown() {
    const dateCountdown = new Date(setDate);
    const currentDate = new Date();

    const totalSec = (dateCountdown - currentDate) / 1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const minutes = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec % 60);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = time(hours);
    minutesElement.innerHTML = time(minutes);
    secondsElement.innerHTML = time(seconds);
}

function time(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);