/* The condition for a valid password is as follow:
1. password must be up to 7 characters
2. password must not contain space(s) */

function validPassword (password){
    if (password.length < 7 || password.indexOf (' ')!== -1){
        return("No space in password and no less than 7 characters, try again!")
    }
    else{
        return("You are signed in");
    }

    }

    //calling the function off of an argument
    console.log(validPassword("familyreunion"));
    console.log(validPassword("fam ilyreunion"))
    console.log(validPassword("family"))


    