
function display(){
    document.getElementById('DateDisp').innerHTML = "The date today is: " + new Date(Date.now()).toString();
    document.getElementById('DateDispInMinutes').innerHTML = "Milliseconds since the start of time: " + Date.now();
}