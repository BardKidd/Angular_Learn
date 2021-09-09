import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {Waifu} from '../waifu';
import { WAIFU } from '../mock.waifu';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  constructor() {}
  hero: Hero = {
    id: 1,
    name: 'Captain America',
  };
  waifus = WAIFU;
  ngOnInit() {}
}
