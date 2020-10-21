
const taskTextBox = document.getElementById('taskTextBox')
const priorityTextBox = document.getElementById('priorityTextBox')
const addTaskButton = document.getElementById('addTaskButton')

addTaskButton.addEventListener('click', () => {
    let task = taskTextBox.value
    let priority = priorityTextBox.value

    fetch('http://localhost:3000/todoList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: task,
            priority: priority
        })
    }).then(response => response.json())
        .then(result => {
            if (result.success) {
                populateAllTask()
            }
        })
})



const taskList = document.getElementById('taskList')

function deleteTask(taskId) {

    fetch(`http://localhost:3000/todoList/${taskId}`, {
        method: 'DELETE'
    }).then(response => response.json())
        .then(result => {
            populateAllTask()
        })

    console.log(taskId)
}

function populateAllTask() {
    taskList.innerHTML = ''

    fetch('http://localhost:3000/todoList')
        .then(response => response.json())
        .then(tasks => {
            let taskItems = tasks.map((list) => {
                return `<li>
                <label>${list.task} - ${list.priority} - ${list.dateCreated}</label>
                <button onclick='deleteTask("${list.taskId}")'>Delete</button> 
                </li>`
            })

            taskList.insertAdjacentHTML('beforeend', taskItems.join(''))
        })
}

populateAllTask()