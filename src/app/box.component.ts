import { Component, OnInit, Input } from '@angular/core';
import { BoxType } from './boxtype';

@Component({
  selector: 'app-box',
  template: `
    <div [ngClass]="{'activate':isRed()}" (mouseenter)="OnMouseEnter()" (mouseleave)="OnMouseLeave()">{{text}}</div>
  `,
  styles: [`
    .activate{
      background-color:red;
    }

    div{
      background-color:blue;
      width:100px;
      height:100px;
      border: 1px solid black;
      font-size: 1.2em;
      font-weight:bold;
      color:white;
    }

  `]
})
export class BoxComponent implements OnInit {

  @Input()
  color: BoxType;

  @Input()
  text: string;

  constructor() { }

  isRed() {
    return this.color === BoxType.RED;
  }

  ngOnInit() {
  }

  OnMouseEnter() {
    this.color = BoxType.BLUE;
  }

  OnMouseLeave() {
    this.color = BoxType.RED;
  }

}
