import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CardsNarutoComponent } from './features/cards-naruto/cards-naruto.component';
import { CorreriaFinalComponent } from './features/correria-final/correria-final.component';
import { CalculadoraComponent } from './features/calculadora/calculadora.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cards-naruto',
    component: CardsNarutoComponent,
  },
  {
    path: 'correria-final',
    component: CorreriaFinalComponent,
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
  },
];
