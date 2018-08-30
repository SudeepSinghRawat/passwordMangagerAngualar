import { Component, OnInit } from '@angular/core';
import { PasswrodService } from '../../service/passwrod.service';
import { Pin } from '../../model/pin';
import { Router } from '@angular/router';
import { Myresponse } from '../../model/myresponse';

@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.css']
})
export class AddPinComponent implements OnInit {

  pin = new Pin(null, null, null);
  defaultPinErro: Boolean = false;
  pinDontMatch: Boolean = false;
  myReponse = new Myresponse();
  constructor(private passwordService: PasswrodService , private router: Router) { }

  ngOnInit() {
  }
  checkPin() {
    this.passwordService.validatePin(this.pin).subscribe(
      (response: Myresponse) => {
        this.myReponse = response;
        console.log(this.myReponse);
        if (this.myReponse.status === false) {
          if (this.myReponse.message === 'DefaultPinError') {
            this.defaultPinErro = true;
            this.pinDontMatch = false;
          }
          if (this.myReponse.message === 'PinDontMatch') {
            this.defaultPinErro = false;
            this.pinDontMatch = true;
          }
        }
        if (this.myReponse.status === true) {
          this.defaultPinErro = false;
          this.pinDontMatch = false;
          this.router.navigateByUrl('/step2');

        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
