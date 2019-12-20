import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    RedblackDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
