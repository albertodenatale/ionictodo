import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';
import { TodoService } from '../../services/todo-service.service';
import { Router } from '@angular/router';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  todos:Array<Todo>;

  constructor(private platform: Platform, private todoService:TodoService, private router:Router) { }

  ngOnInit() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  ionViewWillEnter() {
    this.todos = [];

    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  updateItem(todo:Todo){
    this.router.navigate([`/todos/update`, todo.id]);
  }

  dragEvent(todo, ratio){
    console.log(ratio);
    if(ratio === 1){
      this.deleteItem(todo);
    }
  }

  deleteItem(todo:Todo){
    this.todoService.delete(todo);
  }

}
