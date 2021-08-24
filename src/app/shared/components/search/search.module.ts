import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { SearchResultsComponent } from '../../../youtube/pages/search-results/search-results.component';

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AppService]
})
export class SearchModule { }
