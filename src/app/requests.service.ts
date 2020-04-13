import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }

  getData(url) {
    return this.httpClient.get(this.baseUrl + url);
  }

  // create(post){
  //   return this.httpClient.post(this.url, JSON.stringify(post));
  // }

}
