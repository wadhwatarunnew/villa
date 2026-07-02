import { Component } from '@angular/core';
import { LoginLeftComponent, LoginRightComponent } from '../../components';

@Component({
  selector: 'villa-login-page',
  standalone: true,
  imports: [LoginLeftComponent, LoginRightComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {}
