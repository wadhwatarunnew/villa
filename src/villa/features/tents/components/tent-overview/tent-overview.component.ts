import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
            selector: 'villa-tent-overview',
            standalone: true,
            imports: [CommonModule],
            templateUrl: './tent-overview.component.html' 
        })

export class TentOverviewComponent {
    @Input({ required: true }) name = '';
    @Input({ required: true }) floorImage = '';
    @Input() tentDetails: any = {};
}
