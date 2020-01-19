import { Injectable } from '@angular/core';
import { ITodoService } from './ITodoService';
import { Todo } from '../state/initialTodosState';
import Constants from '../../../Constants';

export default class FakeTodoService implements ITodoService {
  fetchTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve: (todo: Todo[]) => void) => {
      setTimeout(
        () =>
          resolve([
            { name: 'first todo', isDone: true },
            { name: 'second todo', isDone: false }
          ]),
        Constants.FAKE_SERVICE_LATENCY_IN_MILLIS
      );
    });
  }
}
