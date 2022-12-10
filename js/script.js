let MyBirthDate = new Date("2023-12-09 00:00:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let remainingTime = MyBirthDate - now;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // if (remainingTime < 0) {
    //     clearInterval(x);
    //     document.getElementById('demo').innerHTML = "Happy Birthday Me :)♡";
    // }
}, 1000)