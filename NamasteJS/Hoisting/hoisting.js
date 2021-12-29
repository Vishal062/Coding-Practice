//Example 1.

// var x =7;

// function hello(){
//     console.log("Hello Hoisting");
// }

// hello();
// console.log(x);

//Op Hello hoisting and 7

//Example 2


// hello();
// console.log(x);

// var x =7;

// function hello(){
//     console.log("Hello Hoisting");
// }

//op hello hoisting and undefined
//Because we want to access the value before intilising.

//Example 3

// hello();
// console.log(x);
// console.log(hello);

// var x =7;

// function hello(){
//     console.log("Hello Hoisting");
// }
//This is very weird for the x its giving undefined but for the function its giving 
//the correct output.

//Example 4 use of arrow function >

hello();
console.log(x);
console.log(hello);

var x =7;


var hello = () =>{
    console.log("Hello Hoisting");
}

//Another type of writting function > 

var hello = function (){
    console.log("Hello new function");
}
//Now this will give you error due to arrow function.
//This time hello function work as a another variable in global scope and its value
//assigned as a undefined.
//and arrow function and foo = function(){...} type of function 
//also behave like a variable in memory creaton phase

//Variables are partially hoisted while functions are fully hoisted.

