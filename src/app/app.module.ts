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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LandingComponent,
    HeroComponent,
    EventCardComponent,
    EventCardSliderComponent
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
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
