import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  SearchResponseItemI
} from '../../models/search-response.model';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  sources: SearchResponseItemI[] = [];

  subscription: Subscription;

  subscriptionSub: Subscription;

  constructor(public dataService: AppService) {
  }

  ngOnInit() {
    this.subscription = this.dataService.results$.subscribe((data) => {
      this.sources = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
