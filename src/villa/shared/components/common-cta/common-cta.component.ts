import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-common-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './common-cta.component.html',
  styleUrls: ['./common-cta.component.scss']
})
export class CommonCtaComponent {}
