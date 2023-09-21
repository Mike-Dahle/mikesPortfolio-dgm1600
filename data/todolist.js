const addTask = document.querySelector('.add')
const input = document.querySelector('#textField')
const todoList = document.querySelector('.todoList')
const pendingText = document.querySelector('.pending')
const clearBtn = document.querySelector('.clear')


// Need Add, Edit, Delete, and Clear Done to work.

const tasks = []

pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`

clearBtn.addEventListener('click', () => {
    tasks.forEach((task) => {
        if (task.done === true) {
            doneTasks = []
            doneTasks.push(task)
            clearDone(doneTasks)
        }
    })
});




// Populate the todo list
function populatetodoList(tasks) {

    // Clear the list
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    // Create list elements for each todo
    tasks.forEach((task) => {
        const li = document.createElement('li')
        const spanOne = document.createElement('span');
        const spanTwo = document.createElement('span');
        const trashIcon = document.createElement('i');
        const editIcon = document.createElement('i');

        trashIcon.classList.add('fa', 'fa-trash');
        editIcon.classList.add('fa', 'fa-edit');
        spanOne.classList.add('editBtn');

        li.textContent = task.todo
        li.addEventListener('click', () => markDone(li.textContent))
        

        //check if task is done, if so add the done class
        if (task.done === true) {
            li.classList.add('done')
        }

        spanOne.appendChild(editIcon);
        spanTwo.appendChild(trashIcon);
        spanOne.addEventListener('click', () => editTask(li.textContent))
        spanTwo.addEventListener('click', (event) => {
            const li = event.target.closest('li'); // Find the closest parent 'li' element
            if (li) {
                const listItemText = li.textContent.trim();
                deleteTask(listItemText);
            }
        });

        li.appendChild(spanOne);
        li.appendChild(spanTwo);
        todoList.appendChild(li)
        pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`
        console.log(tasks)
    })
}

// Mark a task as done
function markDone(taskName) {
    const taskToUpdate = tasks.find((task) => task.todo === taskName);

    if (taskToUpdate) {
        taskToUpdate.done = !taskToUpdate.done; // Toggle the 'done' property
        populatetodoList(tasks);
    }
}


// Create a new task
function createTask(task) {
  tasks.push({
    todo: task,
    done: false,
    Id: tasks.length,
  },)
}


// Add a new task to the list
addTask.addEventListener('click', () => {
    if (input.value !== '') {
        createTask(input.value)
        input.value = ''
        todoList.innerHTML = ''
        populatetodoList(tasks) 
    }      
})


// for each item in the array if the task name matches the li item and its done, then delete it from the array
function deleteTask(text) { 
    const index = tasks.findIndex((task) => task.todo === text);
    if (index > -1) {
        tasks.splice(index, 1);
        populatetodoList(tasks);
    }
    pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`
}
      
function editTask() {
    const editBtn = document.querySelector('.editBtn')
    editBtn.addEventListener('click', () => {
        console.log('edit')
    })
}

function clearDone(doneTasks) {
  /*   console.log(doneTasks)
    forEach(task => {const index = tasks.findIndex((task) => task.done === true);
    if (index > -1) {
        tasks.splice(index, 1);  
    }})
    populatetodoList(tasks);
    pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)` */
}
    

function pendingTasks(arr) {
    return arr.filter((arr) => arr.done === false).length
}

