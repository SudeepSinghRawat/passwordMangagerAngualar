import { Component, OnInit } from '@angular/core';
import { PasswordKey } from '../../model/password-key';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-key',
  templateUrl: './add-key.component.html',
  styleUrls: ['./add-key.component.css']
})
export class AddKeyComponent implements OnInit {
  passwordKey = new PasswordKey();

  ngOnInit() {
  }
  constructor(private router: Router) {

  }
  public savePasswordKey() {
    console.log('im here');
    this.router.navigateByUrl('/step3');
  }
  get diagnostic() { return JSON.stringify(this.passwordKey); }

}
