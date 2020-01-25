import store from '@/store/store';

export default function toggleShouldShowOnlyUnDoneTodos(): void {
  const { todosState } = store.getState();
  todosState.shouldShowOnlyUnDoneTodos = !todosState.shouldShowOnlyUnDoneTodos;
}
