import { Component, OnInit } from '@angular/core';
import { Bussiness } from '../search/search.component';
import { BussinesService } from './bussines.service';

@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.component.html',
  styleUrls: ['./bussines.component.css']
})
export class BussinesComponent implements OnInit {

  showInfo = false;
  selecterBussines: Bussiness;
  arr: Bussiness[] = [];

  constructor(private bussinesServices : BussinesService) { }

  ngOnInit(): void {
    this.bussinesServices.bussinesSubject$.subscribe(bus => {
      if(bus !== undefined) {
      this.selecterBussines = {
        name: bus.name,
        country: bus.country,
        description: bus.description,
        id: bus.id,
        location: bus.location,
        logo: bus.logo
      };
      this.arr.push(this.selecterBussines);
      this.showInfo = true;
      console.log(this.selecterBussines);
      }
    });
  }

}
