import { Component } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private dialogService: DialogService) {}

  openLoginDialog() {
    this.dialogService.openAuthDialog("login");
  }
}
