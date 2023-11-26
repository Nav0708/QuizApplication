import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { quizsetupComponent } from '../quizsetup/quizsetup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { questionsComponent } from '../questions/questions.component';

@NgModule({
  declarations: [DashboardComponent,quizsetupComponent,questionsComponent],
  imports: [CommonModule, FormsModule, MatCardModule, ReactiveFormsModule],
})
export class DashboardModule {}
