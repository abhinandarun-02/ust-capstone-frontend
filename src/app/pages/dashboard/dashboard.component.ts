import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  dialogService = inject(DialogService)
  userService = inject(UserService)

  ngOnInit() {
    this.checkOnboardingStatus();
  }

  checkOnboardingStatus() {
    if (this.userService.isUserOnboarding()) {
      this.openRegisterDialog();
    }
  }

  openRegisterDialog() {
    this.dialogService.openOnboardingDialog({ disableClose: true });
  }


}
