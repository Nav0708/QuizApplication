import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsimulatorComponent } from './interviewsimulator.component';

describe('InterviewsimulatorComponent', () => {
  let component: InterviewsimulatorComponent;
  let fixture: ComponentFixture<InterviewsimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewsimulatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewsimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
