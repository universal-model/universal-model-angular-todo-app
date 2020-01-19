import { Todo } from '../state/initialTodosState';

export interface ITodoService {
  fetchTodos(): Promise<Todo[]>;
}
