import { Trip } from './models/trip';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingTrips'
})
export class UpcomingTripsPipe implements PipeTransform {

  transform(trips: Trip[], showAll?: boolean): any {
    const results = [];
    if (showAll) {
      return trips;
    }

    trips.forEach(trip => {
      const now = Date.now().toString;
      if (trip.date.toDateString < now) {
        results.push(trip);
      }
    });

    return results;
  }

}
