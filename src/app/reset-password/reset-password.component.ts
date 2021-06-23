import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordDto } from '../Models/reset-password-dto';
import { PasswordConfirmationValidatorService } from '../password.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  public resetPasswordForm: FormGroup|any;
  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;

  private _token: string;
  private _email: any;


  constructor(private _authService: UserService,
    private _route: ActivatedRoute,private _passConfValidator: PasswordConfirmationValidatorService) { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required])

    });
      this.resetPasswordForm.get('confirm').setValidators([Validators.required,
      this._passConfValidator.validateConfirmPassword(this.resetPasswordForm.get('password'))]);

  //     this._token = this._route.snapshot.queryParams['token'];
  //     this._email = this._route.snapshot.queryParams['email'];

  // }
  }

  public validateControl = (controlName: string) => {
    return this.resetPasswordForm.controls[controlName].invalid && this.resetPasswordForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.resetPasswordForm.controls[controlName].hasError(errorName)
  }

  public resetPassword = (resetPasswordFormValue: any) => {
    this.showError = this.showSuccess = false;

    const resetPass = { ... resetPasswordFormValue };
    const resetPassDto: ResetPasswordDto = {
      password: resetPass.password,
      confirmPassword: resetPass.confirm,
      email:resetPass.Email
    }

    this._authService.resetPassword(resetPassDto)
    .subscribe(_ => {
      this.showSuccess = true;
    },
    error => {
      this.showError = true;
      this.errorMessage = error;
    })
  }

}
