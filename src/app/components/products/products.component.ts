import { Component, Input } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  @Input({ required: true }) service!: Service;

  selectedSortOption: string | undefined = "Name, ASC";

  sortProducts() {
    if (!this.selectedSortOption) return;
    const [key, order] = this.selectedSortOption.split(', ');

    this.service.products.sort((a, b) => {
      const compare = (key === 'Name' ? a.title.localeCompare(b.title) : a.price - b.price);
      return order === 'ASC' ? compare : -compare;
    });
  }
}
