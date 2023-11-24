// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsetupComponent } from './interviewsetup/interviewsetup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, DashboardComponent,InterviewsetupComponent],
  imports: [BrowserModule, DashboardModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
