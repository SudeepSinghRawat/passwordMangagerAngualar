import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';
import { PasswrodService } from '../../service/passwrod.service';
import { Router } from '@angular/router';
import { Myresponse } from '../../model/myresponse';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  priorityList = ['High', 'Low', 'Medium'];
  webSiteName: String;

  password = new Password();
  myResponse = new Myresponse();

  constructor(private passwordServie: PasswrodService , private router: Router) { }

  ngOnInit() {
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
