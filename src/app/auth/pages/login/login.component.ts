import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  login: string = '';

  password: string = '';

  loginState: boolean;

  passwordState: boolean;

  token: string = '123';

  userName:string = '';

  loginSub: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loginSub = this.authService.isLogged$.subscribe((value) => {
      this.loginState = value;
    });
  }

  checkData() {
    this.loginState = this.login === localStorage.getItem('mail');
    this.passwordState = this.password === localStorage.getItem('password');
    if (this.loginState && this.passwordState) {
      this.sendToken();
      this.authService.logIn();
      this.authService.user.next(this.login);
    }
  }

  sendToken() {
    localStorage.setItem('token', this.token);
    this.authService.user.next(this.login);
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe();
  }
}
