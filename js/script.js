const userInput = document.getElementById('userInput');
const btnRestart = document.getElementById('restart');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');

let userItem;
function userSelection (){
    userInput.addEventListener('change', (e)=>{
        userItem = parseInt(e.target.value);
        counterTime();
    })
}

function counterTime (){
    const arrayTime =[5, 4, 3, 2, 1, 0];
    let index = 0;
    const countdownInterval = setInterval(() => {
        if (countdown.innerText = arrayTime[index]){
            index++; 
        } else {
            (index === arrayTime.length) 
            clearInterval(countdownInterval);
            randomNumberGenerator();}
    }, 1000);
}

let numberBoomb;
function randomNumberGenerator () {
    const promiseNumberBoomb = new Promise((resolve) => {
        setTimeout(()=> {
        numberBoomb = Math.floor(Math.random()*3)+1;
        resolve(numberBoomb);
    }, 1000);
});
    promiseNumberBoomb
    .then(()=> {
        evalueGame();
    })
}

function evalueGame (){
    if (numberBoomb === userItem){
        result.innerText = `Has salvado el mundo, has elegido el número ${userItem} y la bomba estallaba con ${numberBoomb}`;
    } else {
        result.innerText = `La bomba ha estallado, has elegido el número ${userItem} y la bomba estallaba con ${numberBoomb}`;
    }
}

btnRestart.addEventListener('click', ()=> {
    userItem = undefined;
    numberBoomb = undefined;
    userInput.value ='';
    result.innerText = '';
    countdown.innerText = '';
});

userSelection()


