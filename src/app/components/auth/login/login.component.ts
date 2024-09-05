import { Component } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private dialogService: DialogService) {}

  openRegisterDialog() {
    this.dialogService.openAuthDialog("register");
  }
}
