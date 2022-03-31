import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HrPoliciesComponent } from './hr-policies/hr-policies.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full'},
  { path: 'login' , component : LoginPageComponent },
  { path: 'employee' , component : EmployeeDetailsComponent },
  { path:'Policies' , component : HrPoliciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
