import { Component } from '@angular/core';
import {card} from './card.interface'

@Component({
  selector: 'app-why-us-down-left',
  standalone: true,
  imports: [],
  templateUrl: './why-us-down-left.component.html',
  styleUrl: './why-us-down-left.component.css'
})
export class WhyUsDownLeftComponent {
 cardtop:card[] =[
  {
    icon: '../../../assets/icon1.svg',
    head:'Crystal-clear HD video',
    sub:'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.'

  },
  {
    icon: '../../../assets/icon2.svg',
    head:'Noise-canceling audio',
    sub:'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.'
  }
 ]

 carddown:card[]=[
  {
    icon: '../../../assets/icon3.svg',
    head:'Scheduling made easy',
    sub:"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: '../../../assets/icon4.svg',
    head:'Bank-grade security',
    sub:'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.'
  }
 ]

}
