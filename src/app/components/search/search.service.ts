import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Bussiness } from './search.component';

Injectable({
 providedIn: 'root'
})
export class SearchService {
    bussinessSubject$ = new Subject<Bussiness[]>();
    result: Bussiness[] = [];

    constructor() { }

    listen(bussinessList) {

        bussinessList.forEach(element => {
            let bus = {
                country: element.country,
                description: element.description,
                id: element.id,
                location: `https://www.google.com/maps/@${element.latitude},${element.longitude},8z`,
                logo: element.logo,
                name:element.name
              }
              this.result.push(bus);
        });

        this.bussinessSubject$.next(this.result);
    }

}
