import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Todo } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private getAllUrl:string;
  private getUrl:string;
  private createUrl:string;
  private updateUrl:string;
  private deleteUrl:string;

  constructor(private http:HttpClient) 
  { 
    this.getAllUrl = `${environment.apiUrl}/GetAll`;    
    this.getUrl = `${environment.apiUrl}/Get`;    
    this.createUrl = `${environment.apiUrl}/Create`;    
    this.updateUrl = `${environment.apiUrl}/Update`;    
    this.deleteUrl = `${environment.apiUrl}/Delete`;    
  }

  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.getAllUrl)
  }

  create(todo:Todo): Observable<any>{
    return this.http.post(this.createUrl, todo);
  }

  update(todo:Todo): Observable<any>{
    return this.http.put(this.updateUrl, todo);
  }

  delete(todo:Todo): Observable<any>{
    return this.http.delete(`${this.deleteUrl}/${todo.id}`);
  }

  get(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.getUrl}/${id}`);
  }
}
