import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPipePipe } from './mon-pipe.pipe';
import { MonFiltrePipe } from './mon-filtre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonPipePipe,
    MonFiltrePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
