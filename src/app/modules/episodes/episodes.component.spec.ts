import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;
  let store: MockStore;
  const initialState = {
    episodes : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [Store, provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore)

    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
