import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

export interface PhotosApi {
      albumId?: number;
      id?: number;
      title?: string;
      url?: string;
      thumbnailUrl?: string;
  }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('swipper', { static: false }) swiper: SwiperComponent;
  apiData: PhotosApi;
  config: SwiperOptions;
  vistas: number = 0;
  limit: number = 20; // <==== Edit this number to limit API results

  constructor(
    private readonly http: HttpClient,
  ) {
    this.config = {
        preloadImages: false,
        lazy: true, // FIXME: It does not load lazy, only gives loader animation, see Network at Dev Tools
        effect: 'fade',
        loop: true, // FIXME: Loop not working with observable fetched data
        speed: 1000,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        on: {
          slideChange: () => {
            this.setViews();
          }
        }
      };
  }

  ngOnInit() {
    this.fetch();
  }

  setViews() {
    this.vistas++;
    console.log('Se han emitido ', this.vistas, 'vistas');
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = res,
      err => throwError(err)
    )
  }


}
 