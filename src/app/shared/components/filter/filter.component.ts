import { Component, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';

enum FilterEnums {
  byDate,
  byViews,
  byWords
}

interface FilterI {
  [FilterEnums.byDate]: boolean;
  [FilterEnums.byViews]: boolean;
  [FilterEnums.byWords]: boolean;
}

const initialFilterState: FilterI = {
  [FilterEnums.byDate]: false,
  [FilterEnums.byViews]: false,
  [FilterEnums.byWords]: false
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnDestroy {
  filterState: FilterI = initialFilterState;

  temp: string = '';

  dateFilter: boolean = false;

  viewsFilter: boolean = false;

  inputSub: Subscription;

  constructor(private dataService: AppService) {}

  filterByDate() {
    const currState: boolean = this.filterState[FilterEnums.byDate];
    this.filterState = { ...initialFilterState };
    this.filterState[FilterEnums.byDate] = !currState;
    this.dataService.reorderDataByDate(this.filterState[FilterEnums.byDate]);
  }

  filterByViews() {
    const currState: boolean = this.filterState[FilterEnums.byWords];
    this.filterState = { ...initialFilterState };
    this.filterState[FilterEnums.byViews] = !currState;
    this.dataService.reorderDataByViews(this.filterState[FilterEnums.byViews]);
  }

  turnOnFilterByWords() {
    const currState: boolean = this.filterState[FilterEnums.byWords];
    this.filterState = { ...initialFilterState };
    this.filterState[FilterEnums.byWords] = !currState;
  }

  filterByWords() {
    this.inputSub = of(this.temp).subscribe((val) => {
      this.dataService.filterData(val);
    });
    this.inputSub.unsubscribe();
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }
}
