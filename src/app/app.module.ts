import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsetupComponent } from './interviewsetup/interviewsetup.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent,InterviewsetupComponent, PageNotFoundComponent],
  imports: [FormsModule,ReactiveFormsModule,BrowserModule, DashboardModule],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)]
})
export class AppModule {}
