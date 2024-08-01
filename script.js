document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const createTaskElement = (taskText) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
            <span class="edit">Edit</span>
        `;
        return li;
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    };

    const handleTaskListClick = (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.classList.contains('edit')) {
            const taskTextElement = event.target.previousElementSibling;
            const newTaskText = prompt('Edit task:', taskTextElement.textContent);
            if (newTaskText !== null) {
                taskTextElement.textContent = newTaskText.trim();
            }
        }
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    taskList.addEventListener('click', handleTaskListClick);
});
