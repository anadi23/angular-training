import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  @Output() send: EventEmitter<User>;
  constructor(private builder: FormBuilder) { 
    this.send = new EventEmitter<User>();
    this.form = this.builder.group({
      'id': ['', Validators.required],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'username': [''],
      'email': [''],
      'phone': ['']
    });
  }
  submitForm(user: User){
    this.send.emit(user);
    //alert(JSON.stringify(user));
  }
  ngOnInit(): void {
  }

}
