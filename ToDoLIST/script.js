const TodoInput = document.getElementById("todo-input");
const AddTaskBtn = document.getElementById("add-task-btn");
const TodoList = document.getElementById("todo-list");


let tasks = []
AddTaskBtn.addEventListener("click", () => {
    const taskText = TodoInput.value.trim();
    if (taskText === "") {
        return;
    }

    const newTask = {
        text: taskText,
        id: Date.now(),
        comleted: false,

    }

    tasks.push(newTask);
    TodoInput.value = "";




});