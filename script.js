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
    showWinner();

});

Megatron4.addEventListener('click',function(){
    result.style.display='block';
    optionFour.style.display='none';
    winMegatron++;
    showWinner();
});

Bumblebee4.addEventListener('click',function(){
    result.style.display='block';
    optionFour.style.display='none';
    winBumblebee++;

    showWinner();

});

Ironhide4.addEventListener('click',function(){
    //result.classList.remove("hidden");
    //optionFour.classList.add("hidden");
    result.style.display='block';
    optionFour.style.display='none';
    winIronhide++;

    showWinner();

});

Prime1.addEventListener('mouseover', function(){
    Prime1.style.fontSize = '40px';
    Prime1.style.color ='blue';
    Prime1.style.borderColor = 'black';
});
Prime1.addEventListener('mouseout', function(){
    Prime1.style.fontSize = '35px';
    Prime1.style.color = 'black';
    Prime1.style.borderColor = 'black';
});

Megatron1.addEventListener('mouseover', function(){
    Megatron1.style.fontSize = '40px';
    Megatron1.style.color ='purple';
    Megatron1.style.borderColor = 'black';
});
Megatron1.addEventListener('mouseout', function(){
    Megatron1.style.fontSize = '35px';
    Megatron1.style.color = 'black';
    Megatron1.style.borderColor = 'black';
});

Ironhide1.addEventListener('mouseover', function(){
    Ironhide1.style.fontSize = '40px';
    Ironhide1.style.color ='black';
    Ironhide1.style.borderColor = 'black';
});
Ironhide1.addEventListener('mouseout', function(){
    Ironhide1.style.fontSize = '35px';
    Ironhide1.style.color = 'black';
    Ironhide1.style.borderColor = 'black';
});

Bumblebee1.addEventListener('mouseover', function(){
    Bumblebee1.style.fontSize = '40px';
    Bumblebee1.style.color ='yellow';
    Bumblebee1.style.borderColor = 'black';
});
Bumblebee1.addEventListener('mouseout', function(){
    Bumblebee1.style.fontSize = '35px';
    Bumblebee1.style.color = 'black';
    Bumblebee1.style.borderColor = 'black';
});

Prime2.addEventListener('mouseover', function(){
    Prime2.style.fontSize = '40px';
    Prime2.style.color ='blue';
    Prime2.style.borderColor = 'black';
});
Prime2.addEventListener('mouseout', function(){
    Prime2.style.fontSize = '35px';
    Prime2.style.color = 'black';
    Prime2.style.borderColor = 'black';
});

Megatron2.addEventListener('mouseover', function(){
    Megatron2.style.fontSize = '40px';
    Megatron2.style.color ='purple';
    Megatron2.style.borderColor = 'black';
});
Megatron2.addEventListener('mouseout', function(){
    Megatron2.style.fontSize = '35px';
    Megatron2.style.color = 'black';
    Megatron2.style.borderColor = 'black';
});

Ironhide2.addEventListener('mouseover', function(){
    Ironhide2.style.fontSize = '40px';
    Ironhide2.style.color ='black';
    Ironhide2.style.borderColor = 'black';
});
Ironhide2.addEventListener('mouseout', function(){
    Ironhide2.style.fontSize = '35px';
    Ironhide2.style.color = 'black';
    Ironhide2.style.borderColor = 'black';
});

Bumblebee2.addEventListener('mouseover', function(){
    Bumblebee2.style.fontSize = '40px';
    Bumblebee2.style.color ='yellow';
    Bumblebee2.style.borderColor = 'black';
});
Bumblebee2.addEventListener('mouseout', function(){
    Bumblebee2.style.fontSize = '35px';
    Bumblebee2.style.color = 'black';
    Bumblebee2.style.borderColor = 'black';
});

Prime3.addEventListener('mouseover', function(){
    Prime3.style.fontSize = '40px';
    Prime3.style.color ='blue';
    Prime3.style.borderColor = 'black';
});
Prime3.addEventListener('mouseout', function(){
    Prime3.style.fontSize = '35px';
    Prime3.style.color = 'black';
    Prime3.style.borderColor = 'black';
});

Megatron3.addEventListener('mouseover', function(){
    Megatron3.style.fontSize = '40px';
    Megatron3.style.color ='purple';
    Megatron3.style.borderColor = 'black';
});
Megatron3.addEventListener('mouseout', function(){
    Megatron3.style.fontSize = '35px';
    Megatron3.style.color = 'black';
    Megatron3.style.borderColor = 'black';
});

Ironhide3.addEventListener('mouseover', function(){
    Ironhide3.style.fontSize = '40px';
    Ironhide3.style.color ='black';
    Ironhide3.style.borderColor = 'black';
});
Ironhide3.addEventListener('mouseout', function(){
    Ironhide3.style.fontSize = '35px';
    Ironhide3.style.color = 'black';
    Ironhide3.style.borderColor = 'black';
});

Bumblebee3.addEventListener('mouseover', function(){
    Bumblebee3.style.fontSize = '40px';
    Bumblebee3.style.color ='yellow';
    Bumblebee3.style.borderColor = 'black';
});
Bumblebee3.addEventListener('mouseout', function(){
    Bumblebee3.style.fontSize = '35px';
    Bumblebee3.style.color = 'black';
    Bumblebee3.style.borderColor = 'black';
});

Prime4.addEventListener('mouseover', function(){
    Prime4.style.fontSize = '40px';
    Prime4.style.color ='blue';
    Prime4.style.borderColor = 'black';
});
Prime4.addEventListener('mouseout', function(){
    Prime4.style.fontSize = '35px';
    Prime4.style.color = 'black';
    Prime4.style.borderColor = 'black';
});

Megatron4.addEventListener('mouseover', function(){
    Megatron4.style.fontSize = '40px';
    Megatron4.style.color ='purple';
    Megatron4.style.borderColor = 'black';
});
Megatron4.addEventListener('mouseout', function(){
    Megatron4.style.fontSize = '35px';
    Megatron4.style.color = 'black';
    Megatron4.style.borderColor = 'black';
});

Ironhide4.addEventListener('mouseover', function(){
    Ironhide4.style.fontSize = '40px';
    Ironhide4.style.color ='black';
    Ironhide4.style.borderColor = 'black';
});
Ironhide4.addEventListener('mouseout', function(){
    Ironhide4.style.fontSize = '35px';
    Ironhide4.style.color = 'black';
    Ironhide4.style.borderColor = 'black';
});

Bumblebee4.addEventListener('mouseover', function(){
    Bumblebee4.style.fontSize = '40px';
    Bumblebee4.style.color ='yellow';
    Bumblebee4.style.borderColor = 'black';
});
Bumblebee4.addEventListener('mouseout', function(){
    Bumblebee4.style.fontSize = '35px';
    Bumblebee4.style.color = 'black';
    Bumblebee4.style.borderColor = 'black';
});

function showWinner() {
    if (winBumblebee >= winPrime && winBumblebee >= winIronhide && winBumblebee >= winMegatron) {
        winBumblebeeElem.classList.remove("hidden");
    } else if (winPrime >= winBumblebee && winPrime >= winIronhide && winPrime >= winMegatron) {
        winPrimeElem.classList.remove("hidden");
    } else if (winIronhide >= winPrime && winIronhide >= winBumblebee && winIronhide >= winMegatron){
        winIronhideElem.classList.remove("hidden");
    } else {
        winMegatronElem.classList.remove("hidden");
    }
}
