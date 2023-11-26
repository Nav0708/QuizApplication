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
  }


  

}

