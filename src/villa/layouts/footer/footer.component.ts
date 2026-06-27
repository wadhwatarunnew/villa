import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { heroEnvelopeSolid, heroMapPinSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'villa-footer',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly heroEnvelopeIcon = heroEnvelopeSolid;
  readonly heroPhoneIcon = heroPhoneSolid;
  readonly heroMapPinIcon = heroMapPinSolid;

  year = new Date().getFullYear();
}
