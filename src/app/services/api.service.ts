import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) {
   }

   url ='https://5fcfc9341f23740016630db3.mockapi.io/api/v1/business';

getBunises(){
  return this.http.get(this.url);
}



}