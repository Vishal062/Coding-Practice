let count = 0
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Event Handler Clicked", ++count);
});
//This callback function keep track of event click;

//Now we look a example of closure with event

function closureex(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Event Handler Clicked", ++count);
    }); //Now this callback function forming a closure with his outer scope.
}

closureex()



//Callback___Async await___Promise>>>>>>

/*
These are used to acheive asynchronous Programming in javascript.

The callback is the oldestr way to work with asynchronous operation in js
The callback is a function passed to another function as an arguments

The callback suffers from the callback hell problem when working with
dependent asunchronous calls.
It offers poor error handling
The promise is the new way of dealing with asunchronous operations and 
it is introduced in ES6.

It overcomes the problem of callback.

The promise offers diffrent set of methods to work with dependent and parallel
asynchronous calls.
It provides better error handling than the callback.

*/