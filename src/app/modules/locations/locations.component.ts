import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { Subject, takeUntil } from 'rxjs';

import { ICharacter, ILocation } from 'src/app/interfaces/api.interface';
import { fetch, fetchSuccess } from 'src/app/store/actions/locations.actions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  private unsubcriber : Subject<void> = new Subject();

  nextPage : number | null = 1;
  locations : ILocation[] = [];
  residents : ICharacter[] = [];
  locationName : string = ''; // Will be use for displaying, in modal, the name of the location which is selected to show its residents

  constructor(private store : Store) {
    this.store.select(createSelector(
      createFeatureSelector('locations'),
      fetchSuccess
    )).pipe(
      takeUntil(this.unsubcriber)
    ).subscribe(data => {
      if (!data.isLoading) {
        this.nextPage = data?.locations?.info ? data.locations.info.next : 1
        this.locations = this.locations.concat(data?.locations?.results || [])
      }
    })
  }

  ngOnInit(): void {
    this.fetchLocations(this.nextPage as number)
  }

  fetchLocations(page : number) : void {
    this.store.dispatch(fetch({page}));
  }

  hasLocatiosn() : boolean {
    return !_.isEmpty(this.locations)
  }

  loadMore() : void {
    if (this.nextPage) {
      this.fetchLocations(this.nextPage)
    }
  }

  showResidents(id : string) : void {
    const location = this.locations.find(l => l.id === id);
    this.locationName = location?.name || '';
    this.residents = location?.residents || [];
  }

  ngOnDestroy(): void {
    this.unsubcriber.next()
    this.unsubcriber.complete()
  }

}
