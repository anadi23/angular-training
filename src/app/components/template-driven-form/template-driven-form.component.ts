import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor(private service: DataService) { 
  }
  submitForm(user: User){
    //alert(JSON.stringify(user));
    this.service.addUser(user).subscribe(res => {
      console.log(res);
    });
  }
  log(value: any){
    console.log(value);
  }
  ngOnInit(): void {
  }

}
