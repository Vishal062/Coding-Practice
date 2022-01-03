// 1.

function getName (){
    var status = true;

    if(status){
        const name1 = "masai";
    }
    console.log(name1);
}
getName();

//refrence error.

// 2

let array = ['a','b','c','d','e'];
const func = function([f, ...r]){
    return r.reduce(function(a,c){
        return a+c
    }) + f;
}
var x = func(array)
console.log(x);

// B c d e a

// 3

const arr = [1,2,3,4];

arr = arr.map(function(a){
    return a+10;
});

console.log(arr);

//Type error due to const.
