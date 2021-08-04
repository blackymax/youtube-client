import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './header/filter/filter.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreviewComponent } from './preview/preview.component';
import { AppRoutingModule } from './app-routing.module';
import { SafePipe } from './safe.pipe';

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
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, SafePipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
