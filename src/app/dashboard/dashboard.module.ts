import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InterviewsetupComponent } from '../interviewsetup/interviewsetup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent,InterviewsetupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DashboardModule {}
