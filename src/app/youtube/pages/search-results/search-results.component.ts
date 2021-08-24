import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  SearchResI,
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

  presources: SearchResI[] = [];

  sourcesSub: SearchResI[] = [];

  subscription: Subscription;

  subscriptionSub: Subscription;

  constructor(public dataService: AppService) {}

  ngOnInit() {
    this.subscription = this.dataService.resultsSubs$.subscribe((data) => {
      this.presources = data;
    });
    this.subscriptionSub = this.dataService.results$.subscribe((data) => {
      this.sources = this.presources.map(
        (el, i) => ({
          ...el,
          statistics: data[i].statistics,
          id: el.id.videoId
        } as SearchResponseItemI)
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSub.unsubscribe();
  }
}
