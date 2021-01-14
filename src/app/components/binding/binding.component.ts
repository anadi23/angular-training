import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  firstName: string;
  lastName: string;
  salary: number;
  classToUse: string;
  valueToChange: string;
  imgpath: string;
  constructor() { 
    this.firstName = "Anand";
    this.lastName = "Sharma";
    this.salary = 50000;
    this.classToUse = 'blueBox';
    this.valueToChange = "This is initial value";
    this.imgpath = 'assets/shivling.jpg';
  }
  getFullName(): string{
    //return this.firstName + ' ' + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }
  changeTheme(): void{
    this.classToUse = this.classToUse == 'blueBox' ? 'redBox' : 'blueBox';
  }
  ngOnInit(): void {
  }

}
