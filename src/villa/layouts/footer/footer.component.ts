import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
