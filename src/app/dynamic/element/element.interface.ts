import { Type } from '@angular/core';

export enum ElementTypes {
  Header,
  Slider,
  Banner,
  Footer
}

export interface IELementProvider {
  type: ElementTypes;
  component: Type<any>;
}