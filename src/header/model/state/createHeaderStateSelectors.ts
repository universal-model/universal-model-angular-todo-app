import {State} from '@/store/store';
import createTodoListStateSelectors from '@/todolist/model/state/createTodoListStateSelectors';

const createHeaderStateSelectors = <T extends State>() => ({
  userName: (state: T) => state.headerState.userName,
  headerText: (state: T) => {
    const {
      todoCount: selectTodoCount,
      unDoneTodoCount: selectUnDoneTodoCount
    } = createTodoListStateSelectors<T>();

    return `${state.headerState.userName} (${selectUnDoneTodoCount(state)}/${selectTodoCount(state)})`;
  }
});

export default createHeaderStateSelectors;
