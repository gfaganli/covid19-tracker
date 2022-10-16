import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryChartComponent } from './country-chart/country-chart.component';
import { CountryMapComponent } from './country-map/country-map.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryChartComponent,
    CountryMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATaZG4KekYhKPByI3Z6juJ-FLW0-ibdpI',
    }),
    NgxDatatableModule,
    NgxChartsModule,
    /** for future if we use more mat-modules we can create
     * separate MaterialModule and import it where needed
     */
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
