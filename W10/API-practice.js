

//calling an API in Javascript using the fetch method 
//fetch is asynchronous 

async function getMovies() {
    const url = "https://raw.githubusercontent.com/jameswarnerbyui/static-apis/refs/heads/main/movies.json"
    //const url = "https://www.omdbapi.com/"
    //the await key word tells the program to wait for the function to finish
    //fetch returns the data wrapped up in a response object
    const response = await fetch(url);

    console.log(response);

    //part of the response object is the built in json function to make the data into json
    const movies =  await response.json();
    console.log(movies.movies);
    displayMovies(movies.movies);
}

function displayMovies(movies){
    const body = document.querySelector("body");

    body.innerHTML = ``;
    movies.forEach(movie => {
        body.innerHTML += `
        <h1>Title: ${movie.title}</h1>
        <img src="${movie.imgSrc}" alt= "${movie.imgAlt}">
        `
    });
}


//getMovies();



async function tryStuff() {
    const url = "https://science.nasa.gov/wp-json/wp/v2/apod-basic"

    const response = await fetch(url);
    console.log(response);

    const info = await response.json();
    console.log(info);

    console.log(info[1].date);

    const body = document.querySelector("body");

    body.innerHTML = `
    <h1>${info[0].title}</h1>
    <h2>${info[0].date}</h2>
    <img src="${info[0].hdurl}" style="width: 50%;">
    `
}


//tryStuff();