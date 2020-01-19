import { Component, OnDestroy, OnInit } from '@angular/core';
import initialHeaderState from './model/state/initialHeaderState';
import changeUserName from './model/actions/changeUserName';
import store from '../store/store';

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
export class HeaderComponent implements OnInit, OnDestroy {
  headerState = initialHeaderState;
  changeUserName = changeUserName;

  ngOnInit(): void {
    const { headerState } = store.getState();
    store.startUsingState(this, { headerState });
  }

  ngOnDestroy(): void {
    store.stopUsingState(this);
  }
}
