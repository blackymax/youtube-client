import { createAction, props } from '@ngrx/store';
import { CustomVideo } from 'src/app/youtube/models/customs-video.model';

export const putVideoToStore = createAction(
  '[ADMIN PAGE] PUT VIDEO',
  props<CustomVideo>()
);
