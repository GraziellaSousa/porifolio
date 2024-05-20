import { Routes } from '@angular/router';
import{Carreira} from './carreira/carreira.component';
import{HomeComponent} from './home/home.component';
import{FormacaoComponent} from './formacao/formacao.component';
export const routes: Routes = [
    {path: 'carreira', component: Carreira},
    {path: 'inicio', component: HomeComponent},
    {path: 'formacao', component: FormacaoComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
