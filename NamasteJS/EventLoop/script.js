function execute(){
    console.log("Execution 1");

    var p = new Promise((resolve) => {
        setTimeout(()=> resolve(2),5000);
    });

    p.then(console.log);

    setTimeout(() => {
        console.log("Execution zero delay");
    },1000);

    Promise.resolve(4).then(console.log);

    console.log("Last execution");
}

execute();

//exe1, last exec, 4, execu zero delay, 2;