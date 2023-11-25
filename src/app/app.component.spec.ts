import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsetupComponent } from './interviewsetup/interviewsetup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewsimulatorComponent } from './interviewsimulator/interviewsimulator.component';
import { MatCardModule } from '@angular/material/card';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InterviewsetupComponent,
        DashboardComponent,
        InterviewsimulatorComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ClientApp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ClientApp');
  });
});
