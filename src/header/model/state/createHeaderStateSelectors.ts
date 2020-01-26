import { State } from '@/store/store';

const createHeaderStateSelectors = <T extends State>() => ({
  userName: (state: T) => state.headerState.userName
});

export default createHeaderStateSelectors;
