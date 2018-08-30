import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pin } from '../model/pin';
import { PasswordKey } from '../model/password-key';
import { Password } from '../model/password';
import { Myresponse } from '../model/myresponse';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswrodService {

  private url = 'http://localhost:8080/v1/Test';

  constructor(private httpClient: HttpClient) { }

  myFirstCall() {
    console.log('im here');
    this.httpClient.get(this.url).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
        console.log(error.status);
      }
    );
  }

  validatePin(pin: Pin): Observable<Myresponse> {
    return this.httpClient.post<Myresponse>(this.url, pin).pipe(
      catchError(this.handleError)
    );
  }

  savePasswordKey(passwoedHelp: PasswordKey): Observable<Myresponse> {
    return this.httpClient.post<Myresponse>(this.url + '/passwordHelp', passwoedHelp).pipe();
  }

  savePassword(password: Password): Observable<Myresponse> {
    return this.httpClient.post<Myresponse>(this.url + '/savePassword', password).pipe();
  }

  getAllPassword(): Observable<Password[]> {
    return this.httpClient.get<Password[]>(this.url + '/getAllPassword').pipe(
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
