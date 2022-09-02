//divide an array of numbers with the length of the array

function divideArr(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    }
return total / arr.length;

}

console.log(divideArr([1,2,3,4,5]));





/*a function to compare sentences with all the english alphabets
returns true if the sentence has all the english alphabets and false otherwise. */

function isPangram(sentence){
    for(let i of 'abcdefghijklmnopqrstuvwxyz'){
        if (sentence.indexOf(i) === -1){
            return false;
        }
    }

    return true;
}

console.log (pangram('i have a big cat'));  //this returns false