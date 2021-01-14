import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  private subject = new Subject<any>();
  
  sendMessage(msg: string){
    this.subject.next({val1: msg})
  }
  onMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
