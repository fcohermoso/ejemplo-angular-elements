import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap() {
    const contadorElement = createCustomElement(
      ContadorComponent,
      { injector: this.injector }
    );

    customElements.define('mi-contador', contadorElement);

  }

}
