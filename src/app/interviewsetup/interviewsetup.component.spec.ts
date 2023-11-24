import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsetupComponent } from './interviewsetup.component';

describe('InterviewsetupComponent', () => {
  let component: InterviewsetupComponent;
  let fixture: ComponentFixture<InterviewsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewsetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
