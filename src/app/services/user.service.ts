import { inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserOnboarding(): boolean {
    const onboardingStatus = localStorage.getItem('isOnboarding');

    if (onboardingStatus === null) {
      return true;
    }

    return onboardingStatus === 'true';
  }

  setUserOnboardingStatus(status: boolean): void {
    localStorage.setItem('isOnboarding', status.toString());
  }

}