import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
  venueService!: Service

  constructor() {
    this.venueService = {
      title: "Venue Booking",
      about: "Find and book the perfect venue for your wedding. Browse through our collection of venues and filter byavailability, price, and more.",
      products: [
        {
          title: "Giant Events India LLP",
          about: "Giant Events India LLP is a wedding venue located in the city of Mumbai. It is a beautiful venue to host any of your wedding functions. The first step to organising the wedding functions perfectly is to choose the right venue. If you are looking for a great venue to host your wedding functions, then Giant Events India LLP is the choice that you should definitely make. It is a one-stop destination for all your requirements for a good wedding venue. They will ensure to make your wedding grand, eventful and worth remembering a lifetime.",
          image: "/venue.webp",
          location: "Mumbai",
          price: 10000
        },
        {
          title: "The Leela Palace",
          about: "The Leela Palace is a wedding venue located in the city of Udaipur. It is a beautiful venue to host any of your wedding functions. The first step to organising the wedding functions perfectly is to choose the right venue. If you are looking for a great venue to host your wedding functions, then The Leela Palace is the choice that you should definitely make. It is a one-stop destination for all your requirements for a good wedding venue. They will ensure to make your wedding grand, eventful and worth remembering a lifetime.",
          image: "/venue.webp",
          location: "Udaipur",
          price: 20000
        }
      ]
    }
  }
}
