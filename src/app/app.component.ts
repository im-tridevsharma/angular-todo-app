import { Component } from '@angular/core';
import { Todo } from './shared/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  localTodos = localStorage.getItem('todos');
  todoItems: Todo[];

  constructor() {
    this.todoItems = this.localTodos ? JSON.parse(this.localTodos) : [];
  }

  addNewTodo(todo: Todo) {
    this.todoItems.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todoItems));
  }

  deleteTodo(id: number) {
    this.todoItems = this.todoItems.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todoItems));
  }

  changeStatus(id: number) {
    this.todoItems.map((todo) => {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
      }
    });

    localStorage.setItem('todos', JSON.stringify(this.todoItems));
  }
}
