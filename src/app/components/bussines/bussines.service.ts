import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BussinesService {
   bussinesSubject$ = new Subject<any>();
  constructor() { }
    
   listen(bussines){
     this.bussinesSubject$.next(bussines);

   }
}
