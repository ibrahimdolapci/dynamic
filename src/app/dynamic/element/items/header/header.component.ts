import { Component, OnInit } from '@angular/core';
import { BaseElementComponent, ElementConfig, provideElement } from '../../element.provider';
import { ElementTypes } from '../../element.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseElementComponent implements OnInit {

  constructor(config: ElementConfig) {
    super(config);
  }

  ngOnInit(): void {
  }
}

export const HEADER_PROVIDER = provideElement(ElementTypes.Header, HeaderComponent);