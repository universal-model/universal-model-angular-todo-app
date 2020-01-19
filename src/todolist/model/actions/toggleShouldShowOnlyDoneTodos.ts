import store from '../../../store/store';

export default function toggleShouldShowOnlyDoneTodos(): void {
  const { todosState } = store.getState();
  todosState.shouldShowOnlyDoneTodos = !todosState.shouldShowOnlyDoneTodos;
}
