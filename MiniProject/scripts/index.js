let button = document.getElementById('enter');
let clockPara = document.getElementById('clock');
let stopTimeHr = document.getElementById('stopTimeHr');
let stopTimeMin = document.getElementById('stopTimeMin');
let stopTimeSec = document.getElementById('stopTimeSec');
let note = document.getElementById('note');

let timer = "";

let lpad = (num, size) => {
    numString = String(num);
    while (numString.length < size){
        numString = "0" + numString
    }
    return numString;
}

function setTimer(){
    timer --;
    hr = lpad(Math.floor(timer / 3600),2);
    // console.log(hr);
    minSec = timer % 3600;
    // console.log(minSec);
    min = lpad(Math.floor(minSec / 60),2);
    sec = lpad((minSec % 60),2);
    
    // console.log (`${hr}:${min}:${sec}`)
    if (timer > 10){
        clock.classList.remove('red');
        clock.innerText = `${hr}:${min}:${sec}`;
    }
    else if(timer <= 10 && timer > 0){
        clock.classList.add('red');
        clock.innerText = `${hr}:${min}:${sec}`;
    }
    else{
        clock.innerText = "Your time's up!!!";
        note.innerText = "Page will be automatically refreshed after 10 seconds";
    }
}
let refreshPage = () => {
    location.reload();
}

button.onclick = () => {
    timer = (stopTimeHr.value * 3600) + (stopTimeMin.value * 60) + Number(stopTimeSec.value);
    // console.log(timer);
    stopTimeHr.value = "";
    stopTimeMin.value = "";
    stopTimeSec.value = "";
    timeoutTime = (timer * 1000) + 10000;
    console.log(timeoutTime);
    setTimeout(refreshPage,timeoutTime);
    setInterval(setTimer,1000);
}

