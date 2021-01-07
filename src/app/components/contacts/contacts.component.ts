import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: Contact[];
  constructor() { 
    this.contactList = [
      { name: 'Anadi', email: 'anadi@gmail.com', mobile: '9988776655', gender: 'M', contacted: true },
      { name: 'Anand', email: 'anand@gmail.com', mobile: '9898989898', gender: 'M', contacted: false },
      { name: 'Rashmi', email: 'rashmi@gmail.com', mobile: '9988998899', gender: 'F', contacted: false },
      { name: 'Surbhi', email: 'surbhi@gmail.com', mobile: '9887766554', gender: 'F', contacted: true },
      { name: 'Mohit', email: 'mohit@gmail.com', mobile: '9123456789', gender: 'M', contacted: false },
      { name: 'Monica', email: 'monica@gmail.com', mobile: '9988778877', gender: 'F', contacted: false }
    ];
  }

  ngOnInit(): void {
  }

}
