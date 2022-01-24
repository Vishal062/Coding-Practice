/*
# Array.Shift :
- Remove the first element from the array
- Only a single element can be removed from an array.
- Returns the removed elements
- change the length of array

# Array.Unshift :
- Adds element to the start of the array.
- More then one elements can be added to an array.
- Returns the new length of a array.
- Changes the new length of array.

# Push :
- Push add the element in the end of array.
- one or more than elemnet can be added at a same time.

# Pop : 
- Pop removes the element from the end of the array.
- Only one element can be removed at a same time.
*/ 

//shift>

let arr = [1,2,3,4,5];
let x = arr.shift();
console.log(x); // 1;
console.log(arr);   //[2,3,4,5];

//Unshift>
let arr1 = [1,2,3,4,5];
let x1 = arr1.unshift(6,'7');
console.log(arr1);

//Push>

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi","stawberry");
console.log(fruits);

//Pop>

const popEx = ["Banana", "Orange", "Apple", "Mango"];
let rem = popEx.pop();
console.log(rem, popEx);