import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { questionsComponent } from '../questions/questions.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-setup',
  standalone: true,
  imports:[CommonModule, FormsModule,questionsComponent],
  templateUrl: './quizsetup.component.html',
  styleUrls: ['./quizsetup.component.css']
})
export class quizsetupComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  showQuestions: boolean = false; // Flag to control the visibility of questions
  interviewQuestions: any[] = []; // Replace with your actual question model
  interviewTypes: string[] = ['Technical', 'Behavioral']; // Add more types as needed
  difficultyLevels: string[] = ['Easy', 'Medium', 'Hard']; // Customize difficulty levels
  selectedInterviewType: string = '';
  selectedDifficultyLevel: string = '';
  customParameters: { duration: number, numberOfQuestions: number } = { duration: 30, numberOfQuestions: 5 };
  constructor(private router: Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }
  startInterview(): any {
    this.router.navigate(['/questions']);
    //this.interviewQuestions = this.fetchInterviewQuestions();
    //this.showQuestions = true;
  }

  submitAnswers(): void {
    // Logic to handle submitted answers
    console.log('Answers submitted:', this.interviewQuestions);
  }

  private fetchInterviewQuestions(): any[] {
    // Replace this with logic to fetch questions from a service or data source
    // Example: return an array of questions with options
    return [
      { id: 1, text: 'What is Angular?', options: [{ text: 'A framework', id: 'A' }, { text: 'A language', id: 'B' }] },
      { id: 2, text: 'What are the key features of TypeScript?', options: [{ text: 'Static typing', id: 'A' }, { text: 'Dynamic typing', id: 'B' }] },
      // Add more questions as needed
    ];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(questionsComponent, {
      width: '250px',
      data: { message: 'Your interview is starting!' } // Pass data to the pop-up if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

