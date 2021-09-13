import { Component, OnInit } from '@angular/core';
import { Person, Fate } from '../mock.fate';

@Component({
  selector: 'app-fate',
  templateUrl: './fate.component.html',
  styleUrls: ['./fate.component.scss'],
})
export class FateComponent implements OnInit {
  constructor() {}
  person = Person;
  selectGirl?: Fate;
  onSelect(girl: Fate): void {
    this.selectGirl = girl;
    console.log(this.selectGirl.name);
  }
  ngOnInit(): void {}
}
