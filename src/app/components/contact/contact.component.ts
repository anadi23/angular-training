import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() email: string;
  @Input() mobile: string;
  @Input() gender: string;
  constructor() {
    this.id = 0; 
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.gender = '';
  }

  ngOnInit(): void {
  }

}
