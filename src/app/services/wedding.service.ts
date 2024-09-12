import { inject, Injectable } from '@angular/core';
import { Wedding } from '../models/wedding.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {
  private http = inject(HttpClient)

  async createWedding(wedding: Wedding) {
    const response = this.http.post<string>(`${environment.eventUrl}/wedding`, wedding);
    debugger
    return response;
  }
}
