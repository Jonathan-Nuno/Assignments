const express = require('express')
const app = express()
// const cors = require('cors')
const {v4: uuidv4} = require('uuid')
const mustacheExpress = require('mustache-express')
// const tripsRouter = require('./routes/trips')

global.tripList = []

// Middleware
// app.use(cors())
app.use(express.urlencoded())

// set up mustache templace engine
app.engine('mustache', mustacheExpress())
// pages located in views directory
app.set('views', './views')
// extension for all the pages
app.set('view engine', 'mustache')

// render index.mustache page for the root (/) route
app.get('/', (req, res) => {
    res.render('index', {name: "Mary", age: "55"})
})

app.get('/trips', (req, res) =>{

    // let trips = [
    //     {city: "Denver", state: "Colorado"},
    //     {city: "Miami", state: "Flordia"},
    //     {city: "Atlanta", state: "Georgia"}
    // ]

    res.render('trips', {allTrips: tripList})
})


app.post('/create-trip', (req, res) => {
    
    // get the values from the body
    // city and state are part of body object
    const city = req.body.city
    const state = req.body.state

    let trip = {city: city, state: state}
    tripList.push(trip)

    //after trip is added to the array
    // we want to show the user the updated trips

    // it will call the /trips get action again
    res.redirect('/trips')

})

app.post('/delete-trip', (req, res) => {
    const taskId = req.body.taskId
    res.redirect('/trips')
})


app.listen(3000, () => {
    console.log('Server is running...')
})

