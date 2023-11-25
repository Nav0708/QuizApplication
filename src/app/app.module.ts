import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsetupComponent } from './interviewsetup/interviewsetup.component';
import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InterviewsimulatorComponent } from './interviewsimulator/interviewsimulator.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent,InterviewsetupComponent, PageNotFoundComponent,InterviewsimulatorComponent],
  imports: [FormsModule,ReactiveFormsModule,MatCardModule,BrowserModule, DashboardModule, AppRoutingModule],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
