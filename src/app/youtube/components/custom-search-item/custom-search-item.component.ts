import { Component, Input } from '@angular/core';
import { CustomVideo } from '../../models/customs-video.model';

@Component({
  selector: 'app-custom-search-item',

  templateUrl: './custom-search-item.component.html',

  styleUrls: ['./custom-search-item.component.scss']
})
export class CustomSearchItemComponent {
  @Input() data: CustomVideo;

  date: Date = new Date();
}
