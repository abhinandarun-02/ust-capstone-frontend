import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrl: './onboarding-form.component.css'
})
export class OnboardingFormComponent implements OnInit {
  onboardingForm!: FormGroup;

  private fb = inject(FormBuilder)
  private userService = inject(UserService)
  private dialogService = inject(DialogService)

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

  onSubmit(): void {
    if (this.onboardingForm.valid) {
      console.log(this.onboardingForm.value);
      this.userService.setUserOnboardingStatus(false)
      this.dialogService.closeAllDialog();
    }
  }
}
