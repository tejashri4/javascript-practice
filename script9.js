//Task 9 : JavaScript Condition + Basic DOM
//PART 1: if/else and switch
//1.Simple if/else
let age = 18;

if(age >= 18 )
{
    console.log("You can vote.");
}
else{
    console.log("you cannot vote.");
}

//2.Use switch statement
let day = 4;
switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thuesday");
        break;

    default :
        console.log("Other day");
}

//Check number is positive or negative

let input = prompt("Enter a number : ");
if(input > 0)
{
    console.log(input + " Number is Positive");
}
 else if(input < 0 )
 {
    console.log(input + "Number is Negative");
 }
 else {
    console.log(input + " Number is Zero");
 }
//Check if number is even or odd

let num = prompt("Enter a Number : ");
if(num % 2 === 0 )
{
    console.log(num + "Number is Even ");
}
else{
    console.log(num + "Number is Odd ");
}
//Grade checker using marks

let marks = prompt("Enter a Marks ");
if(marks >= 90 )
{
    console.log("Grade A ");
}else if(marks >= 75 )
{
    console.log("Grade B ");
}else if (marks >= 60 )
{
    console.log("Grade C");
}else{
    console.log("Fail");
}

//Switch with user input(promt)
let choice = prompt("Enter number 1 , 2, 3 : ");
switch(choice)
{
    case 1:
        console.log("You choice 1 ");
        break;
    case 2 :
        console.log("You choice 2 ");
        break ; 
    case 3:
        console.log("You can choice 3");
        break;

    default:
    console.log("Invalid choice");
}
