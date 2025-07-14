//Task 8 : JavaScript Object - Store Real- World Info
//Object : An object stores data as key-value pairs like this:
let student = {
    name: "Tejuu",
    age:21,
    course:"JavaScipt"
}
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student["age"]);
console.log(student["name"]);
console.log(student["course"]);

//1.Create and print a student object
let std = 
{
    id:101,
    stdname:"Tejuuu",
    email:"tejashri@gmail.com",
    mobile: 9921
};
console.log(std.id);
console.log(std.stdname);
console.log(std.email);
console.log(std.mobile);

//2.Add new key to Object:
let person = {
    namee:"sonaa"
}

console.log(person);
person.age=20;
console.log(person);
person.adhar=1234;
person.phone=123;
person.region= "India";
console.log(person);
console.log(person.namee);
console.log(person.age);
console.log(person.adhar);
console.log(person.phone);
console.log(person.region);

//print all object keys and values
let laptop = {
    brand :"Hp",
    ram:"8GB",
    price:40000
};

for(let key in laptop)
{
    console.log(key + " = " + laptop[key]);
}

//---------------------------
console.log("----------------------------------");
 let car = {
    brand1 : "BMW"  
 };
 //console.log(car.brand1);

 let  bag={
    color:"black"
 };

 let Search = {
    Engine : "Google"

 };

 let room={
    roomate:4
 };

 let Human = {
    Gender : "Female"

 };

 for(let key in car)
 {
    console.log(key + " = " + car[key]);

 }

 for(let key in bag )
 {
    console.log(key + "=" + bag[key]);
 }

 for(let key in Search)
 {
    console.log(key + "=" + Search[key]);
 }

 for(let key in room)
 {
    console.log(key + "=" + room[key]);
 }

 for(let key in Human)
 {
    console.log(key + "= " + Human[key]);
 }


 //3.Print all object keys and values
 let laptopp = {
    brandd : "HP",
    ram : "8GB",
    princee : 40000
 };

for(let key in laptopp)
{
    console.log(key + " = " + laptopp[key]);
}

//4.Array of 2 Objects
let students =
[
    {name : "Tejuu" , marks:88},
    {name : "Riyaa", marks:92 }
];
console.log(students[0].name);
console.log(students[1].marks);

//5.Pass objective to funtion
function showInfo(user)
{
    console.log("Name : " + user.name);
    console.log("City : " + user.city);
}
let user1 = {
    name : "Tejuu",
    city: "Pune"
};
 
showInfo(user1);