import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementResolver } from './element.resolver';
import { ElementComponent } from './element.component';
import { HeaderModule, SliderModule, BannerModule, FooterModule } from './items';

@NgModule({
  declarations: [ElementComponent],
  exports: [ElementComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SliderModule,
    BannerModule,
    FooterModule
  ],
  providers: [ElementResolver]
})
export class ElementModule { }
