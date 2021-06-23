import { RouteDate } from './route-date';
import { Seat } from './seat';
import { BusRoute } from './bus-route';
import { Bus } from "./bus";

export class Journey {
    bus:Bus;
    seats:seat[];
    fare:number;
    journey_route:RouteDate
}
export interface seat {
  seat: Seat;
}
