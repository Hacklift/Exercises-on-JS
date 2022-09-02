
function rollADie (){
    const once = Math.floor(Math.random() * 6) +1;
    console.log (`Rolled: ${once}`);
}

function multipleRoll (number){
    for (let i = 0; i < number; i++ ){
        rollADie();
    }

}


module.exports = rollADie; //to export the function to other files