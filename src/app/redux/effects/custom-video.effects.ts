import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AppService } from 'src/app/core/services/app.service';

@Injectable({ providedIn: 'root' })
export class VideoEffects {
  constructor(private actions: Actions, private appService: AppService) {}
}
