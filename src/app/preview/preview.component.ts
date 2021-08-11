import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemI } from '../search/search-response.model';
import { SearchResultsService } from '../search/search-results/search-results.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  id: string;

  data: ItemI;

  date: Date;

  url: string;

  constructor(activatedRoute: ActivatedRoute, private appService: SearchResultsService) {
    this.id = activatedRoute.snapshot.paramMap.get('id') || '';
    this.data = this.appService.getDataItemById(this.id as string);
    this.date = new Date(this.data.snippet.publishedAt);
    this.url = `https://youtube.com/embed/${this.id}`;
  }
}
