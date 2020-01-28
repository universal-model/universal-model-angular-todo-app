import { Component } from '@angular/core';
import changeUserName from '@/header/model/actions/changeUserName';
import store from '@/store/store';

@Component({
  selector: 'app-header-view',
  template: `
    <div>
      <h1>{{ headerText }}</h1>
      <label for="userName">User name:</label>
      <input #userNameInput id="userName" (change)="changeUserName(userNameInput.value)" />
    </div>
  `,
  styleUrls: []
})
export class HeaderComponent {
  headerText: string;
  changeUserName = changeUserName;

  constructor() {
    const { headerText } = store.getSelectors();
    store.useSelectors(this, { headerText });
  }
}
