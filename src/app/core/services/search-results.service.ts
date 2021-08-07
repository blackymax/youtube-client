import { Injectable } from '@angular/core';
import * as resp from '../../../assets/resp.json';
import {
  ItemI,
  SearchResponseI
} from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public data: SearchResponseI = resp;

  public results: ItemI[] = this.data.items;

  public user: string = 'user';

  getData() {
    return this.results;
  }

  getDataItemById(id: string) {
    const find = this.data.items.find((el) => el.id === id);
    return find as ItemI;
  }

  filterData(temp: string) {
    this.results = this.data.items.filter((el) => el.snippet.title.includes(temp));
    return this.results;
  }

  reorderDataByDate(state: boolean) {
    this.results = this.results.sort((a, b) => {
      const [old, next] = [
        new Date(a.snippet.publishedAt).getTime(),
        new Date(b.snippet.publishedAt).getTime()
      ];
      return state ? ((old - next) as number) : ((next - old) as number);
    });
  }

  reorderDataByViews(state: boolean) {
    this.results = this.results.sort((a, b) => {
      const [old, next] = [
        Number(a.statistics.viewCount),
        Number(b.statistics.viewCount)
      ];
      return state ? ((old - next) as number) : ((next - old) as number);
    });
  }
}
