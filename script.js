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
    }
  }
});