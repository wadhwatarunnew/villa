import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-admin-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  adminName = 'Tarun Chouhan';
  adminRole = 'Administrator';
  isProfileMenuOpen = false;
  
  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  goToProfile(): void {
    // TODO: Navigate to profile page
    console.log('Go to profile');
    this.closeProfileMenu();
  }

  logout(): void {
    // TODO: Implement logout logic
    console.log('Logout clicked');
    this.closeProfileMenu();
  }
}
