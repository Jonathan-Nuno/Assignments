const express = require('express')
const app = express()
const cors = require('cors')

let todoListItems = [
    {task: 'Wash car', priority: 'Medium'},
    {task: 'Prep dinner', priority: 'High'}
]

let d = new Date()
let date = d.getDate()
let month = d.getMonth() + 1
let year = d.getFullYear()
let dateCreated = `${month}/${date}/${year}`

//Middleware
app.use(cors())
app.use(express.json())


app.listen(3000, () => {
    console.log('Server is running...')
})

app.get('/', (req,res) => {
    res.send('Homepage')
})

app.get('/todoList', (req, res) => {
    res.json(todoListItems)
})

app.post('/todoList', (req, res) => {

    let task = req.body.task
    let priority = req.body.priority

    let listItem = {task:task, priority:priority, dateCreated:dateCreated}

    todoListItems.push(listItem)

    console.log(task, priority, dateCreated)

    res.json({success: true})

})