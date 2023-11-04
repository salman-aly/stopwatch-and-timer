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

//for start 
function start() {
    interval = setInterval(function () {
        milisec++;
        getms.innerHTML = milisec;
        if (milisec >= 100) {
            second++;
            gets.innerHTML = second;
            milisec = 0;
        }
        else if (second >= 5) {
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
    clearInterval(interval)
    var startBtn = document.getElementById("start");
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#1A73E8"
}
//for reset
function reset() {
    min = 0;
    second = 0;
    milisec = 0;
    getmin.innerHTML = min;
    getms.innerHTML = milisec;
    gets.innerHTML = second;
}