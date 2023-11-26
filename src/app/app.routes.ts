import { RouterModule, Routes } from '@angular/router';
import { quizsetupComponent } from './quizsetup/quizsetup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { questionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path: 'app-dashboard', component: DashboardComponent},
{ path: 'interviewsetup', component: quizsetupComponent },
{ path: 'questions', component: questionsComponent },
{ path: '',   redirectTo: '/app-dashboard', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}
