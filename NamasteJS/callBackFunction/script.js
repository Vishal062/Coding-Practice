let count = 0
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Event Handler Clicked", ++count);
});
//This callback function keep track of event click;

//Now we look a example of closure with event

function closureex(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Event Handler Clicked", ++count);
    }); //Now this callback function forming a closure with his outer scope.
}

closureex()