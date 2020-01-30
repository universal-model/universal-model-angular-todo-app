import { State } from '@/store/store';
import { Todo } from '@/todolist/model/state/initialTodosState';

const createTodoListStateSelectors = <T extends State>() => ({
  shownTodos: (state: T) =>
    state.todosState.todos.filter(
      (todo: Todo) =>
        (state.todosState.shouldShowOnlyUnDoneTodos && !todo.isDone) ||
        !state.todosState.shouldShowOnlyUnDoneTodos
    ),
  todoCount: (state: T) => state.todosState.todos.length,
  unDoneTodoCount: (state: T) => state.todosState.todos.filter((todo: Todo) => !todo.isDone).length
});

export default createTodoListStateSelectors;
