import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
