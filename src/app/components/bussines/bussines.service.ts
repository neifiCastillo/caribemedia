import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Bussiness } from '../search/search.component';

@Injectable({
  providedIn: 'root'
})
export class BussinesService {
   bussinesSubject$ = new Subject<any>();
   selectedBussiness: Bussiness;
  constructor() { }
    
   listen(bussines){
     this.bussinesSubject$.next(bussines);
     this.selectedBussiness = {
       country: bussines.country,
       description: bussines.description,
       id: bussines.id,
       location: bussines.location,
       logo: bussines.logo,
       name:bussines.name
     }
   }
}
