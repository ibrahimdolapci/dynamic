import { Component, OnInit } from '@angular/core';
import { BaseElementComponent, ElementConfig, provideElement } from '../../element.provider';
import { ElementTypes } from '../../element.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent extends BaseElementComponent implements OnInit {

  constructor(config: ElementConfig) {
    super(config);
  }

  ngOnInit(): void {
  }
}

export const SLIDER_PROVIDER = provideElement(ElementTypes.Slider, SliderComponent);