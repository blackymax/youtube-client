import { Component } from '@angular/core';
import { ItemI } from '../../models/search-response.model';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  sources: ItemI[];

  constructor(public dataService: AppService) {
    this.sources = this.dataService.results;
  }
}
