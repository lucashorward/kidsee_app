import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseContentType } from '@angular/http';

@Injectable()
export class StreetViewServiceProvider {
  APIKey: string;
  constructor(
    public http: HttpClient
  ) {
    this.APIKey = "AIzaSyDYKpqwlUpEIDHY6dkUB7gwtsmgCbtXR8s";
  }

  getImage(address, imageWidth, imageHeight){
    return new Promise<Blob>(resolve => {
      this.http.get('https://maps.googleapis.com/maps/api/streetview?fov=110&size=' + imageWidth + 'x' + imageHeight + '&location=' + address+'&key=' + this.APIKey, { responseType: 'blob' }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
