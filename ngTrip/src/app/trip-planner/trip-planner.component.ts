import { TripService } from './../trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {
  // class attributes

  trips: Trip[] = [];

  trip = new Trip();

  selectedTrip = null;

  editTrip = null;

  // class methods
  showTripDetails = function(trip) {
    this.selectedTrip = trip;
  };

  showTable = function() {
    this.selectedTrip = null;
  };

  setEditTrip = function(editTrip) {
    this.selectedTrip = editTrip;
    this.editTrip = Object.assign({}, this.selectedTrip);
  };

  showAllTrips = function() {
    this.tripService.index().subscribe(
      data => this.trips = data,
      err => console.error('Observer got an error in showAllTrips: ' + err)
    );
  };

  createTrip = function(newTrip) {
    this.tripService.create(newTrip).subscribe(
      data => {
        this.showAllTrips(),
        this.trip = new Trip();
      },
      err => console.error('Observer got an error in createTrip: ' + err)
    );
  };

  updateTrip = function(editTrip) {
    this.tripService.update(editTrip).subscribe(
      data => {
        this.showAllTrips(),
        this.editTrip = null;
      },
      err => console.error('Observer got an error in updateTrip: ' + err)
    );
  };

  deleteTrip = function(id) {
    this.tripService.delete(id).subscribe(
      data => {
        this.showAllTrips(),
        this.selectedTrip = null;
      },
      err => console.error('Observer got an error in updateTrip: ' + err)
    );
  };

  // helpers
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.showAllTrips();
  }

}
