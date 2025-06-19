let start = document.querySelector('.start')
let optionOne = document.querySelector('.optionOne')
let optionTwo = document.querySelector('.optionTwo')
let optionThree = document.querySelector('.optionThree')
let optionFour = document.querySelector('.optionFour')
let result = document.querySelector('.result')
let winPrime = 0;
let winMegatron = 0;
let winBumblebee = 0;
let winIronhide = 0;

let Prime1 = document.querySelector('.optionOne .Prime')
let Megatron1 = document.querySelector('.optionOne .Megatron')
let Bumblebee1 = document.querySelector('.optionOne .Bumblebee')
let Ironhide1 = document.querySelector('.optionOne .Ironhide')

let Prime2 = document.querySelector('.optionTwo .Prime')
let Megatron2 = document.querySelector('.optionTwo .Megatron')
let Bumblebee2 = document.querySelector('.optionTwo .Bumblebee')
let Ironhide2 = document.querySelector('.optionTwo .Ironhide')

let Prime3 = document.querySelector('.optionThree .Prime')
let Megatron3 = document.querySelector('.optionThree .Megatron')
let Bumblebee3 = document.querySelector('.optionThree .Bumblebee')
let Ironhide3 = document.querySelector('.optionThree .Ironhide')

let Prime4 = document.querySelector('.optionFour .Prime')
let Megatron4 = document.querySelector('.optionFour .Megatron')
let Bumblebee4 = document.querySelector('.optionFour .Bumblebee')
let Ironhide4 = document.querySelector('.optionFour .Ironhide')

let winBumblebeeElem = document.querySelector('.winBumblebee');
let winPrimeElem = document.querySelector('.winPrime');
let winMegatronElem = document.querySelector('.winMegatron');
let winIronhideElem = document.querySelector('.winIronhide');


start.addEventListener('click',function(){
    start.style.display='none';
    optionOne.style.display='block';
});

Prime1.addEventListener('click',function(){
    optionOne.style.display='none';
    optionTwo.style.display='block';
    winPrime++;
});

Megatron1.addEventListener('click',function(){
    optionOne.style.display='none';
    optionTwo.style.display='block';
    winMegatron++;
});

Bumblebee1.addEventListener('click',function(){
    optionOne.style.display='none';
    optionTwo.style.display='block';
    winBumblebee++;
});

Ironhide1.addEventListener('click',function(){
    optionOne.style.display='none';
    optionTwo.style.display='block';
    winIronhide++;
});

Prime2.addEventListener('click',function(){
    optionThree.style.display='block';
    optionTwo.style.display='none';
    winPrime++;
});

Megatron2.addEventListener('click',function(){
    optionThree.style.display='block';
    optionTwo.style.display='none';
    winMegatron++;
});

Bumblebee2.addEventListener('click',function(){
    optionThree.style.display='block';
    optionTwo.style.display='none';
    winBumblebee++;
});

Ironhide2.addEventListener('click',function(){
    optionThree.style.display='block';
    optionTwo.style.display='none';
    winIronhide++;
});

Prime3.addEventListener('click',function(){
    optionFour.style.display='block';
    optionThree.style.display='none';
    winPrime++;
});

Megatron3.addEventListener('click',function(){
    optionFour.style.display='block';
    optionThree.style.display='none';
    winMegatron++;
});

Bumblebee3.addEventListener('click',function(){
    optionFour.style.display='block';
    optionThree.style.display='none';
    winBumblebee++;
});

Ironhide3.addEventListener('click',function(){
    optionFour.style.display='block';
    optionThree.style.display='none';
    winIronhide++;
});

Prime4.addEventListener('click',function(){
    result.style.display='block';
    optionFour.style.display='none';
    winPrime++;
});

Megatron4.addEventListener('click',function(){
    result.style.display='block';
    optionFour.style.display='none';
    winMegatron++;
});

Bumblebee4.addEventListener('click',function(){
    result.style.display='block';
    optionFour.style.display='none';
    winBumblebee++;
});

Ironhide4.addEventListener('click',function(){
    //result.classList.remove("hidden");
    //optionFour.classList.add("hidden");
    result.style.display='block';
    optionFour.style.display='none';
    winIronhide++;
});

if (winBumblebee >= winPrime && winBumblebee >= winIronhide && winBumblebee >= winMegatron) {
    winBumblebeeElem.classList.remove("hidden");
} else if (winPrime >= winBumblebee && winPrime >= winIronhide && winPrime >= winMegatron) {
    winPrimeElem.classList.remove("hidden");
} else if (winIronhide >= winPrime && winIronhide >= winBumblebee && winIronhide >= winMegatron){
    winIronhideElem.classList.remove("hidden");
} else {
    winMegatronElem.classList.remove("hidden");
}