import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class DashboardNavbarComponent {
  private authService = inject(AuthService);

  getUserDetails() {
    return this.authService.getUserClaims()
  }
}
