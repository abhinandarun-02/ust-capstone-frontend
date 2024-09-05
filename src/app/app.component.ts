import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'event-planner';

  constructor(private dialogService: DialogService) {}

  openRegisterDialog() {
    this.dialogService.openAuthDialog("register");
  }

  openLoginDialog() {
    this.dialogService.openAuthDialog("login");
  }
}
