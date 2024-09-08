import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';

@NgModule({
  imports: [
    // SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginPage,
    // ErrorMessageComponent
  ]
})
export class LoginPageModule {}
