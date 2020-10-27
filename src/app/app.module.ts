import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { Example1Pipe } from './example1.pipe';
import { Example3Pipe } from './example3.pipe';
import { Example2Pipe } from './example2.pipe';
import { Example4Pipe } from './example4.pipe';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';



registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example3Pipe,
    Example1Pipe,
    Example2Pipe,
    Example4Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
