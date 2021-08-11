import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { AppService } from '../../services/app.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchItemComponent
  ],
  providers: [AppService]
})
export class SearchResultsModule { }
