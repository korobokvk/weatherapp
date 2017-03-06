import { Component, OnInit } from '@angular/core';
import {WeatherItem} from "./weather-item";
import {WEATHER_ITEMS} from "./weather-data";
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-weather-list',
  template: `
    <p>
      <app-weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></app-weather-item>
    </p>
    
  `,
  styles: [],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit():any {
    this.weatherItems = this.weatherService.getWeatherItems();
  }
}
