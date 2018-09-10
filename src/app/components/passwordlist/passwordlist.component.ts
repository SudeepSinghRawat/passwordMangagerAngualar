import { Component, OnInit } from '@angular/core';
import { Password } from '../../model/password';
import { PasswrodService } from '../../service/passwrod.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-passwordlist',
  templateUrl: './passwordlist.component.html',
  styleUrls: ['./passwordlist.component.css']
})
export class PasswordlistComponent implements OnInit {

  passwords: Password[];
  passwordlist: Array<Password>;
  password = Password.creatBlank();
  index: any;

  constructor(private passwordService: PasswrodService) { }

  ngOnInit() {
    this.passwordService.getAllPassword().subscribe(
      (response: Password[]) => {
        console.log(response);
        this.passwords = response;
        console.log(this.passwords[0]);
        this.passwordlist = response;
      }
    );
  }

  editPassword(index): void {
    console.log(index);
    this.password = this.passwords[index];
    this.index = index;
    $('#exampleModalCenter').modal('show');
  }
  updatePassword(): void {
    console.log(this.index);
    // const index: any = this.password.getId();
    this.passwords[this.index] = this.password;
    $('#exampleModalCenter').modal('hide');
    console.log(this.passwords);
  }

}
