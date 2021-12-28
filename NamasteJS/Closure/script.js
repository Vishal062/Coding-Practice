//Closure , What are closure.
//Why we do need to use closure.
//What is currying?
//Application

//A mechanism in which js maintain scope of some variable in closure scope, if the
//particular variable goes out of scope 
//js pass 2 engine, lexical scope if matters more on where your function are declared
//Author time.

//Closure >>>>>>

// function outer() {
//     var a =10;
//     return function inner(b){
//         return a+b;
//     }
// }
// var fn = outer();
// console.log(fn(5));

//debouncing >>>>>

// const makeApicall = () => {
//     console.log("api call in progress");
// }

// const debouncer = () => {
//     let debouncing;
//     //
//     return function () {
//         debouncing && clearTimeout(debouncing);
//         debouncing = setTimeout(()=> func.apply(this,arguments), delay)
//     }
// }
// window.addEventListener("load",function(){
//     var btn = document.getElementById('click');
    
//     btn.addEventListener("click",debouncer(makeApicall,1000))
// });


//Throttling: which will gaurenteed a call after n second.

const makeApicall = () => {
    console.log("api call in progress");
}
let c =0;
function throttle(fn,wait){
    let lastCall = 0
    return function(){
        //present time,last call time was made
        console.log(c++, Date.now() - lastCall);
        if(Date.now() - lastCall > wait){
            lastCall = Date.now();
            fn.apply(this,arguments);
        }
    }
}

window.addEventListener("load",function(){
    var btn = document.getElementById('click');
    
    btn.addEventListener("click",throttle(makeApicall,1000));
});