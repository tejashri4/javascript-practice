/**Let's now focus on while loop - it's another powerful way to repeat actions in JacaScript.
You don't know how many times , but repeat until a condition is false.
Only condition written in loop, other parts are outside
Syntax : while(condition)   **/
//Syntax:
let i = 1;
while(i <=5)
{
    console.log(i);
    i++;
}

//It rins as long as the condition is true.

//1.Print number 1 to 10
let  a = 1;
while( a <= 10)
{
    console.log(a);
    a++;
}

//2.Print even numbers from 2 to 20
let b=2;
while(b <=20)
{
    console.log(b);
    i +=2;
}

//3.Printe odd number from 1 to 15
let c = 1;
while(c <= 15)
{
    console.log(c);
    c +=2;
}

//4.Countdown from 10 to 1
let d = 10;
while(d >= 1 )
{
    console.log(i);
    i--;
}

//5.Print Table of 9
let e = 1;
while(e <= 10)
{
    console.log("9  X " + i + "=" + (9 * e));
    e++;
}

//6.Sum of numbers from 1 to 50
let f = 1;
let sum = 0;

while(i <= 50){
    sum +=i;
    i++ ;
}
console.log("Sum is :  " +sum);

//7. Reverse a Number(Ex: 1234 --> 4321 )
let num1 = prompt("Enter a number :");
let rev = 0;
 while (num1 > 0)
 {
    rev = rev * 10 +(num1 % 10);
    num1 = Math.floor(num1 /10);
 }
 console.log("Reversed: " +rev);


 //8.Count digits in a number
  let num2 = prompt("Enter a Number : ");
  let count = 0;
  while(num2 > 0)
  {
    num2 = Math.floor(num2 / 10 );
    count++;
  }
  console.log("Total digits: " + count);

  //9.Keep asking name until correct

  let name1 = " ";
  while (name1 !== "Tejuu")
  {
    name1 = prompt("Enter your name: ");
  }
  alert("Yay! Welcome , Tejjuu 💖!!");


  //10.Fibonacci Series - First 10 Numbers
  let x =0;y=1,z=2;
  console.log(x);
  console.log(y);

  while(z < 10)
  {
    let z = x+y;
    console.log(z);
    x = y;
    y = z;
    z++;
    
  }