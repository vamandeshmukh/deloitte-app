import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ParentComponent } from './parent/parent.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/authorization/auth-guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'emp', component: EmpComponent, canActivate: [AuthGuard] },
  { path: 'emp', component: EmpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











