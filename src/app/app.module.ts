import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app-service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CurrentYearComponent } from './current-year/current-year.component';
import { NextYearComponent } from './next-year/next-year.component';
import { MyVacationComponent } from './my-vacation/my-vacation.component';
import { CalendarActionsComponent } from './calendar-actions/calendar-actions.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth';
import { AuthService } from './Services/AuthService';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CurrentYearComponent,
    NextYearComponent,
    MyVacationComponent,
    CalendarActionsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AppService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
