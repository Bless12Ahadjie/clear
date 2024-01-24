import { Component } from '@angular/core';
import { HeroLeftComponent } from '../../components/hero-left/hero-left.component';
import { HeroRightComponent } from '../../components/hero-right/hero-right.component';
import { truncate } from 'fs';
import { HeaderComponent } from '../header/header.component';
import { BackgroundComponent } from '../../background/background.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroLeftComponent,HeroRightComponent,HeaderComponent,BackgroundComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
