import { combineSelectors, createStore, createSubState } from 'universal-model-angular';
import initialHeaderState from '@/header/model/state/initialHeaderState';
import initialTodoListState from '@/todolist/model/state/initialTodosState';
import createTodoListStateSelectors from '@/todolist/model/state/createTodoListStateSelectors';
import createHeaderStateSelectors from '@/header/model/state/createHeaderStateSelectors';

const initialState = {
  headerState: createSubState(initialHeaderState),
  todosState: createSubState(initialTodoListState)
};

export type State = typeof initialState;

const selectors = combineSelectors([
  createTodoListStateSelectors<State>(),
  createHeaderStateSelectors<State>()
]);

export default createStore(initialState, selectors);
