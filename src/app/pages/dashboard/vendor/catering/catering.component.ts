import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../services/vendor.service';
import { Catering } from '../../../../models/catering.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.css'
})
export class CateringPageComponent implements OnInit {
  catering!: Catering;

  isExpanded: boolean = true;

  private cateringService = inject(VendorService);

  constructor(private route: ActivatedRoute, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const cateringId = this.route.snapshot.paramMap.get('cateringId');
    if (cateringId) {

      this.cateringService.getCateringById(parseInt(cateringId)).subscribe({
        next: (catering) => {
          this.catering = catering;
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
