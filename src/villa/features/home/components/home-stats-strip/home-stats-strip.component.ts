import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'villa-home-stats-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-stats-strip.component.html',
  styleUrls: ['./home-stats-strip.component.scss']
})
export class HomeStatsStripComponent {
  readonly stats = [
    {
      value: '10+',
      label: 'Years of Experience',
      iconPath:
        'M12 15.75l-3.09 1.624.59-3.441-2.5-2.437 3.454-.502L12 7.875l1.546 3.119 3.454.502-2.5 2.437.59 3.441L12 15.75z M7.5 21l4.5-2.25L16.5 21v-5.25 M5.25 10.5a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z'
    },
    {
      value: '500+',
      label: 'Projects Completed',
      iconPath:
        'M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1 M4 8h16 M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8 M9 12h6'
    },
    {
      value: '40+',
      label: 'Countries Served',
      iconPath:
        'M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8 M3.6 15h16.8 M12 3c2 2.2 3 5.2 3 9s-1 6.8-3 9 M12 3c-2 2.2-3 5.2-3 9s1 6.8 3 9'
    },
    {
      value: '100%',
      label: 'Client Satisfaction',
      iconPath:
        'M12 21a9 9 0 100-18 9 9 0 000 18z M8.5 10h.01 M15.5 10h.01 M8.75 14a4.25 4.25 0 006.5 0'
    }
  ];
}
