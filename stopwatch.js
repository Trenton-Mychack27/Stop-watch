let text = document.querySelector("#display");
document.getElementById("controlStrt").addEventListener("click", startTimer);
document.getElementById("controlStop").addEventListener("click", stopTimer);
let counter = 0;
let timerId;

function startTimer() {
    if (!timerId) {
        timerId = setInterval(updateText, 1000);
    }
}

function updateText() {
    counter++;
    text.textContent = counter;
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null; 
    reset();
}

function reset() {
    text.textContent = "0";
    counter = 0;
}