let count = 0;
const getData = () => {
    //Calls and api and gets data
    //making a network call and get database
    console.log("Fetching data per times...",count++);
}
//This function call every time after a key preserves

const debouncing = function(fn,delay){  //here fn is a getData and delay
    //P1 debounce function takes two parameter argument and a delay...
    
    //P2 and does not let make this function call again and again simaltanouesly..
    
    //P3 It make only calls If the difference between the time Interval between two 
    //function calls is greater than this delay
    
    let timer;  //decalre  a timer
    
    return function () {

        clearTimeout(timer);    //To clear timeOut we have to store the timeout somewhere
        
        timer = setTimeout(() => {  //we are trying to listen between 5 sec is any key press
            getData();      //after the 3 sec getdata function called
        },delay);
    }
}

const betterfunction = debouncing(getData,500); //Only call getData() function when delay is greter than 5sec. 
//Step 1:when ever user type something this function called everytime
//Step 2:But this function return a function that do some magic with our code 
    //and make a api call after a delay.  

//we can apply this concept on lazy loading or scrollbar events and many more things.

//fn: The function that you want to execute after the debounce time

//delay : The amount of time you want the debounce function to wait after the last received action before executing func. For our typeahead example, it would be the amount of time to wait after the last key press.

//timer: The value used to indicate a running debounce.