import { RouteDate } from '../Models/route-date';
import { BusServiceService } from '../Services/bus-service.service';
import { BusRoute } from '../Models/bus-route';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgModel} from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {
  RouteForm: NgForm;
  message : string;
  Error: boolean  = false ;

  busRoute: BusRoute

  constructor(private busservice: BusServiceService, private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(RouteForm: NgForm){
    let form = RouteForm.value;
    console.log(form)
    let start = RouteForm.value.Start;
    console.log(start)
    let end = RouteForm.value.End;
    console.log(end)
    let date = RouteForm.value.Date;
    console.log(date)
    let route: RouteDate = {
      Start: start,
      End: end,
      Date: date
    }
    localStorage.setItem('route', JSON.stringify(route));

    this.busservice.getRoute(RouteForm.value).subscribe(data=>{
      console.log(data)
      var routeID = data;
      console.log(routeID)
        this.Error = false
        this.busservice.getRouteMessage(routeID);
        this.router.navigate(['/searchresult']);
    })
    if (this.Error = true){
      this.message = "Routes Not Available";
    }

  }

}
