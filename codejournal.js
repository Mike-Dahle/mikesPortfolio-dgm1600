/* this a a multi line comment*/

//single line comment

const ANSWER = 42;  // constant

let string1 = "Hello World" //preferred way to declare string

let string2 = new String("Hello World") //string using constructor

//you dont have to distinguish between int and float

"1" == 1 //this will show true, because its loosely checking

"2" === 2 //this is stricly checking data type equality

let myBool = false //boolean

let exampleArray = [1, 'hello', 23.9 ] //array

//arrays work similarly to python

//objects

let myCar = {
    make: 'mazda',
    year: '2007',
    color: 'black',
    doors: 4 
} // like a dictionary in python | can define it with const or let

myCar.doors = '4';

function myFunction() {
    //this will execute a function that can be called
}


// Arrow Function

element => console.log(element) // implicit return when only one line for the function

element => {
    let foo = 
    return console.log(element) // explicit return for an arrow function. becuase of multiple lines
}