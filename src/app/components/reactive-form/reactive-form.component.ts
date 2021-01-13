import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  constructor(private builder: FormBuilder) { 
    this.form = this.builder.group({
      'id': ['', Validators.required],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'username': [''],
      'email': [''],
      'phone': ['']
    });
  }
  submitForm(user: User){
    alert(JSON.stringify(user));
  }
  ngOnInit(): void {
  }

}
