//This function to fetch the api and get the data >>>

let searchMarvel = (query) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    //const url = `https://swapi.dev/api/people/?search=${query}`;
    fetch(url)
    .then(res => res.json())
    .then((jsonData) => {
        //since jsondata is in array we use map function to get details
        //in web page
        const result = jsonData.map(element => element.show.name);
        console.log(result);
        //in console you can see the result
        //but Now we check for render result in web Page >>
        renderResult(result);
    });
}


//This function to get result in a list view on webPage >>>>
let renderResult = (result) =>{

    const lists = document.getElementById("resultList");
    lists.innerHTML = "";
    result.forEach(results => {
        const element = document.createElement("div");
        element.innerText = results;
        lists.appendChild(element);
    })
}

//Event on input >>>

let timeoutToken =0;
window.onload =() =>{
    const searchFieldData = document.getElementById("marvelSearch");
    searchFieldData.onkeyup = (event) =>{
        
        clearTimeout(timeoutToken);

        //if() 25 min
        timeoutToken = setTimeout(() => {
            searchMarvel(searchFieldData.value);
        },500);
        //console.log(searchFieldData.value);
        //searchMarvel(searchFieldData.value);
    }
}

//marvel api ? 5681cccfb95effd8448fedba5f11202ff2e79b70
//public key ? afc073d226e7a73d88a572d0d1f9cab6
//marvel api
//https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b
