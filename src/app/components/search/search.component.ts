import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { BussinesService } from '../bussines/bussines.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit{
  listaNegocio: any;
  displayItems: Bussiness[] = [];
  
  constructor(private seachService: SearchService,
              private bussinesService: BussinesService,
              private loc: Router) { }


  ngOnInit(): void {
    this.seachService.bussinessSubject$.subscribe(data => {
      if(data !== undefined) {
        this.displayItems = data;
      }
    });
  }

  Select(bussines ){
    this.bussinesService.listen(bussines);
    this.loc.navigate(['bussines']);
  }

}

export class Bussiness { 
name: string;
location:any;
logo:string;
country: string;
description: string;
id: string;


}

