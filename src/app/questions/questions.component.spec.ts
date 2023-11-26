import { ComponentFixture, TestBed } from '@angular/core/testing';

import { questionsComponent } from './questions.component';

describe('InterviewsimulatorComponent', () => {
  let component: questionsComponent;
  let fixture: ComponentFixture<questionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [questionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(questionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
