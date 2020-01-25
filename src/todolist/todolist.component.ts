import { Component, OnDestroy, OnInit } from '@angular/core';
import initialTodosState, { Todo } from '@/todolist/model/state/initialTodosState';
import toggleShouldShowOnlyDoneTodos from '@/todolist/model/actions/toggleShouldShowOnlyUnDoneTodos';
import toggleIsDoneTodo from '@/todolist/model/actions/toggleIsDoneTodo';
import removeTodo from '@/todolist/model/actions/removeTodo';
import store from '@/store/store';
import fetchTodos from '@/todolist/model/actions/fetchTodos';
import todoListController from '@/todolist/controller/todoListController';

@Component({
  selector: 'app-todo-list-view',
  template: `
    <div>
      <input
        id="shouldShowOnlyUnDoneTodos"
        type="checkbox"
        [checked]="todosState.shouldShowOnlyUnDoneTodos"
        (click)="toggleShouldShowOnlyUnDoneTodos()"
      />
      <label for="shouldShowOnlyUnDoneTodos">Show only undone todos</label>
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
export class TodoListComponent implements OnInit, OnDestroy {
  todosState = initialTodosState;
  shownTodos = [] as Todo[];
  toggleShouldShowOnlyUnDoneTodos = toggleShouldShowOnlyDoneTodos;
  toggleIsDoneTodo = toggleIsDoneTodo;
  removeTodo = removeTodo;

  constructor() {
    const [{ todosState }, { shownTodos }] = store.getStateAndSelectors();
    store.useStateAndSelectors(this, { todosState }, { shownTodos });
  }

  ngOnInit(): void {
    // noinspection JSIgnoredPromiseFromCall
    fetchTodos();
    document.addEventListener('keypress', todoListController.handleKeyPress);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keypress', todoListController.handleKeyPress);
  }
}
