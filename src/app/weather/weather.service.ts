import { Injectable } from '@angular/core';
import {WEATHER_ITEMS} from "./weather-data";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
import { GetComponent } from '../get.component';

@Injectable()
export class WeatherService {
  getComponent: GetComponent;


  getWeatherItems() {
    return WEATHER_ITEMS;
  }
  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }
  constructor(private _http: Http) { }


  // showLocalWeather(): Observable<any> {
  //   return this._http.get('http://apidev.accuweather.com/locations/v1/cities/geoposition/search.json?q=40.59, -73.58&apikey=hoArfRosT1215')
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return  Observable.throw(error.json())
  //     });
  // }

  searchWeateherData(cityName: string): Observable<any> {
    return this._http.get('http://apidev.accuweather.com/locations/v1/search?q='+ cityName + '&apikey=hoArfRosT1215')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return  Observable.throw(error.json())
      });
  }


}
