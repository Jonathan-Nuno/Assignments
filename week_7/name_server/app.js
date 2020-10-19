const express = require('express')
const app = express()

app.get('/name', (req, res) => {
    let names = {firstName: 'John', lastName: 'Doe'}
    res.json(names)
})

app.listen(3000, () => {
    console.log('Server is running...')
})