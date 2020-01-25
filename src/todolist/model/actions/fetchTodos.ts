import store from '@/store/store';
import todoService from '@/todolist/model/services/todoService';

export default async function fetchTodos(): Promise<void> {
  const { todosState } = store.getState();

  todosState.isFetchingTodos = true;
  todosState.hasTodosFetchFailure = false;

  try {
    todosState.todos = await todoService.tryFetchTodos();
  } catch (error) {
    todosState.hasTodosFetchFailure = true;
  }

  todosState.isFetchingTodos = false;
}
