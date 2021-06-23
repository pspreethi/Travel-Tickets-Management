import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordDto } from '../Models/forgot-password-dto';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  /* constructor() { }

  ngOnInit(): void {
  } */
    // constructor() { }

  // ngOnInit(): void {
  // }
  public forgotPasswordForm: FormGroup
  public successMessage: string;
  public errorMessage: string;
  public showSuccess: boolean;
  public showError: boolean;
  Error: boolean;
  message: string;


  constructor(private userService: UserService,private  router:Router) { }

  ngOnInit(): void {
    // this.forgotPasswordForm = new FormGroup({
    //   email: new FormControl("", [Validators.required])
    // })
  }

  // public validateControl = (controlName: string) => {
  //   return this.forgotPasswordForm.controls[controlName].invalid && this.forgotPasswordForm.controls[controlName].touched
  // }

  // public hasError = (controlName: string, errorName: string) => {
  //   return this.forgotPasswordForm.controls[controlName].hasError(errorName)
  // }
  onSubmit(forgotpasswordForm: NgForm){
    let reset = forgotpasswordForm.value;
    console.log(reset)
    localStorage.setItem("User",JSON.stringify(reset));

    // public Password = (resetPasswordFormValue: any) => {
    //   this.showError = this.showSuccess = false;

    //   const resetPass = { ... resetPasswordFormValue };
    //   const resetPassDto: forgotPasswordDto = {
    //     password: resetPass.password,
    //     confirmPassword: resetPass.confirm,
    //     email:this._email
    //   }



    this.userService.forgotPassword(forgotpasswordForm.value).subscribe(data=>{
      var succ = data;


      if(succ){
        localStorage.setItem("resetUser", JSON.stringify(succ));
        this.router.navigate(['/resetpassword']);
      }
      else{
        this.Error = true;
        this.message = "Wrong Credentials";
      }
    })
  }

  public forgotPassword = (forgotPasswordFormValue: any) => {
    this.showError = this.showSuccess = false;

    const forgotPass = { ...forgotPasswordFormValue };
    const forgotPassDto: ForgotPasswordDto = {
      Email: forgotPass.email,


    }
    localStorage.setItem("User1",JSON.stringify(forgotPass.email))


  }

}
