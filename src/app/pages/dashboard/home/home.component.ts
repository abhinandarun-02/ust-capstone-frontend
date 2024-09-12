import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data = {
    labels: [
      'Venue',
      'Photography',
      'Catering'
    ],
    datasets: [{
      label: 'Budget',
      data: [50000, 20000, 32000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
}
