import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';
import { PasswrodService } from '../../service/passwrod.service';

@Component({
  selector: 'app-passwordlist',
  templateUrl: './passwordlist.component.html',
  styleUrls: ['./passwordlist.component.css']
})
export class PasswordlistComponent implements OnInit {

  passwords: Password[];
  passwordlist: Array<Password>;

  constructor(private passwordService: PasswrodService) { }

  ngOnInit() {
    this.passwordService.getAllPassword().subscribe(
      (response: Password[]) => {
        console.log(response);
        this.passwords = { ... response};
        console.log(this.passwords[0]);
        this.passwordlist = response;
      }
    );
  }

}
