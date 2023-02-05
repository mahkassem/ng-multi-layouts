import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutModule } from 'src/app/layouts/default-layout/default-layout.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DefaultLayoutModule,
  ]
})
export class AuthModule { }
