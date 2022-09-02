/*allows you to write a function without actuall writing the word 'function'*/

const addition = x => {
    if (x % 2 != 1){
        console.log ('isEven');
    } else{
        console.log ('odd')
    }
    
}

// can be easily written as

const isEvenOdd = x => (x%2 === 0? 'even' : 'odd'); 

console.log  (isEvenOdd (3));
console.log  (isEvenOdd (6));