import { Component } from '@angular/core';
import { FAQLeftComponent } from '../../components/faqleft/faqleft.component';
import { FAQRightComponent } from '../../components/faqright/faqright.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FAQLeftComponent,FAQRightComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {

}
