import ToDo from './toDo.js';
import Store from './localstorage.js';

class UI {
  static taskCompleted = () => {
    const tasks = Store.gettodoTasks();
    tasks.forEach((todo) => UI.addTaskToList(todo));
  };

  static getNewToDoTask = () => {
    const inputTask = document.querySelector('#input-list').value;

    // Validation for empty form
    if (inputTask !== '') {
      const todo = new ToDo(inputTask);

      UI.addTaskToList(todo);

      Store.addtodoTask(todo);

      UI.clearFields();
    }
  };

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
      li.classList.add('completed');
    }

    list.appendChild(li);
  };

  static editeToDoTask = (element) => {
    const listItem = element.closest('li');
    const spanEl = listItem.querySelector('span');
    const mainValue = spanEl.textContent;

    const editForm = document.createElement('form');
    editForm.id = 'edit-form';
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.classList.add('edit-list');
    inputField.value = mainValue;
    editForm.appendChild(inputField);

    spanEl.replaceWith(editForm);

    listItem.classList.add('highlight');

    if (element.classList.contains('bi-trash3-fill')) {
      listItem.remove();
    }
  };

  static deletetodoTask = (element) => {
    if (element.classList.contains('bi-trash3-fill')) {
      element.closest('li').remove();
    }
  };

  static clearFields = () => {
    document.querySelector('#input-list').value = '';
  };
}

export default UI;