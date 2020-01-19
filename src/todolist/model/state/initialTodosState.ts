export interface Todo {
  name: string;
  isDone: boolean;
}

export default {
  todos: [] as Todo[],
  shouldShowOnlyDoneTodos: false,
  isFetchingTodos: false
};
