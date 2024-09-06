import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card-slider',
  templateUrl: './event-card-slider.component.html',
  styleUrl: './event-card-slider.component.css'
})
export class EventCardSliderComponent implements OnInit {

  eventCards = [1, 2, 3, 4, 5, 6, 7, 8]
  responsiveOptions: any[] | undefined;

  ngOnInit() {


    this.responsiveOptions = [
      {
        breakpoint: '1299px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
