const express = require('express')
const app = express()


// array to store all movies
let movies = [{
    title: 'Lord of the Rings',
    year: '2019'
},
{
    title: 'Spiderman', 
    year: '2019'
}
]

// MIDDLEWARE
// telling express how to parse
app.use(express.json())

app.get('/name', (req, res) => {
    let names = {firstName: 'John', lastName: 'Doe'}
    res.json(names)
})

app.get('/name/:category', (req, res) => {
    let category = req.params.category
    console.log(req.params.category)
    
    res.send('Name' + category)
})

// app.listen(2999, () => {
//     console.log('Server is running...')
// })

app.get('/digital-crafts/cohort/:year', (req, res) => {
    let year = req.params.year
    console.log(req.params.year)

    res.send('I study at DigitalCrafts ' + year + ' Cohort')
})

app.post('/movies', (req, res) => {
    let title = req.body.title
    let year = req.body.year

    console.log(title, year)

    res.send('POST REQUEST FOR ADDING MOVIES')
})

app.listen(2999, () => {
    console.log('Server is running...')
})