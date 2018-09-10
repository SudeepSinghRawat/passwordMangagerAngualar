import { Component, OnInit } from '@angular/core';
import { PasswordKey } from '../../model/password-key';
import { Router } from '@angular/router';
import { PasswrodService } from '../../service/passwrod.service';
import { Myresponse } from '../../model/myresponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-key',
  templateUrl: './add-key.component.html',
  styleUrls: ['./add-key.component.css']
})
export class AddKeyComponent implements OnInit {
  passwordKey = new PasswordKey();
  myResponse = new Myresponse();
  keyForm: FormGroup

  ngOnInit() {
    this.keyForm =  new FormGroup({
      'name': new FormControl(this.passwordKey.name,[
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$'),
        Validators.minLength(4),
        Validators.maxLength(12)
      ]),
      'number' : new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]{4}$'),
      ]),
      'symbol' : new FormControl('',[
        Validators.required,
        Validators.pattern('^[-!$%^&*()_+|~=`{}:";<>?,.]{1}$'),
      ])
    });
  }

  get name() {
    return this.keyForm.get('name');
  }

  get number() {
    return  this.keyForm.get('number');
  }
  get symbol() {
    return this.keyForm.get('symbol');
  }
  constructor(private router: Router, private passwordService: PasswrodService) {

  }
  public savePasswordKey() {
    console.log('im here');
    this.passwordKey.name = this.keyForm.get('name').value;
    this.passwordKey.number = this.keyForm.get('number').value;
    this.passwordKey.symbol = this.keyForm.get('symbol').value;
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
