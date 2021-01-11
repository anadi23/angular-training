import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private service: DataService) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => {
      this.users = response;
    });
  }

}
