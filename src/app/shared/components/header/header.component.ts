import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  filterState: boolean = false;

  activeState: boolean = !!localStorage.getItem('token');

  exitState: boolean = false;

  userName: string = 'user';

  userNameSub: Subscription;

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe((value) => {
      this.userName = value;
    });
  }

  ngOnInit() {
    this.authService.user$.subscribe((value) => {
      this.userName = value;
    });
  }

  changeFilterState() {
    this.filterState = !this.filterState;
  }

  changeExitState() {
    if (localStorage.getItem('token')) {
      this.exitState = !this.exitState;
    }
  }

  clearCreds() {
    localStorage.removeItem('token');
    this.authService.logOut();
    this.changeExitState();
    if (this.exitState) {
      this.exitState = !this.exitState;
    }
  }

  ngOnDestroy() {
    this.userNameSub.unsubscribe();
  }
}
