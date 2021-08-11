import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { PreviewComponent } from './youtube/pages/preview/preview.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
  { path: '', component: SearchResultsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [UnauthGuard] },
  {
    path: 'watch/:id', component: PreviewComponent, canActivate: [AuthGuard], pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
