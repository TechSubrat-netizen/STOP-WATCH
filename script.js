let minTag=document.querySelector('#minute');
let secTag=document.querySelector('#sec')
let miliSecTag= document.querySelector('#mili-sec');
//button
let startBtn=document.querySelector('#start-btn');
let stopBtn=document.querySelector('#stop-btn');
let resetBtn=document.querySelector('#reset-btn');


let min=0;
let sec=0;
let mSec=0;

let temp=true;

function timer()
{
    mSec=mSec+10;
    if(mSec==1000)
    {
        sec=sec+1;
        mSec=0;
        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
    }

    minTag.textContent=concatZero(min);
    secTag.textContent=concatZero(sec);
    miliSecTag.textContent=concatZero(mSec);
}

let interval=null;

startBtn.addEventListener('click',function()
{
    if(temp)
    {
        interval=setInterval(timer,10);
        temp=false;
    }
})

stopBtn.addEventListener('click',function()
{
    if(!temp)
    {
        clearInterval(interval);
        temp=true;
    }
})


resetBtn.addEventListener('click',function()
{
    clearInterval(interval);
    temp=true;
    min=0;
    sec=0;
    mSec=0;
    minTag.textContent="00";
    secTag.textContent="00";
    miliSecTag.textContent="00";
})


//concat zero

function concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}