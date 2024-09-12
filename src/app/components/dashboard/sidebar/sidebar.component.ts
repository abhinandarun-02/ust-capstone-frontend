import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../types';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  navigationItems!: NavItem[]

  constructor(
    private auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'Home',
        href: '/dashboard',
        icon: 'heroHomeSolid',
        disabled: false
      },
      {
        label: 'Services',
        disabled: false,
        href: 'services',
        icon: 'heroAdjustmentsHorizontalSolid',
        subItems: [
          {
            label: 'Venue',
            disabled: false,
            href: 'services/venue',
            icon: 'heroLocationSolid'
          },
          {
            label: 'Photography',
            disabled: false,
            href: 'services/photography',
            icon: 'heroLocationSolid'
          }, {
            label: 'Catering',
            disabled: false,
            href: 'services/catering',
            icon: 'heroLocationSolid'
          }
        ]
      }
    ]
  }

  logOut() {
    this.auth.logout();
  }

}
