import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) {
  }

  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
        setTimeout(() => {
          this.apod = data;
        }, 2000);
      }, error => {
        setTimeout(() => {
          console.log('Error al conectar con el Servidor');
          this.error = 'Error al conectar con el Servidor';
        }, 2000);
      });
  }

}
