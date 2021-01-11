import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private service: DataService, private route: ActivatedRoute) { 
    this.user = {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: ''
    };
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(response => {
      this.user = response;
    })
  }

}
