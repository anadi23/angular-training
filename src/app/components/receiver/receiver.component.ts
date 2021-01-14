import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  messages: any[];
  subsciption: Subscription;
  constructor(private comm: CommService) { 
    this.messages = [];
    this.subsciption = this.comm.onMessage().subscribe(msg => {
      this.messages.push(msg);
    })
  }
  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }
  ngOnInit(): void {
  }

}
