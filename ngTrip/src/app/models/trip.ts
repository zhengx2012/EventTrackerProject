import { Time } from '@angular/common';

export class Trip {
  id: number;
  city: string;
  state: string;
  country: string;
  date: Date;
  flightTime: Time;
  flightNumber: string;
  flightCompany: string;
  tripExpenses: number;

  constructor() {}
}
