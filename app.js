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



//request fullscreen

var fullscreen = document.getElementById("fullscreen");

fullscreen.addEventListener('click', function () {
    this.requestFullscreen()
});

//for start 
function start() {
    // element.requestFullscreen()
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
    timerHidden.style.display = "flex"
    min = 0;
    second = 0;
    milisec = 0;
    getmin.innerHTML = `00`
    getms.innerHTML = `00`
    gets.innerHTML = `00`
}

//for timer js start from here

var sec = 0;
var min = 5;
var timer;
var timerElements = document.getElementById("timer");

function startTimer() {
    stopwatchHidden.style.display = "none"
    timer = setInterval(() => {
        timerElements.innerHTML = `${min}:${sec}`
        sec++;
        if (sec >= 60) {
            sec = 0;
            min--;
        }
    }, 60);
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
    stopwatchHidden.style.display = "flex"
    var sec = 0;
    var min = 0;
    timerElements.innerHTML = `00:00`
}
