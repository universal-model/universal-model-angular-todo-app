import { Component, OnDestroy, OnInit } from '@angular/core';
import initialTodosState, {Todo} from './model/state/initialTodosState';
import toggleShouldShowOnlyDoneTodos from './model/actions/toggleShouldShowOnlyDoneTodos';
import toggleIsDoneTodo from './model/actions/toggleIsDoneTodo';
import removeTodo from './model/actions/removeTodo';
import store from '../store/store';
import fetchTodos from './model/actions/fetchTodos';
import todoListController from './controller/todoListController';

@Component({
  selector: 'app-todo-list-view',
  template: `
    <div>
      <input
        id="shouldShowOnlyDoneTodos"
        type="checkbox"
        [checked]="todosState.shouldShowOnlyDoneTodos"
        (click)="toggleShouldShowOnlyDoneTodos()"
      />
      <label for="shouldShowOnlyDoneTodos">Show only done todos</label>
      <ul>
        <li *ngFor="let todo of shownTodos">
          <input id="todo.name" type="checkbox" [checked]="todo.isDone" (click)="toggleIsDoneTodo(todo)" />
          <label for="todo.name">{{ todo.name }}</label>
          <button (click)="removeTodo(todo)">Remove</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: []
})
export class TodolistComponent implements OnInit, OnDestroy {
  todosState = initialTodosState;
  shownTodos = [] as Todo[];
  toggleShouldShowOnlyDoneTodos = toggleShouldShowOnlyDoneTodos;
  toggleIsDoneTodo = toggleIsDoneTodo;
  removeTodo = removeTodo;

  ngOnInit(): void {
    const { todosState } = store.getState();
    store.startUsingState(this, { todosState });
    const { shownTodos } = store.getSelectors();
    store.startUsingSelectors(this, { shownTodos });
    fetchTodos();
    document.addEventListener('keypress', todoListController.handleKeyPress);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keypress', todoListController.handleKeyPress);
    store.stopUsingState(this);
    store.stopUsingSelectors(this);
  }
}
