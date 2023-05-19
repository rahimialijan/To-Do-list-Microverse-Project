import './style.css';
import UI from './modules/UI.js';
import Store from './modules/localstorage.js';
import Todostatus from './modules/toDoStatus.js';

// Event for Displaying the to do tasks
document.addEventListener('DOMContentLoaded', UI.taskCompleted);

// Event for adding new to do tasks
document.querySelector('#todo-form').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    UI.getNewToDoTask();
  }
});

// Event for deleting new item for the list
document.querySelector('#list-item').addEventListener('click', (e) => {
  Store.removetodoTask(e.target);
  UI.deletetodoTask(e.target);
});

// Event for editing the to do list
document.querySelector('#list-item').addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-pencil-square')) {
    UI.editeToDoTask(e.target);
  }
});

// Event for completed tasks
document.querySelector('#list-item').addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    Todostatus.istodoCompleted(e.target);
  }
});

// Event for updating tasks
document.querySelector('#list-item').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('edit-list')) {
    e.preventDefault();
    Store.updatetodoTask(e.target);
    window.location.reload();
  }
});

// Event for removing tasks
document.getElementById('clear-btn').addEventListener('click', () => {
  Todostatus.cleartodoCompleted();
  window.location.reload();
});