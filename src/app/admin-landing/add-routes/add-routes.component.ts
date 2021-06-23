import { BusRoute } from './../../Models/bus-route';
import { Router } from '@angular/router';
import { AdminService } from './../../Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent implements OnInit {
  busroute: BusRoute;
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
    this.busroute ={
      Start:'',
      End:''

    }
  }
  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.adminService.AddRoutes(form.value)
      .subscribe((data: any) => {
        if (this.submitted == true) {
          form.reset()
          this.busroute ={
            Start: '',
            End: ''
          };
          this.message="Route Added";
        }
      });
  }

}
