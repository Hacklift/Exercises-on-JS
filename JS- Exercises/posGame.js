// POS stands for Part Of Speech


function partOfSpeech (noun, verb1, adverb, adjective, verb2){
    let result = " ";
    result += `The ${adjective} ${noun} ${verb1} out of the country ${adverb} because of ${verb2}`;

    return result;
}

console.log (partOfSpeech('woman', 'flew', 'hastily','rich','fraud'));