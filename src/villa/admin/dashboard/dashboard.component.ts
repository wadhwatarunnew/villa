import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DashboardCard {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}

@Component({
  selector: 'villa-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dashboardCards: DashboardCard[] = [
    { title: 'Total Tents', value: 24, icon: 'store', color: 'bg-blue-100' },
    { title: 'Active Bookings', value: 12, icon: 'calendar_today', color: 'bg-green-100' },
    { title: 'Total Customers', value: 156, icon: 'people', color: 'bg-purple-100' },
    { title: 'Revenue (Month)', value: '₹2,45,000', icon: 'trending_up', color: 'bg-amber-100' }
  ];

  recentBookings = [
    { id: 1, customer: 'John Doe', tent: 'Luxury Tent A', date: '2026-07-05', status: 'Confirmed' },
    { id: 2, customer: 'Jane Smith', tent: 'Standard Tent B', date: '2026-07-10', status: 'Pending' },
    { id: 3, customer: 'Michael Johnson', tent: 'Deluxe Tent C', date: '2026-07-15', status: 'Confirmed' }
  ];
}
