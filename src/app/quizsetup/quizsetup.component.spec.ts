import { ComponentFixture, TestBed } from '@angular/core/testing';

import { quizsetupComponent } from './quizsetup.component';

describe('InterviewsetupComponent', () => {
  let component: quizsetupComponent;
  let fixture: ComponentFixture<quizsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [quizsetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(quizsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
