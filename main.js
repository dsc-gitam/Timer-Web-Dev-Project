var msec = 0;
var sec = 0;
var min = 0;
var mintag = document.getElementById("min")
var sectag = document.getElementById("sec")
var msectag = document.getElementById("msec")
var interval
function Timer() {
    msectag.innerHTML = ++msec;
    if (msec >= 100) {
        sec++;
        if (sec < 10) {
            sectag.innerHTML = "0" + sec
        } else {
            sectag.innerHTML = sec
        } msec = 0
    } else if (sec >= 60) {
        min++;
        if (min < 10) {
            mingtag.innerHTML = "0" + min
        } else {
            mingtag.innerHTML = min
        }
        sec = 0;

    }
}
function start() {
    interval = setInterval(Timer, 100)

    document.getElementById("start").disabled = true;
}
function pause() {
    clearInterval(interval)
    document.getElementById("start").disabled = false;

}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    msectag.innerHTML = "0" + msec
    sectag.innerHTML = "0" + sec
    mintag.innerHTML = "0" + min
    pause()
    document.getElementById("start").disabled = false;

}
var click = new Audio();
click.src = "cliek.mp3"
function playaudio() {
    click.play()
}