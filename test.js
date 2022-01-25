// const pro = new Promise((res,rej) => {
//     setTimeout((res) => {
//         console.log("After 1.5 sec I resolved The Promise");
//     },1500);
// })

// console.log(pro);

const prom = new Promise((res,rej) => {
    const number = Math.random();

    if(number>7){
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

//Promise.race([]);
//Promise.all([]);

/***************************Closure******************************/

function clos1(){
    let a =10;
    return function f2(){
        console.log("Hello a:",a);
    }
}

var res = clos1();
res();