import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
/* export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted: boolean;
  message: string;
  Error: boolean;
  @Input() disabled: boolean

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form!=null)
    form.reset()
    this.user ={
      FirstName:'',
      LastName:'',
      Email:'',
      Mobile: '',
      Age: '',
      Gender:'',
      Password:'',
    }
  }
  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (this.submitted == true) {
          form.reset()
          this.user ={
            FirstName:'',
            LastName:'',
            Email:'',
            Mobile: '',
            Age: '',
            Gender:'',
            Password:'',
          };
          this.message="User Created";
        }
      });
  }

}
