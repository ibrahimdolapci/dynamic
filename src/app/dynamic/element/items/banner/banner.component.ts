import { Component, OnInit } from '@angular/core';
import { BaseElementComponent, ElementConfig, provideElement } from '../../element.provider';
import { ElementTypes } from '../../element.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BaseElementComponent implements OnInit {

  constructor(config: ElementConfig) {
    super(config);
  }

  ngOnInit(): void {
  }
}

export const BANNER_PROVIDER = provideElement(ElementTypes.Banner, BannerComponent);
