import { Component, Input } from '@angular/core';

@Component({ selector: 'villa-tent-overview', standalone: true, templateUrl: './tent-overview.component.html' })
export class TentOverviewComponent { @Input({ required: true }) name = ''; }
