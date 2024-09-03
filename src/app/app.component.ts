import { Component } from '@angular/core';
import { WeatherForecast } from '../types';
import { WeatherforecastService } from './services/weatherforecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  forecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherforecastService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecast().
      subscribe({
        next: (data: WeatherForecast[]) => {
          this.forecasts = data;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        },
        complete: () => {
          console.log('Fetching Completed');
        }
      })
  }
}
