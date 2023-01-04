import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











