import { RouteDate } from './../Models/route-date';
import { BusRoute } from './../Models/bus-route';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bus } from '../Models/bus';
import { BusServiceService } from '../Services/bus-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  subscription:Subscription;
  buses:Bus[]=[];
  modalRef: BsModalRef;
  route=new RouteDate();
  selectedBus:  Bus;

  constructor(private busservice: BusServiceService,
    private modalService: BsModalService,
    private router:Router) { }

  ngOnInit() {
    this.route=JSON.parse(localStorage.getItem('route')|| '{}');
    if(!this.route) {
      this.router.navigate([''])
    }
   this.subscription= this.busservice.castId$.subscribe(
      res=>this.getBus(res)
    )

  }
  getBus(res: string){
    console.log(res)
    let bus=new Object();
    this.busservice.getAllBus(res)
    .subscribe(data =>{
      this.buses = data
      console.log(this.buses)
    })

  }
  clickView(bus: Bus){
    console.log(bus);
    this.selectedBus= bus;
    localStorage.setItem('selectedBus', JSON.stringify(this.selectedBus));
    this.router.navigate(['/seats']);
  }
 /*  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // let journey={
    //   route:this.route,
    //   bus_info:bus,
    //   seats:
    // }

  }
  closeModal (){
    this.modalRef.hide();
  } */

}
