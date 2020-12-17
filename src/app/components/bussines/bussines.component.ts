import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private bussinesServices : BussinesService, private nav: Router) { }

  ngOnInit(): void {
    this.selecterBussines = this.bussinesServices.selectedBussiness;
    if(this.selecterBussines !== undefined){
      this.showInfo = true;
    }else{
      this.back();
    }

  }

  back() {
    this.nav.navigate(['home']);
  }

  seeMap(url) {
    window.open(url);
  }

}
