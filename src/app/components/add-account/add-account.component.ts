import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';
import { PasswrodService } from '../../service/passwrod.service';
import { Router } from '@angular/router';
import { Myresponse } from '../../model/myresponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  priorityList = ['High', 'Low', 'Medium'];
  webSiteName: String;

  password = Password.creatBlank();
  myResponse = new Myresponse();
  accountForm: FormGroup;
  constructor(private passwordServie: PasswrodService , private router: Router) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      'websiteLink' : new FormControl('',[
        Validators.required
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
        Validators.required
      ]),
      'priority' : new FormControl('',[
        Validators.required
      ])
    });
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

   get confirmPassword() {
     return this.accountForm.get('confirmPassword');
   }

   get priority() {
     return this.accountForm.get('priority');
   }
  get diagnostic() { return JSON.stringify(this.password); }

  next() {
    this.passwordServie.savePassword(this.password).subscribe(
      (response: Myresponse) => {
        this.myResponse = { ... response };
        console.log(response);
      }
    );
  }
  genrateWebsiteName() {
    console.log(this.password.getwebSite());
    this.webSiteName = this.password.getwebSite();
    const patt1 = /(https:|http:)/g;
    let result = this.webSiteName.replace(patt1, '');
     result = result.replace('//', '');
     result = result.replace('www', '');
    result = result.substring(0, result.lastIndexOf('.'));
    const first = result.substring(result.lastIndexOf('.') + 1, result.length);
    result = result.replace(first, '');
    result = result.substring(0, result.length - 1);
    this.password.setWebsiteName(first + ' ' + result);
  }
  nextStep() {
    this.passwordServie.savePassword(this.password).subscribe(
      (response: Myresponse) => {
        this.myResponse = { ... response };
        console.log(response);
      }
    );
    this.router.navigateByUrl('/step4');
  }
}
