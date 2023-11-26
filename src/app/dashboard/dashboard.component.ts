import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { quizsetupComponent } from '../quizsetup/quizsetup.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, MatCardModule, quizsetupComponent]
})
export class DashboardComponent implements OnInit {
  upcomingInterviews: any[] = [];
  performanceHistory: any[] = []; // Replace 'any[]' with the appropriate type for your data model
  recentlyCompletedInterviews: any[] = []; // Replace 'any[]' with the appropriate type for your data model

  constructor(private router: Router) {}

  ngOnInit(): void {
    // You may fetch data from a service or an API here
    // For now, let's use mock data
    this.upcomingInterviews = this.getMockInterviewData();
    this.performanceHistory = this.getMockPerformanceHistoryData();
    this.recentlyCompletedInterviews = this.getMockRecentlyCompletedInterviewsData();
  }

  private getMockInterviewData(): any[] {
    return [
      { date: '2023-12-01', time: '10:00 AM', interviewer: 'John Doe', label:'Mock interview', description:'technical' },
    ];
  }

  private getMockPerformanceHistoryData(): any[] {
    return [
      { date: '2023-11-15', score: 85 },
    ];
  }

  private getMockRecentlyCompletedInterviewsData(): any[] {
    return [
      { date: '2023-11-28', interviewer: 'Jane Smith', score: 92 },
    ];
  }

  private getInterviewLabel(): any[]{
    return [
      { label:'Mock interview' },
    ];
  }
  private getInterviewDescription(): any[]{
    return [
      { description:'Technical Mock interview' },
    ];
  }
  navigateToInterviewSetup(): any {
    this.router.navigate(['/interviewsetup']);
  }

}
