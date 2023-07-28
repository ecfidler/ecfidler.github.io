import { Component, OnInit } from '@angular/core';

import * as data from '../../assets/colors.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors = Object.values(data).map(e => e.hex);

  constructor() { }

  ngOnInit(): void {
    console.log(this.colors);
  }

}
