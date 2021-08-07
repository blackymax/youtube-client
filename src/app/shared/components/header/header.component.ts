import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  filterState: boolean = false;

  activeState: boolean = !!localStorage.getItem('token');

  exitState:boolean = false;

  constructor(public appService: AppService) {
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
    this.changeExitState();
    if (this.exitState) {
      this.exitState = !this.exitState;
    }
  }
}
