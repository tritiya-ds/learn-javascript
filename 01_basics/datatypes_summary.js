//Javascript is a dynamically-typed language.
// classification of datatype(according to store data):
// 1. Primitive, 2.Non-primitive

//1. Primitive Datatype :

// 7 Types : String, NUmber, Boolean, Null, Undefined, Symbol(use to make unique values), BigInt
// const person = "ram"
// const score = 100
// const scoreValue = 111.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);//false


// const bigNumber = 456867567069765869576787897n
// console.log(bigNumber);// 456867567069765869576787897n

// const bigNumber = 456867567069765869576787897
// console.log(bigNumber);// 4.568675670697659e+26


// console.log(typeof person); //string
// console.log(typeof id); //symbol
// console.log(typeof userEmail); //undefined
// console.log(typeof outsideTemp); //object
// console.log(typeof  score); //number
// console.log(typeof bigNumber); //bigInt
// console.log(typeof isLoggedIn); //boolean



//2. Non-primitive / Reference Datatype :

// Array[], Objects{}, Functions()

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name:"Ram",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("hello world");
// }
// console.log(typeof myFunction); //function
// console.log(typeof myObj); //object
// console.log(typeof heros); //object