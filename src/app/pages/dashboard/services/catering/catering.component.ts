import { Component } from '@angular/core';
import { Service } from '../../../../components/products/service.model';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.css'
})
export class CateringComponent {
  cateringService!: Service

  constructor() {
    this.cateringService = {
      title: "Catering Booking",
      about: "Delight your guests with our top-notch catering services. Browse through our collection of caterers and filter by cuisine, availability, price, and more.",
      products: [
      {
        title: "Gourmet Delights",
        about: "Gourmet Delights is a premium catering service located in the city of Mumbai. They specialize in providing a wide range of cuisines to make your event memorable. Whether it's a wedding, corporate event, or a private party, Gourmet Delights ensures a culinary experience that your guests will cherish.",
        image: "/catering-1.webp",
        location: "Mumbai",
        price: 50000
      },
      {
        title: "Royal Feast Catering",
        about: "Royal Feast Catering is a renowned catering service based in Udaipur. They offer a diverse menu that caters to all tastes and preferences. From traditional Indian dishes to international cuisines, Royal Feast Catering provides an exquisite dining experience for your special occasions.",
        image: "/catering-2.webp",
        location: "Udaipur",
        price: 75000
      }
      ]
    }
  }
}

