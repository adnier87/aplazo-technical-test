import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LocationsComponent } from './locations.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let store: MockStore;
  const initialState = {
    locations : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [Store, provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore)

    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
