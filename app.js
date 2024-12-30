// // //alert("hello world");

// // // console.log(123);
// // // console.log("Microdegree");
// // // console.log(true);
// // // var greeting="hello";
// // // console.log(greeting);

// // // console.log([1,2,3,4]);

// // // console.log({a:1,b:2,c:3});

// // //variables
// // //var, let and const
// // //var //ES6 or ES2015

// // var name = "suri";
// // //console.log(name);
// // name = "Gaurav";
// // console.log(name);

// // var greeting;
// // greeting = "hello world";
// // console.log(greeting);

// // //Rules and Conventions of variables
// // //letter, number, _ and $

// // var $name = "john";
// // console.log($name);

// // var firstName = "Mani"; //camelcase
// // console.log(firstName);

// // var fisrt_name = "Mani"; //underscore
// // console.log(fisrt_name);

// // var FirstName = "Gaurav"; //pascalcase
// // console.log(FirstName);

// // let firstName = "Rakesh"; //camelcase
// // console.log(firstName);

// // const name = "suri";
// // console.log(name);
// // name = "Gaurav"; //is not possible in const
// // console.log(name);

// // const person = {
// //     name: "Sunny"
// // };

// // person.name="Kiara";

// // console.log(person);

// // const numbers = [1,2,3,4];

// // numbers.push(5);

// // console.log(numbers);

// //string
// const name = "Surendra";

// console.log(typeof name);

// //number
// const num = 7;

// console.log(typeof num);

// //boolean
// const hasSiblings = true;

// console.log(typeof hasSiblings);

// //null
// const abc = null; //we are storing a value of nothing

// console.log(typeof abc);

// //undefined
// let a; //if we don't initialize with a value , then it is undefined, by default variables are defined

// console.log(typeof a);

// //symbol
// const sym = Symbol();

// console.log(typeof sym);

// //reference datatypes

// //Arrays
// const hobbies = ['movies','cricket'];

// console.log(typeof hobbies);

// //object literals
// const person = {
//     name:'sunny',
//     age:24
// };

// console.log(typeof person);

// //Dates
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// //Type Conversion and Cohesion

// let val;

// //Number to String
// val = String(5);
// console.log(val)
// console.log(typeof val);
// console.log(val.length);

// //Boolean to String
// val = String(true);
// console.log(val)
// console.log(typeof val);
// console.log(val.length);

// //Date to String
// val = String(new Date());
// console.log(val)
// console.log(typeof val);
// console.log(val.length);

// //Array to String
// val = String([1,2,3,4]);
// console.log(val)
// console.log(typeof val);
// console.log(val.length);

// //tostring() method
// val =(5).toString();
// console.log(val)
// console.log(typeof val);
// console.log(val.length);

// //String to Number
// val = Number("5");
// console.log(val)
// console.log(typeof val);
// console.log(val.toFixed(2));

// //Boolean Value to Number
// val = Number(true);
// val = Number(false);
// val = Number(null);
// console.log(val)
// console.log(typeof val);
// console.log(val.toFixed(2));

// //parseint()
// val = parseInt("5");
// console.log(val)
// console.log(typeof val);
// console.log(val.toFixed(2));

// //TypeCohesion
// const val1 = "5";
// const val2 = 6;
// const sum = val1+val2;
// console.log(sum);
// console.log(typeof sum);

// const val = Number("SurendraBabu");
// console.log(val);
// console.log(typeof val);

// let val = Boolean(0);
// console.log(val);
// console.log(typeof val);

// firstName = "Surendra";
// let val;
// val = firstName.lastIndexOf("r");
// console.log(val);

//Template Literals
const name = "Suri";
const age = 25;
const city = 'Chitradurga';
const job = 'M365 Admin';

let html;

//without using template literals, ES5, we are going to render HTML to browser with JS

html = '<ul><li>Name:' + name + ' </li><li>Age:' + age + '</li><li>City:' + city + '</li><li>Job:' + job + '</li></ul>';

document.body.innerHTML = html;

function hello(){
    return "hello";
}

//with Template Literals(ES6)
html = `
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>City:${city}</li>
<li>Job:${job}</li>
<li>${hello()}</li>
</ul>
`;

document.body.innerHTML = html;

//object Literals


