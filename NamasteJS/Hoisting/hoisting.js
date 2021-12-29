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

hello();
console.log(x);
console.log(hello);

var x =7;

function hello(){
    console.log("Hello Hoisting");
}
//This is very weird for the x its giving undefined but for the function its giving 
//the correct output.