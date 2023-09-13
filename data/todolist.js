const addTask = document.querySelector('.add')
const input = document.querySelector('#textField')
const todoList = document.querySelector('.todoList')
const pendingText = document.querySelector('.pending')
const deleteBtn = document.querySelector('.delete')

const tasks = [
    
    ]

populatetodoList()

pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`

deleteBtn.addEventListener('click', () => deleteTasks)

function populatetodoList() {
    tasks.forEach((task) => {
        const li = document.createElement('li')

        li.textContent = task.todo
        todoList.appendChild(li)
    })
}

function createTask(task) {
  tasks.push({
    todo: task,
    done: false,
    Id: tasks.length,
  },)
}

addTask.addEventListener('click', () => {
    createTask(input.value)
    input.value = ''
    todoList.innerHTML = ''
    populatetodoList()
    pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`
})

function deleteTasks(arr) {
    arr = []
    populatetodoList()
}


function pendingTasks(arr) {
    return arr.filter((arr) => arr.done === false).length
}

