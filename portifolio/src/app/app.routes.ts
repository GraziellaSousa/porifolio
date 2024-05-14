import { Routes } from '@angular/router';
import{Carreira} from './carreira/carreira.component';
import{HomeComponent} from './home/home.component';

export const routes: Routes = [
    {path: 'carreira', component: Carreira},
    {path: 'inicio', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
