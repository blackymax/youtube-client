import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { ItemI } from '../../models/search-response.model';

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

  constructor(activatedRoute: ActivatedRoute, private appService: AppService) {
    this.id = activatedRoute.snapshot.paramMap.get('id') || '';
    this.data = this.appService.getDataItemById(this.id as string);
    this.date = new Date(this.data.snippet.publishedAt);
    this.url = `https://youtube.com/embed/${this.id}`;
  }
}
