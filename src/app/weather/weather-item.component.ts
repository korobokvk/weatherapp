import { Component, OnInit } from '@angular/core';
import {WeatherItem} from "./weather-item";

@Component({
  selector: 'app-weather-item',
  template: `
        <article>
          <div>
              <h3>{{weatherItem.cityName}}</h3>
          </div>
          <div class="">
            <p>{{weatherItem.description}}</p>
           </div>
            <span>{{weatherItem.temperature}}</span>
        </article>
        
  `,
  styles: []
})
export class WeatherItemComponent {
  weatherItem: WeatherItem;
  constructor() {
    this.weatherItem = new WeatherItem('Odessa', 'Clods',37)
  }



}
