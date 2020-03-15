import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  addForm = new FormControl('');

  todos: Todo[];
  todoName: string;
  todoEmail: string;
  todoPhone: string;
  idForTodo: number;
  nameBeforeEdit: string;
  emailBeforeEdit: string;
  phoneBeforeEdit: string;
  anyRemainingModel: boolean;
  searchValue: string;


  constructor() { }

  ngOnInit() {
    this.anyRemainingModel = true;
    this.nameBeforeEdit = '';
    this.emailBeforeEdit = '';
    this.phoneBeforeEdit = '';
    this.idForTodo = 0;
    this.todoName = '';
    this.todoEmail = '';
    this.todoPhone = '';
    this.todos = [];
  }
  showAdd() {
    document.querySelector('.add-container').className = 'add-container';
  }

  addTodo(): void {
    if (this.todoName.trim().length === 0
      || this.todoEmail.trim().length === 0
      || this.todoPhone.trim().length === 0) {
      document.querySelector('.add-container').classList.add('red-border');
      return;
    }

    this.todos.unshift({
      id: this.idForTodo,
      name: this.todoName,
      email: this.todoEmail,
      phone: this.todoPhone,
      completed: false,
      editing: false
    })

    this.todoName = '';
    this.todoEmail = '';
    this.todoPhone = '';
    this.idForTodo++;
    document.querySelector('.add-container').classList.add('disable');
  }

  editTodo(todo: Todo): void {
    this.nameBeforeEdit = todo.name;
    this.emailBeforeEdit = todo.email;
    this.phoneBeforeEdit = todo.phone;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.name.trim().length === 0 ||
      todo.email.trim().length === 0 ||
      todo.phone.trim().length === 0) {
      todo.name = this.nameBeforeEdit;
      todo.email = this.emailBeforeEdit;
      todo.phone = this.phoneBeforeEdit;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.name = this.nameBeforeEdit;
    todo.email = this.emailBeforeEdit;
    todo.phone = this.phoneBeforeEdit;
    todo.editing = false;
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(item => item.id !== todo.id);
  }

  todosFiltered(): Todo[] {
    if (this.searchValue) {
      return this.todos.filter(todo => {
        const regex = RegExp("^" + this.searchValue.trim().toLowerCase() + "");
        return regex.test(todo.name.toLowerCase())
      });
    }
    return this.todos;
  }

  cancel() {
    document.querySelector('.add-container').classList.add('disable');
    this.todoName = '';
    this.todoEmail = '';
    this.todoPhone = '';
  }
}
