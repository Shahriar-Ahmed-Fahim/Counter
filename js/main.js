let counterContainer = document.querySelector(".counter_container");
let deBtn = document.querySelector(".de_btn");
let reBtn = document.querySelector(".re_btn");
let inBtn = document.querySelector(".in_btn");

let counterStart = 0;
let counterIncInterval;
let counterDecInterval;


function counterIncrease(){
    counterStart++;
    counterContainer.innerHTML = counterStart;
}

function counterDecrese(){
    counterStart--;
    counterContainer.innerHTML = counterStart;
}

function startIncreaseCounter(){
    counterIncInterval = setInterval(function(){
        counterIncrease();
    }, 200);
}

function startDecreaseCounter(){
    counterDecInterval = setInterval(function(){
        counterDecrese();
    }, 200);
}

inBtn.addEventListener("click", function(){
    if(counterIncInterval) return;
    clearInterval(counterDecInterval);
    counterDecInterval = null;
    startIncreaseCounter();
})

reBtn.addEventListener("click", function(){
    clearInterval(counterIncInterval);
    clearInterval(counterDecInterval);
    counterIncInterval = counterDecInterval = null;
    counterStart = 0;
    counterContainer.innerHTML = counterStart;
})

deBtn.addEventListener("click", function(){
    if(counterDecInterval) return;
    clearInterval(counterIncInterval);
    counterIncInterval = null;
    startDecreaseCounter();
})




let colors = ["red", "green", "blue", "yellow", "pink", "Aquamarine", "BlueViolet", "Chartreuse", "White"];

let colorBtn = document.querySelector(".color_btn");
let bg = document.querySelector("body");

let i = 0;

colorBtn.addEventListener("click", function(){
    i++;
    if(i == colors.length){
        i = 0;
    }
    bg.style.backgroundColor = colors[i];
})