import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqright',
  standalone: true,
  imports: [],
  templateUrl: './faqright.component.html',
  styleUrl: './faqright.component.css',
})
export class FAQRightComponent implements OnInit {
  accordionItems: any[] = [];

  ngOnInit(): void {
    this.initializeAccordion();
  }

  toggleAccordion(item: any): void {
    const isExpanded = item.expanded;
    item.expanded = !isExpanded;
  }

  initializeAccordion(): void {
    this.accordionItems = [
      {
        heading: 'How many participants can join a ClearLink video conference?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: true,
      },
      {
        heading: 'Can I use ClearLink on multiple devices?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: false,
      },
      {
        heading:
          'Is ClearLink compatible with other video conferencing platforms?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: false,
      },
      {
        heading:
          'How does ClearLink ensure the security of my video conferences?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: false,
      },
      {
        heading: 'Do I need to download any software to use ClearLink?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: false,
      },
      {
        heading: 'What kind of customer support does ClearLink provide?',
        content:
          'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        expanded: false,
      },
    ];
  }
}
