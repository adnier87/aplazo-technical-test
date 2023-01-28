import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './modules/characters/characters.module';
import { GraphqlModule } from './modules/graphql/graphql.module';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
