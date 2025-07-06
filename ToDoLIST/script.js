document.addEventListener("DOMContentLoaded", () => {
    const TodoInput = document.getElementById("todo-input");
    const AddTaskBtn = document.getElementById("add-task-btn");
    const TodoList = document.getElementById("todo-list");


    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((tasks) => {
        renderTaska(tasks);
    });

    AddTaskBtn.addEventListener("click", () => {
        const taskText = TodoInput.value.trim();
        if (taskText === "") {
            return;
        }

        const newTask = {
            text: taskText,
            id: Date.now(),
            comleted: false,

        };

        tasks.push(newTask);
        saveTasks();
        TodoInput.value = "";
        console.log(tasks);
    });

    function renderTaska(task) {
        console.log(tasks);

    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }


});