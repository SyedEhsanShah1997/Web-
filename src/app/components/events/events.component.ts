import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  events = [
    { name: 'Event A', date: '2025-08-15', location: 'Venue 1' },
    { name: 'Event B', date: '2025-08-22', location: 'Venue 2' },
    { name: 'Event C', date: '2025-09-01', location: 'Venue 3' },
  ];
}
