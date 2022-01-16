//Example with simple Promise Handle
/*
const count = true;

let countValue = new Promise(function (res,rej){
    
    if(count){
        res("There is a count value");
    }
    else{
        rej("There is no count value");
    }
});

console.log(countValue);
*/

//Example with .then .catch >>>

// returns a promise

let fullfilledValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
fullfilledValue
   .then(function successValue(result) {
     console.log(result);
   })
  
   .then(function successValue1() {
      console.log("You can call multiple functions this way.");
   });

//Example with Reject >>>>

// returns a promise
let rejectValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 rejectValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );