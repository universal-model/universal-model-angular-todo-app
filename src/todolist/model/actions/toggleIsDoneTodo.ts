import { Todo } from '../state/initialTodosState';

export default function toggleIsDoneTodo(todo: Todo): void {
  todo.isDone = !todo.isDone;
}
