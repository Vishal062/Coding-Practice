function x(){
    let i = 1;
    setTimeout(function (){
        console.log(i);     //After 3 sec
    },3000);
    console.log("Does Not wait for setTimeout");    //First
}
//x();

//Why ?
/*
the inside function of setTimout is a closure its refrence to i 
along with lexical scoped

*/

//Example 2

function x(){
    for(let i=1; i<=5; i++){    //In place of var if ypu use let...
        setTimeout(function (){
            console.log(i);     //
        },i*1000);
    }
    
}
x();    // gives the output 6 6 6 6 6 6

//Because of setTimeout It does not wait for loop to execute once its executed then it will check for 
//setIntervl
//Problem was It is using same memory refrence..

//In let its not because let has a block scope its updating the value after every iteration >>
//the same function if we use let then its give us 1 2 3 4 5.
