import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { weatherObject } from '../models/weather.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  retrieveWeatherData(city:string):Observable<weatherObject>{
    return this.http.get<weatherObject>(environment.weatherApiUrl,{
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHeaderName,environment.XRapidAPIHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q',city)
      .set('days',1)
      .set('lang','eng')
    })
  }
}
