import { Component, OnInit } from '@angular/core';
import { Person } from '../mock.fate';

@Component({
  selector: 'app-fate',
  templateUrl: './fate.component.html',
  styleUrls: ['./fate.component.scss'],
})
export class FateComponent implements OnInit {
  constructor() {}
  person = Person;
  ngOnInit(): void {}
}
