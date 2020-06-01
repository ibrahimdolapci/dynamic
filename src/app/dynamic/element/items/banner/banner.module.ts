import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent, BANNER_PROVIDER } from './banner.component';



@NgModule({
  declarations: [BannerComponent],
  entryComponents: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent],
  providers: [BANNER_PROVIDER]
})
export class BannerModule { }
