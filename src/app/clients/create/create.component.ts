import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.Model';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class ClientCreateComponent implements OnInit {
  client:Client;

  constructor() {
    this.client = new Client();
   }

  ngOnInit(): void {
  }

}
