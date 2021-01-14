import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  user: User;
  constructor() { 
    this.user = {
      id: 0,
      name: '',
      username: '',
      phone: '',
      email: ''
    }
  }
  getValue(val: User){
    this.user = val;
  }
  ngOnInit(): void {
  }

}
