import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';
import { PasswrodService } from '../../service/passwrod.service';
import { Router } from '@angular/router';
import { Myresponse } from '../../model/myresponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidUrl, confirmPassword} from '../../validator/customvalidation'



@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  priorityList = ['High', 'Low', 'Medium'];
  webSiteName: String;

  pas = Password.creatBlank();
  myResponse = new Myresponse();
  accountForm: FormGroup;
  constructor(private passwordServie: PasswrodService , private router: Router) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      'websiteLink' : new FormControl('',[
        Validators.required,
        isValidUrl
      ]),
      'website' : new FormControl('',[
        Validators.required
      ]),
      'username' : new FormControl('',[
        Validators.required
      ]),
      'password' : new FormControl('',[
        Validators.required
      ]),
      'confirmPassword' : new FormControl('',[
        Validators.required,
        confirmPassword
      ]),
      'priority' : new FormControl('',[
        Validators.required
      ])
    });
    this.accountForm.controls.password.valueChanges.subscribe(
      x=>this.accountForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

   get websiteLink() {
     return this.accountForm.get('websiteLink');

   }
   get website() {
     return this.accountForm.get('website');
   }
   get username() {
     return this.accountForm.get('username');
   }
   get password() {
     console.log(this.accountForm.get('password'));
     return this.accountForm.get('password');
   }
   get confirmPassword() {
     return this.accountForm.get('confirmPassword');
   }

   get priority() {
     return this.accountForm.get('priority');
   }
  

  next() {
    this.passwordServie.savePassword(this.pas).subscribe(
      (response: Myresponse) => {
        this.myResponse = { ... response };
        console.log(response);
      }
    );
  }
  genrateWebsiteName() {

    //console.log(urlRegex().test('http://github.com foo bar'));
    console.log(this.accountForm.get('websiteLink').value);
    this.webSiteName = this.accountForm.get('websiteLink').value;
    const patt1 = /(https:|http:)/g;
    let result = this.webSiteName.replace(patt1, '');
     result = result.replace('//', '');
     result = result.replace('www', '');
    result = result.substring(0, result.lastIndexOf('.'));
    const first = result.substring(result.lastIndexOf('.') + 1, result.length);
    result = result.replace(first, '');
    result = result.substring(0, result.length - 1);
    this.accountForm.patchValue({
      'website' : first + ' ' + result,
    });
    //this.password.setWebsiteName(first + ' ' + result);
  }
  nextStep() {
    this.passwordServie.savePassword(this.pas).subscribe(
      (response: Myresponse) => {
        this.myResponse = { ... response };
        console.log(response);
      }
    );
    this.router.navigateByUrl('/step4');
  }
}
