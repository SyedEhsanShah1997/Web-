import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  getNews() {
    return [
      { title: 'News 1', description: 'This is the first news article.' },
      { title: 'News 2', description: 'Another update on recent events.' },
      { title: 'News 3', description: 'Important announcement for users.' },
    ];
  }
}
