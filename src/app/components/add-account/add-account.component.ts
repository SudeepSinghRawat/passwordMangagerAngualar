import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  priorityList = ['High', 'Low', 'Medium'];

  password = new Password();

  constructor() { }

  ngOnInit() {
  }
  get diagnostic() { return JSON.stringify(this.password); }


}
