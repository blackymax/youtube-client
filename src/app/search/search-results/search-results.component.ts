import { Component } from '@angular/core';
import * as resp from '../../../assets/resp.json';
import { ItemI, SearchResponseI } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  dataSource: SearchResponseI = resp;

  sources?: ItemI[] = this.dataSource.items;

  borderStyle: string = 'border-bottom: 5px solid blue';

  getDate(item: string): string {
    const currentTime = new Date();
    const releaseTime = new Date(item);
    const days = (currentTime.getTime() - releaseTime.getTime()) / (24 * 3600 * 1000);
    if (days < 7) {
      this.borderStyle = 'border-bottom: 5px solid blue';
    } else if (days < 30) {
      this.borderStyle = 'border-bottom: 5px solid green';
    } else {
      this.borderStyle = 'border-bottom: 5px solid yellow';
    }
    return this.borderStyle;
  }
}
