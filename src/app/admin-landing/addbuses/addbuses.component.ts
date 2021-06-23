import { GetBus } from './../../Models/bus';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbuses',
  templateUrl: './addbuses.component.html',
  styleUrls: ['./addbuses.component.css']
})
export class AddbusesComponent implements OnInit {
  addbus: GetBus
  submitted: boolean;
  message: string;
  Error: boolean;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form!=null)
    form.reset()
    this.addbus ={
      BusName :'',
      Time:'',
      Seats:'',
      Fare:'',
      RouteID:''


    }
  }
  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.adminService.AddBuses(form.value)
      .subscribe((data: any) => {
        if (this.submitted == true) {
          form.reset()
          this.addbus ={
            BusName :'',
            Time:'',
            Seats:'',
            Fare:'',
            RouteID:''
          }
          this.message="Bus Added";
        }
      });
  }

}
