import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() deleteTodoItem: EventEmitter<number> = new EventEmitter();
  @Output() changeTodoStatus: EventEmitter<number> = new EventEmitter();
  ngOnInit() {}

  deleteTodo() {
    this.deleteTodoItem.emit(this.todo.id);
  }

  changeStatus() {
    this.changeTodoStatus.emit(this.todo.id);
  }
}
