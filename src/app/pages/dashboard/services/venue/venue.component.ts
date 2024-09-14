import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
  venueService!: Service

  selectedSortOption: string | undefined = "Name, ASC";

  constructor() {
    this.venueService = {
      title: "Venue Booking",
      about: "Find and book the perfect venue for your wedding. Browse through our collection of venues and filter by availability, price, and more.",
      products: [
        {
          name: "Grand Ballroom",
          price: 8000.0,
          location: "New York",
          about: "A luxurious venue with a grand view and ample space.",
          rating: 4.9,
          tier: "Luxury",
          contact: "contact@grandballroom.com",
          capacity: 500,
          address: "123 Grand Ave, New York, NY"
        },
        {
          name: "Ocean View Resort",
          price: 6000.0,
          location: "Miami",
          about: "Beautiful beachside venue with stunning ocean views.",
          rating: 4.7,
          tier: "Premium",
          contact: "info@oceanviewresort.com",
          capacity: 300,
          address: "456 Beach Blvd, Miami, FL"
        },
        {
          name: "Elegant Gardens",
          price: 5500.0,
          location: "San Francisco",
          about: "A picturesque garden venue perfect for outdoor weddings.",
          rating: 4.8,
          tier: "Premium",
          contact: "contact@elegantgardens.com",
          capacity: 250,
          address: "789 Garden St, San Francisco, CA"
        },
        {
          name: "Modern Loft",
          price: 4000.0,
          location: "Chicago",
          about: "A chic, modern space for urban weddings.",
          rating: 4.6,
          tier: "Standard",
          contact: "info@modernloft.com",
          capacity: 150,
          address: "101 Loft Lane, Chicago, IL"
        }
      ]
    }
  }

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.venueService.products.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}
