import { AdminService } from './../../Services/admin.service';
import { UserView } from './../../Models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-users-admin',
  templateUrl: './get-users-admin.component.html',
  styleUrls: ['./get-users-admin.component.css']
})
export class GetUsersAdminComponent implements OnInit {
  users : UserView[]=[];

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.adminservice.getUsers().subscribe(data=>{
      console.log(data)
      this.users = data

    })
  }

}
