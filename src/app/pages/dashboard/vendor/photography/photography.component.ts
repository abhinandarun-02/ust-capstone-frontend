import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../services/vendor.service';
import { Photography } from '../../../../models/photography.model';
import { ConfirmationService } from 'primeng/api';
import { WeddingService } from '../../../../services/wedding.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyPageComponent implements OnInit {
  photography!: Photography;

  isExpanded: boolean = true;

  private photographyService = inject(VendorService);
  private authService = inject(AuthService);
  private weddingService = inject(WeddingService);

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
      message: 'Are you sure you want to book this Photography?',
      accept: () => {
        let userId = this.authService.getUserId();
        if (!userId) {
          return;
        }

        this.weddingService.getWeddingByPlannerId(userId).subscribe({
          next: (wedding) => {
            let weddingId = wedding.id;
            if (!weddingId) {
              return;
            }

            this.weddingService.bookPhotography(weddingId, this.photography.id).subscribe({
              next: (response) => {
                console.log(response);
              },
              error: (error) => {
                console.error(error);
              }
            });
          },
          error: (error) => {
            console.error(error);
          }
        });
      }
    });
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}
