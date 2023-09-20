const addTask = document.querySelector('.add')
const input = document.querySelector('#textField')
const todoList = document.querySelector('.todoList')
const pendingText = document.querySelector('.pending')
const deleteBtn = document.querySelector('.delete')

// Need Add, Edit, Delete, and Clear Done to work.

const tasks = []

pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`

deleteBtn.addEventListener('click', () => deleteTasks(tasks, todoList))


// Populate the todo list
function populatetodoList(tasks) {
    tasks.forEach((task) => {
        const li = document.createElement('li')
        const spanOne = document.createElement('span');
        const spanTwo = document.createElement('span');
        const trashIcon = document.createElement('i');
        const editIcon = document.createElement('i');
        li.addEventListener('click', () => {li.classList.toggle('done')})

        trashIcon.classList.add('fa', 'fa-trash');
        editIcon.classList.add('fa', 'fa-edit');
        spanOne.classList.add('editBtn');

        li.textContent = task.todo
        spanOne.appendChild(editIcon);
        spanTwo.appendChild(trashIcon);
        li.appendChild(spanOne);
        li.appendChild(spanTwo);
        todoList.appendChild(li)
        console.log(task)
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
    populatetodoList(tasks)
    pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`
})

function deleteTasks(todoList) {
});
    
}


function pendingTasks(arr) {
    return arr.filter((arr) => arr.done === false).length
}

