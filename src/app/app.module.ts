import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AgGridModule } from 'ag-grid-angular';
import { GridLinkComponent } from './grid-link/grid-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent,
    AgGridComponent,
    HeroDetailComponent,
    DashboardComponent,
    DeleteComponent,
    GridLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
