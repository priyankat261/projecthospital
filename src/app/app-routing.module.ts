import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from './components/createpatient/createpatient.component';
import { PatientdetailsComponent } from './components/patientdetails/patientdetails.component';
import { PatientlistComponent } from './components/patientlist/patientlist.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path:'add',
   component:CreatepatientComponent
 },
 {
  path:'list',
  component:PatientlistComponent
},
 {
  path:'details/:patId',
  component:PatientdetailsComponent
},
{
  path:'',
  redirectTo:'Healthcare System',
  pathMatch:'full'

},

{ path: 'home', 
component: HomeComponent },

// {
//   path:'Contact',
//   component:NewAppointmentComponent
// },
// {
//   path:'About us',
//   component:AppointmentListComponent
// },
{ 
  path: 'login',
   component: LoginComponent },

 { 
    path: 'register',
     component: RegisterComponent },

     { path: 'about',
      component: AboutComponent },

      { path: 'contact',
       component: ContactComponent }

];

  
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
