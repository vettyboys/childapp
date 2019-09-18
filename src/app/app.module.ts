import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [DashboardComponent]
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const custom = createCustomElement(DashboardComponent, {injector: this.injector});
    customElements.define("app-rct", custom);
  }
}
