import { NgModule } from '@angular/core';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { PreviewComponent } from './youtube/pages/preview/preview.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { SafePipe } from './shared/pipes/safe-pipe/safe.pipe';
import { BorderDirective } from './shared/directives/border.directive';
import { ParamInterceptor } from './core/services/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    PreviewComponent,
    SafePipe,
    BorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SafePipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
