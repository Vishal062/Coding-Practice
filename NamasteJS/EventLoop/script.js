function execute(){
    console.log("Execution 1");

    var p = new Promise((resolve) => {  //fun A
        setTimeout(()=> resolve(2),5000);
    });

    p.then(console.log);    //Once the above promise resolved after 5 sec then it console

    setTimeout(() => {      //fun B
        console.log("Execution zero delay");
    },1000);

    Promise.resolve(4).then(console.log);   //fun C

    console.log("Last execution");
}

execute();

//exe1, last exec, 4, execu zero delay, 2;
//Promise is always send to the microtask queue.