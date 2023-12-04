// let i =10;
// console.log(i);
// i=10+2;
// console.log(i);

// if(NaN == NaN) console.log("true");
// else console.log("false");



// var a = 10;
// console.log(window.a);
// console.log("Raja ji")
// var $myName = 'raja birla';
// console.log($myName);

// var a = 30;
// var b = 10;
// console.log(a=b);

// difference between == and === ?

// var num  = 5;
// var num1 = '5'

// console.log(num == num1);
// console.log(typeof(num));
// console.log(typeof(num1));
// console.log(num === num1);

// if else
// var tom = 'sunny';

// if(tom == 'rain'){
//     console.log('Take a raincot');

// }else{console.log('No need to take raincot');}

//While Loop

// var num = 0;
// while(num <= 10)
// {
//     console.log(num);
//     num++;
// }

//  Do-While Loop

// var num = 20;
// do{
//     console.log(num);
//     num++;

// }while(num <= 10);

// For Loop

// for(var num = 0; num <= 10; num++)
// {
//     console.log(num);
// }

// for(var num = 1; num <=10; num++)
// {
//     numOf = 8;
//     console.log(numOf + " * " + num + " = " + numOf * num);
// }

// for(var num = 1; num <=10; num++)
// {
//     numOf = 9;
//     console.log(numOf + " * " + num + " = " + numOf * num);
// }

// for(var num = 1; num <=10; num++)
// {
//     numOf = 12;
//     console.log(numOf + " * " + num + " = " + numOf * num);
// }

// for(var num = 1; num <=10; num++)
// {
//     numOf = 15;
//     console.log(numOf + " * " + num + " = " + numOf * num);
// }

    // let value = Number(prompt("Enter a value"));
    
    // if(value === 0)
    // {
    //     alert("Not Allowed");
    // }else{alert("Welcome");}








// Functions

// function sum()
// {
//     var a = 10; var b = 20;
//     total = a+b;
//     console.log("The sum is " +total);
// }

// function sum(a,b)
// {
//     // var a = 10; var b = 20;
//     total = a+b;
//     console.log(total);
// }

// sum(20,30);
// sum(70,30);

// anonymous function expresion

// var funExp = function(a,b)
// {
//     return total = a+b;
// }

// var sum = funExp(4,6);  //Run the code like this

// console.log('The sum of two number is ' + sum);

// anonymous function expresion

// var funExp = function(a,b)
// {
//     return total = a+b;
// }

// anonymous function

//  function(a,b)
// {
//     return total = a+b;
// }

// ES6 => 2015

// let const
// template string
// default arguments
// destructering
// object properties
// arrow functions
// Rest operators
// spread Operators

// var => Function scope
// Let & Const  => Block scope

// Function scope

// function biodata()
// {
//     var myFirstName = 'Raja';
//     console.log(myFirstName);

//     if(true)
//     {
//         var myLastName = 'Birla';
//         console.log('inner '+ myLastName);
//         console.log('inner '+ myFirstName);

//     }

//     console.log('Outer '+ myLastName);
// }
// biodata();

// Block scope

// function biodata()
// {
//     let myFirstName = 'Raja'; //globaly declear
//     console.log(myFirstName);

//     if(true)
//     {
//         let myLastName = 'Birla';
//         console.log('inner '+ myLastName);
//         console.log('inner '+ myFirstName);

//     }

//     console.log('Outer '+ myLastName);
//     // console.log(myFirstName);
// }
// biodata();

// Child variable can use the parent variables but parent cannot use the child variables !!

// Default Parameter

// function mult(a,b=5)
// {
//     return a*b;
// }
// console.log(mult(4));

// Fat Arrow Function

// console.log(sum());
// function sum()
// {
//     let a = 5; let b = 6;
//     let sum = a+b;
//     return `The of numbers is ${sum}`;}

// How to convert into Fat Arrow Function

// const sum = () =>
// {
//     let a = 5; let b = 6;
//     let sum = a+b;
//     return `The of numbers is ${sum}`;
// }
// console.log(sum());

// Tamplate literals  ` ${ } `

// const sum = () =>
// {
//     let a = 5; let b = 6;
//     return `The sum of two numbers is ${a+b}`;
// }
// console.log(sum());

// const sum = () =>
// { return `The sum of two numbers is ${(a=5)+(b=6)}`;}
// console.log(sum());

// const sum = () =>`The sum of two numbers is ${(a=5)+(b=6)}`;
// console.log(sum());

// Arrays in JS

// const myfrnds = ['ram', 'shyam', 'sita', 'geeta','raja','birla'];

// console.log(myName[2]);

// Traversal on Array

// for(let i = 0; i<myName.length; i++) {console.log(myName[i]);}

// For in Loop
// const myFrnds = ['ram', 'shyam', 'sita', 'geeta','raja','birla'];

// for(let elements in myFrnds)
// {
//     console.log(elements);
// }

// For of Loop

// const myFrnds = ['ram', 'shyam', 'sita', 'geeta','raja','birla'];

// for(let elements of myFrnds){console.log(elements);}

// forEach Loop

// const myFrnds = ['ram', 'shyam', 'sita', 'geeta','raja','birla'];
// myFrnds.forEach(function(elements, index)
// {
//     console.log(elements +" "+ index);
// })

// fat arrow function
// myFrnds.forEach((elements, index) =>{
//     console.log(elements +" "+ index);
// })

