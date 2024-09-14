import { Component, inject, OnInit } from '@angular/core';
import { Venue } from '../../../../models/venue.model';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../services/vendor.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenuePageComponent implements OnInit {

  venue!: Venue;

  isExpanded: boolean = true;

  private venueService = inject(VendorService);

  constructor(private route: ActivatedRoute, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const venueId = this.route.snapshot.paramMap.get('venueId');
    if (venueId) {

      this.venueService.getVenueById(parseInt(venueId)).subscribe({
        next: (venue) => {
          this.venue = venue;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to book this venue?',
      accept: () => {

      }
    });
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }

}
