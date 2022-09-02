//  grading system, grades a student based on his test and exam scores.
function gradeCheck (test, exam)
{
    let sumUp = test + exam;
    if (sumUp <= 40){
        return (`You scored ${sumUp}, REPEAT!`);
    }
    else if (sumUp <= 59){
        return (`You scored ${sumUp} = Grade C`);
    }
    else if (sumUp <= 59){
        return (`You scored ${sumUp} = Grade C`);
    }
    else if (sumUp <= 69){
        return (`You scored ${sumUp} = Grade B`);
        }

    else if (sumUp <= 100){
        return (`You scored ${sumUp} = Grade A`);
    }
}

//call the function name and enter the test and exam scores.

console.log(gradeCheck(23,45));
    