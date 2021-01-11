import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  msg: string;
  constructor(private service: SampleService) { 
    this.msg = this.service.sayHello("Anadi");
  }

  ngOnInit(): void {
  }

}
