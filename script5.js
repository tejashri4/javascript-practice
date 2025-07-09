//Task-5 : Loops - for, while
//1.for Loop

for(let i = 1; i <= 5 ; i++)
{
    console.log("Tejuu is practicing JavaScript! " + i);
}

let a;
for(a=1 ; a <= 10 ; a++)
{
    console.log("Number 1 to 10 " + a);
}

// for Loop Pratice Pack 

//1.Print numbers 1 to 20

for(let b = 1 ; b<= 20;b++)
{
    console.log(b);
}

//2.Print even numbers from 2 to 50
 
for(let c = 2 ; c <= 50 ;c +=2)
{
    console.log(c);
}

//3. Print odd numbers from 1 to 25

for(let d = 1 ; d <= 25 ; d +=2)
{
    console.log(d);
}

//4.Print table of any number (Ex:6)
let num = 6;
for(let e = 1 ; e <=10 ; e++)
{
    console.log( num + "X" + e + " = " + (num * e) );
}

//5.print square of numbers from 1 to 10
for(let f=1 ; f<=10 ; f++)
{
    console.log(" Square of " + f + "  =  " + (f * f));
}

//6. Count down from 10 to 1 

for(let g = 10 ; g >= 1 ; g--)
{
    console.log(g);
}

//7.Print numbers divisible by 5 from 1 to 100

for(let h=1; h<= 100 ; h ++)
{
    if(h % 5  === 0 )
    {
        console.log(h);
    }
}
 
//8.