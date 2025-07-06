document.addEventListener("DOMContentLoaded", () => {
    const TodoInput = document.getElementById("todo-input");
    const AddTaskBtn = document.getElementById("add-task-btn");
    const TodoList = document.getElementById("todo-list");


    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((tasks) => {
        renderTask(tasks);
    });

    AddTaskBtn.addEventListener("click", () => {
        const taskText = TodoInput.value.trim();
        if (taskText === "") {
            return;
        }

        const newTask = {
            text: taskText,
            id: Date.now(),
            completed: false,

        };

        tasks.push(newTask);
        renderTask(newTask);
        saveTasks();
        TodoInput.value = "";
        console.log(tasks);
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if (task.completed) li.classList.add("completed");
        li.innerHTML = ` 
            <span>${task.text}</span>
            <button> Delete </button>
        `;
        li.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();

        });

        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();

        });
        TodoList.appendChild(li);

    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }


});