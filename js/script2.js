const userInput = document.getElementById('userInput');
const btnRestart = document.getElementById('restart');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');





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



let userItem;
function userSelection (){
        userInput.addEventListener('change', (e)=>{
        userItem = parseInt(e.target.value);
     });
}

let numberBoomb;
function randomNumberGenerator () {
    const promiseNumberBoomb = new Promise((resolve) => {
        setTimeout(()=> {
            numberBoomb = Math.floor(Math.random()*3)+1;
            resolve();
        }, 1000);
    });
    promiseNumberBoomb
        .then(() => {
            evalue();
    });
}

function evalue() {
    if (numberBoomb === userItem) {
        result.innerText = `Has salvado el mundo, has elegido el número ${userItem} y la bomba estallaba con ${numberBoomb}`;
    } else {
        result.innerText = `La bomba ha estallado, has elegido el número ${userItem} y la bomba estallaba con ${numberBoomb}`;
    }
}





function restartGame(){
    userItem = undefined;
    numberBoomb = undefined;
    userInput.value = "";
    result.innerText = "";
    countdown.innerText = '';
}
btnRestart.addEventListener('click', restartGame);





userSelection();






// const userInput = document.querySelector('#userInput');
// let selectedUser;

// function handleUserInput() {
//     selectedUser = userInput.value;
    
//     if (selectedUser >= 1 && selectedUser <= 3) {
//         console.log('Seleccionado es:', selectedUser);
//     } else {
//         console.log('Introduce un número del 1 al 3 y pulsa Enter o haz clic fuera del cuadro.');
//         selectedUser = undefined;
//     }
// }

// userInput.addEventListener('input', () => {
//     selectedUser = userInput.value;
// });

// document.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13 && selectedUser !== undefined) {
//         handleUserInput();
//     }
// });

// document.addEventListener('click', (event) => {
//     if (event.target !== userInput && selectedUser !== undefined) {
//         handleUserInput();
//     }
// });




// const userInput = document.querySelector('#userInput');
// let selectedUser;

// // Función para manejar el evento de clic y la pulsación de la tecla Enter
// function handleUserInput() {
//     // Obtenemos el valor introducido por el usuario
//     const inputValue = userInput.value;

//     // Verificamos si el valor está dentro del rango del 1 al 3
//     if (inputValue >= 1 && inputValue <= 3) {
//         // Si está dentro del rango, actualizamos selectedUser
//         selectedUser = inputValue;
//         console.log('Seleccionado es:', selectedUser);
//     } else {
//         // Si no está dentro del rango, mostramos un mensaje de error
//         console.log('Introduce un número del 1 al 3 y pulsa Enter o haz clic fuera del cuadro.');
//     }
// }

// // Agregamos un event listener para el evento 'click'
// userInput.addEventListener('click', handleUserInput);

// // Agregamos un event listener para el evento 'keydown' (pulsación de tecla)
// userInput.addEventListener('keydown', (event) => {
//     // Si la tecla presionada es Enter (código 13)
//     if (event.keyCode === 13) {
//         // Llamamos a la función para manejar la entrada del usuario
//         handleUserInput();
//     }
// });

// // Event listener para cuando se hace clic fuera del cuadro
// document.addEventListener('click', (event) => {
//     // Si el clic se hizo fuera del cuadro, reiniciamos selectedUser
//     if (event.target !== userInput) {
//         selectedUser = undefined;
//     }
// });











// const userInput = document.querySelector('#userInput');
// let selectedUser;
// userInput.addEventListener('click', (event) => {
//     setTimeout(() => {
//         const promiseSelectionUser = new Promise((resolve) => {
//             selectedUser = event.target.value;
//             resolve('Seleccionado es: ' + selectedUser);
//             console.log(selectedUser);
//         }, 100);
//     });
// });









// let selectedUser;
// userInput.addEventListener('click', (event) => {
//     setTimeout(()=>{
//     const promiseSelectionUser = new Promise((resolve) => {
//     selectedUser= event.target.value;
//     resolve ('Seleccionado es: ', selectedUser);
//     console.log(selectedUser)
//     },100);
// })
// });
// const resultBoomb = (numberBoomb, userInput)
//     if (userInput === numberBoomb){
//         return `La bomba ha estallado, has elegido el número ${userInput} y la bomba estallaba con ${numberBoomb}`;
//     } else {
//         return `Has salvado el mundo, has elegido el número ${userInput} y la bomba estallaba con ${numberBoomb}`;
//     }
//     console.log(resultBoomb);
