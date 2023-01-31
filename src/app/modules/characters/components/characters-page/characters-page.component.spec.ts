import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CharactersPageComponent } from './characters-page.component';

describe('CharactersPageComponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;
  let store: MockStore;
  const initialState = {
    characters : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersPageComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [Store, provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore)

    fixture = TestBed.createComponent(CharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
