import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';
import { TodoService } from '../../services/todo-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss'],
})
export class UpdateTodoComponent implements OnInit {

  private todoId:number;
  todo:Todo;

  constructor(private todoService:TodoService, private router:Router, private route: ActivatedRoute) 
  { 
    this.todo = <Todo>{};

    this.route.params.subscribe(params => {
        this.todoId = params['id'];
    });
  }

  ngOnInit() {
    this.todoService.get(this.todoId).subscribe((todo) => {
      this.todo = todo;
    });
  }

  ionViewWillEnter() {
    this.todoService.get(this.todoId).subscribe((todo) => {
      this.todo = todo;
    });
  }

  submit(){
    this.todoService.update(this.todo).subscribe(() =>{
      this.router.navigate(['/todos']);
    });
  }
}
