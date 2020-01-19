import addTodo from '../model/actions/addTodo';
import removeAllTodos from '../model/actions/removeAllTodos';

export default {
  handleKeyPress(keyboardEvent: KeyboardEvent): void {
    if (keyboardEvent.code === 'KeyA') {
      addTodo();
    } else if (keyboardEvent.code === 'KeyR') {
      removeAllTodos();
    }
  }
};
