import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ApolloModule } from 'apollo-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './modules/characters/characters.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { reducer as charactersReducer } from './store/reducers/characters.reducer';
import { reducer as locationsReducer } from './store/reducers/locations.reducer';
import { reducer as episodesReducer } from './store/reducers/episodes.reducer';
import { CharactersEffects } from './store/effects/characters.effects';
import { LocationsEffects } from './store/effects/locations.effects';
import { EpisodesEffects } from './store/effects/episodes.effects';

const reducers = {
  characters : charactersReducer,
  locations : locationsReducer,
  episodes : episodesReducer
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GraphqlModule,
    AppRoutingModule,
    ApolloModule,
    CharactersModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      CharactersEffects,
      LocationsEffects,
      EpisodesEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
