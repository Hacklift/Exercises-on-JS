//generating random values in an array

function pickArray (arr){
const idxOf = (Math.floor(Math.random() * arr.length));
return arr[idxOf];
}

//calling pickArray function here in another function to randomly pick values from different arrays.

function getArray(){
    const firstArr = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const secondArr = ['clubs', 'spades', 'heart', 'diamond'];
    return { value: pickArray(firstArr), card: pickArray(secondArr)};
}
console.log (getArray());
