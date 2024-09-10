import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CardsNarutoComponent } from './features/cards-naruto/cards-naruto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cards-naruto',
    component: CardsNarutoComponent,
  },
];
