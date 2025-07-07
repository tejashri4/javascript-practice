//Prompt()
//prompt()shows a popup to take input from the user.

let name=prompt("What is your name.");
alert("hello , " + name + "!");

//Fun & Useful prompt() Example 

//1.Simple Greeting

let namee = prompt("Enter your name : ");
alert("Nice to meet you ," +name + "!");

//2.Addition Calculator
let num1 = prompt("Enter First number:");
let num2 = prompt("Enter second number :");

let sum = Number(num1) + Number(num2);

alert("The sum is :" + sum);

//3.Age Checker
let age = prompt("Enter your age :");
if(age >=18)
{
    console.log("You are an adult!");
}
else{
    console.log("You are a minor!");
}

//Welcome Based on Time

let hour = prompt("Enter hour (0-23):");

if(hour < 12)
{
    alert("Good Morning!");
}
else if (hour < 18 )
{
    alert("Good Afternoon...");
}
else{
    alert("Good Evenningg");
}

