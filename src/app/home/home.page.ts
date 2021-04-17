import {
  Component,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ComponentToAddComponent} from './component-to-add/component-to-add.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slider') slider: any;
  @ViewChild('slides', {read: ViewContainerRef}) slides: ViewContainerRef;
  @ViewChild('slide') slide: TemplateRef<any>;

  index = 0;

  componentToAdd = ComponentToAddComponent;

  constructor() { }

  addComponent(): any {
     const createdSlide = this.slide.createEmbeddedView({index: this.index++});
     this.slides.insert(createdSlide);
  }

  back() {
    this.slider.el.slidePrev();
  }

  forward() {
    this.slider.el.slideNext();
  }
}
