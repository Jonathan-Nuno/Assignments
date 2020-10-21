
const taskTextBox = document.getElementById('taskTextBox')
const priorityTextBox = document.getElementById('priorityTextBox')
const addTaskButton = document.getElementById('addTaskButton')
const visibleButton = document.getElementById('visibleButton')

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

function makeVisible() {
    let dButton = document.getElementById("deleter");
    if (dButton.style.display === "block") {
        dButton.style.display = "none";
    } else {
        dButton.style.display = "block";
    }

}

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
                <div id="deleter"><button onclick='deleteTask("${list.taskId}")'>Delete</button> </div>
                </li>`
            })

            taskList.insertAdjacentHTML('beforeend', taskItems.join(''))
        })
}

populateAllTask()