import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GenderComponent } from './gender/gender.component';
import { GeneralModalPopupComponent } from './shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GenericChartComponent } from './shared/generic-chart/generic-chart.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GenderComponent,
    GeneralModalPopupComponent,
    GenericChartComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule, 
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
