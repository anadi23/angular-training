import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private comm: CommService) { }
  sendMessage(){
    this.comm.sendMessage("This is a sample string to circulate.")
  }
  ngOnInit(): void {
  }

}
