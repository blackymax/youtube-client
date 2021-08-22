import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';

import { SearchResponseItemI } from '../../models/search-response.model';

@Component({
  selector: 'app-search-item',

  templateUrl: './search-item.component.html',

  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() data: SearchResponseItemI;

  sourcesSub: SearchResponseItemI[] = [];

  subscriptionSub: Subscription;

  dataCurrent: any;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.subscriptionSub = this.appService.resultsSubs$.subscribe((data) => {
      this.sourcesSub = data;
    });
    this.dataCurrent = this.sourcesSub.find((el) => el.id === this.data.id);
  }
}
