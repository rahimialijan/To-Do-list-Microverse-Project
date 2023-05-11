import ToDo from './toDo.js';
import Store from './localstorage.js';

class UI {
    static displayToDoList=() => {
      const tasks = Store.gettodoTasks();
      tasks.forEach((todo) => UI.addTaskToList(todo));
    }

  static getNewToDoTask = () => {
    const inputTask = document.querySelector('#input-list').value;

    // valitation for empy form
    if (inputTask !== '') {
      const todo = new ToDo(inputTask);

      UI.addTaskToList(todo);

      Store.addtodoTask(todo);

      UI.clearFields();
    }
  }

  static addTaskToList = (todo) => {
    const list = document.querySelector('#list-item');

    const li = document.createElement('li');

    const checkedBok = document.createElement('input');
    checkedBok.type = 'checkbox';
    checkedBok.classList.add('checkbox');
    if (todo.completed) {
      checkedBok.checked = true;
    }

    const spanEl = document.createElement('span');
    spanEl.textContent = todo.desc;

    const editButton = document.createElement('span');
    editButton.classList.add('edit');
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';

    li.appendChild(checkedBok);
    li.appendChild(spanEl);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    if (todo.completed) {
      li.childNodes[1].classList.add('completed');
    }

    list.appendChild(li);
  }

  static editeToDoTask = (element) => {
    const mainValue = element.parentElement.parentElement.childNodes[1].textContent;
    const editForm = document.createElement('form');
    editForm.id = 'todo-form';
    element.parentElement.parentElement.childNodes[1].innerHTML = `

    <form id="edit-form">
        <input type="text" class="edit-list" value="${mainValue}">
    </form>

    `;

    element.parentElement.parentElement.classList.add('highlight');

    if (element.classList.contains('bi-trash3-fill')) {
      element.parentElement.parentElement.remove();
    }
  }

  static deletetodoTask = (element) => {
    if (element.classList.contains('bi-trash3-fill')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#input-list').value = '';
  }
}
export default UI;