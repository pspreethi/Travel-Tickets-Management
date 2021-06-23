import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { UserService } from './../Services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../Models/login-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message : string;
  Error: boolean;
  loginUser: LoginUser;

  constructor( private userService:UserService, private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(){

  }
 /*  setFormState(): void{
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  } */
  onSubmit(loginForm: NgForm){
    let login = loginForm.value;
    console.log(login)
    let name = loginForm.value.Email;
    localStorage.setItem('name', JSON.stringify(name));
    console.log(name)

    this.userService.LoginUser(loginForm.value).subscribe(data=>{
     /*  var succ = data;
      if(succ){
        localStorage.setItem("loggedUser", JSON.stringify(succ));
        this.router.navigate(['/dashboard']);
      }
      else{
        this.Error = true;
        this.message = "Wrong Credentials";
      } */
      if (this.userService.isAuthenticated()){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.Error = true;
        this.message = "Wrong Credentials";
      }

    })
  }
  /* login(loginUser: LoginUser){
    console.log(loginUser)
    this.userService.LoginUser(loginUser).subscribe(
      user => {
        var succ = user;
        if(succ){
          this.loginForm.reset();
          localStorage.setItem("User", JSON.stringify(succ));
          this.router.navigate(['/Home']);
        }
        else{
          this.message="Invalid Details"
        }
      }
    )
  } */
}
