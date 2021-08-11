import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchResultsService } from './search-results.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchItemComponent
  ],
  providers: [SearchResultsService]
})
export class SearchResultsModule { }
