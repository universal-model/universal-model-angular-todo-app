import store from '../../../store/store';

export default function removeAllTodos(): void {
  const { todosState } = store.getState();
  todosState.todos = [];
}
