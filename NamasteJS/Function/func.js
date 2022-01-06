//Example 1.

var x = 10;

a();
b();
console.log(x);

function a() {
    var x =50;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
}
//op 50 100 10.


// function hello(a){
//     var x = 10;
//     return function b(){
//         console.log(x);
//     }
// }

// var c = hello(100);
// c(x);

