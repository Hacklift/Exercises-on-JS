//importing diceroll file into this file

const importFunc = require ("./diceroll"); //importing dicerollDie function into this file
console.log(importFunc);  //to see all properties of diceroll file

//appling diceroll function in another function 
function throwDice(times){
    for (let i = 0; i < times; i++){
        importFunc();
    }
    }
    throwDice(6); 