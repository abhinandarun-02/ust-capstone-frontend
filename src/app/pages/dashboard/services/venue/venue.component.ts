import { Component, inject, OnInit } from '@angular/core';
import { Venue } from '../../../../models/venue.model';
import { VendorService } from '../../../../services/vendor.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent implements OnInit {
  venues!: Venue[]
  vendorService = inject(VendorService);

  selectedSortOption: string | undefined = "Name, ASC";

  ngOnInit(): void {
    this.vendorService.getVenueVendors().subscribe({
      next: (response) => {
        this.venues = response;
      },
      error: (err) => {
        console.error('Error occurred during GET request:', err);
      }
    });
  }

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.venues.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}
