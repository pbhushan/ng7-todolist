import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo = (todo: Todo) => {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // delete todo from server
    this.todoService.deleteTodo(todo).subscribe();
  }


  // tslint:disable-next-line: no-shadowed-variable
  addTodo = (todo: Todo) => {
    this.todoService.addTodo(todo).subscribe(todoItem => {
      this.todos.push(todoItem);
    });
  }

}
