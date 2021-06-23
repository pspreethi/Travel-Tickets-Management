import { AdminService } from './../../Services/admin.service';
import { BusRoute, BusRouteAdmin } from './../../Models/bus-route';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-routes-admin',
  templateUrl: './get-routes-admin.component.html',
  styleUrls: ['./get-routes-admin.component.css']
})
export class GetRoutesAdminComponent implements OnInit {
  routes: BusRouteAdmin[]=[];

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getRoutes()

  }
  getRoutes(){
    this.adminService.getRoutes().subscribe(data=>{
      console.log(data)
      this.routes = data
      console.log(this.routes)

    })
  }

}
