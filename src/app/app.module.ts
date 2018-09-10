import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordlistComponent } from './components/passwordlist/passwordlist.component';
import { PasswordComponent } from './components/password/password.component';
import { AddPinComponent } from './components/add-pin/add-pin.component';
import { AddKeyComponent } from './components/add-key/add-key.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PasswordlistComponent,
    PasswordComponent,
    AddPinComponent,
    AddKeyComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
