import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, FOOTER_PROVIDER } from './footer.component';



@NgModule({
  declarations: [FooterComponent],
  entryComponents: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
  providers: [FOOTER_PROVIDER]
})
export class FooterModule { }
