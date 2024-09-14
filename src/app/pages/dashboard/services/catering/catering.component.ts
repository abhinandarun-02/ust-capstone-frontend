import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.css'
})
export class CateringComponent {
  cateringService!: Service

  selectedSortOption: string | undefined = "Name, ASC";

  constructor() {
    this.cateringService = {
      title: "Catering Booking",
      about: "Delight your guests with our top-notch catering services. Browse through our collection of caterers and filter by cuisine, availability, price, and more.",
      products: [
        {
          name: "Gourmet Delights",
          price: 1500.0,
          location: "New York",
          about: "High-end catering service with gourmet options.",
          rating: 4.5,
          tier: "Premium",
          contact: "info@gourmetdelights.com",
          details: "Italian, Mexican, and American cuisine"
        },
        {
          name: "Green Bites",
          price: 1200.0,
          location: "San Francisco",
          about: "Specializes in vegetarian and vegan meals.",
          rating: 4.8,
          tier: "Standard",
          contact: "contact@greenbites.com",
          details: "Vegan salads, wraps, and smoothies"
        },
        {
          name: "Classic Feasts",
          price: 1800.0,
          location: "Chicago",
          about: "Classic catering with a wide range of dishes.",
          rating: 4.6,
          tier: "Standard",
          contact: "hello@classicfeasts.com",
          details: "American BBQ, salads, and desserts"
        },
        {
          name: "Elegant Events",
          price: 2000.0,
          location: "Los Angeles",
          about: "Elegant catering for sophisticated events.",
          rating: 4.9,
          tier: "Luxury",
          contact: "info@elegantevents.com",
          details: "French cuisine and gourmet options"
        }
      ]
    }
  }

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.cateringService.products.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}

