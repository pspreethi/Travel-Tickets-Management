/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

interface User {
  ID: number;
  FirstName: string,
  LastName: string;
  Age: number;
  Email: string;
  Mobile: string;
  Gender: string;
  Password: string
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User;
  submitted: boolean;
  message: string;
  Error: boolean;

  _u: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let u: string = localStorage.getItem('currentUser') || "{}";
    let _u: User = JSON.parse(u);
    this._u = _u;
    console.log(u);
    this.user ={
      ID: _u.ID,
      FirstName: _u.FirstName,
      LastName: _u.LastName,
      Age: _u.Age,
      Email: _u.Email,
      Mobile: _u.Mobile,
      Gender: _u.Gender,
      Password: _u.Password,
    }

  }

  resetForm(form? : NgForm)
  {
    if(form!=null)
    form.reset()
    this.user ={
      ID: 0,
      FirstName: "",
      LastName: "",
      Age: 18,
      Email: "",
      Mobile: "",
      Gender: "",
      Password: "",
    }
  }

  OnSubmit(form: NgForm) {
    this.submitted = true;


    if(form.value.Password == '') {
      form.value.Password = this._u.Password;
    }


    console.log(form.value);

    this.userService.updateProfile(form.value)
      .subscribe((data: any) => {
        if (this.submitted == true) {
          this.message="Profile Updated";
          localStorage.setItem('currentUser', JSON.stringify(form.value))
          form.value.Pasword = "";
          this.user.Password = "";
        }
      });
  }
}
