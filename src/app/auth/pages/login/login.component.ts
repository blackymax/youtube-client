import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/search-results.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string = '';

  password: string = '';

  loginState: boolean;

  passwordState: boolean;

  token:string = '123';

  constructor(private router: Router, private appService: AppService) {

  }

  checkData() {
    this.loginState = this.login === localStorage.getItem('mail');
    this.passwordState = this.password === localStorage.getItem('password');
    if (this.loginState && this.passwordState) {
      this.sendToken();
    }
  }

  sendToken() {
    localStorage.setItem('token', this.token);
    this.appService.user = this.login;
    this.router.navigate(['/']);
  }
}
