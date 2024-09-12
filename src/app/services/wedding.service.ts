import { inject, Injectable } from '@angular/core';
import { Wedding } from '../models/wedding.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateWedding } from '../create-models/create.wedding.model';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  constructor(private http: HttpClient) {
  }


  createWedding(wedding: CreateWedding) {
    const response = this.http.post<string>(`${environment.eventUrl}/wedding`, wedding);
    return response;
  }
}
