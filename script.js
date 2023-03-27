function time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var clock = hours + " : " + minutes + " : " + seconds;
    document.getElementById("clock").innerHTML = clock;
    setTimeout(time, 1000);
}
time();
