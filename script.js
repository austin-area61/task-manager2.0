document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', addTask);
  taskList.addEventListener('click', handleTaskClick);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
          <button class="edit-btn">Edit</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }

  function handleTaskClick(event) {
    if (event.target.classList.contains('complete-btn')) {
      const task = event.target.closest('li');
      task.classList.toggle('completed');
    } else if (event.target.classList.contains('delete-btn')) {
      const task = event.target.closest('li');
      task.remove();
    } else if (event.target.classList.contains('edit-btn')){
      const task = event.target.closest('li');
      editTask(task);
    }
  }

  // Function to edit a task
  function editTask(task) {
    const taskTextElement = task.querySelector('span');
    const currentText = taskTextElement.textContent;

    // Create an input field pre-filled with the current task text
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    taskTextElement.textContent = '';
    taskTextElement.appendChild(input);

    // Create a save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-btn');
    task.querySelector('div').appendChild(saveButton);

    // Handle saving the edited task
    saveButton.addEventListener('click', () => {
      const newText = input.value.trim();
      if (newText !== '') {
        taskTextElement.textContent = newText;
      } else {
        taskTextElement.textContent = currentText; // Revert if the new text is empty
      }
      saveButton.remove();
    });
  }
});