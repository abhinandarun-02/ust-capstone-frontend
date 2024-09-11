import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  photographyService!: Service

  constructor() {
    this.photographyService = {
      title: "Photography Booking",
      about: "Capture your special moments with our professional photography services. Browse through our collection of photographers and filter by availability, price, and more.",
      products: [
        {
          title: "Shutterbug Studios",
          about: "Shutterbug Studios is a professional photography service located in the city of Mumbai. They specialize in capturing the essence of your wedding with stunning visuals. If you are looking for a great photography service to capture your wedding moments, then Shutterbug Studios is the choice that you should definitely make. They will ensure to make your wedding memories grand, eventful, and worth remembering a lifetime.",
          image: "/photography-1.webp",
          location: "Mumbai",
          price: 15000
        },
        {
          title: "Lens Queen Photography",
          about: "Lens Queen Photography is a professional photography service located in the city of Udaipur. They specialize in capturing the essence of your wedding with stunning visuals. If you are looking for a great photography service to capture your wedding moments, then Lens Queen Photography is the choice that you should definitely make. They will ensure to make your wedding memories grand, eventful, and worth remembering a lifetime.",
          image: "/photography-2.webp",
          location: "Udaipur",
          price: 25000
        }
      ]
    }
  }
}
