import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../services/vendor.service';
import { Photography } from '../../../../models/photography.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyPageComponent implements OnInit {
  photography!: Photography;

  isExpanded: boolean = true;

  private photographyService = inject(VendorService);

  constructor(private route: ActivatedRoute, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const photographyId = this.route.snapshot.paramMap.get('photographyId');
    if (photographyId) {

      this.photographyService.getPhotographyById(parseInt(photographyId)).subscribe({
        next: (photography) => {
          this.photography = photography;
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
