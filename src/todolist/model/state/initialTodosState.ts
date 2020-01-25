export interface Todo {
  name: string;
  isDone: boolean;
}

export default {
  todos: [] as Todo[],
  shouldShowOnlyUnDoneTodos: false,
  isFetchingTodos: false,
  hasTodosFetchFailure: false
};
