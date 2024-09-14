import { Component, inject } from '@angular/core';
import { VendorService } from '../../../../services/vendor.service';
import { Photography } from '../../../../models/photography.model';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  photographies!: Photography[]
  vendorService = inject(VendorService);

  selectedSortOption: string | undefined = "Name, ASC";

  ngOnInit(): void {
    this.vendorService.getPhotographyVendors().subscribe({
      next: (response) => {
        this.photographies = response;
      },
      error: (err) => {
        console.error('Error occurred during GET request:', err);
      }
    });
  }
  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.photographies.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}
