import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Bussiness } from './search.component';

Injectable({
 providedIn: 'root'
})
export class SearchService {
    bussinessSubject$ = new Subject<Bussiness[]>();

    constructor() { }

    listen(bussinessList: Bussiness[]) {
        this.bussinessSubject$.next(bussinessList);
    }

}
