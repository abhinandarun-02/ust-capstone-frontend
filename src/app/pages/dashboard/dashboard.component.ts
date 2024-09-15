import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  dialogService = inject(DialogService)
  authService = inject(AuthService)

  ngOnInit() {
    this.checkOnboardingStatus();
  }

  checkOnboardingStatus() {
    if (this.authService.isUserOnboarding()) {
      this.openRegisterDialog();
    }
  }

  openRegisterDialog() {
    this.dialogService.openOnboardingDialog({ disableClose: true });
  }


}
