import UI from './UI.js';
import ToDo from './toDo.js';
import Store from './localstorage.js';

// Mock the localStorage object
const mockLocalStorage = {
  gettodoTasks: jest.fn(),
  addtodoTask: jest.fn(),
};

jest.mock('./localstorage', () => ({
  default: mockLocalStorage,
}));

describe('UI', () => {
  let list;
  let input;

  beforeEach(() => {
    // Mock the HTML elements
    document.body.innerHTML = `
      <ul id="list-item"></ul>
      <input id="input-list" type="text">
    `;

    list = document.getElementById('list-item');
    input = document.getElementById('input-list');
  });

  describe('editeToDoTask', () => {
    test('should update task description when editing', () => {
      // Create a sample ToDo task
      const todo = new ToDo('Task 1');
      const li = document.createElement('li');
      const spanEl = document.createElement('span');
      spanEl.textContent = todo.desc;
      const editButton = document.createElement('span');
      editButton.classList.add('edit');
      editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
      li.appendChild(spanEl);
      li.appendChild(editButton);
      list.appendChild(li);

      // Call the function to edit the task
      UI.editeToDoTask(editButton);

      // Check if the task description is replaced with an input field
      const inputField = li.querySelector('input.edit-list');
      expect(inputField).toBeDefined();
    });

    test('should remove the task when delete button is clicked', () => {
      const li = document.createElement('li');
      const deleteButton = document.createElement('span');
      deleteButton.classList.add('delete');
      deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
      li.appendChild(deleteButton);
      list.appendChild(li);

      // Call the function to delete the task
      UI.editeToDoTask(deleteButton);

      // Check if the task is removed from the list
      expect(list.innerHTML).not.toContain('<li>');
    });
  });

  describe('clearFields', () => {
    test('should clear the input field value', () => {
      // Set an initial value for the input field
      input.value = 'Task 1';
      UI.clearFields();
      expect(input.value).toBe('');
    });
  });
});

// Mocking the Store class
jest.mock('./localstorage.js');

describe('UI', () => {
  describe('taskCompleted', () => {
    test("should updating an item's 'completed' status", () => {
      // Mock data
      const tasks = [
        { desc: 'Task 1', completed: false },
        { desc: 'Task 2', completed: true },
        { desc: 'Task 3', completed: false },
      ];

      // Mocking the Store.gettodoTasks method
      Store.gettodoTasks = jest.fn().mockReturnValue(tasks);

      // Creating the initial DOM structure
      document.body.innerHTML = `
        <ul id="list-item"></ul>
      `;

      UI.taskCompleted();

      // Getting the updated DOM
      const list = document.querySelector('#list-item');
      const todoItems = list.querySelectorAll('li');

      // Expectations
      expect(todoItems.length).toBe(tasks.length);

      tasks.forEach((task, index) => {
        const todoItem = todoItems[index];
        const checkbox = todoItem.querySelector('.checkbox');
        const spanEl = todoItem.querySelector('span');

        expect(checkbox.checked).toBe(task.completed);
        expect(spanEl.textContent).toBe(task.desc);
      });
    });
  });
});
