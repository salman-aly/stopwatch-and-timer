//for stopwatch
//for js value
var min = 0;
var second = 0;
var milisec = 0;
//for clear the interval
var interval;

//to get the html values
var getmin = document.getElementById("hour");
var gets = document.getElementById("min");
var getms = document.getElementById("sec");

//hide timer when stopwatch start
var timerHidden = document.getElementById("timer-hidden");
//hide stopwatch when timer start
var stopwatchHidden = document.getElementById("stopwatch-hidden");




//for start 
function start() {
    fullscreen()
    timerHidden.style.display = "none"
    interval = setInterval(function () {
        milisec++;
        getms.innerHTML = milisec;
        if (milisec >= 100) {
            second++;
            gets.innerHTML = second;
            milisec = 0;
        }
        else if (second >= 60) {
            min++;
            getmin.innerHTML = min;
            second = 0;
        }

    }, 10)
    var startBtn = document.getElementById("start");
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#DEDDDE"
}

//for stop
function stop() {
    clearInterval(interval);
    var startBtn = document.getElementById("start");
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#1A73E8"
}
//for reset
function reset() {
    exit()
    timerHidden.style.display = "flex"
    location.reload()
    min = 0;
    second = 0;
    milisec = 0;
    getmin.innerHTML = `00`
    getms.innerHTML = `00`
    gets.innerHTML = `00`
}

//for timer js start from here

var sec = 59;
var min = 20;
var timer;
var timerElements = document.getElementById("timer");

function startTimer() {
    fullscreen()
    stopwatchHidden.style.display = "none"
    timer = setInterval(() => {
        sec--;
        timerElements.innerHTML = `${min}:${sec}`
        if (sec < 0) {
            sec = 59;
            min--;
        }
    }, 10);
    var startBtnTimer = document.getElementById("starttimer");
    startBtnTimer.disabled = true;
    startBtnTimer.style.backgroundColor = "#DEDDDE"
}


function stopTimer() {
    clearInterval(timer);
    var startBtnTimer = document.getElementById("starttimer");
    startBtnTimer.disabled = false;
    startBtnTimer.style.backgroundColor = "#1A73E8"
}

function resetTimer() {
    exit()
    stopwatchHidden.style.display = "flex"
    var sec = 0;
    var min = 0;
    timerElements.innerHTML = `00:00`
}

//request fullscreen

// var fullscreen = document.getElementById("fullscreen");

// fullscreen.addEventListener('click', function () {
//     document.documentElement.requestFullscreen()
// });


function fullscreen() {
    document.documentElement.requestFullscreen()
}

function exit() {
    document.exitFullscreen()
}