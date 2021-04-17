import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-to-add',
  templateUrl: './component-to-add.component.html',
  styleUrls: ['./component-to-add.component.scss'],
})
export class ComponentToAddComponent implements OnInit {

  @Input() index: number;

  constructor() {
    console.log('args', ...arguments);
    console.log('index', this.index);
  }

  ngOnInit() {
   console.log('added component', this);
   console.log('index', this.index);
  }

}
