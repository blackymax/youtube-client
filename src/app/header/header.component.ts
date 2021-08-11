import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  filterState: boolean = false;

  changeFilterState() {
    this.filterState = !this.filterState;
  }
}
