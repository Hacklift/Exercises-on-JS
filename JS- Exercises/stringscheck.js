//defining a function to compare colors defined in the function with an array of colors

function isColors(arr){
    for (let color of arr){
        if (color.toLowerCase() === 'purple' ||
        color.toLowerCase === 'magenta'){
        return true;
}

}
return false;
}

let output = isColors(['blue','red']);
console.log (output);