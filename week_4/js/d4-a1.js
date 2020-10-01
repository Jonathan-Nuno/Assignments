
// const moviesList = document.getElementById("moviesList")

// const movieListing = movies.map((movie) => {
//     return ` <li>
//             <b>${movie.Title}</b>
//             <img class = "poster" src = ${movie.Poster} />
//             <p>${movie.Year}</p>
//             </li>`
// })

// moviesList.insertAdjacentHTML('beforeend', movieListing.join(''))

// let timerClock = document.getElementById("timerClock")
// let sButton = document.getElementById("sButton")
// let counterHeading = document.getElementById("counterHeading")
// // let counter = 11

// sButton.addEventListener('click', () => {

//     let maxCount = parseInt(counterHeading.value)
//     let intervalID = window.setInterval(() => {

//         if(maxCount >= 0) {
//             timerClock.innerHTML = `${maxCount}`
//             maxCount --
//         } else {
//             window.clearInterval(intervalID)
//         }

//     }, 1000)

// })
let quotes = {
    "APLE": { name: "Apple", price: 0 },
    "AMAZ": { name: "Amazon", price: 0 },
    "ALBAB": { name: "Ali Baba", price: 0 },
    "GOOG": { name: "Google", price: 0 },
    "FB": { name: "Facebook", price: 0 }
}

function getStockQuote(symbol) {

    let stock = quotes[symbol]
    stock.price = getRandomInt(100, 500)
    return quotes[symbol]
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


let stockPrice = document.getElementById("stockPrice")
let symbolTaker = document.getElementById("symbolTaker")
let sButton = document.getElementById("sButton")

sButton.addEventListener('click', () => {
    let value = symbolTaker
    let intervalID = window.setInterval(() =>{
        if (value == quotes[value]) {
            console.log(value)

        } else {
            window.clearInterval(intervalID)
        }

    }, 1000)
})

function symbolCheck(symbol) {
    if (symbol != quotes) {
        stockPrice.innerHTML = `${symbol} not available`
    } else {
        getStockQuote(symbol)
    }
}

// console.log(getStockQuote("APLE"))
// let price = functiongetStockQuote(symbolTaker)
