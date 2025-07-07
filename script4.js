//IF - Else Condition 
//Example 1 : Age Check
let age = 18;

if(age >=18)
{
    console.log("Your are eligible to vote.");
}
else{
    console.log("Sorry, you are not eligible to vote yet.");
}

//Example 2:Positive , Negative or Zero

let number = 5;

if(number < 0)
{
    console.log("Number is Negative . ");
}
else if (number > 0)
{
    console.log("Number is Positive");
}
else
{
    console.log("Number is Zero");
}


//Speed Limit Checker


let speed = prompt("Enter your current speed :");

if(speed > 100)
{
    console.log("Over Speed ! Slow Down");
}
else if(speed >= 60 && speed <= 100)
{
    console.log("Safe driving Speed . ");
}
else{
    console.log("Too slow ! Speed up a bit . ");
}


//Prompt()
//prompt()shows a popup to take input from the user.

let name=prompt("What is your name.");
alert("hello , " + name + "!");




