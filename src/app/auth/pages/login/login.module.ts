import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
