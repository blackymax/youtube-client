import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  SearchResponseItemI
} from '../../models/search-response.model';
import { AppService } from '../../../core/services/app.service';
import { CustomVideo, ReduxState } from '../../models/customs-video.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  sources: SearchResponseItemI[];

  subSources: CustomVideo[];

  subscription: Subscription;

  subscriptionSub: Subscription;

  constructor(public dataService: AppService, public store: Store<ReduxState>) {
  }

  ngOnInit() {
    this.subscription = this.dataService.results$.subscribe((data) => {
      this.sources = data;
    });
    this.subscriptionSub = this.store.subscribe((data) => {
      this.subSources = data.customVideos;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
