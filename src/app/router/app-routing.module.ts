import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPinComponent } from '../components/add-pin/add-pin.component';
import { AddKeyComponent } from '../components/add-key/add-key.component';
import { AddAccountComponent } from '../components/add-account/add-account.component';
import { PasswordlistComponent } from '../components/passwordlist/passwordlist.component';


const router: Routes = [
  {path : 'step1', component: AddPinComponent},
  {path: 'step2', component: AddKeyComponent},
  {path: 'step3', component: AddAccountComponent},
  {path: 'step4', component: PasswordlistComponent},
  { path: '', redirectTo: '/step1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
