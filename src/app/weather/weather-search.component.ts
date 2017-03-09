import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import {WeatherItem} from "./weather-item";

@Component({
  selector: 'app-weather-search',
  template: `
    <section>
        <form (ngSubmit)="OnSubmit(); weatherForm.reset()" #weatherForm="ngForm">
            <label for="city"></label>
            <input  type="text" [(ngModel)]="newWeatherTitle" id="city" name="location" required>
            <button type="submit">Add City</button>
        </form>
        <div class="">
            <span>City found</span> City name
        </div>
    </section>
  `,
  styles: []
})
export class WeatherSearchComponent implements OnInit {
  newWeatherTitle = '';

  constructor(private _weatherService: WeatherService ) { }

  OnSubmit() {
    let title = this.newWeatherTitle;
    this._weatherService.searchWeateherData(title)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data[0].Key, data[0].description, data[0].GmtOffset);
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
    this.newWeatherTitle = '';

  }

  ngOnInit() {
  }

}
