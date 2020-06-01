import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HEADER_PROVIDER } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
  imports: [CommonModule],
  providers: [HEADER_PROVIDER],
  exports: [HeaderComponent]
})
export class HeaderModule { }
