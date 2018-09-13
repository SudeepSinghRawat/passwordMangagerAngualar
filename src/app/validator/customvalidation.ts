import { AbstractControl } from '@angular/forms';
import urlRegex  from 'url-regex';

export class Customvalidation {
}
export function pinMatch(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.root.get('newPin'); // magic is this
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }

    return null;
}

export function isValidUrl(control: AbstractControl){
    if(control && (control.value != null || control.value !== undefined)) {
        const url = control.value;
        if(urlRegex({exact: true}).test(url)=== false){
            return {
                isValidUrl: true
            };
        }
        
    }
    return null;
}

export function confirmPassword(control: AbstractControl){
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.root.get('password'); // magic is this
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isPasswordMatch: true
                };
            }
        }
    }

    return null;
}

