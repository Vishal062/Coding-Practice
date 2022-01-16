//Arrow Function Majorly has three diffrence>>>>>>
// 1.
//In normal function
 
var person={
    name:"VishalSinha",
    age:25,
    print: function(){
    console.log(this.name +" "+ this.age);
    }
}
person.print();     //===>output will be  VishalSinha 25
 
//In Arrow function
var person1={
   name:"VishalSinha",
   age:25,
 
   print : ()=>{
   console.log(this.name)
   }
}
person1.print();    //===>output will be   Undefined

// 2.
//In normal function 
var add=function(a,b){
console.log(arguments[0]) }
add(1,2)    //Output will be 1  because arguments[0] indicates the first argument of the function.

//In Arrow function

var  add=(a,b)=>{
console.log(arguments[0]) 
}

add(1,2)    //The output will be { }