import { literalMap } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { map, Subject, takeUntil } from 'rxjs';
import { IAPIResponse, ICharacter, ILocation, ILocationsResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private api : ApiService) {}

  ngOnInit(): void {
    this.fetchLocations(this.nextPage as number)
  }

  fetchLocations(page : number) : void {
    this.api.getLocations(page)
      .pipe(
        takeUntil(this.unsubcriber),
        map((response : IAPIResponse) => (response.data as ILocationsResponse).locations) 
      )
      .subscribe(response => {
        this.nextPage = response.info.next
        this.locations = this.locations.concat(response.results)
      })
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
