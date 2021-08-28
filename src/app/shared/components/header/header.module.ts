import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [CommonModule],
  providers: [AuthService]
})
export class HeaderModule {}
