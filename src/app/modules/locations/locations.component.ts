import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { map, Subject, takeUntil } from 'rxjs';
import { IAPIResponse, ILocation, ILocationsResponse } from 'src/app/interfaces/api.interface';
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

  ngOnDestroy(): void {
    this.unsubcriber.next()
    this.unsubcriber.complete()
  }

}
