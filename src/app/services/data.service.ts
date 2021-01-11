import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUri: string;
  constructor(private http: HttpClient) {
    this.baseUri = 'http://jsonplaceholder.typicode.com/users/';
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUri, {
      
    });
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.baseUri + id);
  }
}
