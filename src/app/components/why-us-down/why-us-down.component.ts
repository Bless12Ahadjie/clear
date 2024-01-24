import { Component } from '@angular/core';
import { WhyUsDownLeftComponent } from '../../why-us-down-left/why-us-down-left.component';
import { WhyUsDownRightComponent } from '../../why-us-down-right/why-us-down-right.component';

@Component({
  selector: 'app-why-us-down',
  standalone: true,
  imports: [WhyUsDownLeftComponent,WhyUsDownRightComponent],
  templateUrl: './why-us-down.component.html',
  styleUrl: './why-us-down.component.css'
})
export class WhyUsDownComponent {

}
