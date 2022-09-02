//Here, we are creating random numbers using a forloop to give us as much as we want.

let randomNumbers = [];   //an array to store the random numbers
for(let i = 0; i < 6; i++) { // a for loop to loop through as many times as we specified
  // generating random numbers and rounding them up
  randomNumbers.push(Math.floor(Math.random() * 10) + 10); 
}
console.log(randomNumbers);