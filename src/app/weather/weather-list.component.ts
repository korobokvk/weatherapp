import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  template: `
    <p>
      <app-weather-item></app-weather-item>
    </p>
    
  `,
  styles: []
})
export class WeatherListComponent {

  constructor() { }

}
