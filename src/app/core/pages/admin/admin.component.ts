import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { putVideoToStore } from 'src/app/redux/actions/custom-video.actions';
import { CustomVideo, ReduxState } from 'src/app/youtube/models/customs-video.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  titleName: string = '';

  description:string = '';

  imgSrc:string = '';

  videoSrc: string = '';

  constructor(private store: Store<ReduxState>, private route: Router) { }

  sendCardToStore() {
    const {
      titleName, description, imgSrc, videoSrc
    } = this;
    this.store.dispatch(putVideoToStore(
      {
        titleName,
        description,
        imgSrc,
        videoSrc
      } as CustomVideo
    ));
    this.route.navigate(['']);
  }
}
