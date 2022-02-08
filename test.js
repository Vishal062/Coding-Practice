/*
const pro = new Promise((res,rej) => {
    setTimeout((res) => {
        console.log("After 1.5 sec I resolved The Promise");
    },1500);
})

//console.log(pro);

const prom = new Promise((res,rej) => {
    const number = Math.random();

    if(number<7){
        res("Number Is less Then 7");
    }
    else{
        rej("Something went Wrong");
    }
});
console.log(prom);

prom.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
*/
//Promise.race([]);
//Promise.all([]);

/***************************Closure******************************/
/*
function clos1(){
    let a =10;
    return function f2(){
        console.log("Hello a:",a);
    }
}

var res = clos1();
res();  //Here res acts like a closure
*/

/****************Call************/

const bindEx = {
    name:"vishal",
    age:24,
    role:"WebDev",
}

function printDetails(){
    console.log(`${this.name} is a ${this.role} at the age of ${this.age}`);
}
//printDetails(bindEx); This will give us undefined>>

const res =printDetails.bind(bindEx);
res()

/************************Object Example**************************/
let profile ={
    name: "vishalSinha"
}

profile.age = 24;

console.log(profile);
//If I want to prevent anyone to add extra parameter to this object then how????

//We have to to>>
Object.freeze(profile);

profile.number = 1234;

console.log(profile);

//And in place of freeze if you use seal its allows you to change the value of the property
//But doesn't allows you to add a new property>>>>>>
let profile2 = {
    firstName:"vishalSinha"
}
// profile2.firstName = "Sani";
// profile2.age = 24;

// console.log(profile2);

Object.seal(profile2);
profile2.firstName = "NewSani";
profile2.age = 28;

console.log("Seal",profile2);



// const arr =[1,2,3,3,4,5];

// const set = new Set([...arr]);
//console.log([...set]);
// console.log(set);


const arr1 = [1,2,3,4,5,6,7];

let a1 = arr1.splice(2) // 3 4 5;

console.log(a1);