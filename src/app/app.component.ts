import { Component, OnInit } from '@angular/core';
import { weatherObject } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private WeatherService :WeatherService ){

  }

  cityName:string = 'Enugu';
  weatherData?:weatherObject ;

ngOnInit(): void {
  this.retrieveWeatherInfo(this.cityName);
  this.cityName = '';
  }
  onSubmit(){
    this.retrieveWeatherInfo(this.cityName);
    this.cityName = '';
  }
  private retrieveWeatherInfo(cityName:string){
    this.WeatherService.retrieveWeatherData(cityName)
    .subscribe({
       next:(response)=>{
       this.weatherData = response;
       console.log(this.weatherData);
    }
  })
  }
}
