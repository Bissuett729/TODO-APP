import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private URLbase: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  methodGET(url: string) {
    return this.http.get(`${this.URLbase}${url}`);
  }

  methodPOST(url: string, data: any) {
    return this.http.post(`${this.URLbase}${url}`, data);
  }

  methodPATCH(url: string, data: any) {
    return this.http.patch(`${this.URLbase}${url}`, data);
  }

  methodDELETE(url: string) {
    return this.http.delete(`${this.URLbase}${url}`);
  }
}
