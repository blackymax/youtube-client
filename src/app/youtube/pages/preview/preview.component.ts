import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../../../core/services/app.service';
import { SearchResponseItemI } from '../../models/search-response.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
  id: string;

  data: SearchResponseItemI | void;

  date: Date;

  url: string;

  subscription: Subscription;

  constructor(
    activatedRoute: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id') || '';
    this.url = `https://youtube.com/embed/${this.id}`;
  }

  ngOnInit() {
    this.subscription = this.appService.results$.subscribe((data) => {
      this.data = this.appService.getDataItemById(data, this.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
