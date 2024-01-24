import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './templates/header/header.component';
import { HeroComponent } from './templates/hero/hero.component';
import {CompaniesComponent} from './companies/companies.component'
import { WhyUsComponent } from './templates/why-us/why-us.component';
import { TestimonyComponent } from './templates/testimony/testimony.component';
import { FAQComponent } from './templates/faq/faq.component';
import { TrialComponent } from './templates/trial/trial.component';
import { FooterComponent } from './templates/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeroComponent,
            CompaniesComponent,
            WhyUsComponent,
            TestimonyComponent,
            FAQComponent,
            TrialComponent,
            FooterComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clear';
}
