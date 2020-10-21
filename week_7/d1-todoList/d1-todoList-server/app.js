const express = require('express')
const app = express()
const cors = require('cors')
const {v4: uuidv4} = require('uuid')

let todoListItems = [
    // { task: 'Wash car', priority: 'Medium', dateCreated: '10/20/2020' },
    // { task: 'Prep dinner', priority: 'High', dateCreated: '10/18/2020' }
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

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/todoList', (req, res) => {
    res.json(todoListItems)
})

app.post('/todoList', (req, res) => {
    //get task name and prior level
    const task = req.body.task
    const priority = req.body.priority
    // checking if values are not null
    if (task != null && priority != null && dateCreated != null) {
        let listItem = { task: task, priority: priority, dateCreated: dateCreated, taskId: uuidv4()}
        todoListItems.push(listItem)
        res.json({success: true})
    } else {
        res.json({success: false, errorMessage: 'Unable to add task'})
    }

    console.log(task, priority, dateCreated)

})

app.delete('/todoList/:taskId', (req, res) => {

    let taskId = req.params.taskId

    todoListItems = todoListItems.filter(todo => {
       return todo.taskId != taskId
    })

    res.json({sucess: true})

})