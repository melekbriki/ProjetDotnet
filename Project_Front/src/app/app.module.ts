import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DevoirComponent } from './shared/components/Admin/devoir/devoir.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DevoirComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    SharedModule,
    FormsModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
