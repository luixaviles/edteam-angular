import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable()
export class NasaApiService {

  private readonly DATA: Apod = {
    date: "2017-11-08",
    explanation: "What causes Hubble's Variable Nebula to vary? The unusual nebula featured here changes its appearance noticeably in just a few weeks. Discovered over 200 years ago and subsequently cataloged as NGC 2261, the remarkable nebula is named for Edwin Hubble, who studied it early last century. Fitting, perhaps, the featured image was taken by another namesake of Hubble: the Space Telescope. Hubble's Variable Nebula is a reflection nebula made of gas and fine dust fanning out from the star R Monocerotis. The faint nebula is about one light-year across and lies about 2500 light-years away towards the constellation of the Unicorn (Monocerotis). The leading variability explanation for Hubble's Variable Nebula holds that dense knots of opaque dust pass close to R Mon and cast moving shadows onto the reflecting dust seen in the rest of the nebula. Open Science: Browse 1,500+ codes in the Astrophysics Source Code Library",
    hdurl: "https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula_HubbleSchmidt_1507.jpg",
    media_type: "image",
    service_version: "v1",
    title: "NGC 2261: Hubble's Variable Nebula",
    url: "https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula_HubbleSchmidt_960.jpg"
  };

  constructor() { }

  getApod(): Apod {
    return this.DATA;
  }
}
