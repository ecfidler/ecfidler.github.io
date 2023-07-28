import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-label',
  templateUrl: './color-label.component.html',
  styleUrls: ['./color-label.component.scss']
})
export class ColorLabelComponent implements OnInit {

  @Input() color = "#000";

  hover = false;

  colorString() {
    return `${this.color}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
