import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import { TripService } from './trip.service';
import { UpcomingTripsPipe } from './upcoming-trips.pipe';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent,
    UpcomingTripsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    TripService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
