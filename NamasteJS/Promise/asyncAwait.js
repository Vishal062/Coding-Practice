//1. Async await is not a alternate of Promises
//2. Async await is diffrent then promises

// Asncy await enables you to write asynchronous/Promise behavior code in a cleaner and readable way

//Its nothing but a syntactic sugar or say a wrapper created over Promises to make your code
//look Synchronous.

//lets say we want to a fetch a user data from api

function getUser() {
    let url = "https://api.tvmaze.com/search/shows?q"
    fetch(url)  //We make a fetApi call
    .then((res) => res.json())  //and when promise is resolved
    .then((userData) => {       //we will print the user Data
        console.log(userData);
        console.log("Printing User Data");
    });
}

//lets reWrite this function using AsyncAwait

// async function getDataOfuser(){
//     let url = "https://api.tvmaze.com/search/shows?q"
//     const res = await fetch(url)    //What await will do here
//     //It will pause the execution till the promise is resolved or rejected
//     const userData = res.json();
//     console.log(userData);
//     console.log("Printing User Data");
// }