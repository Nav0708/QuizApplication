import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewsetup',
  standalone: true,
  templateUrl: './interviewsetup.component.html',
  styleUrls: ['./interviewsetup.component.css']
})
export class InterviewsetupComponent implements OnInit {

  interviewTypes: string[] = ['Technical', 'Behavioral']; // Add more types as needed
  difficultyLevels: string[] = ['Easy', 'Medium', 'Hard']; // Customize difficulty levels
  selectedInterviewType: string = '';
  selectedDifficultyLevel: string = '';
  customParameters: { duration: number, numberOfQuestions: number } = { duration: 30, numberOfQuestions: 5 };

  constructor() { }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  startInterview(): void {
    // Logic to start the interview with selected parameters
    console.log('Interview started with the following parameters:', {
      type: this.selectedInterviewType,
      difficulty: this.selectedDifficultyLevel,
      customParameters: this.customParameters
    });
  }
}

