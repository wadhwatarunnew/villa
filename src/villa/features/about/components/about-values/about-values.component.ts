import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AboutValue {
  title: string;
  description: string;
  icon: 'check' | 'pencil' | 'leaf' | 'users' | 'globe' | 'support';
}

@Component({
  selector: 'villa-about-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-values.component.html',
  styleUrls: ['./about-values.component.scss']
})
export class AboutValuesComponent {
  @Input() values: any = {};
  @Input() valuesInfo: any = {};
}
