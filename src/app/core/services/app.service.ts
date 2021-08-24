/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  SearchResponseItemI,
  SearchResponseI,
  SearchResponseFirstI,
  SearchResI
} from '../../youtube/models/search-response.model';

const InitState: SearchResponseI = {
  kind: '',
  etag: '',
  pageInfo: {
    totalResults: 10,
    resultsPerPage: 10
  },
  items: []
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // eslint-disable-next-line max-len
  public data = new BehaviorSubject<SearchResponseI>(InitState);

  public req$: Observable<SearchResponseI> = this.data.asObservable();

  public requests = new BehaviorSubject<string>('a');

  public requests$: Observable<string> = this.requests.asObservable();

  public results = new BehaviorSubject<SearchResponseItemI[]>([]);

  public results$: Observable<SearchResponseItemI[]> =
  this.results.asObservable();

  public resultsSubs = new BehaviorSubject<SearchResI[]>([]);

  public resultsSubs$: Observable<SearchResI[]> =
  this.resultsSubs.asObservable();

  public searchString = new BehaviorSubject<string>('');

  public searchString$: Observable<string> = this.searchString.asObservable();

  public currentResults: SearchResponseItemI[];

  public user: string;

  private resultsSub: Subscription;

  private dataSub: Subscription;

  constructor(private router: Router, private http: HttpClient) {
    this.getResponse();
    this.searchString$.pipe(debounceTime(1000)).subscribe(() => {
      this.getResponse();
    });
    this.requests$.subscribe((data) => {
      this.http
        .get<SearchResponseI>(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics${
          data && `&id=${data}`
        }`
      )
        .subscribe((dat) => {
          this.results.next(dat.items);
        });
    });

    const us = localStorage.getItem('mail');
    if (us && localStorage.getItem('token')) {
      this.user = us;
    } else {
      this.user = 'user';
    }
  }

  getResponse() {
    return this.http
      .get<SearchResponseFirstI>(
      `https://www.googleapis.com/youtube/v3/search?part=snippet${
        this.searchString.value && `&q=${this.searchString.value}`
      }`
    )
      .subscribe((data: SearchResponseFirstI) => {
        const idArray = data.items.map((el) => el.id.videoId);
        this.resultsSubs.next(data.items);
        this.requests.next(idArray.join(','));
      });
  }

  getInputValue(x: string) {
    this.searchString.next(x);
  }

  // eslint-disable-next-line consistent-return
  getDataItemById(
    data: SearchResponseItemI[],
    id: string
  ): SearchResponseItemI | void {
    const find = data.find((el) => el.id === id);
    if (find) {
      return find;
    }
    this.router.navigate(['**']);
  }

  filterData(temp: string) {
    this.resultsSub = this.resultsSubs$.subscribe((data) => {
      const results = data.filter((el) => el.snippet.title.includes(temp));
      this.resultsSubs.next(results);
    });
    this.resultsSub.unsubscribe();
  }

  reorderDataByDate(state: boolean) {
    this.resultsSub = this.resultsSubs$.subscribe((data) => {
      const results = data.sort((a, b) => {
        const [old, next] = [
          new Date(a.snippet.publishedAt).getTime(),
          new Date(b.snippet.publishedAt).getTime()
        ];
        return state ? ((old - next) as number) : ((next - old) as number);
      });
      this.resultsSubs.next(results);
    });
    this.resultsSub.unsubscribe();
  }

  reorderDataByViews(state: boolean) {
    this.resultsSub = this.results$.subscribe((data) => {
      const results = data.sort((a, b) => {
        const [old, next] = [
          Number(a.statistics.viewCount),
          Number(b.statistics.viewCount)
        ];
        return state ? ((old - next) as number) : ((next - old) as number);
      });
      this.results.next(results);
    });
    this.resultsSub.unsubscribe();
  }
}
