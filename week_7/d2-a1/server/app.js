

const express = require('express')
const app = express() 
const mustacheExpresss = require('mustache-express')
//const cors = require('cors')
//const { v4: uuidv4 } = require('uuid');

tasks = []

// allows the express to parse the urlencoded form data
app.use(express.urlencoded())

// setting up mustache as a templating engine 
//npm install mustache-express
app.engine('mustache', mustacheExpresss())
// the pages are located in the views directory
app.set('views','./views')
// extension for all the pages 
app.set('view engine', 'mustache')

// render index.mustache page for the root (/) route 
app.get('/',(req,res) => {
    res.render('index',{name: "Mary", age: 55})
})

app.get('/tasks', (req, res) => {
    
    let tasks = [
        {title: 'Wash the car', priority: 'high'},
        {title: 'Feed dog', priority: 'high'},
        {title: 'clean dishes', priority: 'medium'}
    ]

    res.render('tasks', {allTasks: tasks})
})

app.post('/create-task', (req, res) => {
    
    // get the value
    
    const title = req.body.title
    const priority = req.body.priority

    let task = {title: title, priority: priority}
    tasks.push(task)
    
    console.log(title, priority)
})

// run the server 
app.listen(3001, () => {
    console.log('Server is running...')
})