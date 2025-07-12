//Task 6 : JavaScript Funtions - Write Resuable Logic
/* A funtion is  a block of code that perform a specific task and can be reused ...
Syntax */
function greet()
{
    console.log("Hello , Tejuuu");
}

greet(); //calling the function...


//Funtions with Parameter:
function greetUser(name)
{
    console.log("Welcome " + name + "!");
}

greetUser("Tejuu");
greetUser("Sonaa");

//Function that returns a value:
function square(num)
{
    return num* num;
}

let result = square(5);
console.log("Square is: " +result);

//1.sayHello
function sayHello()
{
    console.log("Hello Teju !");
}
sayHello();

//2.printTAble
function printTable(num1)
{
    for(let i=1; i<=10 ;i++)
   {
    console.log("5 X " + i + " = " +(i*num1));
   }
}

printTable(5);

//isEven();
function isEven(num2)
{
    return num2 % 2 ===0;
}

console.log(isEven(4));
console.log(isEven(9));

//calculateArea(length,width)
function calculateArea(length,width)
{
    return length * width;
}
console.log(calculateArea(5,4));

//sumOfDigits(num)
function sumOfDigits(num4)
{
    let sum = 0;
    while(num4 > 0)
    {
        sum += num4 % 10;
        num4 = Math.floor(num4 / 10);
    }
    return sum;
}
console.log(sumOfDigits(123));

//prompt() + function
function  greetUser(namee)
{
    alert("Hii " + namee + " , Welcome to my app !");
}

let username = prompt("Enter your namee : ");
greetUser(username);
