import { Component } from '@angular/core';
import { ElementConfig, ElementTypes } from './dynamic/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  elements: ElementConfig[] = [{
    type: ElementTypes.Header,
    settings: "Header Settings"
  }, {
    type: ElementTypes.Slider,
    settings: "Slider Settings"
  }, {
    type: ElementTypes.Banner,
    settings: "Banner Settings"
  }, {
    type: ElementTypes.Footer,
    settings: "Footer Settings"
  }];
}
