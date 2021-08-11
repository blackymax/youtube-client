import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { SearchItemComponent } from '../../components/search-item/search-item.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchItemComponent
  ],
  providers: [AppService]
})
export class SearchResultsModule { }
