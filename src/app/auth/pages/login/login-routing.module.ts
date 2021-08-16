import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuard } from 'src/app/core/guards/unauth.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
