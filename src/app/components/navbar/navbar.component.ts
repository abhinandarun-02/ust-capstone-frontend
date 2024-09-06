import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  navItems: any[] = []

  userNavItems: MenuItem[] | undefined;

  ngOnInit() {

    this.navItems = [
      {
        name: 'Planning Tools',
        href: '/tools',
      },
      {
        name: 'Wedding Venues',
        href: '/venues',
      },
      {
        name: 'Wedding Vendors',
        href: '/vendors',
      },
      {
        name: 'Brides',
        href: '/brides',
      },
      {
        name: 'Grooms',
        href: '/grooms',
      },
      {
        name: 'Blogs',
        href: '/blogs',
      },
      {
        name: 'Community',
        href: '/community',
      },
    ]

    this.userNavItems = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus'
          },
          {
            label: 'Search',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
  }

}
