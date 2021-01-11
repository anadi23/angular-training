import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnChanges {
  @Input() id: number;
  @Input() name: string;
  @Input() email: string;
  @Input() mobile: string;
  @Input() gender: string;
  @Input() contacted?: boolean;
  title: string;
  constructor() {
    this.id = 0; 
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.gender = '';
    this.title = '';
    this.contacted = false;
  }
  ngOnChanges(){
    this.title = this.gender == 'M' ? 'Mr.' : 'Ms.';
  }
  ngOnInit(): void {
  }
}
