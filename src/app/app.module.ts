import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { Ejemplo1Pipe } from './ejemplo1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Ejemplo1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