// const animals = ['pigs', 'goat', 'sheep'];
// animals.push('chicken', 'cat','monkey');
// console.log(animals);

// const count = animals.push();
// console.log(count);

// animals.pop();
// console.log(animals);

// const months= ['Jan', 'march', 'April','June','July'];
// const newMonth= months.splice(months.length,0,"Dec");
// console.log(months);

// console.log(newMonth);

// const months= ['Jan', 'march', 'April','June','July'];

// const indexOfMonth= months.indexOf('march');
// if(indexOfMonth != -1)
// {
//     const updateMonths= months.splice(indexOfMonth,1,"March");
//     console.log(months);

// }
// else{console.log('No such data found');}

// const months= ['Jan', 'March', 'April','June','July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1)
// {
//     const deleteMonth = months.splice(indexOfMonth,1);
//     console.log(months);
//     console.log(deleteMonth);
// }

// else{console.log('No data found');}

//map() //

// const Arr1 = [1, 4, 9, 16, 25, 36];
// date >9

// const newArray=Arr1.map((curEle,index,Arr1) =>{
//     return curEle > 9;
// })

// console.log(newArray);
// console.log(Arr1);

// const newArray= Arr1.map((curEle,index,Arr1) =>{
//     return `index no = ${index} and the value is ${curEle} belongs to ${Arr1} `
// })
// console.log(newArray);
// console.log(Arr1);

// let arr = [25, 36, 49, 64, 81, 100];

// let arrSqr = arr.map((curEle) => {
//   return Math.sqrt(curEle);
// });
// console.log(arrSqr);


// let arr=[2,3,4,6,8,10];

// let arrMul = arr.map((curEle) =>{
//     return curEle * 2;
// }).filter((curEle) =>{
//     return curEle > 10;
// })
// console.log(arrMul);

// let arrMul = arr.map((curEle) => curEle * 2).filter((curEle) => curEle > 10).reduce((accumalator,curEle) =>accumalator += curEle)
// console.log(arrMul);


// *Reduce*
// let arr1 =[24,26];
// let sum = arr1.reduce((accumalator,curEle) =>{return accumalator += curEle})
// console.log(sum);

// Data() and Time() Methods in js


// let currDate = new Date();
// // console.log(currDate);
// console.log(currDate.toLocaleDateString());
// console.log(currDate.toLocaleString());
// console.log(currDate.toString());
// console.log(Date.now());


// var d = new Date(2022,11,10,10,20.00);
// console.log(d.toLocaleString());


// const currDare = new Date();

// console.log(currDare.toLocaleString());
// console.log(currDare.getFullYear());
// console.log(currDare.getMonth());
// console.log(currDare.getDay());
// console.log(currDare.getDate());

// let t = new Date();
// console.log(t.toLocaleTimeString());
// console.log(t.toLocaleDateString());
// console.log(t.toLocaleString());
// // console.log(t.toString());


// setTimeout(function, miliseconds)

// setInterval(function, miliseconds)

// oops in js


// Object Literal


// let biodata ={
//     myName : 'Raja Birla',
//     myAge : 22,
//     getData : function(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }

// }

// console.log(biodata.myName);
// console.log(biodata.myAge);
// console.log(biodata.getData());
// biodata.getData();



// After the ES6 new way to declear the function like that



// let biodata ={
//     myName : 'Raja Birla',
//     myAge : 22,
//     getData() {
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }

// }
// biodata.getData();

// let userQuestion = 'ji raja ji';
// console.log(userQuestion);

//  console.log(this.alert('Awesome'));


//  const obj = {
//      myAge : 22,
//      myName : () => {
//         console.log(this);
//      }

//  }
//  obj.myName();



// spread operators 
// const color = ['red', 'blue', 'green'];
// const myColor = [...color,'yellow', 'pink', 'voilet'];
// console.log(myColor);


// console.log(2**2);

// ES8 features
// String padding
// Object.values()
// Object.entries()



// const person = {name: 'raja', age : 22};

// // console.log(Object.values(person));
// console.log(Object.entries(person));



// const add = (a,b) => { return a+b;}
// const subs = (a,b) => { return Math.abs(a-b);}
// const mult = (a,b) => {return a*b;}

// const calculator = (num1, num2, operator) => {
//     return operator(num1,num2);
// }

// calculator(5,3,subs);
// console.log(calculator(5,6,subs));

// Hoisting in JS

// console.log(myName);
// var myName ;
// myName = 'Birla';


// EVENT Loop in javascript


// const fun2 = () =>{
//     setTimeout(() =>{
//         console.log('fun2 is starting');
//     },3000);
// }

// const fun1 = ()=>{
//     console.log('fun1 is starting');
//     fun2();
//     console.log('fun1 is again starting');
// }

// fun1();


// Curring

// function sum(num1){
//     return function sum(num2){
//         return function sum(num3){
//             console.log(num1 + num2 + num3);
//         }
//     }
// }

// const sum = (num1) => (num2) => (num3) => console.log(num1 * num2 * num3);


// sum(5)(3)(8);

 

// const generateJokes = async () =>{
//     try{
//         const setHeader ={
//             Headers :{
//                 Application :  "application/json"
//             }
//         }

//         const res = await fetch("",setHeader);
//         const date = await res.json();
//         jokes.innerHtml = date.joke;
//     }catch(err)
//     {
//         console.log(`the error is ${err}`);
//     }
// }

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });