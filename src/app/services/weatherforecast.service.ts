import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  baseApiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getWeatherForecast() : Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(`${this.baseApiUrl}/WeatherForecast`);

  }
}

