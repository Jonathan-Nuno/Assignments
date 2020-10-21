// What package returns, express var will call it
const express = require('express')
// we call the function express and call via var app
const app = express()
const cors = require('cors')

// array to store all movies(store items)
// if items stored in array and server restart, array will 
// delete all items saved when server was up
let movies = [
    {title: 'Spiderman', year: "2015"},
    {title: 'Lord of the Rings', year: "2018"}]


// MIDDLEWARE

// enable cors
app.use(cors())

// Telling express how to parse json body, express doesn't know how
// to parse and is required to add .use(express.json) 
// to read the body
app.use(express.json())

// start server on port number "#" - localhost:3000 (localhost = 127.0.0.1)
// the command also starts up the server
app.listen(3000, () => {
    console.log('Server is running...')
})

// localhost:30000
// get send to specific node/page, for example users, start date etc
app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/someURL', (req,res) => {
    res.send('Some Url')
})

app.get('/movie', (req, res) => {
    let movie = {name: 'Spiderman', year: '2018'}
    // res.json(object) will return the url as a json webpage
    res.json(movie)
})

// app.get('/movies', (req, res) => {
//     let movies = [
//         {name: 'Spiderman', year: 2018},
//         {name: 'Batman', year: 2011},
//         {name: 'Superman', year: 2014}
//     ]
    
//     // res.json(array) calls movies to then display as json webpage
//     // res.json(movies) -- example of respond with array json webpage

//     // converting array into an object
//     // Search is key and Movies is the value with its own keys&values
//     let response = {Search: movies, totalResults: movies.length, Response: true}
//     // totalResults is callign the total number of movies in the array
//     res.json(response)

// })

app.get('/name', (req,res) => {
    let fullName = {firstName: 'John', lastName: 'Doe'} 
    
    res.json(fullName)
})


// // calling movies based off genre, can change genre url manually
// app.get('/movies/action', (req, res) => {

//     let movies = [
//         {title: 'Action Movie 1'},
//         {title: 'Action Movie 2'}
//     ]

//     res.json(movies)
// })

// since last part of url only being changed, using route parameters
// /movies/action
// /movies/drama
// /movies/genre

// ":" used to call urls with only the marked portion 
// of the url changing, in this case we are chaniging in genre
// as the route param
app.get('/movies/:genre', (req, res) => {
    
    // req.params."word" calls the specific name/value
    console.log(req.params.genre)
    
    res.send('Movies Genre')

})

// /movies/genre/comedy/year/1990
// /movies/genre/action/year/2010
// /movies/genre/scifi/year/2018

// /movies/comedy/2013
// /movies/action/2015
// /movies/fiction/2017

app.get('/movies/:genre/:year', (req, res) => {
    let genre = req.params.genre
    let year = req.params.year
    console.log(genre)
    console.log(year)
    res.json('movies')

})

app.get('/digital-crafts/cohort/:year', (req, res) => {
    let year = req.params.year

    res.send(`I study at DigitalCrafts ${year} Cohort`)
})


app.get('/movies', (req, res) => {
    res.json(movies)
})

// posting/creating to url
// /movies
// create a new movie
// needs title:string
// needs year:string
app.post('/movies', (req, res) => {

    let title = req.body.title
    let year = req.body.year

    let movie = {title:title, year:year}

    movies.push(movie)

    console.log(title, year)

    res.json({success: true})
})



