import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; // CLI imports router
// import { LoginComponent } from './auth/pages/login/login.component';
// import { UnauthGuard } from './core/guards/unauth.guard';
// import { AuthGuard } from './core/guards/auth.guard';
// import { PreviewComponent } from './youtube/pages/preview/preview.component';
// import { NotFoundComponent } from './core/pages/not-found/not-found.component';
// import { RegistrationComponent } from './auth/pages/registration/registration.component';
// import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/pages/search-results/search-results.module').then(
      (m) => m.SearchResultsModule
    )
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then(
      (m) => m.LoginModule
    )
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/pages/registration/registration.module').then(
      (m) => m.RegistrationModule
    )
  },
  {
    path: 'watch/:id',
    loadChildren: () => import('./youtube/pages/preview/preview.module').then(
      (m) => m.PreviewModule
    )
  },
  {
    path: '**',
    loadChildren: () => import('./core/pages/not-found/not-found.module').then(
      (m) => m.NotFoundModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
