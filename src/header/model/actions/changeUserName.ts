import store from '../../../store/store';

export default function changeUserName(newUserName: string): void {
  const { headerState } = store.getState();
  headerState.userName = newUserName;
}
