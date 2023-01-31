import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    RouterModule
  ]
})
export class CharactersModule { }
