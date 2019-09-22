import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';
import { TodoService } from '../../services/todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {

  newTodo:Todo;

  constructor(private todoService:TodoService, private router:Router) { }

  ngOnInit() {
    this.newTodo = <Todo>{};
  }

  ionViewWillEnter() {
    this.newTodo = <Todo>{};
  }

  submit(){
    this.todoService.create(this.newTodo).subscribe(() =>{
      this.router.navigate(['/todos']);
    });
  }
}
