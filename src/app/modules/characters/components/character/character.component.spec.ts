import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.character = {
      id: "41",
      name: "Big Boobed Waitress",
      image: "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
      location: {
        name: "Fantasy World"
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
