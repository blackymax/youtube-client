import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { ItemI } from '../../models/search-response.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  id: string;

  data!: ItemI;

  date: Date;

  url: string;

  constructor(
    activatedRoute: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id') || '';
    this.data = this.appService.getDataItemById(this.id as string) as ItemI;
    this.date = new Date(this.data.snippet.publishedAt);
    this.url = `https://youtube.com/embed/${this.id}`;
  }
}
