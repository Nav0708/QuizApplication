// questions.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { quizsetupComponent } from '../quizsetup/quizsetup.component';
import { Subject, Subscription } from 'rxjs';
import { Question } from '../Question';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TimerService } from '../timer.service';
import { QuestionService } from '../questions.service';


@Component({
  selector: 'questions',
  standalone: true,
  imports: [CommonModule, FormsModule, quizsetupComponent],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'], 
  providers: [TimerService, QuestionService],
})
export class questionsComponent implements OnInit {
  timerValue: number = 60;
  private timerSubscription!: Subscription;
  showQuestions: boolean = true;
  interviewQuestions: Question[] = [];
  public questionList: any = []; // Use the correct type for questionList
  currentQuestion: number = 0; // Start from the first question
  public points: number = 0;
  progress: string = '0';
  isQuizCompleted: boolean = false;

  constructor(private timerService: TimerService, 
    private questionService: QuestionService) {}
  
  ngOnInit(): void {
    this.timerSubscription = this.timerService.timer$.subscribe((value) => {
      this.timerValue = value;
    });
    this.fetchInterviewQuestions(); 
  }
  submitAnswers(): void {
    console.log('Answers submitted:', this.interviewQuestions);
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questionList.length - 1) {
      this.currentQuestion++;
    } else {
      this.isQuizCompleted = true;
    }
  }

  // Method to fetch interview questions from the service
  fetchInterviewQuestions(){
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }
}
