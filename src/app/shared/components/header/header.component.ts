import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/search-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  filterState: boolean = false;

  constructor(public appService: AppService) {
  }

  changeFilterState() {
    this.filterState = !this.filterState;
  }
}
