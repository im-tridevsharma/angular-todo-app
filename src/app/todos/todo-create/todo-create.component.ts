import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  todoTitle = '';
  newTodo!: Todo;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  addNewTodo() {
    this.newTodo = {
      id: Math.round(Math.random() * 100),
      title: this.todoTitle,
      isActive: true,
      createdAt: new Date().toLocaleString(),
    };

    this.addTodo.emit(this.newTodo);
    this.todoTitle = '';
  }
}
