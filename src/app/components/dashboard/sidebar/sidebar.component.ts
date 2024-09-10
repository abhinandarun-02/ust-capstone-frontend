import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../types';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  navigationItems!: NavItem[]

  constructor(
    private auth: AuthService) { }

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'Home',
        href: 'home',
        icon: 'heroHomeSolid',
        disabled: false
      },
      {
        label: 'Services',
        href: '/services',
        icon: 'heroAdjustmentsHorizontalSolid',
        disabled: false
      }
    ]
  }

  logOut() {
    this.auth.logout();
  }

}
