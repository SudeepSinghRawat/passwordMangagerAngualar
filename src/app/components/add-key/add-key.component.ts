import { Component, OnInit } from '@angular/core';
import { PasswordKey } from '../../model/password-key';
import { Router } from '@angular/router';
import { PasswrodService } from '../../service/passwrod.service';
import { Myresponse } from '../../model/myresponse';


@Component({
  selector: 'app-add-key',
  templateUrl: './add-key.component.html',
  styleUrls: ['./add-key.component.css']
})
export class AddKeyComponent implements OnInit {
  passwordKey = new PasswordKey();
  myResponse = new Myresponse();

  ngOnInit() {
  }
  constructor(private router: Router, private passwordService: PasswrodService) {

  }
  public savePasswordKey() {
    console.log('im here');
    this.passwordService.savePasswordKey(this.passwordKey).subscribe(
      (respose: Myresponse) => {
        console.log(respose);
        this.myResponse = { ... respose };
        if (this.myResponse.status === true) {
          this.router.navigateByUrl('/step3');
        }
      }
    );
    //
  }
  get diagnostic() { return JSON.stringify(this.passwordKey); }

}
