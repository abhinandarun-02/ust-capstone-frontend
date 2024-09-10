import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { OnboardingFormComponent } from '../components/dashboard/onboarding-form/onboarding-form.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private dialog: MatDialog) { }

  openAuthDialog(dialogType: 'register' | 'login') {
    this.dialog.closeAll();

    if (dialogType === 'register') {
      this.dialog.open(RegisterComponent, {
        width: '400px'
      });
    }
    else {
      this.dialog.open(LoginComponent, {
        width: '400px'
      });
    }
  }

  openOnboardingDialog(config?: MatDialogConfig) {
    this.dialog.closeAll();

    this.dialog.open(OnboardingFormComponent, {
      width: '100%',
      maxWidth: '950px',
      ...config
    })
  }

  closeAllDialog(){
    this.dialog.closeAll();
  }

}
