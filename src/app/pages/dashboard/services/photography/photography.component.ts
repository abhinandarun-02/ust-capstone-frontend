import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  photographyService!: Service

  selectedSortOption: string | undefined = "Name, ASC";

  constructor() {
    this.photographyService = {
      title: "Photography Booking",
      about: "Capture your special moments with our professional photography services. Browse through our collection of photographers and filter by availability, price, and more.",
      products: [
        {
          name: "PhotoMagic Studios",
          price: 2500.0,
          location: "Los Angeles",
          about: "Specializing in wedding photography with a magical touch.",
          rating: 4.9,
          tier: "Luxury",
          contact: "contact@photomagic.com",
          details: "Full-day coverage, digital album, and prints"
        },
        {
          name: "Event Snapshots",
          price: 1800.0,
          location: "New York",
          about: "Capturing the essence of every event.",
          rating: 4.7,
          tier: "Standard",
          contact: "info@eventsnapshots.com",
          details: "Half-day coverage, digital photos"
        },
        {
          name: "Memorable Moments",
          price: 2200.0,
          location: "Miami",
          about: "High-quality photography with creative styles.",
          rating: 4.8,
          tier: "Luxury",
          contact: "contact@memorablemoments.com",
          details: "Full-day coverage, digital and printed photos"
        },
        {
          name: "Capture All",
          price: 1500.0,
          location: "San Francisco",
          about: "Affordable and reliable photography services.",
          rating: 4.5,
          tier: "Standard",
          contact: "info@captureall.com",
          details: "Basic coverage with digital photos"
        }

      ]
    }
  }

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.photographyService.products.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}
