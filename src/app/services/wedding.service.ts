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

  getWeddingByPlannerId(plannerId: string) {
    const response = this.http.get<Wedding>(`${environment.eventUrl}/wedding/plannerId/${plannerId}`);
    return response;
  }

  bookVenue(weddingId: number, venueId: number) {
    const response = this.http.post<string>(`${environment.eventUrl}/services`, {
      "WeddingId": weddingId,
      "VenueId": venueId,
      "Type": "Venue"
    });
    return response;
  }

  bookPhotography(weddingId: number, photographyId: number) {
    const response = this.http.post<string>(`${environment.eventUrl}/services`, {
      "WeddingId": weddingId,
      "PhotographyId": photographyId,
      "Type": "Photography"
    });
    return response;
  }

  bookCatering(weddingId: number, cateringId: number) {
    const response = this.http.post<string>(`${environment.eventUrl}/services`, {
      "WeddingId": weddingId,
      "CateringId": cateringId,
      "Type": "Catering"
    });
    return response;
  }

}
