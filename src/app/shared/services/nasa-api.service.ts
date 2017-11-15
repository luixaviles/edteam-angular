import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY'

@Injectable()
export class NasaApiService {
  // Dependency Injection: HttpClient
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    // return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    // Template literals: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }
}
