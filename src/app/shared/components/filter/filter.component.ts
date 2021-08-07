import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/search-results.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private dataService: AppService) {}

  temp: string = '';

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

  filterByWords() {
    this.dataService.filterData(this.temp);
  }
}
