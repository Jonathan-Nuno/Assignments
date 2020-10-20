const express = require('express')
const app = express()
const cors = require('cors')


// array to store all movies
let names = [{
    firstName: 'Lord of the Rings',
    lastName: '2019'
},
{
    firstName: 'Spiderman', 
    lastName: '2019'
}
]

// MIDDLEWARE
// enalble CORS
app.use(cors())
// telling express how to parse
app.use(express.json())

app.get('/names', (req, res) => {
    let names = {firstName: 'John', lastName: 'Doe'}
    res.json(names)
})

app.get('/names/:category', (req, res) => {
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

app.post('/names', (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let fullName = {firstName: firstName, lastName: lastName}
    names.push(fullName)
    res.json({success: true})
})

app.listen(3000, () => {
    console.log('Server is running...')
})