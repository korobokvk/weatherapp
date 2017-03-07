import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'

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

  OnSubmit() {

    let title = this.newWeatherTitle;
    console.log(title);
    this.newWeatherTitle = '';

  }
  constructor() { }

  ngOnInit() {
  }

}
