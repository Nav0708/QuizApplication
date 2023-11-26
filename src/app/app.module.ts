import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { quizsetupComponent } from './quizsetup/quizsetup.component';
import { RouterModule, provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { questionsComponent } from './questions/questions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, DashboardComponent,quizsetupComponent, PageNotFoundComponent,
    questionsComponent, HttpClient],
  imports: [FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule, 
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
