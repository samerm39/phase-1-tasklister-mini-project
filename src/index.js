document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`#create-task-form`).addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskDescription = document.querySelector('#new-task-description').value;
    const selectedColor = document.querySelector('#color-selector').value; // Get the selected color
    handleToDo(newTaskDescription, selectedColor); // Pass the selected color to the function
    const createTaskForm = document.querySelector(`#create-task-form`).reset();
  });
});

function handleToDo(todo, color) {
  let p = document.createElement('p');
  p.style.color = color; // Set the font color based on the selected color
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = ' x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
