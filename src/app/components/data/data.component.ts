import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  employees: Employee[];
  constructor() { 
    this.employees = [
      {id: 101, firstName: 'Anadi', lastName: 'Sharma', designation: 'SR CONSULTANT', doj: '2018-07-16', salary: 80000},
      {id: 102, firstName: 'Anand', lastName: 'Sinha', designation: 'CONSULTANT', doj: '2018-06-16', salary: 70000},
      {id: 103, firstName: 'Rashmi', lastName: 'Kolhe', designation: 'ASSOCIATE CONSULTANT', doj: '2019-07-26', salary: 65000},
      {id: 104, firstName: 'Surbhi', lastName: 'Srivastava', designation: 'SR CONSULTANT', doj: '2019-11-6', salary: 85000}
    ];
  }

  ngOnInit(): void {
  }

}
