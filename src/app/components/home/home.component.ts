import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Bussiness } from '../search/search.component';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  showSearchResult: boolean = false;

  constructor( private api: ApiService, private searchService: SearchService) { }
  ngOnInit(): void {
    this.showSearchResult = false;
  }

 buscar(termino: any) {
  
   let result: Bussiness[];
   this.api.getBunises()
   .subscribe((data: any) =>{
    result = data.filter(x => x.name.toLowerCase().includes(termino));

   if(result !== undefined && result.length > 0) {
    this.searchService.listen(result);
    this.showSearchResult = true;  
 }
   });
 }


}  
