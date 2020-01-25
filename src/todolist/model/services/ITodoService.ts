import { Todo } from '../state/initialTodosState';

export interface ITodoService {
  tryFetchTodos(): Promise<Todo[]>;
}
