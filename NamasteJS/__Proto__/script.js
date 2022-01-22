function Person(name){
    this.name = name
 }; 

var eve = new Person("Eve");

eve.__proto__ == Person.prototype //true

eve.prototype  //undefined

console.log(eve.prototype); //undefined
console.log(eve.__proto__); //{};
console.log(Person.prototype);  //{}


/*
Instances have __proto__, classes have prototype.

>What is the prototype ?

prototype is an object automatically created as a special property of a function, 
which is used to establish the delegation (inheritance) chain, aka prototype chain.

When we create a function a, prototype is automatically created as a special property
on a and saves the function code on as the constructor on prototype.

>What's the difference between __proto__ and prototype?
__proto__a reference works on every object to refer to its [[Prototype]]property.

prototype is an object automatically created as a special property of a function, 
which is used to store the properties (including methods) of a function object.


>prototype

prototype is a property of a Function. It is the blueprint for creating objects by 
using that (constructor) function with new keyword.

>__proto__

__proto__ is used in the lookup chain to resolve methods, properties. when an object 
is created (using constructor function with new keyword), __proto__ is set to (Constructor) 
Function.prototype
*/