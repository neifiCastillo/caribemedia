import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import{ Routes } from '@angular/router';
import { BussinesComponent } from './components/bussines/bussines.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent },
{path: 'bussines', component: BussinesComponent},
{path:'', pathMatch: 'full', redirectTo: 'home'},
{path: '**' , pathMatch:'full' , redirectTo: 'home'}




];