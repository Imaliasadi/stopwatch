const startBtn= document.querySelector('.start')
const resetBtn= document.querySelector('.reset')

let seconds= 0;
let minutes= 0;
let hours= 0;

let timerInterval= null;
let timerStatus= "stopped"

let leadingSeconds= 0;
let leadingMinutes= 0;
let leadinghours= 0;

function stopWatch(){

     seconds++;

     if (seconds / 60 === 1)
     {  seconds = 0;
        minutes++;
    };
    
    if (minutes / 60 === 1){
        minutes = 0;
        hours++
    }
    

    if(seconds < 10){
        leadingSeconds= `0${seconds}`
    }
    else{
        leadingSeconds= seconds
    };

    if(minutes < 10){
        leadingMinutes= `0${minutes}`
    }
    else{
        leadingMinutes= minutes
    };

    if(hours < 10){
        leadinghours= `0${hours}`
    }
    else{
        leadinghours= hours
    };

    let displayTime= document.querySelector('.numbers').innerText= leadinghours + ':' + leadingMinutes + ':' + leadingSeconds

}

startBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval= window.setInterval(stopWatch, 1000);
        timerStatus= "started";
        document.querySelector('.start').innerHTML= `<i class="fa-solid fa-pause pause"></i>`;
    }
    else{
        window.clearInterval(timerInterval);
        document.querySelector('.start').innerHTML= `<i class="start"></i>`;
        timerStatus= "stopped";
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds= 0;
    minutes=0;
    hours=0;
    timerStatus="stopped";
    document.querySelector('.numbers').innerText= "00:00:00";
})
 