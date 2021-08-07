import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { PreviewComponent } from './core/components/preview/preview.component';
import { SearchResultsComponent } from './core/components/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'watch/:id', component: PreviewComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
