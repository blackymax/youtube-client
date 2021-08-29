import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchString: string = '';

  constructor(public appService: AppService) { }

  onInput() {
    if (this.searchString.length > 2) {
      this.appService.getInputValue(this.searchString);
    }
  }
}
