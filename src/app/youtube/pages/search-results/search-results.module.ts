import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { SearchResultsRoutingModule } from './search-results-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchResultsRoutingModule
  ],
  providers: [AppService]
})
export class SearchResultsModule { }
