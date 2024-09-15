import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { JwtClaim } from '../models/jwtClaim.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private payloadData: JwtClaim | null;

  constructor(private http: HttpClient, private router: Router) {
    this.payloadData = this.decodeToken();
  }

  register(user: User): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, user);
  }

  login(Email: string, Password: string): Observable<any> {
    console.log({ Email, Password });
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { Email, Password });
  }

  isUserOnboarding(): boolean {
    const token = this.decodeToken()
    const onboardingStatus = token?.isNewUser;

    if (!onboardingStatus) return true;

    return onboardingStatus === 'True';
  }

  commpleteOnboarding(userId: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/complete-onboarding`, { userId });
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.payloadData = null;
    this.router.navigate(['login']);
  }

  decodeToken(): JwtClaim | null {
    const token = this.getToken();
    if (!token) return null;
    const jwthelper = new JwtHelperService();
    console.log(jwthelper.decodeToken(token));
    return jwthelper.decodeToken(token);
  }

  getUserClaims() {
    return this.payloadData;
  }

  getUserId() {
    return this.payloadData?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }
}
