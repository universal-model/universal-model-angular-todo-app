import { State } from '@/store/store';
import { Todo } from '@/todolist/model/state/initialTodosState';

const createHeaderStateSelectors = <T extends State>() => ({
  userName: (state: T) => state.headerState.userName,
  headerText: (state: T) => {
    const unDoneTodoCount = state.todosState.todos.filter((todo: Todo) => !todo.isDone).length;
    const todoCount = state.todosState.todos.length;
    return `${state.headerState.userName} (${unDoneTodoCount}/${todoCount})`;
  }
});

export default createHeaderStateSelectors;
