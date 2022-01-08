
//debouncing >>>>>

const makeApicall = () => {
    console.log("api call in progress");
}

const debouncer = () => {
    let debouncing;
    return function () {
        debouncing && clearTimeout(debouncing);
        debouncing = setTimeout(()=> func.apply(this,arguments), delay)
    }
}
window.addEventListener("load",function(){
    var btn = document.getElementById('click');
    
    btn.addEventListener("click",debouncer(makeApicall,1000))
});


//Throttling: which will gaurenteed a call after n second.

const makeApicall = () => {
    console.log("api call in progress");
}
let c =0;
function throttle(fn,wait){
    let lastCall = 0
    return function(){
        //present time,last call time was made
        console.log(c++, Date.now() - lastCall);
        if(Date.now() - lastCall > wait){
            lastCall = Date.now();
            fn.apply(this,arguments);
        }
    }
}

window.addEventListener("load",function(){
    var btn = document.getElementById('click');
    
    btn.addEventListener("click",throttle(makeApicall,1000));
});