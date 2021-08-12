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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CurrentYearComponent,
    NextYearComponent,
    MyVacationComponent,
    CalendarActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
