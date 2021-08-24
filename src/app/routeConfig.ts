import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FAQComponent } from './faq/faq.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './auth.guard';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { GetUsersAdminComponent } from './admin-landing/get-users-admin/get-users-admin.component';
import { GetRoutesAdminComponent } from './admin-landing/get-routes-admin/get-routes-admin.component';
import { GetBusesAdminComponent } from './admin-landing/get-buses-admin/get-buses-admin.component';
import { SelectBusComponent } from './select-bus/select-bus.component';
import { SeatsComponent } from './seats/seats.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddRoutesComponent } from './admin-landing/add-routes/add-routes.component';
import { BookingComponent } from './booking/booking.component';
import { AddbusesComponent } from './admin-landing/addbuses/addbuses.component';
import { ViewbookingsComponent } from './admin-landing/viewbookings/viewbookings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthAGuard } from './auth-a.guard';


const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'Login',
    component: LoginComponent
    /* children:[
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent

      },

    ] */

  },
  {
    path: 'seats',
    component: SeatsComponent

  },
  {
    path: 'booking',
    canActivate: [AuthGuard],
    component: BookingComponent

  },
  {
    path: 'addroutes',
    canActivate: [AuthAGuard],
    component: AddRoutesComponent

  },
  {
    path: 'addbuses',
    canActivate: [AuthAGuard],
    component: AddbusesComponent

  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: EditProfileComponent

  },
  {
    path: 'viewbookings',
    canActivate: [AuthAGuard],
    component: ViewbookingsComponent

  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent

  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent

  },
  {
    path: 'searchresult',
    component: SearchResultComponent

  },
  {
    path: 'getUsersAdmin',
    canActivate: [AuthAGuard],
    component: GetUsersAdminComponent

  },
  {
    path: 'getBusesAdmin',
    canActivate: [AuthAGuard],
    component: GetBusesAdminComponent

  },
  {
    path: 'getRoutesAdmin',
    canActivate: [AuthAGuard],
    component: GetRoutesAdminComponent

  },
  {
    path: 'adminlogin',
    component: AdminloginComponent

  },
  {
    path: 'selectbus',
    component: SelectBusComponent

  },
  {
    path: 'adminlanding',
    canActivate: [AuthAGuard],
    component: AdminLandingComponent

  },

  {
    path: 'faq',
    component: FAQComponent

  },
  {
    path: 'signup',
    component: SignUpComponent

  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,

  },
  { path: '',
    component: HomeComponent
  }

];
export default appRoutes;
