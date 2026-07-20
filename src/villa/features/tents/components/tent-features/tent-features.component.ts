import { Component, Input } from '@angular/core';

@Component({ selector: 'villa-tent-features', standalone: true, templateUrl: './tent-features.component.html' })
export class TentFeaturesComponent { @Input({ required: true }) name = ''; }
