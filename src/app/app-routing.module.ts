import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { VenueComponent } from './pages/dashboard/services/venue/venue.component';
import { PhotographyComponent } from './pages/dashboard/services/photography/photography.component';
import { CateringComponent } from './pages/dashboard/services/catering/catering.component';
import { VenuePageComponent } from './pages/dashboard/vendor/venue/venue.component';
import { PhotographyPageComponent } from './pages/dashboard/vendor/photography/photography.component';
import { CateringPageComponent } from './pages/dashboard/vendor/catering/catering.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'services/venue',
        component: VenueComponent
      },
      {
        path: 'services/photography',
        component: PhotographyComponent
      },
      {
        path: 'services/catering',
        component: CateringComponent
      },
      {
        path: 'vendor/venue/:venueId',
        component: VenuePageComponent
      },
      {
        path: 'vendor/photography/:photographyId',
        component: PhotographyPageComponent
      },
      {
        path: 'vendor/catering/:cateringId',
        component: CateringPageComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }