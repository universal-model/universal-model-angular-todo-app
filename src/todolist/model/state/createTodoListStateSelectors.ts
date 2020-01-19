import { State } from '../../../store/store';
import { Todo } from './initialTodosState';

const createTodoListStateSelectors = <T extends State>() => ({
  shownTodos: (state: T) =>
    state.todosState.todos.filter(
      (todo: Todo) =>
        (state.todosState.shouldShowOnlyDoneTodos && todo.isDone) || !state.todosState.shouldShowOnlyDoneTodos
    )
});

export default createTodoListStateSelectors;
