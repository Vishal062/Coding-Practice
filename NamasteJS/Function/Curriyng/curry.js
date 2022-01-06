/*
Currying is a technique of evaluating function with multiple arguments, into sequence of functions with 
single argument.In other words, when a function, instead of taking all arguments at one time, takes the 
first one and return a new function that takes the second one and returns a new function which takes 
the third one, and so forth, until all arguments have been fulfilled.

Uses of currying function:
  a) It helps to avoid passing same variable again and again.

  b) It is extremely useful in event handling. 

the currying technique with the help of closures. During the thread of execution, the calculateVolume() 
function will be invoked. Inside there is an anonymous function, receiving a parameter and returning 
some code. We are exposing our function from another function, so the closure will be created. Closure 
always contains the function definition along with the lexical environment of the parent, both things 
remain connected as a bundle. Hence, it does not matter where we invoke them, the all inner functions 
will always hold access to the variable of their parent.
As soon as we have got the returned result as a function the next argument is ready to be passed, 
this process will continue till the second last function. Finally, the innermost return keyword returns 
the expected result.
*/

function Myfunction(a) {
    return (b) => {
       return (c) => {
         return a * b * c
        }
    }
}

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));