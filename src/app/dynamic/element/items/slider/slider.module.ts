import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent, SLIDER_PROVIDER } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  entryComponents: [SliderComponent],
  imports: [CommonModule],
  providers: [SLIDER_PROVIDER],
  exports: [SliderComponent]
})
export class SliderModule { }
