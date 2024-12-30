//Object Literals

// const person = {
//     firstName: "Sunny",
//     age: 25,
//     email: "abc@gmail.com",
//     hobbies: ["eat","movies","cricket"],
//     address: {
//         city: "Challakere",
//         state: "Karnataka"
//     },
//     getBirthYear: function() {
//         return 2024-this.age;
//     },
// };

// let val;
// val = person;

// console.log(val.getBirthYear());

//Array of Objects

// const people = [
//     {
//         firstName: "Suri",
//         age: 25,
//     },
//     {
//         firstName:"Gowri",
//         age: 45,
//     }
// ]

// for(let i=0;i<people.length;i++)
// {
//     console.log(people[i].firstName);
// }

//condistionals and comparision

// if else condistion we can also write like this
//Ternary Operators
//  const id = 100;

//  console.log(id === 101 ? "yes, correct" : "no, its not 100");

//for loop
// for(let i=0;i<9;i++)
// {
//     console.log(`hy ${i}`);
// }

// const names = ["Mani","Sunny","Suri","Babu"];
// for(let i=0; i<names.length; i++)
// {
//     console.log(names[i]);
// }

//while loop
//  let i=0;
//  while(i<9)
//  {
//     console.log(i);
//     i++;
//  }

//do while loop

// let i=9;
// do{
//     i++;
//     console.log(i);
// }
// while(i<9);

//for in loop

// const person = {firstName: "Sunny", age: 25};
// for(x in person)
// {
//     console.log(person[x]);
// }

//function declaration and expression

//function declarion
// function greet(firstName="Suri"){
//     return `Hello ${firstName}`;
// }

// console.log(greet());

//function expression
// const mul = function(a, b){
//     return a * b;
// }
// console.log(mul(2, 3));

//IIFE - Immediately invokable function expression
// (function(name){
//     console.log(`${name} ran...`)
// }) ("Mani");

// const person = {
//     getBirthday: function(day){
//         return `Feb ${day} 1999`;
//     }
// }
// console.log(person.getBirthday(8));
