import { ServiceFirstService } from './service-first.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FristComponent } from './frist/frist.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServiceFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }


