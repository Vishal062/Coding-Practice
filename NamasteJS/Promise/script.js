//Promise Ex 1.
// let promise = new Promise(function (vishal, sinha) {
//     if (a) {
//       vishal("MASAI");
//     } else {
//       sinha(a);
//     }
  
//     //=>constructor =>arguments is annonomus function which wil take two parameters 
//     //resolve & reject but can can name then anything you want.
//   });
  
//   promise
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   var a = 10;
//   console.log("a", a);

  //A 10 and undefined because promise never used the value that is not initalised before
  //assigning value. 

  
//Promise Ex 2
/*
var a = 10;
let promise = new Promise(function (vishal, sinha) {    //Vishal resolve sinha reject
    if (a) {
      vishal("MASAI");
    } else {
      sinha(a);
    }
  });
  
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  
  console.log("a", a);
  for (let i = 0; i < 10000000000; i++) {}

//After loop complete then promise will give you the result.
*/

//Promise ex-3
var a = 10;

let promise = new Promise(function (vishal, sinha) {    //Vishal resolve sinha reject
    setTimeout(function() {
        if (a) {
            vishal("MASAI");
        } else {
            sinha(a);
        }
    },3000);
    
  });
  
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  
  console.log("a", a);
  for (let i = 0; i < 1000; i++) {}
