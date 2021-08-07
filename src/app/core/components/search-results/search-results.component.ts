import { Component } from '@angular/core';
import { ItemI } from '../../models/search-response.model';
import { AppService } from '../../services/search-results.service';

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

  // ngOnInit() {
  //   this.sources = this.dataService.results;
  // }
}
