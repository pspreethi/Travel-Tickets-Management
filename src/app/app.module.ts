import { ViewbookingsComponent } from './admin-landing/viewbookings/viewbookings.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import appRoutes from './routeConfig';
import { SelectBusComponent } from './select-bus/select-bus.component';
import { FooterComponent } from './home/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FAQComponent } from './faq/faq.component';
import { BusServiceService } from './Services/bus-service.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { GetUsersAdminComponent } from './admin-landing/get-users-admin/get-users-admin.component';
import { GetRoutesAdminComponent } from './admin-landing/get-routes-admin/get-routes-admin.component';
import { GetBusesAdminComponent } from './admin-landing/get-buses-admin/get-buses-admin.component';
import { SeatsComponent } from './seats/seats.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddRoutesComponent } from './admin-landing/add-routes/add-routes.component';
import { BookingComponent } from './booking/booking.component';
import { AddbusesComponent } from './admin-landing/addbuses/addbuses.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SelectBusComponent,
    FooterComponent,
    DashboardComponent,
    FAQComponent,
    SearchResultComponent,
    AdminloginComponent,
    AdminLandingComponent,
    GetUsersAdminComponent,
    GetRoutesAdminComponent,
    GetBusesAdminComponent,
    SeatsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AddRoutesComponent,
    BookingComponent,
    AddbusesComponent,
    ViewbookingsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),

  ],
  providers: [UserService, BusServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
