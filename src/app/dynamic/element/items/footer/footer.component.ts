import { Component, OnInit } from '@angular/core';
import { provideElement, BaseElementComponent, ElementConfig } from '../../element.provider';
import { ElementTypes } from '../../element.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseElementComponent implements OnInit {

  constructor(config: ElementConfig) {
    super(config);
  }

  ngOnInit(): void {
  }
}

export const FOOTER_PROVIDER = provideElement(ElementTypes.Footer, FooterComponent);
