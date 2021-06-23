import { AdminService } from './../../Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { GetBus } from 'src/app/Models/bus';

@Component({
  selector: 'app-get-buses-admin',
  templateUrl: './get-buses-admin.component.html',
  styleUrls: ['./get-buses-admin.component.css']
})
export class GetBusesAdminComponent implements OnInit {
  buses: GetBus[]=[]

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getBuses()
  }
  getBuses(){
    this.adminService.getBuses().subscribe(data=>{
      console.log(data)
      this.buses = data
      console.log(this.buses)

    })
  }

}
