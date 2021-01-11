import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private service: DataService) { 
    this.user = {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: ''
    };
  }

  ngOnInit(): void {
    this.service.getUserById(3).subscribe(response => {
      this.user = response;
    })
  }

}
