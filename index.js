
var timeEl = document.getElementById('time');

var date;
var minutes;
var seconds;
var hours;

window.setInterval(function() {

date = new Date();
minutes = date.getMinutes();
seconds = date.getSeconds();
hours = date.getHours();

    var current = hours + ":" + minutes + ":" + seconds;
    var currenth = hours + ":" + 0 + minutes + ":" + 0 + seconds;
    var currentmin = hours + ":" + 0 + minutes + ":" + seconds;
    var currentsec = hours + ":" + minutes + ":" + 0 + seconds;

    if (minutes < 10 && seconds < 10) {
        timeEl.innerHTML = currenth;
    } else if (minutes < 10){
        timeEl.innerHTML = currentmin;
    } else if (seconds < 10) {
        timeEl.innerHTML = currentsec;
    } else {
        timeEl.innerHTML = current;
    }
    }, 1000 );


