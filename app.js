// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append delete button to the task element
        li.appendChild(deleteButton);

        return li;
    }

    // Event listener for the "Add Task" button
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = ''; // Clear input field
        }
    });

    // Event listener for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
