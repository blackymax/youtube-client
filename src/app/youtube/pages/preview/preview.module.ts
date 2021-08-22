import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/core/services/app.service';
import { PreviewRoutingModule } from './preview-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PreviewRoutingModule
  ],
  providers: [AppService]
})
export class PreviewModule { }
