
let spiderList = document.getElementById("spiderList")
let featSpider = document.getElementById("featSpider")

//GET movie info from url
function getSpiderInfo(completion) {

    let request = new XMLHttpRequest()

    request.onload = function () {

        movies = JSON.parse(this.responseText)
        completion(movies)

    }

    request.open('GET', 'http://www.omdbapi.com/?s=spider-man&apikey=f5da275d')
    request.send()


}

//display movie details based on imdbID
function showMovieDetails(imdbID) {
    let request = new XMLHttpRequest()
    request.open('GET', `http://www.omdbapi.com/?i=${imdbID}&apikey=f5da275d`)

    request.onload = function () {
        let details = JSON.parse(this.responseText)
        let detailItem = `<div>
        <img class = "displayImg" src = ${details.Poster} />
        <p class = "details">Actors: ${details.Actors}</p>
        <p class = "details">Release date: ${details.Released}</p>
        <p class = "details">Rating: ${details.Rated}</p>
        </div>`

        featSpider.innerHTML = detailItem
    }

    request.send()
}

// display movies
function displayMovies(movies) {
  
    let movieItems = movies.Search.map((movie) => {
        return `<div>
        <img src = ${movie.Poster} />
        <p>${movie.Title}</p>
        <button onclick = "showMovieDetails('${movie.imdbID}')">Show Details</button>
        </div>
        `
    })
    spiderList.innerHTML = movieItems
}

getSpiderInfo((movies) => {
    displayMovies(movies)
})
