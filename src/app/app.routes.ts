import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InterviewsetupComponent } from './interviewsetup/interviewsetup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [{path: 'app-interview-setup', component: InterviewsetupComponent},
{path: 'app-dashboard', component: DashboardComponent},
{ path: '',   redirectTo: '/app-dashboard', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

