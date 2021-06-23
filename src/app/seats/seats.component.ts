import { BookingService } from './../Services/booking.service';
import { SeatConfirm } from './../Models/booking';
import { User } from './../Models/user';
import { UserService } from './../Services/user.service';
import { Router } from '@angular/router';
import { BusRoute } from './../Models/bus-route';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bus } from '../Models/bus';
import { Seat } from '../Models/seat';
import { Journey } from '../Models/journey';
import { RouteDate } from '../Models/route-date';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  @Input('bus') bus:Bus;
  @Output('closeModal') closeModal = new EventEmitter()
  subscription:Subscription;
  showSeatList:Seat[]=[];
  total=0;
  fillupSeat: string[]=[];
  alert=false;
  toggle = true;
  status='Enable';
  item: boolean;


  constructor(private router: Router, private userservice:UserService, private booking: BookingService) { }

  ngOnInit(): void {
    this.bus=JSON.parse(localStorage.getItem('selectedBus')|| '{}');




  }
  seat(i: any){
    this.bus=JSON.parse(localStorage.getItem('selectedBus')|| '{}');
    console.log(this.bus)
    let seatconfirm: SeatConfirm ={
      BusID: this.bus.BusId,
      Seat: i
    }
    console.log(seatconfirm)
   this.booking.ConfirmSeat(seatconfirm).subscribe(data =>{
      if(data!== null){

        document.getElementById(i)!.style.backgroundColor = "Red";
        document.getElementById(i)!.style.border = "Red";
        alert("Seat Already Booked, please remove from the list")
        document.getElementById(i)!.removeEventListener("click",this.seat)
      }
    })

   let seats=[];
    seats= this.showSeatList.map(iteam=>{
      this.booking.ConfirmSeat(seatconfirm).subscribe(data =>{
          return iteam.SeatNo
      })
    })
    let id = document.getElementById(i);

    if((this.fillupSeat.indexOf(String(i))<0) &&(seats.indexOf(i)<0)){
      if((this.showSeatList.length!=4)) {
        id!.style.backgroundColor ="Green";
        id!.style.border ="Green";
        let seat: Seat={
          SeatNo:i,
          Fare: this.bus.Fare
        }
        this.totalFare(seat.Fare);
        this.showList(seat);
      }
      else{
        this.alert=true;
      }
      }
    /* this.toggle =!this.toggle;
    this.status = this.toggle?'Enable':'Disable'; */

  }
  showList(seat: Seat){
    this.showSeatList.push(seat)
  }
  totalFare(fare: any){
      this.total+=fare;
  }
  removeitem(seat: any){
    console.log(seat)
    var index = this.showSeatList.indexOf(seat);
    this.showSeatList.splice(index, 1);
    this.total-=seat.Fare;
    let id = document.getElementById(seat.SeatNo);
    console.log(id)
    id!.style.backgroundColor ="#0275d8";
    id!.style.border ="#0275d8";
  }
  confirmJourney(){
    console.log(this.userservice.isAuthenticated())
    let user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    console.log(user)
    if ("currentUser" in localStorage){
        let route:RouteDate= JSON.parse(localStorage.getItem('route')|| '{}');

        let seats=[];
      seats= this.showSeatList.map(iteam=>{
        return iteam.SeatNo
      });

      let journey :Journey={
        bus:this.bus,
        seats:seats,
        fare:Number(this.total),
        journey_route:route
      }
      localStorage.setItem("journey",JSON.stringify(journey))
      console.log(journey)
      for (let s in journey.seats){
        console.log(journey.seats[s])
        this.changeSeatColor(journey.seats[s]);
      }
      this.router.navigate(['/booking']);
      }
    else{
      alert("Please Login to proceed for confirming the booking.")
      this.router.navigate(['/Login']);
    }

    }
    changeSeatColor(seatNo: any){
      document.getElementById(seatNo)!.style.backgroundColor = "Red";
      document.getElementById(seatNo)!.removeEventListener("click",this.seat);
    }

}
