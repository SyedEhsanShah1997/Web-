import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsList = [
    { title: 'News Item 1', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'News Item 2', description: 'Consectetur adipiscing elit.' },
    { title: 'News Item 3', description: 'Integer molestie lorem at massa.' },
  ];
}
