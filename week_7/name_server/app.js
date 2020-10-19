const express = require('express')
const app = express()

app.get('/name', (req, res) => {
    let names = {firstName: 'John', lastName: 'Doe'}
    res.json(names)
})

app.get('/name/:category', (req, res) => {
    let category = req.params.category
    console.log(req.params.category)
    
    res.send('Name' + category)
})

app.listen(3000, () => {
    console.log('Server is running...')
})

app.get('/digital-crafts/cohort/:year', (req, res) => {
    let year = req.params.year
    console.log(req.params.year)

    res. send('I study at DigitalCrafts ' + year + ' Cohort')
})