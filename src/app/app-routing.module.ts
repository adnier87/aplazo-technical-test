import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'characters', 
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'locations', 
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./modules/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: '**',
    redirectTo: '/characters'
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
