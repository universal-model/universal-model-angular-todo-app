import store from '../../../store/store';
import todoService from '../services/todoService';

export default async function fetchTodos(): Promise<void> {
  const { todosState } = store.getState();

  todosState.isFetchingTodos = false;
  todosState.todos = await todoService.fetchTodos();
  todosState.isFetchingTodos = true;
}
