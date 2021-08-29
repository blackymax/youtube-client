import { ActionCreator, createReducer, on } from '@ngrx/store';
import { CustomVideo } from 'src/app/youtube/models/customs-video.model';
import { putVideoToStore } from '../actions/custom-video.actions';

export const initReduxState: CustomVideo[] = [];

export const customVidReducer = createReducer(
  initReduxState,
  on(putVideoToStore, (state, customVideo) => [...state, customVideo])
);

export function customVideoReducer(state: CustomVideo[], action: ActionCreator) {
  return customVidReducer(state, action);
}
