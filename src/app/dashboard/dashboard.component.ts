import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsetupComponent } from '../interviewsetup/interviewsetup.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, InterviewsetupComponent]
})
export class DashboardComponent implements OnInit {

  upcomingInterviews: any[] = [];
  performanceHistory: any[] = []; // Replace 'any[]' with the appropriate type for your data model
  recentlyCompletedInterviews: any[] = []; // Replace 'any[]' with the appropriate type for your data model

  constructor() {
    // Constructor logic (if needed)
  }

  ngOnInit(): void {
    // You may fetch data from a service or an API here
    // For now, let's use mock data
    this.upcomingInterviews = this.getMockInterviewData();
    this.performanceHistory = this.getMockPerformanceHistoryData();
    this.recentlyCompletedInterviews = this.getMockRecentlyCompletedInterviewsData();
  }

  private getMockInterviewData(): any[] {
    // Mock data for upcoming interviews
    return [
      { date: '2023-12-01', time: '10:00 AM', interviewer: 'John Doe' },
      // Add more interview entries as needed
    ];
  }

  private getMockPerformanceHistoryData(): any[] {
    // Mock data for performance history
    return [
      { date: '2023-11-15', score: 85 },
      // Add more performance history entries as needed
    ];
  }

  private getMockRecentlyCompletedInterviewsData(): any[] {
    // Mock data for recently completed interviews
    return [
      { date: '2023-11-28', interviewer: 'Jane Smith', score: 92 },
      // Add more recently completed interview entries as needed
    ];
  }
}
