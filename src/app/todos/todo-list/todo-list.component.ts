import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input()
  todoItems!: Todo[];
  @Output() deleteTodoItem: EventEmitter<number> = new EventEmitter();
  @Output() changeTodoStatus: EventEmitter<number> = new EventEmitter();

  deleteTodo(id: number) {
    this.deleteTodoItem.emit(id);
  }

  changeStatus(id: number) {
    this.changeTodoStatus.emit(id);
  }
}
