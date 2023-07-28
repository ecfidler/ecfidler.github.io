import { Component, OnInit } from '@angular/core';

import * as data from '../../assets/colors.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors = Object.values(data).map(e => e.hex).slice(0,900); // It's sliced as to not load excess elements

  titleText = "#ecf".split(''); // <span *ngFor="let char of titleText">{{char}}</span> // wavy text: https://codepen.io/zachkrall/pen/MWWGMPx

  constructor() { }

  ngOnInit(): void {
    console.log(this.colors);
  }

}
