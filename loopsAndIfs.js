//IF STATEMENTS//////////

//Accept a input from the user. If it is a number, print the multiplication table for the number. Else print the input and the length of the input.
let UserInput = prompt('Enter a value');
//Check if the user did not input anything
if (!UserInput) {
    console.log("You did not input anything")
}
//Check if the user input is not a number
else if (isNaN(UserInput)) {
    console.log("Your input is ", UserInput)
    console.log("The length of your input is ", UserInput.length)
} 
//The only option remaining is that the input is a number
else {
    console.log(UserInput, " X 1 = ", UserInput*1)
    console.log(UserInput, " X 2 = ", UserInput*2)
    console.log(UserInput, " X 3 = ", UserInput*3)
    console.log(UserInput, " X 4 = ", UserInput*4)
    console.log(UserInput, " X 5 = ", UserInput*5)
    console.log(UserInput, " X 6 = ", UserInput*6)
    console.log(UserInput, " X 7 = ", UserInput*7)
    console.log(UserInput, " X 8 = ", UserInput*8)
    console.log(UserInput, " X 9 = ", UserInput*9)
    console.log(UserInput, " X 10 = ", UserInput*10)
}

//SWITCH /////////

// Switch statements is used just like a if statement to check conidtions
let User = prompt('Enter a number between 1 to 7');
//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(User) || User< 1 || User>7) {
    console.log("Invalid input")
} else {
    User = parseInt(User)
    switch(User){
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid entry");
    }
}

//FOR LOOPS//////////////
//Accept a input from the user. If it is a number print the multiplication table for the number. 
let user_input = prompt('Enter a number');
//Check if the user input is a number
if(!isNaN(user_input)) {
    //Using for loop for the repetitive statement
    for (let i=0; i<10; i++) {
        console.log(user_input, " X ", i, " = ", user_input*i)
    }
}