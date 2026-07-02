import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'villa-login-right',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-right.component.html',
  styleUrls: ['./login-right.component.scss']
})
export class LoginRightComponent {
  constructor(private router: Router) {}

  onLoginClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/admin']);
  }
}
