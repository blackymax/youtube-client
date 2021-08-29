export interface ReduxState {
  customVideos: CustomVideo[];
}

export interface CustomVideo {
  titleName: string;
  description: string;
  imgSrc: string;
  videoSrc: string;
}

export class CustomVideoItem implements CustomVideo {
  constructor(
    public titleName: string = '',
    public description: string = '',
    public imgSrc: string = '',
    public videoSrc: string = ''
  ) {}
}
