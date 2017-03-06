import { Component, OnInit, Input } from '@angular/core';
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
            <span>{{weatherItem.temperature}} °C</span>
        </article>
        
  `,
  styles: [],

})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
}
