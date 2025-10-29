import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsList: any[] = [];
  currentSlide = 0;
  intervalId: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.newsList.length;
    clearInterval(this.intervalId); // Reset interval on manual click
    this.startAutoSlide(); // Restart auto-slide
  }
}
