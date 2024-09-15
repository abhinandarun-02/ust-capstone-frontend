import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../services/dialog.service';
import { WeddingService } from '../../../services/wedding.service';
import { CreateWedding } from '../../../create-models/create.wedding.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrl: './onboarding-form.component.css'
})
export class OnboardingFormComponent implements OnInit {
  onboardingForm!: FormGroup;

  private fb = inject(FormBuilder)
  private dialogService = inject(DialogService)
  private weddingService = inject(WeddingService)
  private authService = inject(AuthService)

  ngOnInit(): void {
    this.onboardingForm = this.fb.group({
      groomName: ['', Validators.required],
      brideName: ['', Validators.required],
      guestCount: ['', Validators.required],
      budget: [''],
      city: [''],
      country: [''],
      services: this.fb.group({
        photography: [false],
        catering: [false],
        venue: [false]
      })
    });
  }




  onSubmit() {

    if (this.onboardingForm.valid) {
      const formValue = this.onboardingForm.value;
      console.log(formValue);
      const tokenData = this.authService.decodeToken();
      const userId = tokenData?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || "";


      const wedding: CreateWedding = {
        name: `${formValue.groomName} and ${formValue.brideName}'s Wedding`,
        date: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000).toISOString(),
        guestCount: formValue.guestCount,
        budget: formValue.budget,
        location: formValue.city,
        plannerUsername: tokenData?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || "",
        plannerId: userId

      }

      this.weddingService.createWedding(wedding).subscribe({
        next: (response) => {
          console.log('POST request successful:', response);
          this.authService.commpleteOnboarding(userId).subscribe({
            next: (response) => {
              debugger;
              this.authService.storeToken(response.token);
            },
            error: (err) => {
              console.error('Error occurred during Onboarding Request:', err);

            }
          }
          );
          window.location.reload();

          this.dialogService.closeAllDialog()

        },
        error: (err) => {
          console.error('Error occurred during POST request:', err);
        }
      });
    }
  }
}
