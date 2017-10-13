import { Component } from '@angular/core';
import { BoxType } from './boxtype';
import { Box } from './box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boxes: Array<Box> = [{text: 'Box 1', color: BoxType.RED},
    {text: 'Box 2', color: BoxType.RED},
    {text: 'Box 3', color: BoxType.RED},
    {text: 'Box 4'}
  ];
}
