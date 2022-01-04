# Debouncing...

- Improve the optimization of web page.

- make a limit and control in api called.

- A debounce is utilized when you only care about the final state

-  In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

- debouncing executes the function only after some cooling period.

## setTimeout

- setTimeout is a scheduling function in JavaScript that can be used to schedule the execution of any function. It is a web API provided by the browsers and used to execute a function after a specified time. Here’s the basic syntax:

- `var timerId = setTimeout(callbackFunction, timeToDelay)`

- The setTimeout function takes input as a callbackFunction that is the function which will be executed after the timer expires, and timeToDelay is the time in milliseconds after which the callbackFunction will be executed.

## clearTimeout

- clearTimeout function is used to cancel the timeout previously established by calling the setTimeout function. clearTimeout takes the timerId returned by the setTimeout function as input and cancels its execution. So, if you want to cancel the execution of any setTimeout function, you can use clearTimeout function to cancel it by passing its timerId.

- `function delayFuncExec() <br/> 
    { <br/> 
// This statement will not be printed as it will be cancelled by clearTimeout <br/> 
	console.log("I will not be executed as I will be cancelled"); <br/> 
}

    var timerId = setTimeout(delayFuncExec, 100) <br/> 
    console.log("Timer Id: " + timerId) <br/> 

    clearInterval(timerId)` <br/> 

link : https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript