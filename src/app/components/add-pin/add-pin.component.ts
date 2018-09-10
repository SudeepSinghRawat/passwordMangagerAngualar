import { Component, OnInit } from '@angular/core';
import { PasswrodService } from '../../service/passwrod.service';
import { Pin } from '../../model/pin';
import { Router } from '@angular/router';
import { Myresponse } from '../../model/myresponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pinMatch } from '../../validator/customvalidation';

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
  pinForm: FormGroup;
  constructor(private passwordService: PasswrodService, private router: Router) {
  }

  ngOnInit() {
    this.pinForm = new FormGroup({
      'defaultPin': new FormControl(this.pin.oldPin, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(3)
      ]),
      'newPin' : new FormControl(this.pin.newpin, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$'),
      ]),
      'confirmPin' : new FormControl(this.pin.confirmPin, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        pinMatch
      ])
    });

    this.pinForm.controls.newPin.valueChanges.subscribe(
      x => this.pinForm.controls.confirmPin.updateValueAndValidity()
    );
  }

  get defaultPin() {
    return this.pinForm.get('defaultPin');
  }
  get newPin() {
    return this.pinForm.get('newPin');
  }
  get confirmPin() {
    return this.pinForm.get('confirmPin');
  }

  checkPin() {
    this.pin = new Pin(this.pinForm.get('defaultPin').value, this.pinForm.get('newPin').value,
    this.pinForm.get('confirmPin').value);
    console.log(this.pin)
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
