import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private payloadData: any;

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

  decodeToken() {
    const token = this.getToken()!;
    const jwthelper = new JwtHelperService();
    console.log(jwthelper.decodeToken(token));
    return jwthelper.decodeToken(token);
  }

  getUserDetails(): any {
    
  }
}
