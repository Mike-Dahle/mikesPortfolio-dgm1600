const addTask = document.querySelector('.add')
const input = document.querySelector('#textField')
const todoList = document.querySelector('.todoList')
const pendingText = document.querySelector('.pending')
const clearBtn = document.querySelector('.clear')


// Need Add, Edit, Delete, and Clear Done to work.

const tasks = []

const categories = ['All', 'Work', 'School', 'Home']


populateCategories(categories);

// Create a new task
function createTask(task, category) {
    tasks.push({
      todo: task,
      done: false,
      Id: Date.now(),
      category: category
    },)
  }

pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`

clearBtn.addEventListener('click', () => {clearDone(tasks)})

// Populate the todo list
function populatetodoList(tasks) {

    // Clear the list
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    // Create list elements for each todo
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.setAttribute('id', task.Id)
        const spanOne = document.createElement('span');
        const spanTwo = document.createElement('span');
        const trashIcon = document.createElement('i');
        const editIcon = document.createElement('i');
        const taskText = document.createElement('p');
        
        taskText.textContent = task.todo;

        trashIcon.classList.add('fa', 'fa-trash');
        editIcon.classList.add('fa', 'fa-edit');
        spanOne.classList.add('editBtn');


        li.appendChild(taskText);
        li.appendChild(spanOne);
        li.appendChild(spanTwo);

        // check if task is done, if so add the done class
        if (task.done === true) {
            taskText.style.textDecoration = 'line-through';
        }

        spanOne.appendChild(editIcon);
        spanTwo.appendChild(trashIcon);
        spanOne.addEventListener('click', () => {editTask(task.Id)});
        spanTwo.addEventListener('click', (event) => {
            const li = event.target.closest('li'); // Find the closest parent 'li' element
            if (li) {
                const listItemText = li.textContent.trim();
                deleteTask(listItemText);
            }
        });

        taskText.addEventListener('click', (event) => {markDone(task.Id);})

        li.appendChild(spanOne);
        li.appendChild(spanTwo);
        todoList.appendChild(li)
        pendingText.textContent = `You have ${pendingTasks(tasks)} remaining task(s)`
        console.log(tasks)
    })
}

// Add a new task to the list
addTask.addEventListener('click', () => {
    const categorySelect = document.querySelector('.categorySelector');
    const category = categorySelect.value;
    if (input.value !== '') {
        createTask(input.value, category)
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


function clearDone(tasks) {
  tasks.filter((task) => task.done === true).forEach((task) => {
    const index = tasks.findIndex((task) => task.done === true);
    if (index > -1) {
        tasks.splice(index, 1);
        populatetodoList(tasks);
    }
  }
)}
    

function pendingTasks(arr) {
    return arr.filter((arr) => arr.done === false).length
}


function editTask(taskID) {
    const taskToUpdate = tasks.find((task) => task.Id === taskID);

    if (taskToUpdate) {
        const newName = prompt('Enter new task name', taskToUpdate.todo);
        if (newName !== null) {
            taskToUpdate.todo = newName;
            populatetodoList(tasks);
            taskToUpdate.done = false;
        }
    }
}
function markDone(finishedID) {
    const taskToUpdate = tasks.find((task) => task.Id === finishedID);

    if (taskToUpdate) {
        taskToUpdate.done = !taskToUpdate.done; // Toggle the 'done' property
        populatetodoList(tasks);
    }
}


function populateCategories() {
    const categoryList = document.querySelector('.categoryList');
    const categorySelector = document.querySelector('.categorySelector');
    
    // Clear out existing li elements
    categoryList.innerHTML = '';
    categorySelector.innerHTML = '';

    categories.forEach((category) => {
        const li = document.createElement('li');
        const option = document.createElement('option');
        option.innerHTML = 
        `<option value="${category}">${category}</option>`;
        categorySelector.appendChild(option);
        li.classList.add('categories');
        li.innerHTML = 
        `<p>${category}</p>
            <div>
                <button class="catDelete" onclick="deleteCategory('${category}')"><span class="fa fa-trash"></span></button>
                <button class="catEdit" onclick="editCategory('${category}')"><span class="fa fa-edit"></span></button>
            </div>`;
        categoryList.appendChild(li);
    });
}

function addCategory() {
    // Get the input field
    const categoryInput = document.getElementById('categoryTextField');
  
    // Get the value of the input field
    const newCategory = categoryInput.value;
  
    // Check if the input field is not empty
    if (newCategory.trim() !== '') {
      // Add the new category to the categories array
      categories.push(newCategory);
  
      // Clear the input field
      categoryInput.value = '';
      populateCategories();
    } else {
      alert('Please enter a category');
    }
  }

  function deleteCategory(category) {
    // Find the index of the category in the categories array
    const index = categories.indexOf(category);
  
    // If the category was found, remove it from the categories array
    if (index !== -1) {
      categories.splice(index, 1);
    }
  
    // Update the displayed list
    populateCategories();
  }

  function editCategory(category) {
    const catToEdit = categories.indexOf(category);

    if (catToEdit !== -1) {
        const newName = prompt('Enter new category name', categories[catToEdit]);
        if (newName !== null) {
            categories[catToEdit] = newName;
            populateCategories();
        }
    }
  }