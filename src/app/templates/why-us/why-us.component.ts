import { Component } from '@angular/core';
import { WhyUsTopComponent } from '../../components/why-us-top/why-us-top.component';
import { WhyUsDownComponent } from '../../components/why-us-down/why-us-down.component';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [WhyUsTopComponent,WhyUsDownComponent],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {

}
