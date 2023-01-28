import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';

const routes: Routes = [
  { 
    path: '',
    component: CharactersPageComponent
  },
  {
    path: ':id',
    component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
