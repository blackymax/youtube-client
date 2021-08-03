import { Component } from '@angular/core';
import { SearchResultsService } from 'src/app/search/search-results/search-results.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private dataService: SearchResultsService) {}

  dateFilter: boolean = false;

  viewsFilter: boolean = false;

  filterByDate() {
    this.dateFilter = !this.dateFilter;
    this.dataService.reorderDataByDate(this.dateFilter);
  }

  filterByViews() {
    this.viewsFilter = !this.viewsFilter;
    this.dataService.reorderDataByViews(this.viewsFilter);
  }

  onch(e: Event) {
    console.log((e.target as HTMLInputElement).value, this.dateFilter);
  }
}
