import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

const todoRoutes:Routes = [
  <Route>{
    path:'home',
    component:HomeComponent
  },
  <Route>{
    path:'add',
    component:AddTodoComponent
  },
  <Route>{
    path:'update/:id',
    component:UpdateTodoComponent
  },
  <Route>{
    path:'',
    redirectTo: '/todos/home'
  }
];

@NgModule({
  declarations: [HomeComponent, AddTodoComponent, UpdateTodoComponent],
  imports: [
    RouterModule.forChild(todoRoutes),
    IonicModule.forRoot(),
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
