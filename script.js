document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    let tasks = [];

    // Agregar tarea
    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = {
                text: taskText,
                important: false,
                completed: false
            };
            tasks.push(newTask);
            renderTasks();
            taskInput.value = "";
        }
    });

    // Renderizar tareas
    function renderTasks() {
        // Ordenar tareas de más importante a menos importante
        tasks.sort((a, b) => b.important - a.important);

        // Limpiar lista de tareas
        taskList.innerHTML = "";

        // Renderizar cada tarea
        tasks.forEach((task, index) => {
            const newTask = document.createElement("li");
            newTask.textContent = task.text;
            newTask.classList.add(task.completed ? "complete" : null);
            newTask.addEventListener("click", () => toggleTask(index));
            taskList.appendChild(newTask);
        });
    }

    // Cambiar estado de tarea
    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
});
