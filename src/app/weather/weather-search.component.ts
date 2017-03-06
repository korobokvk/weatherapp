import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-weather-search',
  template: `
    <section>
        <form (ngSubmit)="OnSubmit(form)" #form="ngForm">
            <label for="city"></label>
            <input ngContol="location" type="text" id="city" required>
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

  onSubmit(form: CommonModule) {

  }
  constructor() { }

  ngOnInit() {
  }

}
