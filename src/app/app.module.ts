import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButton } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MatDivider } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { HeroComponent } from './components/hero/hero.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventCardSliderComponent } from './components/event-card-slider/event-card-slider.component';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { DashboardNavbarComponent } from './components/dashboard/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroHomeSolid, heroUserSolid, heroAdjustmentsHorizontalSolid, heroArrowRightOnRectangleSolid } from '@ng-icons/heroicons/solid';
import { OnboardingFormComponent } from './components/dashboard/onboarding-form/onboarding-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent as DashboardLoginComponent } from './pages/login/login.component';
import { RegisterComponent as DashboardRegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { VenueComponent } from './pages/dashboard/services/venue/venue.component';
import { PhotographyComponent } from './pages/dashboard/services/photography/photography.component';
import { CateringComponent } from './pages/dashboard/services/catering/catering.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LandingComponent,
    HeroComponent,
    EventCardComponent,
    EventCardSliderComponent,
    DashboardComponent,
    SidebarComponent,
    DashboardNavbarComponent,
    OnboardingFormComponent,
    DashboardLoginComponent,
    DashboardRegisterComponent,
    HomeComponent,
    ProductsComponent,
    VenueComponent,
    PhotographyComponent,
    CateringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatDivider,
    MatIcon,
    CarouselModule,
    AvatarModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroHomeSolid, heroUserSolid, heroAdjustmentsHorizontalSolid, heroArrowRightOnRectangleSolid }),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
