import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import {HttpClientModule} from '@angular/common/http';
import { FullNamePipe } from './full-name.pipe';
import { StatusPipe } from './status.pipe';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
