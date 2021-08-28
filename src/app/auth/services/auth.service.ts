import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<string> = new BehaviorSubject('User');

  public user$: Observable<string> = this.user.asObservable();

  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false as boolean);

  public isLogged$: Observable<boolean> = this.isLogged.asObservable();

  constructor() {
    const us = localStorage.getItem('mail');
    if (us && localStorage.getItem('token')) {
      this.user.next(us);
    } else {
      this.user.next('user');
    }
  }

  logOut() {
    this.isLogged.next(false);
  }

  logIn() {
    this.isLogged.next(true);
  }
}
