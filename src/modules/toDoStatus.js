import Store from './localstorage.js';

class Todostatus {
    static istodoCompleted = (element) => {
      const todoTask = Store.gettodoTasks();
      const checkedValue = element.checked;
      const list = element.parentElement;
      const todoList = document.getElementById('list-item');
      const id = Array.prototype.indexOf.call(todoList.children, list);

      todoTask.forEach((todo) => {
        if (todo.index === id) {
          todo.completed = checkedValue;
          list.childNodes[1].classList.toggle('completed');
        }
      });

      localStorage.setItem('todoTask', JSON.stringify(todoTask));
    };

    static cleartodoCompleted = () => {
      let todoTask = Store.gettodoTasks();
      todoTask = todoTask.filter((item) => !item.completed);
      localStorage.setItem('todoTask', JSON.stringify(todoTask));
    }
}
export default Todostatus;