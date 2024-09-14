import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Venue } from "../models/venue.model";
import { Photography } from "../models/photography.model";
import { Catering } from "../models/catering.model";


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) {
  }

  getVenueVendors() {
    const response = this.http.get<Venue[]>(`${environment.eventUrl}/venues/`);
    return response;
  }

  getPhotographyVendors() {
    const response = this.http.get<Photography[]>(`${environment.eventUrl}/photographies/`);
    return response;
  }


  getCateringVendors() {
    const response = this.http.get<Catering[]>(`${environment.eventUrl}/caterings/`);
    return response;
  }
}
