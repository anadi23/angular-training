import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUri: string;
  constructor(private http: HttpClient) {
    this.baseUri = 'http://jsonplaceholder.typicode.com/users/';
  }
  getUsers(){
    return this.http.get(this.baseUri);
  }
  getUserById(id: number){
    return this.http.get(this.baseUri + id);
  }
}
