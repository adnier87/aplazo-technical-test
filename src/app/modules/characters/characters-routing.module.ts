import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';

const routes: Routes = [
  { 
    path: '',
    component: CharactersPageComponent
  },
  {
    path: ':id',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
