import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/api.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character! : ICharacter
}
