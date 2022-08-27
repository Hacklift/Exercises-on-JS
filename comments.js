let oneComment = 1; // This is used to comment out just one line of code.

/* This one
is used
to comment
out multiple 
lines of
code */


function randomRange (minRandomNumber, maxRandomNumber){
    let randomNumbers = [];
    for(let i = 0; i < 6; i++) {
        randomNumbers = randomNumbers.push(Math.floor(Math.random() * (minRandomNumber - maxRandomNumber + 1 )) + minRandomNumber);
    return randomNumbers;
    }
}
console.log (randomRange(1,9));

