import { Injectable } from '@angular/core';
import * as resp from '../../../assets/resp.json';
import { SearchResponseI } from '../search-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private data: SearchResponseI = resp;

  getData() {
    return this.data.items;
  }

  reorderDataByDate(state: boolean) {
    this.data.items = this.data.items.sort((a, b) => {
      const [old, next] = [
        new Date(a.snippet.publishedAt).getTime(),
        new Date(b.snippet.publishedAt).getTime()
      ];
      return state ? ((old - next) as number) : ((next - old) as number);
    });
  }

  reorderDataByViews(state: boolean) {
    this.data.items = this.data.items.sort((a, b) => {
      const [old, next] = [
        Number(a.statistics.viewCount),
        Number(b.statistics.viewCount)
      ];
      return state ? ((old - next) as number) : ((next - old) as number);
    });
  }
}
