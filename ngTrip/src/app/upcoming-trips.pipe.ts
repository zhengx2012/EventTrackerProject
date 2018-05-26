import { Trip } from './models/trip';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingTrips'
})
export class UpcomingTripsPipe implements PipeTransform {

  transform(trips: Trip[], showAll?: boolean): any {
    if (showAll) {
      return trips;
    }

    trips.forEach(trip => {
      if (trip.date < Date.now()) {

      }
    });

    return null;
  }

}
