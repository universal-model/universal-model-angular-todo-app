import { ITodoService } from '@/todolist/model/services/ITodoService';
import { Todo } from '@/todolist/model/state/initialTodosState';
import Constants from '@/Constants';

export default class FakeTodoService implements ITodoService {
  tryFetchTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve: (todo: Todo[]) => void, reject: () => void) => {
      setTimeout(() => {
        if (Math.random() < 0.95) {
          resolve([
            {  name: 'first todo', isDone: true },
            {  name: 'second todo', isDone: false }
          ]);
        } else {
          reject();
        }
      }, Constants.FAKE_SERVICE_LATENCY_IN_MILLIS);
    });
  }
}
