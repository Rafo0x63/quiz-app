import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesDashboardComponent } from './quizzes-dashboard.component';

describe('QuizzesDashboardComponent', () => {
  let component: QuizzesDashboardComponent;
  let fixture: ComponentFixture<QuizzesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
