import { Component } from '@angular/core';
import initialHeaderState from '@/header/model/state/initialHeaderState';
import changeUserName from '@/header/model/actions/changeUserName';
import store from '@/store/store';

@Component({
  selector: 'app-header-view',
  template: `
    <div>
      <h1>{{ headerState.userName }}</h1>
      <label for="userName">User name:</label>
      <input #userNameInput id="userName" (change)="changeUserName(userNameInput.value)" />
    </div>
  `,
  styleUrls: []
})
export class HeaderComponent {
  headerState = initialHeaderState;
  changeUserName = changeUserName;

  constructor() {
    const { headerState } = store.getState();
    store.useState(this, { headerState });
  }
}
