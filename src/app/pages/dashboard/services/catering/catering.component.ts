import { Component, inject } from '@angular/core';
import { Service } from '../../../../components/products/service.model';
import { Catering } from '../../../../models/catering.model';
import { VendorService } from '../../../../services/vendor.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.css'
})
export class CateringComponent {
  caterings!: Catering[]

  vendorService = inject(VendorService);

  selectedSortOption: string | undefined = "Name, ASC";

  ngOnInit(): void {
    this.vendorService.getCateringVendors().subscribe({
      next: (response) => {
        this.caterings = response;
      },
      error: (err) => {
        console.error('Error occurred during GET request:', err);
      }
    });
  }

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.caterings.sort((a, b) => {
      const compare = (key === 'Name' ? a.name.localeCompare(b.name) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}

