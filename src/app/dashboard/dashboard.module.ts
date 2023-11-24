// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InterviewsetupComponent } from '../interviewsetup/interviewsetup.component';

@NgModule({
  declarations: [DashboardComponent,InterviewsetupComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
