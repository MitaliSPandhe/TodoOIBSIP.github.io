const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTaskList = document.getElementById("pendingTaskList");
const completedTaskList = document.getElementById("completedTaskList");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
       
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
});

function renderTasks() {
    pendingTaskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="toggle-btn" onclick="toggleTask(${index})">${task.completed ? 'Pending' : 'Complete'}</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        if (task.completed) {
            completedTaskList.appendChild(li);
        } else {
            pendingTaskList.appendChild(li);
        }
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


