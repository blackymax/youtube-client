import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchResponseItemI } from '../../models/search-response.model';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  sources: SearchResponseItemI[] = [];

  sourcesSub: SearchResponseItemI[] = [];

  subscription: Subscription;

  subscriptionSub: Subscription;

  constructor(public dataService: AppService) {
    // this.subscription = this.dataService.req$.subscribe((data) => {
    //   this.sources = this.dataService.getDataItems(data);
    // });
  }

  ngOnInit() {
    this.subscription = this.dataService.results$.subscribe((data) => {
      this.sources = data;
    });
    this.subscriptionSub = this.dataService.resultsSubs$.subscribe((data) => {
      this.sourcesSub = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
